import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormLabel, TextField } from "@mui/material";
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
import tubeimg from '../../assets/images/tubeimg.svg'
import Logo from '../../assets/images/logo.svg'

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
      <div className="login-img-wrapper">
        <img
          src={tubeimg}
          alt="Login"
        />
      </div>

      <div className="login-right-side">
        <div className="login-form-wrapper">
          <div className="login-form-content">
            <img
              src={Logo}
              alt="Login"
            />
            <h1>Login</h1>
            <FormLabel
              htmlFor="content"
              className="login-form-label"
            >
              Use your company provided Login credentials
            </FormLabel>

            <form
              onSubmit={handleSubmit(handleLogin)}
              className="form-section"
            >
              <Controller
                name="userId"
                control={control}
                render={({ field }) => (
                  <div className="form-controller">
                    <FormLabel htmlFor="userId">User ID</FormLabel>
                    <TextField
                      {...field}
                      type="text"
                      placeholder="Enter User ID"
                      fullWidth
                      error={!!errors.userId}
                      helperText={errors.userId?.message}
                    />
                  </div>
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <div className="form-controller">
                    <FormLabel htmlFor="userId">Password</FormLabel>
                    <TextField
                      {...field}
                      placeholder="Enter Password"
                      type="password"
                      fullWidth
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                  </div>
                )}
              />
              <div>
                <a
                  href="/forgot-password"
                  className="forgot-password-link"
                >
                  Forgot Password?
                </a>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                className="form-button"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
