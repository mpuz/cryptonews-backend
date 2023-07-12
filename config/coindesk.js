const coindesk = {
    patterns: [
        /coindesk/
    ],
    pre: (document) => {
        var elList = document.querySelectorAll("h6 "); //, span
        elList.forEach(function (el) {
            if (
                el.innerHTML.indexOf("Read more about") !== -1
                ||
                el.innerHTML.indexOf("Sign up for") !== -1
                // ||
                // el.innerHTML.indexOf("By signing up, you will receive") !== -1

            ) {
                el.innerHTML = ""
            }
        });

        document.querySelectorAll(".authors-block, at-row, [class*=price-chart], div[class*=`article-body/newsletter-cta`], [class^='disclaimerstyles']").forEach((element) => { //   [class^='Box-sc-']
            try {
                while (element.nextSibling) {
                    element.parentNode?.removeChild(element.nextSibling)
                }
                element.parentNode?.removeChild(element)
            } catch (err) {
                console.log(err)
            }

        })
        return document
    },
    // post: (document) => {
    //     // do something with document
    //     return document
    // }
}

module.exports = { coindesk }