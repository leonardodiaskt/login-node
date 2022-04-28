const express = require('express')
const app = express();
const porta = 3080;
const routes = require('./models/Routes')


app.post('/teste',(req,res)=>{
    console.log(req.body);
})
app.listen(porta,(req,res)=>{
    console.log("servidor rodando ")
})