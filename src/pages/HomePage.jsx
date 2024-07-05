import React from 'react';
import slide1 from '../assets/images/sliderImages/slide1.jpeg';
import slide2 from '../assets/images/sliderImages/slide2.jpeg';
import slide3 from '../assets/images/sliderImages/slide3.jpeg';

import Slider from '../components/Slider'
function HomePage() {

  let slides = [
    {
      id: 1,
      image: slide1,
      alt: "Slide 1"
    },
    {
      id: 2,
      image: slide2,
      alt: "Slide 2"
    },
    {
      id: 3,
      image: slide3,
      alt: "Slide 3"
    },
  ];

  return (
  
  
    <main aria-label="main-container" className="min-w-[414px] mb-6 mt-20">
    <Slider slides={slides}/>
    <section
      aria-label="editors-pick-section"
      className="flex flex-col gap-4 mx-8"
    >
      <div
        aria-label="editors-pick-title"
        className="flex flex-col gap-3 mt-20 items-center"
      >
        <h3>EDITOR'S PICK</h3>
        <p className="text-center">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
    </section>
  </main>
 
  )
}

export default HomePage