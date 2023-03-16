const fs = require("fs");

//@desc Get all courses
//@route GET /courses
//@access public
const getAllCourses = (req, res) => {
  const coursesJson = fs.readFileSync('./db/courses.json');
  res.status(200).json(coursesJson);
};

//@desc Create new course
//@route POST /courses
//@access public
const createCourse = (req, res) => {
  const coursesJson = fs.readFileSync('./db/courses.json');
  const courses = JSON.parse(coursesJson);
  courses.push(req.body);
  fs.writeFileSync('./db/courses.json', JSON.stringify(courses));
  res.status(201).json({message: "Course Added To DB"})
};

//@desc Get course
//@route GET /courses/:id
//@access public
const getCourse = (req, res) => {
  const coursesJson = fs.readFileSync('./db/courses.json');
  const courses = JSON.parse(coursesJson);
  const course = courses.find((crs) => Number(crs.id) === Number(req.params.id));
  res.status(200).json(JSON.stringify(course));
};

//@desc Update course
//@route PUT /courses/:id
//@access public
const updateCourse = (req, res) => {
  const coursesJson = fs.readFileSync('./db/courses.json');
  const courses = JSON.parse(coursesJson);
  const course = courses.find((crs) => Number(crs.id) === Number(req.params.id));
  const filteredCourses = courses.filter((crs) => Number(crs.id) !== Number(req.params.id));
  filteredCourses.push(req.body);
  fs.writeFileSync('./db/courses.json', JSON.stringify(filteredCourses));
  res.status(200).json({message: `Update Course :  ${JSON.stringify(course)}`})
};

//@desc Delete course
//@route DELETE /courses/:id
//@access public
const deleteCourse = (req, res) => {
  const coursesJson = fs.readFileSync('./db/courses.json');
  const courses = JSON.parse(coursesJson);
  const course = courses.find((crs) => Number(crs.id) === Number(req.params.id));
  const filteredCourses = courses.filter((crs) => Number(crs.id) !== Number(req.params.id));
  fs.writeFileSync('./db/courses.json', JSON.stringify(filteredCourses));
  res.status(200).json({message: `Delete Course ${JSON.stringify(course)}`})
};

module.exports = 
{ getAllCourses,
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse
};