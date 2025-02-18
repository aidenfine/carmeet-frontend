import { LoginParamsTypes } from "./types";
import { api, AUTH_URL } from "../api";

const login = async (data: LoginParamsTypes) => {
  const response = await api({
    method: "post",
    url: AUTH_URL,
    data,
  });
  return response;
};

export const AuthService = {
  login,
};
