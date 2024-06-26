const express = require("express");
const app = express(); // Initialize server
const port = 3000;

// Import Middlewares
const morgan = require('./middleware/morgan');

app.use(morgan(':method :url :status - :response-time ms :body'));

app.use(express.json()); // Enable JSON parsing
app.use(express.urlencoded({ extended: true })); // Enable URL-encoded data parsing

// Routes
const homeRoutes = require("./routes/home.routes");
const filmRoutes = require("./routes/film.routes");

// View engine setup
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public')); // Serve static files

// API Routes
app.use('/', homeRoutes);
app.use('/', filmRoutes);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
