import { React /*useState*/ } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";
import { Img1, Img2, Img3, Img4 } from "../Assets";
import { Image } from "./style";
const HeroImg = [
  {
    image: Img1,
    content: "Poverty Alleviation Scheme",
  },
  {
    image: Img2,
    content: "Empowerment program",
  },
  {
    image: Img3,
    content: "Children Christmas Party",
  },
  {
    image: Img4,
    content: "World Drug Abuse Day",
  },
];

const Hero = () => {
  const options = {
    type: "loop",
    gap: "8px",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    // height: "15rem",
  };
  return (
    <Image>
      <Splide
        aria-labelledby="carousel-heading"
        options={options}
        hasTrack={false}
      >
        <SplideTrack>
          {HeroImg.map((img, index) => (
            <SplideSlide key={index}>
              <img src={img.image} alt="" />
              <div className="topper">
                <h1 id="carousel-heading">{img.content}</h1>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </Image>
  );
};

export default Hero;
