import axios from "axios";

export const api = () => {
    return axios.create({
        baseURL:"http://localhost:4000",
    })
}

