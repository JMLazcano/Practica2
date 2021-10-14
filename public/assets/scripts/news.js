
export class News {
    getAll() {
        // require('dotenv').config();
        // const apikey = process.env.N_APIKEY;
        const tema = document.getElementById("search_bar").value;
        console.log(tema);
        const url = "https://newsapi.org/v2/everything?q=" + tema + "&sortBy=popularity&apiKey=28645ec8d68f47929f2e7f8ba3cfb7ab";
        return axios.get(url);
    }
}
