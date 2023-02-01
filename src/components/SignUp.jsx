import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userReducer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Text } from "./Text";
import { Input } from "./Input";
import { Button } from "./Button";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleRegister = async (email, password) => {
    const auth = getAuth();
    console.log(auth);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
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
        <Text type="title" text="Welcome, register!" />
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
          label="Register"
          type="secondary"
          onPress={() => handleRegister(email, pass)}
        />
        <Link to="/login" style={{ color: "black", padding: "4px" }}>
          <Text type="paragraph" text="I want to log in" />
        </Link>
      </div>
    </div>
  );
};
