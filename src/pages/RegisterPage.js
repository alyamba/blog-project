import React from "react";
import { Footer, NavBar, SignUp } from "../components";

const RegisterPage = () => {
  return (
    <div className="body__container">
      <NavBar />
      <div className="main-container">
        <SignUp />
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
