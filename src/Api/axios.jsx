import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-1f6b8/us-central1/api",
  baseURL: "https://amazon-api-deploy-1-gy7d.onrender.com",
  // baseURL: "https://api-44dihnnwua-uc.a.run.app",
});

export { axiosInstance };
