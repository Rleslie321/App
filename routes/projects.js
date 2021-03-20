const routes = require('express').Router();
const axios = require('axios');

// api to retrieve project info from github
routes.get('/', async (req, res)=>{
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

module.exports = routes;