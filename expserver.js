const { response } = require("express");
const bodyParser =require("body-parser");
const express=require("express");
const req = require("express/lib/request");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
res.send("welcome to my page");
});
app.get("/about", function(req,res){
    res.send("welcome to about page");
    });
    app.get("/contactus", function(req,res){
        res.send("thanks for contact us :63868131157");
        });
        app.get("/calculator",function(req,res){
         res.sendFile(__dirname+"/index.html");
        });
        app.post("/calculator",function(req,res){
           
            console.log(req.body);
            let n1= Number(req.body.v1);
            let n2= Number(req.body.v2);
            let sum=n1+n2;
            res.send("sum of two number is = "+ sum);

        })

app.listen(3000,function(req, res){
    console.log("server is running at port 50000")
});