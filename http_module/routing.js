import http from 'http'
const server=http.createServer((req,res)=>{
    console.log("Yoooooooö");
    console.log(req.url)
    res.end("Hello from the server");
    if(req.url === "/"){
        res.end("Ghr se Namaste");
    }
    else if(req.url === "/about"){
        res.end("About Page");
    }
    else if(req.url === "/contact"){
        res.end("Contact Page");
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Server is running on port http://127.0.0.1/8000/");
})