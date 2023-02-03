import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import pic  from "../assets/pic.png"
import shape from "../assets/shape-bg.png"
import resume from "../assets/resume.pdf";


const Home = () => (
  <div style={{backgroundColor: "#202235"}}
    name="home"
    className="h-screen w-ful home "
  >
    <div className="max-w-screen-lg mx-auto flex flex-col gap-10 items-center justify-evenly h-full px-4 md:flex-row">
      <div className="small-screen hidden mt-8">
        <div>
         <img
          src={pic}
          alt="profile"
          className="border-orange-600 w-74  rounded-full bg-fixed" />
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
       <div className="">
       <h2 className="text-4xl sm:text-5xl font-bold text-white">
         Hello, I'm <span className="text-orange-600" >Kriti</span>
        </h2>
        <div className="mt-4 text-3xl text-white font-bold ">Full Stack Web Developer</div>
        <p className="font-medium	text-1xl text-gray-400 py-4 max-w-md">
          I love to build websites using the latest front-end technologies and full fledged APIs.
        </p>
       </div>

      
        <a
          href={resume}
          className="flex justify-between  items-center w-full text-white"
          download={true}
          target="_blank"
          rel="noreferrer"
        >
        <div className="group text-white w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer"> <span className="font-medium text-xl" >Resume</span> <BsFillPersonLinesFill className="text-2xl" /></div>
        </a>
      </div>
     
        <div className="big-screen w-5/12 space-x-2 shadow-orange-600  ">
        <img 
            src={pic}
            alt="profile"
            className=" "
          />
        </div>
    </div>
    <div style={{backgroundColor: "#202235", marginTop: "-5%"}}>
        <img src={shape} alt="shape-img" style={{ width: "100%", height: "auto"}} />
    </div>
  </div>

);

export default Home;
