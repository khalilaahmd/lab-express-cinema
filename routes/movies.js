const express = require('express');
const router = express.Router();

const Movie = require ('../models/Movie.model');
/* GET movies page */
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMoviesFromDB => {
            console.log('Retrieved books from DB: ', allMoviesFromDB);
            res.render('movies', { movies: allMoviesFromDB });
        })
        .catch(err => {
            console.log('Error while getting the movies from the DB: ', err);
        next(err);
    });
});
module.exports = router;