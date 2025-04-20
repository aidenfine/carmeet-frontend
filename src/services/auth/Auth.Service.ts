import { LoginParamsTypes, RegisterParamsTypes } from "./types";
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

const register = async (data: RegisterParamsTypes) => {
  try {
    const response = await api({
      method: "post",
      url: AUTH_URL + "/create-user",
      data,
    });
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const logout = async () => {
  try {
    const res = await api({
      method: "post",
      url: AUTH_URL + "/logout",
    });
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const AuthService = {
  login,
  verifyToken,
  register,
  logout,
};
