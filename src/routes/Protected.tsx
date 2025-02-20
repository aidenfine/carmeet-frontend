import React from "react";
import { useNavigate } from "react-router-dom";

type ProtectedProps = {
  isAuthenticated: boolean;
  isAuthorized: boolean;
  uniqueRedirectPath?: string | null;
  children: React.ReactNode;
};

export const Protected = ({ uniqueRedirectPath, children }: ProtectedProps) => {
  const useAuth = () => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="));
    return token !== undefined;
  };

  const history = useNavigate();
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    if (uniqueRedirectPath) {
      history(uniqueRedirectPath);
    } else {
      history("/login");
    }
  }

  return children;
};
