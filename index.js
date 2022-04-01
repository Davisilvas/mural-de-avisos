const PORT = 3000;
const express = require('express');
const path = require('path');
const apiRoute = require('./routes/api')
const app = express();

app.use(express.static(path.join(__dirname, "client")));
app.use('/api', apiRoute);



app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}...`)
})

// pra fazer isso que eu fiz acima que é colocar uma variável no meio de uma string a gente tem que colocar as crases e na hora que for chamar a variável a gente colocar ${nomeDaVariavel}.