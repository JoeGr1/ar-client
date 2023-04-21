import React from "react";
import "./Gallery.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <Navbar />

      <div className="gallery__carousel-wrapper">
        <h2 className="gallery__title">Browse</h2>
        <div className="gallery__swiper-wrapper"></div>
      </div>
    </div>
  );
};

export default Gallery;
