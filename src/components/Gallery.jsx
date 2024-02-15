import React, { useEffect, useState } from "react";
import ScrollCarousel from "scroll-carousel-react";
import { Wrapper } from "./style";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchPics = async () => {
      try {
        const res = await fetch("http://localhost:5000/gallery");
        const data = await res.json();
        setPictures(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchPics();
  }, []);
  return (
    <Wrapper id="gallery">
      <h1 style={{ marginBottom: "30px" }}>Gallery</h1>
      <ScrollCarousel autoplay speed={7}>
        <div className="pic-container">
          {pictures.map((pic) => (
            <div className="pic-wrapper" key={pic.id}>
              <img src={pic.original} alt=""  />
            </div>
          ))}
        </div>
      </ScrollCarousel>
      {/* <ImageGallery
        infinite={true}
        showPlayButton={false}
        autoPlay={true}
        items={pictures}
        /> */}
    </Wrapper>
  );
};

export default Gallery;
