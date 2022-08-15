var express = require('express');
var bodyParser  = require("body-parser");
var flash = require("connect-flash");

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(flash());

app.get('/', function(req, res){
   res.render("home.ejs");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Yotechwala v1 server started...");
});