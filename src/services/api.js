import axios from 'axios';

export function fetchUserData() {
  return axios.get('https://localhost:7109/api/posts/');
}