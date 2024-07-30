import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8ded68259d504a76a626e5e475e28b66'
    }
})