import { RegisterLayout } from "../../../layouts/register-layout/RegisterLayout";
import { Protected } from "../../Protected";
import { Register } from "../../../features/register/Register";

export const RegisterElement = () => {
  // check if already logged in and redirect if they are
  // set redirect path

  const RegisterElementRoute = () => {
    return (
      <Protected
        isAuthenticated={true}
        isAuthorized={true}
        uniqueRedirectPath={""}
      >
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      </Protected>
    );
  };
  return RegisterElementRoute();
};
