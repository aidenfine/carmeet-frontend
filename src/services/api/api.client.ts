import axios from "axios";

const AUTH_URL = "/auth";

const api = axios.create({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { api, AUTH_URL };
