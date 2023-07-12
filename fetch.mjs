
import LanguageDetect from 'languagedetect'
const lngDetector = new LanguageDetect();

//use only if you need to hide behind proxy
import { SocksProxyAgent } from 'socks-proxy-agent';
const proxyagent = new SocksProxyAgent(`socks://login:password@proxyIp:proxyport`);


import { AGENTS } from './config/headers.js'


import { MongoClient } from 'mongodb'
const client = new MongoClient('mongodb://localhost:27017/local')

const db = client.db()
const articles = db.collection('articles')
articles.createIndex({ guid: 1 }, { unique: true })

const headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
    "Accept": "text / html, application/ xhtml + xml, application/xml;q=0.9,image/avif, image / webp, image / apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-gpc": "1",
    "sec-fetch-site": "cross-site",
    "sec-fetch-mode": "navigate",
    "sec-fetch-user": "?1",
    "sec-fetch-dest": "document",
    "Referer": "https://www.google.com/",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "x-forwarded-proto": "https",
    "x-https": "on",
    //    "X-Forwarded-For": "61.2.31.112"
}

import Parser from 'rss-parser';
let parser = new Parser({
    requestOptions: {
        // uncomment to route requests through proxy
        //agent: proxyagent,
        headers: {
            headers
        },
    }
});


// another parser - another user-agent
let parser1 = new Parser(
    {
        requestOptions: {
            // uncomment to route requests through proxy
            //agent: proxyagent,
            headers: {
                'User-Agent': AGENTS[32]
                //'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36' 
            },
        }
    });

//import FeedParser from 'feedparser'
//var feedparser = new FeedParser();

const wait = async (ms) => {
    return new Promise((resolve) => { setTimeout(resolve, ms) });
}

import { URLS } from './config/rss-sources.js'

var rssNum = 0


const parseFeed = async (myurl) => {

    let feed = await parser.parseURL(myurl)
        .catch(async err => {
            console.log('Can\'t parse with parser', myurl)
            return null
            //TODO - save failed urls for retrying
        })
    if (!feed) {
        feed = await parser1.parseURL(myurl).catch(async err => {
            console.log('Can\'t parse with parser1 as well', myurl, err)
            return null
        })
    }

    if (!(feed && feed.items)) return
    console.log('\n ')
    console.log('Parsed', feed.items?.length, 'urls from', myurl)
    console.log('-------------------------------------------------')
    rssNum++

    await client.connect().catch(err => console.log('connect error', err))

    for await (let item of feed.items) {
        let articleUrl = item.link?.split('?')[0] || item.url.split('?')[0]

        console.log(item.title)

        // CHECK IF ALREADY EXISTS
        let exists = await articles.findOne({ guid: item.guid }).catch(err => console.log('find error', err))
        if (exists?._id) {
            console.log('Already there:', item?.title)
            continue
        }

        // CHECK IF NOT ENGLISH
        let lng = item?.content
        if (lng?.length && lng[0]?.length && lngDetector.detect(lng)[0][0] !== 'english') {
            console.log(lngDetector.detect(item.content)[0][0], item.title)
            continue
        }




        item.categories = JSON.stringify(item.categories)
        item.sortDate = new Date(item.pubDate).valueOf()
        item.guid = item.guid ? item.guid : articleUrl

        await articles.insertOne(item, function (err, res) {
            if (err) {
                console.log('write error', item.title, err)
            } else {
                console.log(
                    "Writing to db - ",
                    articleUrl.split('//')[1].split('/')[0].toUpperCase(),
                    item.title
                );
            }
        });
    }
    await wait(1000)
    await client.close().catch(err => console.log('close error', err))

    if (rssNum < URLS.length) {
        console.log(rssNum, URLS.length)
        parseFeed(URLS[rssNum])
    }
}

parseFeed(URLS[rssNum])


