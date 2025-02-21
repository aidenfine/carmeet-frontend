import { LoginParamsTypes } from "./types";
import { api, AUTH_URL } from "../api";

const login = async (data: LoginParamsTypes) => {
  const response = await api({
    method: "post",
    url: AUTH_URL + "/login",
    data,
  });
  return response;
};
const verifyToken = async () => {
  const response = await api({
    method: "get",
    url: AUTH_URL + "/verify",
  });
  return response;
};

export const AuthService = {
  login,
  verifyToken,
};
