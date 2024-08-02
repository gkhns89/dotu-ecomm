import React from "react";
import FeaturedData from "../components/mocks/FeaturedBlogData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faClock,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
function FeaturedBlog() {
  return (
    <section className="flex flex-col justify-between items-center py-20 md:py-28 tracking-normal">
      <div
        className="flex flex-col text-center gap-3"
        aria-label="featured-posts-title"
      >
        <h6 className="text-txt-g2">Practice Advise</h6>
        <h3>Featured Posts</h3>
        <p className="text-txt-g max-w-[190px] md:max-w-full">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="pt-20">
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl ">
          {FeaturedData().map((item, index) => (
            <div key={index} className="max-w-60 min-w-min shadow-md">
              <div className="w-[330px] md:w-[348px] h-[300px]">
                <img
                  src={item.picture}
                  className="object-cover w-full h-full"
                  alt="Featured Blog"
                ></img>
              </div>

              <div className="flex flex-col gap-2 px-6 pt-6 pb-8">
                <nav className="flex flex-row text-sm text-txt-g leading-1 gap-4 py-2 text-left">
                  <p href="/" className="hover">
                    {item.nav.nav1}
                  </p>
                  <p href="/" className="hover">
                    {item.nav.nav2}
                  </p>
                  <p href="/" className="hover">
                    {item.nav.nav3}
                  </p>
                </nav>
                <h4>
                  {item.title.title1}
                  <p className="block">{item.title.title2}</p>
                </h4>
                <p>{item.description}</p>
                <div className="flex justify-between py-4">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} fade size="sm" />
                    <p className="text-txt-g">{item.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faChartLine} fade size="sm" />
                    <p className="text-txt-g">{item.comments}</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 font-bold text-lg text-txt-b">
                  {item.moreInfo}
                  <FontAwesomeIcon icon={faAngleRight} size="lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedBlog;
