import { useRoutes } from "react-router-dom";
import { LoginElement } from "./elements/auth/LoginElement";
import { RegisterElement } from "./elements/auth/RegisterElement";
import { MainPageElement } from "./elements/main/MainPageElement";

export default function Router() {
  // get role and token other auth information

  return useRoutes([
    {
      path: "/login",
      element: <LoginElement />,
    },
    {
      path: "/register",
      element: <RegisterElement />,
    },
    {
      path: "/home",
      element: <MainPageElement />,
    },
  ]);
}
