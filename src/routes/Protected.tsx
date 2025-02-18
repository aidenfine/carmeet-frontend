import React from "react";
import { Navigate } from "react-router-dom";

type ProtectedProps = {
  isAuthenticated: boolean;
  isAuthorized: boolean;
  uniqueRedirectPath?: string | null;
  children: React.ReactNode;
};

export const Protected = ({
  isAuthenticated,
  isAuthorized,
  uniqueRedirectPath,
  children,
}: ProtectedProps) => {
  let redirectPath = null;

  if (!isAuthenticated) {
    redirectPath = uniqueRedirectPath ? uniqueRedirectPath : "/login";
  } else if (!isAuthorized) {
    redirectPath = uniqueRedirectPath ? uniqueRedirectPath : "/issue";
  }

  if ((!isAuthenticated || !isAuthorized) && redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
