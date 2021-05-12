import axios from 'axios'
import { config } from 'dotenv'
import path from 'path'
const local_api_path = "http://localhost:3001"
const prod_api_path = "https://server.docplus.online"

let api_path = process.env.NODE_ENV == "development" ? local_api_path : prod_api_path
require('dotenv').config({ path: path.join(__dirname, '.env') })
//console.log(process.env, "Env", process.env.NODE_ENV == "development" ? process.env.REACT_APP_API_URL : process.env.PROD_APP_URL)
const api = axios.create({
    baseURL: local_api_path,
   // withCredentials: true,
})

export const apiUrl = api_path
export default api