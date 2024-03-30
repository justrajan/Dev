const http = require("http");
const dotenv =require("dotenv");
const express =require("express");
const mongoose =require("mongoose");
const bodyParser =require("body-parser");


const app =express();
dotenv.config({path:"./config/.env"});

const server = http.createServer(( req ,res ) => {
  res.writeHead(200,"OK",{"Content-Type":"text/html"});
  res.write("<h1> hiii i am rajan from server side dev</h1>");

});

const port =process.env.Port || 9898;
app.listen(port , ()=>{
  console.log(`Server is running on ${port}`);
})