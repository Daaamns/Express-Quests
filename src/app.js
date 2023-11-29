const express = require("express");

const port = process.env.APP_PORT;

const app = express();

app.use(express.json());

const movieControllers = require("./controllers/movieControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
// app.post("/api/movies", movieControllers.postMovie);
// app.put("/api/movies/:id", movieControllers.putMovie);

const userControllers = require("./controllers/userControllers");

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);
// app.post("/api/users", userControllers.postUser);
// app.put("/api/users/:id", userControllers.putUser);

const validateMovie = require("./middlewares/validateMovie");

app.post("/api/movies", validateMovie, movieControllers.postMovie);
app.put("/api/movies/:id", validateMovie, movieControllers.putMovie);

const validateUser = require("./middlewares/validateUser");

app.post("/api/users", validateUser, userControllers.postUser);
app.put("/api/users/:id", validateUser, userControllers.putUser);

module.exports = app;
