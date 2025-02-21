import { RegisterLayout } from "../../../layouts/register-layout/RegisterLayout";
import { Protected } from "../../Protected";
import { Register } from "../../../features/register/Register";
import { useAuth } from "src/context/Auth";
import { useNavigate } from "react-router-dom";
import { MainPage } from "src/features/main/pages/MainPage";
import { MainLayout } from "src/layouts/main-layout/MainLayout";

export const RegisterElement = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  const RegisterElementRoute = () => {
    return (
      <Protected isProtected={false} uniqueRedirectPath={""}>
        <RegisterLayout>
          <Register />
        </RegisterLayout>
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
  return RegisterElementRoute();
};
