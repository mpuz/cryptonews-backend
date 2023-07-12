const cryptopotato = {
    patterns: [
        /cryptopotato/
    ],
    pre: (document) => {
        document.querySelectorAll("div.code-block").forEach(
            el => {
                if (el) el.remove()
            }
        )
        let author = document.querySelector("div.author-info")
        if (author) author.remove()
        // let authorbox = document.querySelector("div.jeg_authorbox")
        // authorbox.remove()
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

module.exports = { cryptopotato }