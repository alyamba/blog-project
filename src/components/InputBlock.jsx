import { Button } from "./Button";
import { Input } from "./Input";

export const InputBlock = () => {
  return (
    <div className="input-block__div">
      <Input />
      <div className="input-block-bts__div">
        <Button label="Save"/>
        <Button label="Cancel"/>
      </div>
    </div>
  );
};
