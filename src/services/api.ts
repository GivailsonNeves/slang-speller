import axios from "axios";

export default axios.create({
    baseURL: 'https://api.beta.slangapp.com',
    headers: {
        'Content-Type': 'application/json',
    }
});