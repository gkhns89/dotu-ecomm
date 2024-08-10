import React from "react";
import BestsellerData from "./mocks/BestsellerData.jsx";
function BestsellerProducts() {
  return (
    <section
      aria-label="bestseller-section"
      className="flex flex-col items-center gap-4 mx-8 mt-20 sm:mx-0 mb-20 md:mx-0"
    >
      <div
        aria-label="editors-pick-title"
        className="flex flex-col gap-3 items-center text-center"
      >
        <h4>Featured Products</h4>
        <h3 className="text-wrap">BESTSELLER PRODUCTS</h3>
        <p className="text-center">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="flex flex-wrap mt-20 justify-center gap-6 md:max-w-7xl">
        {BestsellerData().map((item, index) => (
          <div key={index} className="max-w-60">
            <div>
              <img
                src={item.picture}
                className="w-60 h-[427px] object-cover"
                alt="shopCardPicture"
              ></img>
            </div>

            <div className="flex flex-col items-center gap-3 px-6 pt-6 pb-9">
              <h5 className="font-bold">{item.title}</h5>
              <h6>{item.description}</h6>
              <div className="flex flex-row gap-2">
                <div className="text-txt-g line-through">{item.price1}</div>
                <div className="text-txt-b ">{item.price2}</div>
              </div>
              <div className="flex flex-row gap-2 ">
                <button className="bg-[#FCA311] rounded-full w-4 h-4"></button>
                <button className="bg-[#47AD97] rounded-full w-4 h-4" ></button>
                <button className="bg-[#00A1C1] rounded-full w-4 h-4" ></button>
                <button className="bg-[#B73225] rounded-full w-4 h-4" ></button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default BestsellerProducts;
