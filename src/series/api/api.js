import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://api.themoviedb.org/3',
  params : {
    api_key: "80e2e90e53cf591e37280120d0169fed",
    language: 'ko-KR',
  },
});

export default instance;