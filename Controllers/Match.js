var express = require("express");
var router = express();
const match = require('/Users/andreashaavik/Desktop/1-Semester/Programmering/GK/GK3/Models/Users');


console.log(match.matchArray)

function userController(req, res) {
    res.json(match.matchArray)

}


module.exports = userController;