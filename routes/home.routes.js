const homeController = require('../controllers/home.controllers');
const router = require('express').Router();

// GET http://localhost::3000/
router.get("/", homeController.getHome);

module.exports = router;
