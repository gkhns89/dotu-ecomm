import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function SliderProductDetail({ slides }) {
  const slideKeys = Object.keys(slides).filter((slideKey) =>
    slideKey.startsWith("picture")
  );

  const [currentProductDetailSlide, setCurrentProductDetailSlide] =
    React.useState(0);

  const nextSlide = () => {
    setCurrentProductDetailSlide(
      currentProductDetailSlide === slideKeys.length - 1
        ? 0
        : currentProductDetailSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentProductDetailSlide(
      currentProductDetailSlide === 0
        ? slideKeys.length - 1
        : currentProductDetailSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentProductDetailSlide(index); // Tıklanan görselin index'ine göre state güncelle
  };

  return (
    <div className="flex sm:flex-row-reverse flex-col sm:items-start items-center  min-w-[300px]">
      <div
        aria-label="product-detail-slider"
        className="relative flex justify-center "
      >
        <div className=" max-w-full">
          {slideKeys.map((slideKey) => {
            console.log(slideKey.slice(7) + " " + currentProductDetailSlide);
            return (
              <div
                key={slideKey}
                className={`" h-[500px] sm:min-h-[200px] min-h-[400px] min-w-[225px] sm:max-w-[400px] ${
                  currentProductDetailSlide === parseInt(slideKey.slice(7))
                    ? "block"
                    : "hidden"
                }`}
              >
                <img
                  src={slides[slideKey]}
                  alt={`Slide ${parseInt(slideKey.slice(7)) + 1}`}
                  className="w-full sm:min-h-[500px] min-h-[500px] object-cover"
                />
              </div>
            );
          })}
        </div>

        <div className="absolute top-0 px-2 sm:px-4 md:px-6 h-full w-full flex items-center justify-between z-10 ">
          <button onClick={prevSlide}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-4xl  text-txt-w hover:text-txt-g transition-all"
            />
          </button>

          <button onClick={nextSlide}>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-4xl text-txt-w hover:text-txt-g transition-all"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-start gap-1 flex-wrap max-w-full sm:min-w-16 sm:max-w-52 sm:max-h-[750px] sm:mr-2 sm:mt-0 mt-2 selected:border-2 border-c4">
        {slideKeys.map((slideKey) => (
          <img
            className="w-16 min-h-16 max-h-fit object-cover"
            onClick={() => goToSlide(parseInt(slideKey.slice(7)))}
            key={slideKey}
            src={slides[slideKey]}
            alt={`${slides.title} ${slideKey}`}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
}

SliderProductDetail.propTypes = {
  slides: PropTypes.object.isRequired,
};

export default SliderProductDetail;
