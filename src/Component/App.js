import React from "react";
import Header from "./header";
import Home from "./home";
import Card from "./card";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
