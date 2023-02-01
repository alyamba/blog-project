import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userReducer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Text } from "./Text";
import { Input } from "./Input";
import { Button } from "./Button";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async (email, password) => {
    const auth = getAuth();
    console.log(auth);
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      console.log("user: ", userData);
      dispatch(
        setUser({
          email: userData.user.email,
          id: userData.user.uid,
        })
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form__container">
      <div className="form">
        <Text type="title" text="Welcome, log in!" />
        <Input
          type="email"
          value={email}
          setValue={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <Input
          type="password"
          value={pass}
          setValue={(e) => setPass(e.target.value)}
          placeholder="password"
        />
        <Button
          label="Log in"
          type="secondary"
          onPress={() => handleLogin(email, pass)}
        />
        <Link to="/register" style={{ color: "black", padding: "4px" }}>
          <Text type="paragraph" text="I want to register" />
        </Link>
      </div>
    </div>
  );
};
