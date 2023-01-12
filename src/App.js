import "./App.css";
import { Button } from "./components";

const App = () => {
  const onPress = () => {
    console.log("hello world");
  };
  return (
    <div>
      <h1>Hello</h1>
      <Button label={"Hello"} onPress={onPress} type="primary" />
    </div>
  );
};

export default App;
