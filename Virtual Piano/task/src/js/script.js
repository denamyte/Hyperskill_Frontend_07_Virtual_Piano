const keys = {}

function init() {
    document.querySelectorAll('kbd')
        .forEach(node => keys[`Key${node.innerText}`] = node.innerText);

    document.addEventListener("keypress", ev => {
        const msg = ev.code in keys
            ? `The '${keys[ev.code]}' key is pressed.`
            : "Unknown key is pressed."
        console.log(msg)
    });
}


init()