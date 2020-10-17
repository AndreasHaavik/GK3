var i = 1;

var express = require("express");
var cors = require("cors")
var app = express();app.use(cors()); 
const user = require('./Controllers/Users.js');         //tager vi fat i user.js filen
const interest = require('./Controllers/Interest.js');
const match = require('./Controllers/Match.js');
const PORT = 3000;



app.get("/Users", user);                //når der skrives /Usurs henvises til users i browseren. 
app.get("/Interest", interest);
app.get("/Match", match);

app.post("/Users",function(req,res){
    res.send("Post is working")}
);

app.post("/Interest",function(req,res){
    res.send("interest is working")}
);

app.post("/Match", function(req,res){
    res.send("Match is working")}
); 

app.delete("/Match", function(req,res){
    res.send("Match is deleted")}
);





app.listen(PORT);
console.log("serveren kører" + PORT);


