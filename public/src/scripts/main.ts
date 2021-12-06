import { News } from './news';

declare let Handlebars;
document.getElementById("search_bar").onchange = function(){
    const news = new News();
    let data = (<HTMLInputElement>document.getElementById('search-bar')).value;
    news.getAll(data).then(response => {
        console.log('News', response.data);
        let source = document.getElementById('grid-source').innerHTML;
        const context = {news: response.data.articles};
        const template = Handlebars.compile(source);
        const resultHtml = template(context);
        document.getElementById('grid').innerHTML = resultHtml;
    }).catch(err => {
        console.error('Request failed');
    });
}




    

