declare let axios;
//require('dotenv').config();
//const apikey = process.env.APIKEY
export class News {
    getAll(): Promise<any> {
        const about = document.getElementById("search_bar").value;
        //console.log(about);
        const url: string = "https://newsapi.org/v2/everything?q="+about+"&sortBy=popularity&apiKey=28645ec8d68f47929f2e7f8ba3cfb7ab";
        return axios.get(url);
    }
}