var express = require("express");
var logger = require('morgan');
var app = express();
app.set("port",3000);

app.use(logger("dev"));
app.use(express.static(__dirname+'/client')); //根目录


app.listen(app.get('port'),function(req,resp){
    console.log(123123)
});