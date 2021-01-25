const express = require('express');
const app = express();
const port = 3000;


app.get('/app/projects', (req, res)=>{
    res.send(`<h1>Hello World</h1>`);
});

app.listen(port);
