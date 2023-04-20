import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import BigTextureClub from "./pages/BigTextureClub/BigTextureClub";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/big-texture-club" element={<BigTextureClub />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
