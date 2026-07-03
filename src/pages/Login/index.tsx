import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {TextField } from "@mui/material";
import {
  loginSchema,
  type LoginFormData,
} from "../../schema/login.schema";
import './index.scss'
import { useAppDispatch } from '../../hooks/redux';
import { loginSuccess } from '../../store/auth/authSlice';
import AuthService from '../../services/auth.service';
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
 const {
   control,
   handleSubmit,
   formState: { errors, isSubmitting },
 } = useForm<LoginFormData>({
   resolver: yupResolver(loginSchema),
   defaultValues: {
     userId: "",
     password: "",
   },
 });

const handleLogin = async (data: LoginFormData) => {
  try {
    const response = await AuthService.login(data);
    dispatch(loginSuccess(response));
    navigate("/dashboard");

  
  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="login-container">
      <div className="login-left-side">
        <div></div>
      </div>

      <div className="login-right-side">
        <div className="login-form">
          <h1>Login</h1>

          <form onSubmit={handleSubmit(handleLogin)}>
            <Controller
              name="userId"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="User ID"
                  fullWidth
                  error={!!errors.userId}
                  helperText={errors.userId?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
            <Button type="submit" disabled={isSubmitting} variant="primary">
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
