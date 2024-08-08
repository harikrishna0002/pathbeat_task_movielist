const movies = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        description: 'Over the course of several years, two convicts form a friendship...',
        image: 'image1.jpg',
        detail: 'The Shawshank Redemption is a 1994 American prison drama film...'
    },
    {
        id: 2,
        title: 'The Godfather',
        description: 'The aging patriarch of an organized crime dynasty...',
        image: 'image2.jpg',
        detail: 'The Godfather is a 1972 American crime film directed by Francis Ford Coppola...'
    },
    {
        id: 3,
        title: 'The Dark Knight',
        description: 'When the menace known as the Joker wreaks havoc and chaos...',
        image: 'image3.jpg',
        detail: 'The Dark Knight is a 2008 superhero film directed by Christopher Nolan...'
    },
    {
        id: 4,
        title: '12 Angry Men',
        description: 'The jury in a New York City murder trial is frustrated by...',
        image: 'image4.jpg',
        detail: '12 Angry Men is a 1957 American courtroom drama film directed by Sidney Lumet...'
    },
    {
        id: 5,
        title: 'Schindler\'s List',
        description: 'In German-occupied Poland during World War II...',
        image: 'image5.jpg',
        detail: 'Schindler\'s List is a 1993 American epic historical drama film directed by Steven Spielberg...'
    }
];

function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';

    movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div>
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
            <a href="movieDetail.html?id=${movie.id}">View Details</a>
        </div>
    `;

    return movieCard;
}

function loadMovies() {
    const movieList = document.querySelector('.movie-list');
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieList.appendChild(movieCard);
    });
}

document.addEventListener('DOMContentLoaded', loadMovies);

function loadMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = parseInt(params.get('id'), 10);
    const movie = movies.find(m => m.id === movieId);

    if (movie) {
        document.getElementById('movie-title').textContent = movie.title;
        document.getElementById('movie-description').textContent = movie.detail;
    }
}

if (window.location.pathname.includes('movieDetail.html')) {
    document.addEventListener('DOMContentLoaded', loadMovieDetails);
}
