//importing module
var express=require("express");
var bodyparser=require("body-parser");

//create rest object
var app=express();
//setting json MIME type
app.use(bodyparser.json());
//not form data
app.use(bodyparser.urlencoded({extended:false}));
//generate token
var generate=require("./token/generateToken");
//post request
app.post("/login",function(req,res){
    var uname=req.body.uname;
    var upwd=req.body.upwd;
if (uname =="admin" && upwd =="admin"){
    var token=generate(
        uname,
        upwd,
        'hr@github.com'
    );
    res.send({'login':'success','token':token});
    }else{res.send({'login':fail});
    
    }
});
    app.listen(8080);
    console.log("server is listening at port no. 8080");
