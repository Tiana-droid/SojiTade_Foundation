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
        const res = await fetch(
           "https://api.jsonbin.io/v3/b/69890eb643b1c97be96f7712",
          {
            headers: {
              "X-Master-Key":
                "$2a$10$fHlVtdS4NQvjdgfxC4Qff.8Q2tzrTB8Ba.2RRBd7EH3ijDIRl0LC2",
            },
          }
        );
        const data = await res.json();
        const galleryArray = data.record.gallery;
        setPictures(galleryArray);
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
              <img src={pic.original} alt="" />
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
