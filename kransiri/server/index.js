const express = require('express')
const app = express()

const post = 8000

app.get('/test',(req,res)=>{
    res.send("อยากไปเที่ยว")

})

app.get('/test2',(req,res)=>{
   let user = {
    firstname : "สมศรี",
    lastname : "สมชาย",
    age : "52",
    gender: "หญิง"

}
res.json(user)
})



app.listen(post,(req,res)=>{
    console.log('http server run at',post)
})