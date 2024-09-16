import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";


import HomePage from "./pages/HomePage";

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<h1>HOMEv</h1>} />
    </Routes>
  );
};

export default App;
