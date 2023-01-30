import React from "react";
import { Link } from "react-router-dom";
import { Footer, NavBar, SignUp } from "../components";

const RegisterPage = () => {
  return (
    <div className="body__container">
      <NavBar />
      <div className="main-container">
        <SignUp />
        <Link to="/login">Go to login</Link>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
