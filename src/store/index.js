import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { postReducer } from "./postReducer";


const rootReducer = combineReducers({
  posts: postReducer,
});

export const store = createStore(rootReducer, composeWithDevTools);
