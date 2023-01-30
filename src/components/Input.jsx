import React from "react";

export const Input = ({ value, setValue = () => {}, placeholder, type }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={setValue}
      value={value}
      type={type}
    />
  );
};
