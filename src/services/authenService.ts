import { Navigate, redirect } from "react-router-dom";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "../models/auth";
import axiosClient from "../utils/axiosClient";


const AUTH_API_URL = "/api/Authentication";


class AuthService {
  postLogin = async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await axiosClient.post<LoginResponse>(
      `${AUTH_API_URL}/login`,
      credentials
    );
    return response.data;
  };

  postRegister = async (
    userData: RegisterRequest): Promise<RegisterResponse> => {
    const response = await axiosClient.post<RegisterResponse>(
      `${AUTH_API_URL}/register`,
      userData
    );
    return response.data;
  };

  postLogout = async (): Promise<void> => {
    localStorage.removeItem("token");

    await axiosClient.post(`${AUTH_API_URL}/logout`);
  };
}

export const authService = new AuthService();