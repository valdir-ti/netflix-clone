import axios from 'axios';

//Configurando a URL Base
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;