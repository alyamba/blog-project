import "./App.css";
import { Button } from "./components";
import { NavBar } from "./components/NavBar";


const App = () => {
  // const onPress = () => {
  //   console.log("hello world");
  // };
  return (
    <div>
      <NavBar/>
      <div className="Workspace">
        <div className="account__div"></div>
        <div className="notes__div"></div>
      </div>
    </div>
  );
};

export default App;
