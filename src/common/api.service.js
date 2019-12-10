import axios from "axios";
import { API_URL } from 'dotenv/config';

const instance = axios.create({
  baseURL: API_URL
});

const ApiService = {
  get(path, params) {
    axios.get(`${path}`, {
      params: params
    });
  }
}

export default ApiService;