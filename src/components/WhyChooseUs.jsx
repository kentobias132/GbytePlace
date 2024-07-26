// import Image from "next/image";
import React from "react";
import reasonImage from "../assets/how2.png";
import { Check, CheckBox, Help, People } from "@mui/icons-material";
Help;
const WhyChooseUs = () => {
  return (
    <div>
      <h2 className="text-3xl text-center mt-44 font-extrabold text-gray-900 sm:text-4xl">
        Why Choose Us?
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full">
          <div className="flex">
            <div>
              <People style={{ fontSize: 80, color: "#D80032" }} />
            </div>
            <div>
              <h2 className="font-bold text-xl">Expert Team</h2>
              <p className=" text-lg text-gray-500">
                Our professionals bring a wealth of experience and expertise to
                every project.
              </p>
            </div>
          </div>

          <div>
            <h2>Customized Solutions</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              We tailor our services to meet your unique business needs.
            </p>
          </div>

          <div>
            <h2>Commitment to Quality</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              We are dedicated to delivering excellence and ensuring your
              satisfaction.
            </p>
          </div>

          <div>
            <h2>Innovative Approach</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              We leverage the latest technologies and methodologies to drive
              success.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <img
            src={reasonImage}
            alt="Reasons Image"
            // width={400}
            // height={300}
            // className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
