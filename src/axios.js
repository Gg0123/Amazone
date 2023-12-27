import axios from 'axios';


const instance = axios.create({
  // The API (Cloud function) URL
  baseURL: "http://127.0.0.1:5001/clone-25c4c/us-central1/api",
});

export default instance;
