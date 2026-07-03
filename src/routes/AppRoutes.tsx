import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/DashBoard";
import ProtectedRoute from "../routes/ProtectedRoutes";
import MainLayout from "../components/layout/MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            {/* <Route path="/create-test"   element={<CreateTest />}/>
            <Route path="/add-questions"  element={<AddQuestions />}/>
            <Route path="/preview-publish" element={<PreviewPublish />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
