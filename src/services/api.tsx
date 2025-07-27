import axios from 'axios';

const Api = axios.create({
    baseURL: 'service-crud-api-production.up.railway.app'
})

export default Api
