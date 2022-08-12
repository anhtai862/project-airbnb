import GlobalStyle from "GlobalStyle";
import Login from "pages/Login";
import Signup from "pages/Signup";

import { Route, Routes } from "react-router-dom";
import MainTemplate from "./template/MainTemplate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
