export interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  token: string | null;
  loading: boolean;
  error: string | null;
} 
export interface LoginPayload {
  username: string;
  password: string;
}
export interface LoginResponse {
  token: string;
  user: any;
}
export interface user{
  id: number;
  username: string;
  email: string;
}