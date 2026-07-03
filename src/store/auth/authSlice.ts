import { createSlice } from "@reduxjs/toolkit";
import { type AuthState, type LoginResponse } from "../../types/auth.types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },

    loginSuccess(state, action: PayloadAction<LoginResponse>) {
      state.loading = false;
      state.isAuthenticated = true;
      state.token = action.payload.data.token;
      state.user = action.payload.data.user;

      localStorage.setItem("token", action.payload.data.token);
    },

    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;

      localStorage.removeItem("token");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
