import React from "react";
import userPhoto from "../userPhotos/cute-girl.jpg";

export const UserPhoto = ({ size }) => {
  return (
    <img
      alt="userPhoto"
      src={userPhoto}
      className={`user-photo__img ${size}-photo`}
    />
  );
};
