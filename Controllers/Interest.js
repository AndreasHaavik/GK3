var express = require("express");
var router = express();
const interest = require('/Users/andreashaavik/Desktop/1-Semester/Programmering/GK/GK3/Models/Users.js');

console.log(interest.interestArray)

function userController(req, res) {
    res.json(interest.interestArray)

}


module.exports = userController;
