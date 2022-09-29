
function updateElement(id, text, src) {
    const element = document.getElementById(id);
    if (!src) {
        element.textContent = text;
    } else {
        element.src = src;
    }
}

export default updateElement;