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

/*
var i = 1;

var express = require("express");
var cors = require("cors");
var app = express();
const users = require('./Models/Users.js');         //tager vi fat i user.js filen
const interest = require('./Models/Users.js');
const match = require('./Models/Users.js');
const PORT = 3000;

app.use(cors());
app.use("/Users", user);                //når der skrives /Usurs henvises til users i browseren. 
app.use("/Interest", interest);
app.use("/Match", match);


app.get("/",function(req,res){
    res.send("HELLO WORLD" + i++);

})

app.listen(PORT, function(){

});
*/