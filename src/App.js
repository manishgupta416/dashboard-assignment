import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
