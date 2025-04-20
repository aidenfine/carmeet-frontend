import { CreateMeetPage } from "src/features/main/pages/CreateMeetPage";
import { MainLayout } from "src/layouts/main-layout/MainLayout";
import { Protected } from "src/routes/Protected";

export const CreateMeetElement = () => {
  const CreateMeetRouteElement = () => {
    return (
      <Protected isProtected={true} uniqueRedirectPath={"/login"}>
        <MainLayout>
          <CreateMeetPage />
        </MainLayout>
      </Protected>
    );
  };
  return CreateMeetRouteElement();
};
