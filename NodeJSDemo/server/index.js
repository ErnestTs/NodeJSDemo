const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const url = "mongodb://localhost/userDB";


mongoose.connect(url, function(err){
    if(err) return console.log("MongoDB Connect err:", err);

    console.log("MongoDB Connect Success");
})


const userDBSchema = new mongoose.Schema({
    userno: Number,
    username: String,
    password: String
})
mongoose.model("userDB", userDBSchema)


app.use(cors({
    origin: ["http://localhost:8080"],
    methods: ["POST","GET"],
    allowHeader: ["Content-Type", "Authorization"]
}))

app.get("/login", function(req,res){
    const userDB = mongoose.model("userDB");
    let resStr = {}
    userDB.find({username:req.query.username},function(err, data){
        if(err){
            resStr = {
                res: err,
                str: "数据库异常",
                code: "E"
            }
            res.end(JSON.stringify(resStr))
        }else{
            if(!data.length){
                resStr = {
                    res: data,
                    str: "用户查询为空",
                    code: "E"
                }
                res.end(JSON.stringify(resStr))
            }else {
                if(req.query.password == data[0].password){
                    resStr = {
                        res: data,
                        str: "查询成功",
                        code: "S"
                    }
                    res.end(JSON.stringify(resStr))
                }else {
                    resStr = {
                        res: [],
                        str: "密码错误",
                        code: "E"
                    }
                    res.end(JSON.stringify(resStr))
                }
            }

        }
    })
})

app.get("/register", function(req,res){
    const userDB = mongoose.model("userDB");
    let oData = req.query;
    let resStr = {};


    let user = new userDB({
        userno: 7,
        username: oData.username,
        password: oData.password
    })
    userDB.find({username:req.query.username},function(err, data){
        if (err) {
            resStr = {
                res: err,
                str: "数据库异常",
                code: "E"
            }
            res.end(JSON.stringify(resStr))
        } else if( data.length ) {
            resStr = {
                res: "",
                str: "用户已存在",
                code: "E"
            }
            res.end(JSON.stringify(resStr))
        }else{

            user.save(function(err){
                if(err) return console.log("MongoDB Save err:", err);
                console.log("MongoDB Save Success")
                resStr = {
                    res: req.query,
                    str: "注册成功",
                    code: "S"
                }
                res.end(JSON.stringify(resStr))
            })
        }
    })
})



const server = app.listen(3000, function(){

    let host = server.address().address
 
    let port = server.address().port
     
    console.log(`应用实例，访问地址为 http://${host}:${port}`)

})