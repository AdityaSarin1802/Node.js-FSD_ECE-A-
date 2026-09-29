// import express from 'express';
// import fs from 'fs';

// const app = express();
// const home = fs.readFileSync('./index.html', 'utf-8');

// app.get('/', (req, res) => {
//    res.send(home);
// })

// app.get('/home', (req,res) => {
//     res.send('nini times');
// });

// const port = 3000

// app.listen(port, ()=>{
//     console.log('Server is live on port.');
// });

import express from 'express'

const app= express()
app.get("api/v1/books/:id", (req,res)=>{
    res.json({status:'Success',
        data:{book: d}
    })

    let id=req.params.id
})

app.listen(3000, ()=>{
    console.log("Server is routing...")
})