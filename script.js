const API_KEY = 'YOUR API';
const apiUrl = `${YOUR API}`;
const IMAGEPATH = '';
const SEARCHAPI = `${YOUR API}`;

const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

function showMovies(url) {
    fetch(url)
    .then(res => res.json())
    .then(function(data) {
        console.log(data);
        data.results.forEach(element => {
            const el = document.createElement('div');
            const image = document.createElement('img');
            const text = document.createElement('h2');

            text.innerHTML = `${element.title}`;
            image.src = IMAGEPATH + element.poster_path;
            el.appendChild(image);
            el.appendChild(text);
            main.appendChild(el);
        })
    });
}

showMovies(apiUrl);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm);
        search.value = '';
    }
})
