const dailyhodl = {
    patterns: [
        /dailyhodl/
    ],
    pre: (document) => {
        document.querySelectorAll("div.hideinamp").forEach(
            el => el.remove()
        )

        document.querySelectorAll("em, span, a")
            .forEach(function (el) {
                if (
                    el.innerHTML.indexOf("Don't Miss a Beat") !== -1
                    ||
                    el.innerHTML.indexOf("Follow us on") !== -1
                    ||
                    el.innerHTML.indexOf("The Daily Hodl Mix") !== -1

                ) {
                    el.remove()
                }
            });

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

module.exports = { dailyhodl }