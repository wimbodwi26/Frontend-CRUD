import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://service-crud-api-production.up.railway.app/api'
})

export default Api
