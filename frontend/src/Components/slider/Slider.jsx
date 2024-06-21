import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";
import road from "../../assets/Images/Pothole-homepage.jpg"

import road2 from "../../assets/images/potholes-1-2.webp";
const data = [
  {
    id: 1,
    src: road,
    headline: "Safe roads",
    body: "Roads are the viens of a country/state",
    cta: "Potholes are hernia",
    target: "features",
  },
  {
    id: 2,
    src: road2,
    headline: "Train like a champion at Karate Kastle",
    body: "Constant vehicular traffic, especially heavy vehicles, can accelerate the deterioration of road suraces. The repeated pressure from vehicle loads weakens the asphalt and underlying layers, making them more susceptible to damage.",
    cta: "About Us",
    target: "about",
  },
  {
    id: 3,
    src: "https://i.ibb.co/Pmvjwt9/slider3.png",
    headline: "Elevate your karate skills to the next level",
    body: "Karate Kastle is dedicated to providing the highest quality martial arts instruction in a variety of styles, including Karate, Taekwondo and Kung Fu, for students of all ages and skill levels.",
    cta: "Join our community",
    target: "register",
  },
];

const Slider = () => {
  // Manual Sliding functionality
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className='slider-frame'>
      <div
        className='slider'
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {/* Take taka from data arrey */}
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>
      <div className='slider-buttons'>
        <button onClick={prevSlide} className='prev-btn'>
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button onClick={nextSlide} className='next-btn'>
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
