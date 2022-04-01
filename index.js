const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.get("/all", (req, res) =>{})

app.post("/new", (req, res) =>{})

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}...`)
})
// pra fazer isso que eu fiz acima que é colocar uma variável no meio de uma string a gente tem que colocar as crases e na hora que for chamar a variável a gente colocar ${nomeDaVariavel}.