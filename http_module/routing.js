import http from 'http'
const server=http.createServer((req,res)=>{
    console.log("Yoooooooö");
    console.log(req.url)
    res.end("Hello from the server");
    //if(req.url === "/")
    //
})

server.listen(8000,()=>{
    console.log("Server is running on port http://localhost:8000");
})