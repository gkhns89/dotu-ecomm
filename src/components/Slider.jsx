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
    <div aria-label="slider" className="relative overflow-hidden">
      <div 
      className={`flex transition-transform ease-out duration-500`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => {
          return (
            <div key={slide.id} className="w-full max-h-[calc(100vh-208px)] flex-shrink-0">
              <img src={slide.image} alt={slide.alt} className="w-full aspect-video"  />
            </div>
          );
        })}
      </div>

      <div className="absolute top-0 px-2 sm:px-4 md:px-6 h-full w-full flex items-center justify-between ">
        <button onClick={prevSlide}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-4xl sm:text-6xl md:text-8xl text-txt-w hover:text-txt-g "
          />
        </button>

        <button onClick={nextSlide}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-4xl sm:text-6xl md:text-8xl text-txt-w hover:text-txt-g"
          />
        </button>
      </div>
    </div>
  );
}
export default Slider;
