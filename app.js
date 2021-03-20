const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const routes = require('./routes');

app.use('/app', routes);


app.get('/projects/marquee/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public_html/projects/marquee/index.html'), (err)=>{
        if(err){
            res.status(500).send(err);
        }
    });
});

app.listen(port);
