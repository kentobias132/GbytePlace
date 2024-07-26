import React from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Services from "./components/Service";
import Caption from "./components/Caption";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="xl:w-[80%] lg:w-[90%] sm:w-[95%] mx-auto bg-white">
      <Header />
      <MainPage />
      <Services />
      {/* <Caption /> */}
      <WhyChooseUs />
    </div>
  );
}

export default App;
