import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/context/Auth";

type ProtectedProps = {
  isProtected?: boolean;
  uniqueRedirectPath?: string | null;
  children: React.ReactNode;
};

export const Protected = ({
  isProtected,
  uniqueRedirectPath,
  children,
}: ProtectedProps) => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();

  React.useEffect(() => {
    if (!loading && isProtected && !isAuthenticated) {
      navigate(uniqueRedirectPath || "/login");
    }
  }, [isProtected, isAuthenticated, loading, navigate, uniqueRedirectPath]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isProtected || isAuthenticated) {
    return <>{children}</>;
  }

  return null;
};
