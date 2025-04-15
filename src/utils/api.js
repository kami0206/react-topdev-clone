import axios from 'axios';
import axiosRetry from 'axios-retry';

const instance = axios.create({
  baseURL: 'https://67ee152e4387d9117bbf4f07.mockapi.io/api/v1/', 
  timeout: 10000, 
});

// Apply retry functionality
axiosRetry(instance, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export default instance;
