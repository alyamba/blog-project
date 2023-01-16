import "./App.css";
import { Button, InputBlock, PostBlock } from "./components";
import { UserPhoto, NavBar, UserBlock } from "./components";

const App = () => {
  // const onPress = () => {
  //   console.log("hello world");
  // };
  return (
    <div>
      <NavBar />
      <div className="workspace">
        <UserBlock />
        <div className="notes__div">
          <InputBlock />
        </div>
      </div>
      <PostBlock />
    </div>
  );
};

export default App;
