import React from "react";

export const TextArea = ({ value, setValue = () => {}, placeholder }) => {
  return (
    <textarea placeholder={placeholder} onChange={setValue} value={value} />
  );
};
