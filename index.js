/*

var express = require("express");
var app = express();
const users = require('./Models/Users.js');
const interest = require("./Models/Users.js")
const match = require("./Models/Users.js")

app.use("/Users", users);
app.use("/Interst", interest);
app.use("/Match", match);

app.get ("/", function(req,res){
    res.send("Hello World");
    
});

app.listen(3000, function(){
console.log("Server kører");

});

*/


var i = 1;

var express = require("express");
var app = express();
const user = require('./Controllers/Users.js');         //tager vi fat i user.js filen
const interest = require('./Controllers/Interest.js');
const match = require('./Controllers/Match.js');
const PORT = 3000;


app.get("/Users", user);                //når der skrives /Usurs henvises til users i browseren. 
//app.get("/Interest", interest);
//app.get("/Match", match);




app.listen(PORT, function(){

});
