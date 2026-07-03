import axiosInstance from "../api/axios";
import type { LoginRequest, LoginResponse } from "../types/auth.types";

class AuthService {
  login = async (payload: LoginRequest): Promise<LoginResponse> => {
    const response = await axiosInstance.post<LoginResponse>(
      "/auth/login",
      payload,
    );

    return response.data;
  };
}

export default new AuthService();
