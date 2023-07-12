

const cointelegraph = {
    patterns: [
        /cointelegraph/
    ],
    pre: (document) => {
        let picframe = document.querySelector("div.post-cover.post__block.post__block_cover")
        if (picframe) picframe.remove()
        let totalviews = document.querySelector("div.post-actions.post__block.post__block_post-actions")
        if (totalviews) totalviews.remove()
        let subscribe = document.querySelector('#mc4wp-form-1')
        if (subscribe) subscribe.remove()
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

module.exports = { cointelegraph }