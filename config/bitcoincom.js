const bitcoincom = {
    patterns: [
        /bitcoin.com/
    ],
    pre: (document) => {
        // document.querySelectorAll("div.ads-wrapper").forEach(
        //     el => el.remove()
        // )
        let qstn = document.querySelector("div.article__body__tags-related__tags + p")
        if (qstn) qstn.remove()

        let author = document.querySelector("div.article__body__author")
        if (author) author.remove()

        let tags = document.querySelector("div.article__body__tags-related")
        if (tags) tags.remove()

        let related = document.querySelector("div.article__body__tags-related__tags")
        if (related) related.remove()

        let disclaimer = document.querySelector("div.disclaimer")
        if (disclaimer) disclaimer.remove()

        let images_credits = document.querySelector("p.images_credits")
        if (images_credits) images_credits.remove()


        // document.querySelectorAll("pre").forEach(
        //     el => el.remove()
        // )



        // document.querySelectorAll("p, div")
        //     .forEach(function (el) {
        //         if (
        //             el.innerHTML.indexOf("Total views") !== -1
        //             ||
        //             el.innerHTML.indexOf("Total shares") !== -1
        //             // ||
        //             // el.innerHTML.indexOf("By signing up, you will receive") !== -1

        //         ) {
        //             el.innerHTML = ""
        //             el.parentNode.innerHTML = ""
        //         }
        //     });

        // document.querySelectorAll('[class*="post__block"], [class*="post-actions"]').forEach((element) => { //[class*="post__block"], [class*="post-actions"], [class*="post__actions"], [class^="post__block"]
        //     try {
        //         element.remove()
        //         // while (element.nextSibling) {
        //         //     element.parentNode.removeChild(element.nextSibling)
        //         // }
        //         // element.parentNode.removeChild(element)
        //     } catch (err) {
        //         console.log(err)
        //     }

        // })
        return document
    },
    //post: (document) => {
    //console.log('postprocessing')

    //return document
    //}
}

module.exports = { bitcoincom }