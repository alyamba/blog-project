import "./App.css";
import { Button } from "./components";
import { UserPhoto, NavBar, UserBlock } from "./components";

const App = () => {
  // const onPress = () => {
  //   console.log("hello world");
  // };
  return (
    <div>
      <NavBar />
      <div className="workspace">
        <UserBlock/>
        <div className="notes__div"></div>
      </div>
    </div>
  );
};

export default App;
