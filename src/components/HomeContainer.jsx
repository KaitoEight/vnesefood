import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/b9.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Food Detection
          </p>
          {/* <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div> */}
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-black">
          The Information of
          <span className="text-white text-[3rem] lg:text-[5rem]">
             Vietnamese food
          </span>
        </p>

        <p className="text-base text-black font-bold text-center md:text-left md:w-[80%]">
Discover the power of AI in recognizing various food items.Our cutting-edge technology allows you to simply upload a photo of your meal, and within seconds, you'll get detailed information about the food items present, Whether you're curious about the nutritional content, or you want to impress your friends with your food knowledge, our application provides fast and accurate results. Ready to start your food journey? Upload an image now and let us do the rest
        </p>

        <button
        onClick={() =>window.location.href = "http://localhost:3000/products"}
        type="button"
        className="bg-gradient-to-br text-white font-bold from-orange-900 to-black w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
          Scan now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay1 backdrop-blur-md bg-black backdrop-contrast-75 rounded-3xl flex flex-col items-center justify-center drop-shadow-sm"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-bold text-orange-600 mt-2 lg:mt-4">
                  {n.name}
                </p>

                

                <p className="text-sm font-bold text-white">
                  <span className="text-xs text-white">calories:</span> {n.calories}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
