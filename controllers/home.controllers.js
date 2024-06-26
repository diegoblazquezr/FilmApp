const getHome = async (req, res) => {
    res.render("home.pug");
}

module.exports = {
    getHome
}