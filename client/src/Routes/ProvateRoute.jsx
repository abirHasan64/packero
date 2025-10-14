import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProvateRoute = (children) => {
  const { user, loading } = useAuth();
  if (loading) {
    <span className="loading loading-bars loading-xl"></span>;
  }
  if (!user) {
    <Navigate to="/login" />;
  }
  return children;
};

export default ProvateRoute;
