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
      <div className="dashboard-container">
        <div className="left-menu-side">
          <div className="left-menu-side"></div>
        </div>
        <div className="right-side">
          <div className="nav"></div>
          <div className="card"></div>
          <div className="activities-graph"></div>
          <div className="pie"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
