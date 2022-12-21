import axios from "axios";

const instance = axios.create({
  baseURL: "https://tictactoebackend.fly.dev/api",
});

export default instance;
