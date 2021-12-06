
declare let axios;
export class News {
    env = process.env["N_APIKEY"];
    getAll(data): Promise<any> {             
        const url: string = "https://newsapi.org/v2/everything?q="+data+"&sortBy=popularity&apiKey="+ this.env;
        return axios.get(url);
    }    
}