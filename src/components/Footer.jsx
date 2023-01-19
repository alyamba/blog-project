import React from "react";
import gitURL from "../icons/github.svg";
import linkedinURL from "../icons/linkedin.svg";
import { Text } from "./Text";

export const Footer = () => {
  return (
    <div className="footer__div">
      <div className="social-networks__div">
        <a href="https://github.com/alyamba" target="_blank" rel="noreferrer">
          <img src={gitURL} alt="icon" className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/alogunova/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinURL} alt="icon" className="icon" />
        </a>
      </div>
      <Text type="small" text="© 2023 by alyamba" />
    </div>
  );
};
