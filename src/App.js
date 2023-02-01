import "./App.css";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

const App = () => {
  // console.log(moment(data[0].datetime).format('LLL'))
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/account" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
