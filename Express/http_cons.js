//get- to read data
//post- to send data
// // put- to update data
// // patch- to partially update data
// delete- to delete data

const http =require("http")
const fs = require('fs')

const data = fs.readFileSync('/index.html','utf-8')

const server= http.createServer((req,res)=>{
    //routing
    if(req.method === "GET" && req.url === "/"){
        res.end("GET Request")
    } else if(req.method === "POST" && req.url === "/"){
        res.end("POST Request")
    } else if(req.method === "PATCH" && req.url === "/users"){
        res.end("PATCH Request")
    }
})

server.listen(3000,(req,res)=>{
    console.log("Server is running on the PORT: 3000")
})