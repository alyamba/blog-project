import React from "react";
import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const Form = ({ title, handlerClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <Input
        type="email"
        value={email}
        setValue={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <Input
        type="password"
        value={pass}
        setValue={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <Button
        label={title}
        type="secondary"
        onPress={() => handlerClick(email, pass)}
      />
    </div>
  );
};
