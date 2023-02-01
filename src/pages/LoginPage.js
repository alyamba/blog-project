import React from "react";
import { Footer, NavBar, Login } from "../components";

const LoginPage = () => {
  return (
    <div className="body__container">
      <NavBar />
      <div className="main-container">
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
