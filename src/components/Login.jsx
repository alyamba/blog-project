import React from "react";
import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userReducer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const { push } = useNavigate();

  const handleLogin = async (email, password) => {
    const auth = getAuth();
    console.log(auth);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
        })
      );
      push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return <Form title="Sign in" handlerClick={handleLogin} />;
};
