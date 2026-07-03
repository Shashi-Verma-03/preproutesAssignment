export interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  token: string | null;
  loading: boolean;
  error: string | null;
} 
export interface LoginRequest {
  userId: string;
  password: string;
}
export interface User{
  id: number;
  username: string;
  email: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    token: string;
    user: User;
  };
  message?: string;
}