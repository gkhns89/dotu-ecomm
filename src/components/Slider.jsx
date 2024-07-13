import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Slider({ slides }) {
  let [currentSlide, setCurrentSlide] = React.useState(0);

  function nextSlide() {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  }

  function prevSlide() {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  }

  return (
    <div
      aria-label="slider"
      className="relative overflow-hidden flex justify-center"
    >
      <div
        className={`flex transition-transform ease-out duration-500`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => {
          return (
            <div
              key={slide.id}
              className="w-full max-h-[calc(100vh-244px)] min-h-[750px] flex-shrink-0"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full min-h-[750px] aspect-video object-cover"
              />x
            </div>
          );
        })}
      </div>

      <div
        aria-label="slider-content"
        className="absolute rounded-3xl top-1/4 text-txt-w p-6 flex flex-col items-center text-center justify-center gap-8 backdrop-filter backdrop-blur-sm bg-[rgba(0,0,0,0.2)]"
      >
        <h5 className="font-bold">SUMMER 2024</h5>
        <h1 className="text-5xl leading-snug">NEW COLLECTION</h1>
        <h4 className="leading-snug max-w-[290px] ">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="bg-c4 text-txt-b px-10 py-4 text-2xl font-bold rounded-md">
          SHOP NOW
        </button>
      </div>

      <div className="absolute top-0 px-2 sm:px-4 md:px-6 h-full w-full flex items-center justify-between z-10 ">
        <button onClick={prevSlide}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-4xl sm:text-6xl md:text-8xl text-txt-w hover:text-txt-g transition-all"
          />
        </button>

        <button onClick={nextSlide}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-4xl sm:text-6xl md:text-8xl text-txt-w hover:text-txt-g transition-all"
          />
        </button>
      </div>
    </div>
  );
}
export default Slider;
