import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',
    timeout: 10000
  })

  instance.interceptors.request.use(config => {
    return config;
  },error => {
    console.log(error);
  })

  instance.interceptors.response.use(config => {
    return config
  },error => {
    console.log(error);
  })

  return instance(config)
}
