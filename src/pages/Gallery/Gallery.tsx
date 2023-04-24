import React from "react";
import "./Gallery.scss";
import Navbar from "../../components/Navbar/Navbar";

import dataSlider from "../../SliderData";

import image0 from "../../assets/images/insta/piece-1.png";
import image1 from "../../assets/images/insta/piece-2.png";
import image2 from "../../assets/images/insta/piece-3.png";
import image3 from "../../assets/images/insta/piece-4.png";
import image4 from "../../assets/images/insta/piece-5.png";
import image5 from "../../assets/images/insta/piece-6.png";
import image6 from "../../assets/images/insta/2piece-1.png";

interface GalleryImg {
  photo: string;
  id: string;
  name: string;
  materials: string;
  size: string;
  sold: boolean;
}

const sliderData: GalleryImg[] = dataSlider;

const images: string[] = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <Navbar />
      <div className="gallery__carousel-wrapper">
        <h2 className="gallery__title">Browse</h2>
        <div className="gallery__slider-wrapper">
          {sliderData.map((img: GalleryImg, i: number) => {
            console.log(images[i]);
            console.log(img.photo);
            return (
              <div className="gallery__img">
                <img
                  src={`${images[i]}`}
                  alt={`Slide ${i + 1}`}
                  className="gallery__img"
                  style={{
                    display: "block",
                    height: "100%",
                    margin: "auto",
                    width: "100%",
                  }}
                />
                <h3 className="gallery__img-name">{img.name}</h3>
                <div className="gallery__img-info">
                  <p className="gallery__img-materials">{img.materials}</p>
                  <p className="gallery__img-size">{img.size}</p>
                </div>
                {img.sold === true && <p className="gallery__img-sold">Sold</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
