const express =  require('express');
const app = express();
const request = require('request');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('search');
});

app.get('/results', (req, res) => {
    var query = req.query.search;
    var url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`;
    request(url, (error, response, body) => {
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render('results', {data: data});
        }
    })
});

app.listen(3000, () => {
    console.log('Movie App listening on port 3000!');
});