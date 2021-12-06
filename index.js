const express = require('express');
const exphbs = require('express-handlebars');

const nociciasRoutes = require('./app/routes/noticias');
require('dotenv').config();
const path = require('path');
let app = express();
const port = process.env.PORT || 4000;
const axios = require('axios');



var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.use(express.static(path.join(__dirname, 'public')));

//handlebars
app.engine('hbs', exphbs({extname: '.ts'}));
app.set('view engine', 'ts');
//app.set('view engine', 'handlebars');

app.listen(port, ()=>{
    console.log('App is listening in port: ' + port);
});


app.get('/', function(req,res){
//    res.send('works');
    res.sendFile(path.resolve(__dirname,'index.html'));
});


app.get('/api', function(req,res){
    res.send('api works!');
});




nociciasRoutes(app);