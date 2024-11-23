import axios from "axios";

const DEFAULTURL = "https://api-services-delta.vercel.app/";
const LOCALURL = "http://192.168.1.65:3000/";

const api = axios.create({
    baseURL: LOCALURL,
});

export default api;