import axios from "axios"

const instance = axios.create( {
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key: "ac4d929897583a5c8cbcad7f57ed8fe4",
        language: "ko-KR",
    },
});

export default instance;