import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { ROUTES } from "../constants/routes";

const ProtectedRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <Navigate
        to={ROUTES.LOGIN}
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
