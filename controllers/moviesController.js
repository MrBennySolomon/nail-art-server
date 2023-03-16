const fs = require("fs");

//@desc Get all movies
//@route GET /movies
//@access public
const getAllMovies = (req, res) => {
  const moviesJson = fs.readFileSync('./db/db.json');
  res.status(200).json({message:`${moviesJson}`});
};

//@desc Create new movie
//@route POST /movies
//@access public
const createMovie = (req, res) => {
  const moviesJson = fs.readFileSync('./db/db.json');
  const movies = JSON.parse(moviesJson);
  movies.push(req.body);
  fs.writeFileSync('./db/db.json', JSON.stringify(movies));
  res.status(201).json({message: "Movie Added To DB"})
};

//@desc Get movie
//@route GET /movies/:id
//@access public
const getMovie = (req, res) => {
  const moviesJson = fs.readFileSync('./db/db.json');
  const movies = JSON.parse(moviesJson);
  const movie = movies.find((mov) => Number(mov.id) === Number(req.params.id));
  res.status(200).json({message: `${JSON.stringify(movie)}`});
};

//@desc Update movie
//@route PUT /movies/:id
//@access public
const updateMovie = (req, res) => {
  const moviesJson = fs.readFileSync('./db/db.json');
  const movies = JSON.parse(moviesJson);
  const movie = movies.find((mov) => Number(mov.id) === Number(req.params.id));
  const filteredMovies = movies.filter((mov) => Number(mov.id) !== Number(req.params.id));
  filteredMovies.push(req.body);
  fs.writeFileSync('./db/db.json', JSON.stringify(filteredMovies));
  res.status(200).json({message: `Update Movie :  ${JSON.stringify(movie)}`})
};

//@desc Delete movie
//@route DELETE /movies/:id
//@access public
const deleteMovie = (req, res) => {
  const moviesJson = fs.readFileSync('./db/db.json');
  const movies = JSON.parse(moviesJson);
  const movie = movies.find((mov) => Number(mov.id) === Number(req.params.id));
  const filteredMovies = movies.filter((mov) => Number(mov.id) !== Number(req.params.id));
  fs.writeFileSync('./db/db.json', JSON.stringify(filteredMovies));
  res.status(200).json({message: `Delete Movie ${JSON.stringify(movie)}`})
};

module.exports = 
{ getAllMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie
};