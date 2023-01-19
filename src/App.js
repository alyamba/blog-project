import "./App.css";
import React, { useState } from "react";
import { InputBlock, PostBlock, NavBar, UserBlock, Footer } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./store/postReducer";

const App = () => {
  // console.log(moment(data[0].datetime).format('LLL'))

  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts.postList);

  console.log(postList);

  const [postText, setPostText] = useState("");

  const onSaveHandler = () => {
    if (postText) {
      const post = {
        text: postText,
        author: "Logunova Alina",
        datetime: Date.now(),
      };
      dispatch(addPost(post));
      setPostText("");
    }
  };

  const onCancelHandler = () => {
    if (window.confirm("Are you sure?")) {
      setPostText("");
    }
  };

  return (
    <div>
      <NavBar />
      {console.log(postList)}
      <div className="workspace">
        <UserBlock />
        <div className="notes__div">
          <InputBlock
            placeholder="New post"
            message={postText}
            setMessage={(e) => setPostText(e.target.value)}
            onSave={onSaveHandler}
            onCancel={onCancelHandler}
          />
        </div>
      </div>
      {postList.map((el) => {
        return (
          <PostBlock
            text={el.text}
            author={el.author}
            datetime={el.datetime}
            key={el.datetime}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
