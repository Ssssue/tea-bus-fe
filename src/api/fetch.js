import axios from 'axios';
import Vue from 'vue';

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 20000,
});

Vue.prototype.$http = axiosInstance;
export default axiosInstance;
