var express = require("express");
var router = express();
const user = require('/Users/andreashaavik/Desktop/1-Semester/Programmering/GK/GK3/Models/Users.js');

console.log(user)


function userController(req, res) {
    res.json(user)

}


module.exports = userController;