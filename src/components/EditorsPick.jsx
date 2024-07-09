import React from "react";
import kidsPhoto from "../assets/images/editorsPick/kidsPhoto.jpeg";
import menPhoto from "../assets/images/editorsPick/menPhoto.jpeg";
import womenPhoto from "../assets/images/editorsPick/womenPhoto.jpeg";
import accesoriesPhoto from "../assets/images/editorsPick/accessoriesPhoto.jpeg";

function EditorsPick() {
  return (
    <section
      aria-label="editors-pick-section"
      className="flex flex-col  gap-4 mx-8"
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
      <div
        aria-label="editors-pick-cards"
        className="flex flex-wrap gap-4 justify-center"
      >
        <div aria-label="editors-pick-card" className="relative gap-3">
          <img
            className="w-[325px] lg:w-[500px] h-[500px] object-cover"
            src={menPhoto}
            alt="Men Photo"
          />
          <div
            aria-label="editors-pick-card-title"
            className="absolute bottom-6 left-7 font-bold px-12 py-3 bg-c2 text-txt-w"
          >
            <span>MEN</span>
          </div>
        </div>

        <div aria-label="editors-pick-card" className="relative gap-3">
          <img
            className="w-[325px] h-[500px] object-cover"
            src={womenPhoto}
            alt="Women Photo"
          />
          <div
            aria-label="editors-pick-card-title"
            className="absolute bottom-6 left-7 font-bold px-12 py-3 bg-c2 text-txt-w"
          >
            <span>WOMEN</span>
          </div>
        </div>

        <div
          aria-label="editors-pick-inner-card"
          className="flex flex-col gap-3"
        >
          <div aria-label="editors-pick-card" className="relative gap-3">
            <img
              className="w-[325px] h-[250px] md:h-[244px] object-cover"
              src={accesoriesPhoto}
              alt="Accessories Photo"
            />
            <div
              aria-label="editors-pick-card-title"
              className="absolute bottom-6 left-7 font-bold px-12 py-3 bg-c2 text-txt-w"
            >
              <span>ACCESSORIES</span>
            </div>
          </div>
          <div aria-label="editors-pick-card" className="relative gap-3">
            <img
              className="w-[325px] h-[250px] md:h-[244px] object-cover"
              src={kidsPhoto}
              alt="Kids Photo"
            />
            <div
              aria-label="editors-pick-card-title"
              className="absolute bottom-6 left-7 font-bold px-12 py-3 bg-c2 text-txt-w"
            >
              <span>KIDS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorsPick;
