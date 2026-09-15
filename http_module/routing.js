import http from 'http'
const server=http.createServer((req,res)=>{
    console.log("Yoooooooö");
    res.end("Hello from the server");
})

server.listen(8000,()=>{
    console.log("Server is listening on port 8000");
})