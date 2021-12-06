

export class News {
    //static apiKey = environment.NEWS_API_KEY; No se puede leer enviroment variables ni exportando de una interfaz
    getAll(subject) {
        
        console.log(subject);
        const url = "https://newsapi.org/v2/everything?q="+subject+"&sortBy=popularity&apiKey=28645ec8d68f47929f2e7f8ba3cfb7ab" ;
        return axios.get(url);
    }
}
