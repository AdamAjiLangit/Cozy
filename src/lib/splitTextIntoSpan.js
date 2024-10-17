function splitTextIntoSpans(selector) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        var text = element.innerText;
        var splitText = text
            .split('')
            .map((char) => `<span>${char}</span>`)
            .join('');
        element.innerHTML = splitText;
    });
}

export { splitTextIntoSpans };