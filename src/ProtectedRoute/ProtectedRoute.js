import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { DataContext } from "../context/DataContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser, isauthenticated } = useContext(DataContext);
  const location = useLocation();
  return isauthenticated && currentUser ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
};

export default ProtectedRoute;
