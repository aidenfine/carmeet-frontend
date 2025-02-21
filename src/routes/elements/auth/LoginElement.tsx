import { useAuth } from "src/context/Auth";
import { Login } from "../../../features/login/pages/Login";
import { LoginLayout } from "../../../layouts/login-layout/LoginLayout";
import { Protected } from "../../Protected";
import { MainLayout } from "src/layouts/main-layout/MainLayout";
import { MainPage } from "src/features/main/pages/MainPage";
import { useNavigate } from "react-router-dom";

export const LoginElement = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  const LoginRouteElement = () => {
    return (
      <Protected isProtected={false} uniqueRedirectPath={""}>
        <LoginLayout>
          <Login />
        </LoginLayout>
      </Protected>
    );
  };

  const HomeRouteElement = () => {
    return (
      <Protected isProtected={true} uniqueRedirectPath={""}>
        <MainLayout>
          <MainPage />
        </MainLayout>
      </Protected>
    );
  };

  if (isAuthenticated && !loading) {
    navigate("/home");

    return HomeRouteElement();
  }
  return LoginRouteElement();
};
