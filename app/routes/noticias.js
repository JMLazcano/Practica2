module.exports = function(app){
    
    app.get('/noticias',function(req,res){
        res.send('noticas endpoint...');
        console.log(req.query);
        
        
    });
    

};


