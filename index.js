var express = require("express");
var app = express();
const users = require('./Models/Users.js');

app.use("/Users.js", users);

app.get ("/", function(req,res){
    res.send("Hello World");
    
});

var server = app.listen(3000, function(){
console.log("Server kører");

});