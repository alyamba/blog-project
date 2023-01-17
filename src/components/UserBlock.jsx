import React from "react";
import { UserPhoto } from "./UserPhoto";
import { Text } from "./Text";
import userLocation from "../icons/location.png";
import userBirthday from "../icons/birthday.png";

export const UserBlock = () => {
  return (
    <div className="account__div">
      <UserPhoto />
      <div className="user-info__div">
        <Text text="Logunova Alina" type="label" />
        <div className="user-location__div">
          <img alt="location" src={userLocation} className="icon" />
          <Text text="Minsk, Belarus" />
        </div>
        <div className="user-birthday__div">
          <img alt="birthday" src={userBirthday} className="icon" />
          <Text text="05.10.2002" />
        </div>
      </div>
    </div>
  );
};
