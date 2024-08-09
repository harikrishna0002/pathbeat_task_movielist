const express = require('express');
const router = express.Router();
const db = require('./db');

// Route to get all movies
router.get('/movies', (req, res) => {
    const query = 'SELECT * FROM movieslist';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching movies:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json(results);
    });
});

// Route to get a movie by ID
router.get('/movies/:id', (req, res) => {
    const query = 'SELECT * FROM movieslist WHERE id = ?';
    
    const movieId = req.params.id;
    console.log("bcjwcbhjwbfw...",movieId)
    db.query(query, [movieId], (err, results) => {
        if (err) {
            console.error('Error fetching movie:', err);
            res.status(500).send('Server error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Movie not found');
            return;
        }
        res.json(results[0]);
    });
});

// Route to get an image by ID
router.get('/images/:id', (req, res) => {
    const imageId = req.params.id;
    const query = 'SELECT image FROM movieslist WHERE id = ?';

    db.query(query, [imageId], (err, results) => {
        if (err) {
            console.error('Error fetching image:', err);
            res.status(500).send('Server error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Image not found');
            return;
        }
        const image = results[0].image;
        res.writeHead(200, { 'Content-Type': 'image/jpeg' }); // or 'image/png' based on your image type
        res.end(image);
    });
});


module.exports = router;
