const keys = {};
const play = keyCode => keyCode in keys && new Audio(`audio/${keys[keyCode]}.mp3`).play();

function init() {
    document.querySelectorAll('kbd')
        .forEach(node => {
            const keyCode = `Key${node.innerText}`;
            keys[keyCode] = node.innerText;
            node.addEventListener("click", ev => play(keyCode));
        });

    document.addEventListener("keypress", ev => play(ev.code))
}

init();