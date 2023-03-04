import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "https://api-resume.jlawcordova.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosClient;
