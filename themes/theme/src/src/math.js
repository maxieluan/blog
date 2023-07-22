import katex from "katex";

(function () {
    const element = document.getElementsByClassName("math");

    for (let i = 0; i < element.length; i++) {
        const content = element[i].innerHTML;
        const newContent = katex.renderToString(content, {
            throwOnError: false,
            displayMode: true,
            macros: {
                "\\f": "#1f(#2)"
            },
            output: "mathml",
        });
        element[i].innerHTML = newContent;
    }
})();