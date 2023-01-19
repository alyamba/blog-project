import { combineReducers, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { postReducer } from "./postReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  posts: postReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools);
export const persistor = persistStore(store);
