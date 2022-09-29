
import updatePage  from "./app";

const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', () => {
    updatePage(document.querySelector('#search-input').value);
})

