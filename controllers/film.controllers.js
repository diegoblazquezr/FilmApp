require('dotenv').config();
const FILMAPIKEY = process.env.FILMAPIKEY;

const getFilm = async (req, res) => {
    const title = req.params.title;
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${FILMAPIKEY}&t=${title}`);
        const data = await response.json();
        if (data.Response === "True") {
            res.status(200).render("film.pug", { film: data });
        } else {
            res.status(404).render("film.pug", { film: null, error: "Película no encontrada" });
        }
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(500).json({ msj: `ERROR: ${error.stack}` });
    }
};

const postFilm = async (req, res) => {
    const { title } = req.body;
    res.redirect(`/film/${title}`);
};



module.exports = {
    getFilm,
    postFilm
}