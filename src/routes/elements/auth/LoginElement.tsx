import { Login } from "../../../features/login/pages/Login";
import { LoginLayout } from "../../../layouts/login-layout/LoginLayout";
import { Protected } from "../../Protected";

export const LoginElement = () => {
  // check if already logged in and redirect if they are
  // set redirect path

  const LoginRouteElement = () => {
    return (
      <Protected
        isAuthenticated={true}
        isAuthorized={true}
        uniqueRedirectPath={""}
      >
        <LoginLayout>
          <Login />
        </LoginLayout>
      </Protected>
    );
  };
  return LoginRouteElement();
};
