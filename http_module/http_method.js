//get- to read data
//post- to send data
// // put- to update data
// // patch- to partially update data
// delete- to delete data

const http = require('http');
const server= http.createServer((req,res)=>{

    if(req.method==='GET'){
        res.end('This is a GET request')
    }else if(req.method==='POST'){
        res.end('This is a POST request')
    }else if(req.method==='PUT'){
        res.end('This is a PUT request')
    }else if(req.method==='PATCH'){
        res.end('This is a PATCH request')
    }else if(req.method==='DELETE'){
        res.end('This is a DELETE request')
    }else{
        res.end('Invalid request method')
    }
});

server.listen(5500, '127.0.0.1', () => {
    console.log('Server is running on http://127.0.0.1:5500/');
});