const API_BASE_URL = 'http://localhost:3000/api';

function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';

    // Assuming the movie object contains an ID for the image
    movieCard.innerHTML = `
        <img src="${API_BASE_URL}/images/${movie.id}" alt="${movie.title}">
        <div>
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
            <div class='hari'>
             <a href="movieDetail.html?id=${movie.id}">View Details</a>
            <p class='rating'>${movie.rating}</p>
            
            </div>
        </div>
    `;

    return movieCard;
}

function loadMovies() {
    fetch(`${API_BASE_URL}/movies`)
        .then(response => response.json())
        .then(movies => {
            const movieList = document.querySelector('.movie-list');
            movies.forEach(movie => {
                const movieCard = createMovieCard(movie);
                movieList.appendChild(movieCard);
            });
        })
        .catch(error => console.error('Error loading movies:', error));
}

document.addEventListener('DOMContentLoaded', loadMovies);

function loadMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = parseInt(params.get('id'), 10);

    fetch(`${API_BASE_URL}/movies/${movieId}`)
        .then(response => response.json())
        .then(movie => {
            document.getElementById('movie-title').textContent = movie.title;
            document.getElementById('movie-description').textContent = movie.detail;
        })
        .catch(error => console.error('Error loading movie details:', error));
}

if (window.location.pathname.includes('movieDetail.html')) {
    document.addEventListener('DOMContentLoaded', loadMovieDetails);
}
