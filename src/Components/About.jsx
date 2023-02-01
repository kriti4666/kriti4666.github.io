import React from "react";
import pic from "../assets/about/eduOrange.svg";
import kriti from "../assets/kriti.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full max-h-auto mb-20 mt-52	bg-white	flex-col text-grey-400 about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-black text-4xl">
            About
          </p>
          <p className=" text-orange-600">—•— who i am —•—</p>
        </div>
    
        <div className="md:flex justify-center gap-20 sm:block ">
          {/* <img width="380px"  src={pic} /> */}
          <img
            src={kriti}
            width="280px"
            alt="profile"
            className=" rounded-full md: ml-28"
          />

          <div className="p-10  text-black">
            <h2 className="text-4xl sm:text-3xl font-bold text-black">
              Hello, I'm <span className="text-orange-600">Kriti</span>
            </h2>
            <br/>
            <p className="text-l font-medium text-gray-500" >
              A Proficient full-stack web developer with the ability to learn and
              collaborate in rapidly changing environments and compositions.
              Worked through 1200+ hours in a military type structure, learning
              MERN stack web development with data structures and algorithms.
              Keen to tackle web development challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
