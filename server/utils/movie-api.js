require('dotenv').config();
const fetch = require('node-fetch');
const apiKey = process.env.APIKEY;



// Function to fetch movie data from RapidAPI MovieDatabase
async function fetchMovieData(query) {

    const response = await fetch(
        `https://imdb8.p.rapidapi.com/auto-complete?q=${encodeURIComponent(query)}`,
        {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey,
        },
        }
    );

    const data = await response.json();
    return data;
}

// Function to display movie information
function displayMovieInfo(movie) {
    console.log('Title:', movie.title);
    console.log('Rating:', movie.rating);
    console.log('Description:', movie.description);
    console.log('Poster URL:', movie.image.url);
    console.log('--------------------------------------');
}

// Search for a movie
const searchQuery = 'Avengers'; // Replace with your desired movie title
fetchMovieData(searchQuery)
    .then((result) => {
        if (result && result.d) {
        result.d.forEach((movie) => {
            displayMovieInfo(movie);
        });
        } else {
        console.log('No movies found.');
        }
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
