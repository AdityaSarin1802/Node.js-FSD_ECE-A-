import express from 'express'

const app= express()//instance
// console.log(app)

app.get("/home",(req,res)=>{
    res.send("Express mai aapka swagat nhi hai")
})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log("Server chl rha hai usko pakkad lo")
})