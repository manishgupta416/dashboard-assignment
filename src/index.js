import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { DataProvider } from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <Auth0Provider
        domain="dev-3k2ead07eehozmvx.us.auth0.com"
        clientId="tKy6FAm2XvTqP61VamWNYY1n0ylBWDZ8"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Router>
          <App />{" "}
        </Router>
      </Auth0Provider>
    </DataProvider>
  </React.StrictMode>
);
