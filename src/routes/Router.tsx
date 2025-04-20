import { useRoutes } from "react-router-dom";
import { LoginElement } from "./elements/auth/LoginElement";
import { RegisterElement } from "./elements/auth/RegisterElement";
import { MainPageElement } from "./elements/main/MainPageElement";
import { CreateMeetElement } from "./elements/meets/CreateMeetElement";
import {
  CREATE_MEET_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "./config";

export default function Router() {
  // get role and token other auth information

  return useRoutes([
    {
      path: `/${LOGIN_ROUTE}`,
      element: <LoginElement />,
    },
    {
      path: `/${REGISTER_ROUTE}`,
      element: <RegisterElement />,
    },
    {
      path: `/${HOME_ROUTE}`,
      element: <MainPageElement />,
    },
    {
      path: `/${HOME_ROUTE}/${CREATE_MEET_ROUTE}`,
      element: <CreateMeetElement />,
    },
  ]);
}
