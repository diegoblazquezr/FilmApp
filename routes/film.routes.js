// film.routes.js
const filmController = require('../controllers/film.controllers');
const router = require('express').Router();

// POST http://localhost:3000/film
router.post("/", filmController.getFilm);

module.exports = router;

