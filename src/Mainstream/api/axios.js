import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "96b71972e2c37ad1209c6b079b98b49c",
    language: "ko-KR",
  },
});

export default instance;