import "./App.css";
import { Button, InputBlock, PostBlock, UserPhoto, NavBar, UserBlock, Footer } from "./components";

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
      <PostBlock />
      <PostBlock />
      <PostBlock />
      <Footer/>
    </div>
  );
};

export default App;
