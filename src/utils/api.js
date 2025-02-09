import axios from "axios";

const api = axios.create({
    baseURL: 'https://yt-api.p.rapidapi.com',
  params: {
    geo: 'TR',
    lang: 'tr'
  },
  headers: {
    'x-rapidapi-key': '5887bca765msh0ca9dcd8019bc35p157250jsnb91d487fed6c',
    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
  },
});

export default api;