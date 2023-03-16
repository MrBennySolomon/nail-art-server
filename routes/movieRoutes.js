const express = require("express");
const router = express.Router();
const {getAllMovies,createMovie,getMovie,updateMovie,deleteMovie} = require("../controllers/moviesController");

router.route("/").get(getAllMovies).post(createMovie);
router.route("/:id").get(getMovie).put(updateMovie).delete(deleteMovie);

module.exports = router;
