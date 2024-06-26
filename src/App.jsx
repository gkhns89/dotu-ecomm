import "./App.css";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div>
      <header aria-label="header" className="min-w-[414px] mx-8 my-6">
        <div
          aria-label="header-top"
          className="flex justify-between items-center"
        >
          <h1
            aria-label="logo"
            className="min-w-[153px] font-bold leading-8 tracking-[0.1px] text-2xl text-txt-b"
          >
            BrandName
          </h1>
          <div
            aria-label="header-content"
            className="sm:flex items-center hidden"
          >
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray-400 p-2"
            />
            <select className="border-2 border-gray-400">
              <option>Black Friday</option>
              <option>Outlet</option>
            </select>
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div
            aria-label="header-buttons"
            className="flex p-3 gap-8 justify-between"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="cursor-pointer text-2xl text-txt-b"
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              className="cursor-pointer text-2xl text-txt-b"
            />
            <FontAwesomeIcon
              icon={faBars}
              className="cursor-pointer text-2xl text-txt-b"
            />
          </div>
        </div>
        <div aria-label="searchbar" className="flex flex-col gap-4 mt-12">
          <input
            type="text"
            placeholder="Search"
            className="px-6 py-3 border-2 rounded border-c3 text-txt-g"
          />
          <select className="px-6 py-3 border-2 rounded border-c3 text-txt-g">
            <option>Black Friday</option>
            <option>Outlet</option>
          </select>
          <button className="px-10 py-4 rounded fond-bold text-txt-w bg-c3">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </header>
     <div aria-label="slider" className="min-w-[414px] w-full min-h-svh my-6">
        {" "}
        <Swiper
          scrollbar={{
            hide: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Scrollbar]}
          className="my-10 w-full min-h-full "
        >
          <SwiperSlide className="text-center flex justify-center items-center">
            <img className="w-full h-full object-fit" src="..\images\shopHeroProductSlide.png" alt="React logo" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center text-center">Slide 2</SwiperSlide>
          
        </Swiper>
      </div>
      <main aria-label="main" className="min-w-[414px] mx-8 mb-6 mt-20">
        <section
          aria-label="editors-pick-section"
          className="flex flex-col gap-4"
        >
          <div
            aria-label="editors-pick-title"
            className="flex flex-col gap-3 items-center"
          >
            <h3>EDITOR'S PICK</h3>
            <p className="text-center">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
