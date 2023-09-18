import React from "react";
import "./Dashboard.css";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  return (
    <div>
      Dashboard
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
