import React from "react";
import { Button } from "./Button";
import { TextArea } from "./TextArea";

export const InputBlock = ({
  message,
  setMessage = () => {},
  placeholder,
  onSave = () => {},
  onCancel = () => {},
}) => {
  return (
    <div className="input-block__div">
      <TextArea
        setValue={setMessage}
        value={message}
        placeholder={placeholder}
      />
      <div className="input-block-bts__div">
        <Button label="Save" type="secondary" onPress={onSave} />
        <Button label="Cancel" type="secondary" onPress={onCancel} />
      </div>
    </div>
  );
};
