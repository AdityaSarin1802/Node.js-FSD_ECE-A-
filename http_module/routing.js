import http from 'http'
const server=http.createServer((req,res)=>{
    console.log("Yoooooooö");
    res.end("Hello from the server");
})