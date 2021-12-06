require('dotenv').config();

module.exports = function (app) {


    app.get('/noticias', function (req, res) {
        console.log(req.query.fname);
        

        res.render('home', {news: await getnewsN(req.query.fname)});
        
        async function getnewsN(subject){
        return await axios.get("https://newsapi.org/v2/everything?q="+req.query.fname+"&sortBy=popularity&apiKey="+process.env.N_APIKEY)
        .then(function(response){
        return response.data.articles
        })
}
        
        
        
    });



};


