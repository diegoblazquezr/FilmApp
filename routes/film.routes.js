// film.routes.js
const filmController = require('../controllers/film.controllers');
const router = require('express').Router();

// POST http://localhost:3000/film
router.get("/film/:title", filmController.getFilm);
router.post("/film/:title", filmController.postFilm);

module.exports = router;

