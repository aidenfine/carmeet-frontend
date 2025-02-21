import { MainPage } from "src/features/main/pages/MainPage";
import { MainLayout } from "src/layouts/main-layout/MainLayout";
import { Protected } from "src/routes/Protected";

export const MainPageElement = () => {
  const MainPageRouteElement = () => {
    return (
      <Protected isProtected={true} uniqueRedirectPath={"/login"}>
        <MainLayout>
          <MainPage />
        </MainLayout>
      </Protected>
    );
  };
  return MainPageRouteElement();
};
