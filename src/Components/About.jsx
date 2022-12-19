import React from "react";
import pic from "../assets/about/eduOrange.svg"

const About = () => {
  return (
    <div          
      name="about"
      className="w-full max-h-auto mb-20 mt-52	bg-white	flex-col text-grey-400 about"
    >    

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-orange-600 text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
           {/* gig img */}
        <div className="md:flex justify-center gap-20  sm:block ">
        <img width="380px"  src={pic} />

        <div style={{backgroundColor: "#202235"}} className="p-10 border-2 shadow-2xl shadow-orange-500/100 text-white" >
        <p className="text-2xl font-medium">
        👋I m Kriti. I have completed a Bachelor of Forensic Science. 
        I'm a full-stack web developer with hands-on experience in building websites with MERN stack. 
        Apart from coding, I love traveling🌏 and listening to music🎶.I always love to do css. </p>      
       {/* <br />
        <p className="text-lg">
         Proficient in  CODING Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start my career as an entry-level software engineer with a reputed firm driven by technology.
        </p> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
