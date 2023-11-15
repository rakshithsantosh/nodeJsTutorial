const express = require('express')
const app = express()
const path = require('path')
const PORT =process.env.PORT || 3500

//built in middle ware to handle urlencoded data in other words , form data
app.use(express.urlencoded({extended:false}))

//built in middleware for json
app.use(express.json())

//to serve static files
app.use(express.static(path.join(__dirname,'/public')))
//console.log(__dirname)

app.get('^/$|index(.html)?',(req,res)=>{
    //res.sendFile('./index.html',{root:__dirname})
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/newpage(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'newpage.html'))
})

app.get('/oldpage(.html)?',(req,res)=>{
    res.redirect(301,'newpage.html')
})

//Route handlers
app.get('/hello(.html)?',(req,res,next)=>{
    console.log("attempted to load hello.html")
    next()
},(req,res)=>{
    res.send("hello World")
})

app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'404.html'))
})

app.listen(PORT,()=>{
    console.log(`server is started on port ${PORT}`)
})

//anything between the request and response is middle ware eg : route handlers
// built in , custom and 3rd part middle ware