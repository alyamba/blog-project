import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Text } from "./Text";
import { removeUser } from "../store/userReducer";
import { useDispatch, useSelector } from "react-redux";

export const NavBar = (btnLabel) => {
  const dispatch = useDispatch();
  const onLogIn = () => {};
  const onLogOut = () => {
    dispatch(removeUser());
  };

  const userData = useSelector((state) => state.user);

  return (
    <div className="nav-bar">
      <Text text="BLOG" type="logo" />
      <ul className="ul_nav-bar">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Text text="Home" type="link" />
          </Link>
        </li>
        <li>
          <Text text="Your account" type="link"></Text>
        </li>
        <li>
          <Text text="Settings" type="link"></Text>
        </li>
      </ul>
      {!!userData.id ? (
        <div>
          <Link to="/">
            <Button label="Sign in" type="primary" onPress={onLogIn}></Button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <Button label="Log in" type="primary" onPress={onLogOut}></Button>
          </Link>
        </div>
      )}
    </div>
  );
};

// onclick ?
