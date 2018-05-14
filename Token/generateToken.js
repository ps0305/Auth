var jwt=require("jwt-simple");
module.exports=function(data1,data2,password){
    return jwt.encode({
        'uname':data1,
        'upwd':data2},password);
    
}