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
    window.confirm("Are you sure?");
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
        {!!userData.id ? (
          <li>
            <Link to="/account" style={{ textDecoration: "none", color: "white" }}>
              <Text text="Your account" type="link" />
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
              <Text text="Your account" type="link" />
            </Link>
          </li>
        )}
      </ul>
      {!!userData.id ? (
        <div>
          <Link to="/">
            <Button label="Log out" type="primary" onPress={onLogOut}></Button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <Button label="Log in" type="primary" onPress={onLogIn}></Button>
          </Link>
        </div>
      )}
    </div>
  );
};

// onclick ?
