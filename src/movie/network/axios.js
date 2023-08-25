import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '7e2c5dcd90a7035bdd1cb321294639d5',
        language: "ko-KR"
    }
});

export default axiosInstance;