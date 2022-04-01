const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');

const app = express()

let posts = [
        {
            id: "oooooo",
            title: "Teste title",
            description: "Teste description"
        },
]

app.get("/all", (req, res) =>{
    res.json(JSON.stringify(posts));
})

app.post("/new", bodyParser.json() ,(req, res) =>{

    let id = generateID();
    let title = req.body.title;
    let description = req.body.description;

    posts.push({id, title, description}); 
    // posts.push({"id":id, "title":title, "description":description});  
    res.send("post adicionado com sucesso...")  
})


function generateID(){
    return Math.random().toString(36).substring(2, 9);
}

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}...`)
})
// pra fazer isso que eu fiz acima que é colocar uma variável no meio de uma string a gente tem que colocar as crases e na hora que for chamar a variável a gente colocar ${nomeDaVariavel}.