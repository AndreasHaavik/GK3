var i = 1;

var express = require("express");
var cors = require("cors")
var app = express();
app.use(cors()); 
const user = require('./Controllers/Users.js');         //tager vi fat i user.js filen
const interest = require('./Controllers/Interest.js');
const match = require('./Controllers/Match.js');
const PORT = 5000;




app.get("/Users", user);                //når der skrives /Usurs henvises til users i browseren. 
app.get("/Interest", interest);
app.get("/Match", match);

app.post("/Users",function(req,res){
    res.send("Post is working")}
);

app.post("/Interest",function(req,res){
    res.send("Interest is working")}
);

app.post("/Match", function(req,res){
    res.send("Match is working")}
); 


app.put("/Users",function(req,res){
    res.send("Update is working")}
);

app.put("/Interest", function(req,res){
    res.send("Interest is updated")}
);

app.put("/Match", function(req,res){
    res.send("Match is updated")}
);


app.delete("/Users", function(req,res){
    res.send("Users is deleted")}
);

app.delete("/Interest", function(req,res){
    res.send("Interest is deleted")}
);

app.delete("/Match", function(req,res){
    res.send("Match is deleted")}
);


app.listen(PORT);
console.log("serveren kører" + PORT);


