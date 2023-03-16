const asyncHandler = require("express-async-handler");
const fs = require("fs");

//@desc Get all users
//@route GET /users
//@access public
const getAllUsers = asyncHandler(async (req, res) => {
  const usersJson = fs.readFileSync('./db/users.json');
  res.status(200).json(`${usersJson}`);
});

//@desc Create new user
//@route POST /users
//@access public
const createUser = asyncHandler(async (req, res) => {
  const usersJson = fs.readFileSync('./db/users.json');
  const users = JSON.parse(usersJson);
  users.push(req.body);
  fs.writeFileSync('./db/users.json', JSON.stringify(users));
  res.status(201).json({message: "User Added To DB"})
});

//@desc Get user
//@route GET /users/:id
//@access public
const getUser = asyncHandler(async (req, res) => {
  const usersJson = fs.readFileSync('./db/users.json');
  const users = JSON.parse(usersJson);
  const user = users.find((usr) => Number(usr.id) === Number(req.params.id));
  res.status(200).json(JSON.stringify(`${JSON.stringify(user)}`));
});

//@desc Update user
//@route PUT /users/:id
//@access public
const updateUser = asyncHandler(async (req, res) => {
  const usersJson = fs.readFileSync('./db/users.json');
  const users = JSON.parse(usersJson);
  const user = users.find((usr) => Number(usr.id) === Number(req.params.id));
  const filteredUsers = users.filter((usr) => Number(usr.id) !== Number(req.params.id));
  filteredUsers.push(req.body);
  fs.writeFileSync('./db/users.json', JSON.stringify(filteredUsers));
  res.status(200).json({message: `Update User :  ${JSON.stringify(user)}`})
});

//@desc Delete user
//@route DELETE /users/:id
//@access public
const deleteUser = asyncHandler(async (req, res) => {
  const usersJson = fs.readFileSync('./db/users.json');
  const users = JSON.parse(usersJson);
  const user = users.find((usr) => Number(usr.id) === Number(req.params.id));
  const filteredUsers = users.filter((usr) => Number(usr.id) !== Number(req.params.id));
  fs.writeFileSync('./db/users.json', JSON.stringify(filteredUsers));
  res.status(200).json({message: `Delete User ${JSON.stringify(user)}`})
});

module.exports = 
{ getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
};