import React from "react";
import sideImg from "../assets/slider-image4.jpg";

const Caption = () => {
  return (
    <section className="flex flex-col items-center p-8">
      <div className="flex flex-row ">
        <div className="flex-1 items-center h-full">
          <div className="lg:mt-20 xl:mt-32">
            <h1 className="text-lg sm:text-3xl py-3   font-bold text-gray-900">
              Save time.
            </h1>
            <h1 className="text-lg sm:text-3xl py-3  font-bold text-gray-900">
              Save Money.
            </h1>
            <h1 className="text-lg sm:text-3xl py-3   font-bold text-gray-900">
              Let's do it your way
            </h1>
            <h1 className="text-lg sm:text-3xl py-3  font-bold text-gray-900">
              With latest technology
            </h1>

            <form className="flex space-x-2 mt-7 ">
              <input
                type="email"
                placeholder="Your e-mail"
                className="p-2 border border-gray-300 bg-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
              />
              <button className="bg-[#D80032] text-white font-bold px-4 py-2 rounded-md hover:bg-red-800">
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img src={sideImg} alt="Hero" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Caption;
