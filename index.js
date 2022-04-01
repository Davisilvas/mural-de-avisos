const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./model/posts')

const app = express()


app.get("/all", (req, res) =>{
    res.json(JSON.stringify(posts.getAll()));
    // res.json(JSON.stringify(posts));
})

app.post("/new", bodyParser.json() ,(req, res) =>{

    // let id = generateID();
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);
    // posts.push({id, title, description}); 
    // // posts.push({"id":id, "title":title, "description":description});  
    res.send("post adicionado com sucesso...")  
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}...`)
})
//TUDO O QUE ESTÁ COMENTADO ACIMA PODE SER EXCLUÍDO, EU DEIXO AQUI COMENTADO SÓ PRA TER VISIVELMENTE A DIFERENÇA ENTRE UM JEITO E O OUTRO.

// pra fazer isso que eu fiz acima que é colocar uma variável no meio de uma string a gente tem que colocar as crases e na hora que for chamar a variável a gente colocar ${nomeDaVariavel}.