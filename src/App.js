import "./App.css";
import { Button, InputBlock, PostBlock, UserPhoto, NavBar, UserBlock, Footer } from "./components";
import moment from "moment";

const data = [{
  text: "Hello! I'm Alina and I'm a beginner developer. I study at BSUIR and learn English. I like to spend my free time with my cat ^_^",
  author: "Logunova Alina",
  datetime: 1673896847965,
}]

const App = () => {
  // console.log(moment(data[0].datetime).format('LLL'))
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
      <Footer/>
    </div>
  );
};

export default App;
