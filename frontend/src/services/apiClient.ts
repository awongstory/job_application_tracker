import axios from 'axios';

const apiClient = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        console.log(error.response);
      }
      return Promise.reject(error);
    }
);

export default apiClient;