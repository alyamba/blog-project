import "./App.css";
import { Button } from "./components";
import { NavBar } from "./components/NavBar";


const App = () => {
  const onPress = () => {
    console.log("hello world");
  };
  return (
    <div>
      <NavBar/>
      <h1>Hello</h1>
      <Button label={"Hello"} onPress={onPress} type="primary" />
    </div>
  );
};

export default App;
