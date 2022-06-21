//  Preventing the reload default
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('body').addEventListener('click', (e) => e.preventDefault())
})

//  Creting renndering elements elements

function renderOneFilm(film) {
    let card = document.createElement('ol')
    let upper = film.title.toUpperCase()
    card.className = 'SideList'
    card.innerHTML =
        `
        <a href = "">${upper}</a>
        `
    document.querySelector(".list-container").appendChild(card).addEventListener('click', handleTitleClick)

}

// function one(film1) {
//     if (film1['id'] == '1') {
//         return film1
//     }
// }



function renderFirst(film1) {


    let firstFilm = document.createElement('ul')
    firstFilm.className = 'firstFilm'
    firstFilm.innerHTML =
        `
        <img  src= "${film1.poster}" alt="[MOVIE TITLE]" />

        `
    document.querySelector("#first").appendChild(firstFilm)
}



//  ALL FETCH REQUESTS

// Fetching the firstfilm form the server
function getFirstFilm() {
    fetch(`http://localhost:3000/films`)
        .then(res1 => res1.json())
        .then(firstFilmData => firstFilmData.forEach(film1 => renderFirst(film1)))

}


//  Fetching all films 
function getAllFilms() {
    fetch('http://localhost:3000/films')
        .then(res => res.json())
        .then(filmsData => filmsData.forEach(film => renderOneFilm(film)))
}





// Initializations

function initialize() {
    getAllFilms();
    getFirstFilm();
    // one();

}

initialize()


// ALL EVENTS

// document.querySelector('.SideList').addEventListener('onclick', handleTitleClick)


// ALL EVENT HANDLERS

function handleTitleClick() {
    let a = document.querySelector('ol')
    a.className = 'selected'
        // a = film.title
    a.innerHTML =
        `
        <p>${a}</p>
        `
    document.querySelector("#title").appendChild(a)
}