import React from "react";

export const Input = ({ value, setValue = () => {}, placeholder }) => {
  return (
    <textarea
      placeholder={placeholder}
      onChange={setValue}
      value={value}
    ></textarea>
  );
};
