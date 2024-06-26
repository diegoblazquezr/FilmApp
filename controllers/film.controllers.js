require('dotenv').config();
const FILMAPIKEY = process.env.FILMAPIKEY;

const getFilm = async (req, res) => {
    const { title } = req.body;
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

// const getFilm = async (req, res) => {
//     console.log("--"+req.query.title);

//     try {
//         const title = req.query.title;
//         const resFilmApi = await fetch(`https://www.omdbapi.com/?apikey=${FILMAPIKEY}&s=${title}`);
//         const dataFilmApi = await resFilmApi.json();
//         res.render("film.pug", { dataFilmApi, msj: "tus superproductos" });
//     } catch (error) {
//         return console.log("--error: "+error);
//     }
// }

module.exports = {
    getFilm
}