var express = require('express');

var app = express();

app.use((req,res,next)=>{
    console.log("hello from middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("hello from middleware 2");
    next();
});

app.get('/',function(req,res){
    res.send("hello from server");
});




app.listen(5000);