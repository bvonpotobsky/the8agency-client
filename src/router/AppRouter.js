import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Backoffice from "@pages/Backoffice";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/auth/backoffice" element={<Backoffice />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
