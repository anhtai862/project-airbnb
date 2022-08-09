import Login from "pages/Login";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainTemplate from "./template/MainTemplate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
