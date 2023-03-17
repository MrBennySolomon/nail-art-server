const express = require("express");
const routerCourses = express.Router();
const {getAllCourses,createCourse,getCourse,updateCourse,deleteCourse} = require("../controllers/coursesController");

routerCourses.route("/").get(getAllCourses).post(createCourse);
routerCourses.route("/:id").get(getCourse).put(updateCourse).delete(deleteCourse);

module.exports = routerCourses;