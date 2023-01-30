import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userReducer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const dispatch = useDispatch();
  const { push } = useNavigate();

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
      push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return <Form title="Register" handlerClick={handleRegister} />;
};
