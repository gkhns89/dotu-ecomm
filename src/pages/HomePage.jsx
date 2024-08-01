import React from "react";
import slide1 from "../assets/images/sliderImages/slide1.jpeg";
import slide2 from "../assets/images/sliderImages/slide2.jpeg";
import slide3 from "../assets/images/sliderImages/slide3.jpeg";

import Slider from "../components/Slider";
import EditorsPick from "../components/EditorsPick";
import BestsellerProducts from "../components/BestsellerProducts";

function HomePage() {
  let slides = [
    {
      id: 1,
      image: slide1,
      alt: "Slide 1",
    },
    {
      id: 2,
      image: slide2,
      alt: "Slide 2",
    },
    {
      id: 3,
      image: slide3,
      alt: "Slide 3",
    },
  ];

  return (
    <main aria-label="main-container">
      <Slider slides={slides} />
      <EditorsPick />
      <BestsellerProducts />
   
    </main>
  );
}

export default HomePage;
