import React from "react";
import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userReducer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    const auth = getAuth();
    console.log(auth);
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      console.log('user: ', userData);
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
  return <Form title="Sign in" handlerClick={handleLogin} />;
};
