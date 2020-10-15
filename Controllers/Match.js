var express = require("express");
var router = express();
const match = require('C:/Users/andreashaavik/Desktop/1-Semester/Programmering/GK/GK3/Models/Users.js');


console.log(match.matcharray)

function userController(req, res) {
    res.json(match.matcharray)

}


module.exports = userController;