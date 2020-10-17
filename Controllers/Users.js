var express = require("express");
var router = express();
const user = require('/Users/andreashaavik/Desktop/1-Semester/Programmering/GK/GK3/Models/Users');

console.log(user.userArray)


function userController(req, res) {
    res.json(user.userArray)

}


module.exports = userController