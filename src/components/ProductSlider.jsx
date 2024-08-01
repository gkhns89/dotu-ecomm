import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import sliderData from "../components/mocks/ProductSliderData";

function ProductSlider() {
  const slides = sliderData();
  let [currentProductSlide, setCurrentProductSlide] = React.useState(0);

  function nextSlide() {
    setCurrentProductSlide(
      currentProductSlide === slides.length - 1 ? 0 : currentProductSlide + 1
    );
    console.log(currentProductSlide);
  }

  function prevSlide() {
    setCurrentProductSlide(
      currentProductSlide === 0 ? slides.length - 1 : currentProductSlide - 1
    );
  }

  return (
    <div
      aria-label="slider"
      className="min-w-[414px] pt-[100px] relative overflow-hidden flex flex-col bg-[#23856D] "
    >
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}
      >
        {sliderData().map((slide, index) => (
          <div
            key={index}
            className="w-full h-[1200px] md:h-[500px] flex flex-col sm:flex-row flex-shrink-0 relative"
          >
            <div className="absolute flex flex-col md:items-start items-center gap-8 max-w-[500px] md:top-48 top-72 md:left-1/3 -translate-x-1/2 -translate-y-1/2 md:text-left text-center left-1/2">
              <p className="text-txt-w text-lg ">{slide.toptitle}</p>
              <h1 className="text-txt-w">{slide.title}</h1>
              <p className="text-txt-w min-w-min">{slide.description}</p>
              <div className="flex md:flex-row flex-col gap-6 items-center">
                <p className="text-txt-w font-bold text-2xl">{slide.price1}</p>
                <button className="bg-c4 min-w-44 text-txt-b px-10 py-4 text-sm font-bold border border-c4 rounded-md">
                  {slide.button}
                </button>
              </div>
            </div>
            <div className="absolute md:-bottom-40 md:right-32 -bottom-32">
              <img
                src={slide.picture}
                alt={slide.alt}
           className="w-[450px] h-full"
              />
            </div>
          </div>
        ))}
        ;
      </div>

      <div className="absolute top-0 px-6 sm:px-8 md:px-10 h-full w-full flex items-center justify-between z-10">
        <button onClick={prevSlide}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ color: "#4A4E69" }}
            className="text-4xl sm:text-6xl md:text-8xl text-txt-w hover:text-txt-g transition-all"
          />
        </button>
        <button onClick={nextSlide}>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: "#4A4E69" }}
            className="text-4xl sm:text-6xl md:text-8xl text-txt-w hover:text-txt-g transition-all"
          />
        </button>
      </div>
    </div>
  );
}

export default ProductSlider;
