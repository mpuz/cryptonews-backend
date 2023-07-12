const decrypt = {
    patterns: [
        /decrypt/
    ],
    pre: (document) => {
        var elList = document.querySelectorAll("h3");
        elList.forEach(function (el) {
            if (
                el.innerHTML.indexOf("Stay on top of crypto") !== -1

            ) {
                el.parentNode?.remove()
            }
        });

        //     document.querySelectorAll(".authors-block, at-row, [class*=price-chart], div[class*=`article-body/newsletter-cta`], [class^='disclaimerstyles']").forEach((element) => { //   [class^='Box-sc-']
        //         try {
        //             while (element.nextSibling) {
        //                 element.parentNode?.removeChild(element.nextSibling)
        //             }
        //             element.parentNode?.removeChild(element)
        //         } catch (err) {
        //             console.log(err)
        //         }

        //     })
        //     return document
        // },
        // post: (document) => {
        //     // do something with document
        //     return document
        // }
    }
}
module.exports = { decrypt }