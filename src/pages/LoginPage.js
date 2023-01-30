import React from "react";
import { Link } from "react-router-dom";
import { Footer, NavBar, Login } from "../components";

const LoginPage = () => {
  return (
    <div className="body__container">
      <NavBar />
      <div className="main-container">
        <Login />
        <Link to="/register">Go to register</Link>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
