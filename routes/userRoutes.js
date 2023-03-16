const express     = require("express");
const routerUsers = express.Router();
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser}     = require("../controllers/usersController");

routerUsers.route("/").get(getAllUsers).post(createUser);
routerUsers.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = routerUsers;
