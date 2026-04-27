import axios from "axios";

const apiLocal = "https://localhost:7286/api/"
const apiRemota = "endereço.example.com"

export const api = axios.create({
    baseURL: apiLocal
})

