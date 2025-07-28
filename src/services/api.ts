import axios from 'axios';

const API_KEY = 'd6d431e34397464ad06379698ba1b554';
const BASE_URL = 'https://api.themoviedb.org/3';

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
    include_adult: false,
  },
  timeout: 1000,
})

export const getPopularMovies = () => api.get('/movie/popular')
export const getMoviesDEtails = (id: number) => api.get('/movie/${id}')