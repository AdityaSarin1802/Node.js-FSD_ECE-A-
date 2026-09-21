// //get- to read data
// //post- to send data
// // // put- to update data
// // // patch- to partially update data
// // delete- to delete data

// const http = require('http');
// const fs = require('fs');
// const server= http.createServer((req,res)=>{

//     // res.statusCode=200;
//         const d= fs.readFileSync('config.json','utf8');
//         if (req.url === '/' || req.url === '/config.json') {
//             const filePath = path.join(__dirname, 'config.json');
//             fs.readFile(filePath, 'utf8', (err, data) => {
//                 if (err) {
//                     console.log(err);
//                     res.writeHead(500, {
//                         'Content-Type': 'application/json'
//                     });
//                     res.end('Internal Server Error');
//                     return;
//                 }
//                 res.writeHead(200, {
//                     'Content-Type': 'text/plain',
//                     'accept-charset': 'utf-8',
//                     'accept-charset': 'application/json',
//                 });
//                 res.end(data);
//             });
    
//         } else {
//             res.writeHead(404, {
//                 'Content-Type': 'text/plain'
//             });
//             res.end('404 - Page Not Found');
//         }

//     // res.end(JSON.stringify(require('./config.json')));

//     // if(req.method==='GET'){
//     //     res.end('This is a GET request')
//     // }else if(req.method==='POST'){
//     //     res.end('This is a POST request')
//     // }else if(req.method==='PUT'){
//     //     res.end('This is a PUT request')
//     // }else if(req.method==='PATCH'){
//     //     res.end('This is a PATCH request')
//     // }else if(req.method==='DELETE'){
//     //     res.end('This is a DELETE request')
//     // }else{
//     //     res.end('Invalid request method')
//     // }
// });

// server.listen(5500, '127.0.0.1', () => {
//     console.log('Server is running on http://127.0.0.1:5500/');
// });

import http from 'http';
import fs from 'fs';

const d = fs.readFileSync('./config.json' , 'utf-8');
const home = fs.readFileSync('./index.html' , 'utf-8');

const server = http.createServer((req,res) => {
    console.log('Success');
    if (req.url === '/config'){
        res.writeHead( 200 , {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(d));
    }
    else if (req.url === '/' || req.url === '/home'){
        res.end(home);
    }
    else{
    res.end('Yoooooooo');
    }
});

server.listen( 5500 , "127.0.0.1", () => {
    console.log(" Server is live on 127.0.0.1:5500.  ");
});