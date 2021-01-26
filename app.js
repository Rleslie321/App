const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;


// was used to serve static file for testing
// const path = require('path');
// app.use("/static", express.static('./static/'));
// app.get('/app', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'static', 'index.html'));
// })


// api to retrieve project info from github
app.get('/app/projects', async (req, res)=>{
    const info = await getProjects();
    // console.log(info);
    res.send(info);
});

// function to get the current projects from my github and then get all of the readmes for those projects
async function getProjects () {
    let projects = [];
    let curr = null;
    let urls = [];
    try {
        const response = await axios.get('https://api.github.com/users/Rleslie321/repos');
        const data = response.data;
        for(i = 0; i < data.length; i++){
            curr = data[i];
            projects.push({name: curr.name, description: curr.description, readme: null});
            urls.push(`https://api.github.com/repos/Rleslie321/${curr.name}/readme`);
        }
        const readmes = await Promise.all(urls.map(url => axios.get(url)));
        for(i = 0; i < readmes.length; i++){
            curr = readmes[i].data.content;
            projects[i].readme = curr;
        }
    }catch (err){
        console.log(err);
    }
    return projects;
}

// calls swapi with default values
app.get('/app/starwars/', (req,res)=>{
    axios.get('https://swapi.dev/api/people/1/')
        .then((response)=>{
            res.send(`<h1>${response.data.name}</h1>`);
        })
        .catch(function (error) {
            console.log(error);
        })
});

// api to grab and return the person the user selects
// calls swapi with user defined number
app.get('/app/starwars/:number', (req,res)=>{
    axios.get(`https://swapi.dev/api/people/${req.params.number}/`)
        .then((response)=>{
            res.send(`<h1>${response.data.name}</h1>`);
        })
        .catch(function (error) {
            console.log(error);
        })
});

app.listen(port);
