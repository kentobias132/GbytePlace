import React from "react";
import heroImage from "../assets/NEW.jpg";
const MainPage = () => {
  return (
    <section className="flex flex-col items-center p-8">
      <div className="flex flex-row ">
        <div className="flex-1 mt-6 md:mt-0">
          <img src={heroImage} alt="Hero" className="w-full h-auto" />
        </div>
        <div className="flex-1 items-center h-full">
          <div className="lg:mt-20 xl:mt-32">
            <h1 className="text-lg sm:text-3xl  xl:text-5xl font-bold text-gray-900">
              Welcome to GbytePlace: Your Outsourcing Ally
            </h1>
            <h2 className="text-red-400 font-extralight my-2 xl:text-2xl">
              RELIABLE EXPERTISE; SUCCESSFUL RESULTS
            </h2>
            <p className="text-gray-700 xl:text-2xl">
              We specialize in providing top-notch outsourcing solutions;
            </p>
            <p className="text-gray-700 xl:text-2xl">
              where we deliver excellence in every project
            </p>

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
      </div>
    </section>
  );
};

export default MainPage;
