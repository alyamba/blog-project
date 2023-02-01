import React, { useState } from "react";
import {
  InputBlock,
  PostBlock,
  NavBar,
  UserBlock,
  Footer,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { addPost, removePost } from "../store/postReducer";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";

const HomePage = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts.postList);

  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, "posts");

  const onSaveHandler = async () => {
    if (postText) {
      await addDoc(postCollectionRef, {
        text: postText,
        author: {
          name: auth.currentUser.email,
          id: auth.currentUser.uid,
        },
        datetime: Date.now(),
      });
      const post = {
        text: postText,
        author: auth.currentUser.email,
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

  const onRemovePostHandler = (datetime) => {
    dispatch(removePost(postList.filter((post) => post.datetime !== datetime)));
  };

  return !!userData.id ? (
    <div className="body__container">
      <NavBar />
      {console.log(postList)}
      <div className="main-container">
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
        {postList?.map((el) => {
          return (
            <PostBlock
              text={el.text}
              author={el.author}
              datetime={el.datetime}
              key={el.datetime}
              onRemovePost={onRemovePostHandler}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  ) : (
    <div className="body__container">
      <NavBar />
      {console.log(postList)}
      <div className="main-container">pukipuki</div>
      <Footer />
    </div>
  );
};

export default HomePage;
