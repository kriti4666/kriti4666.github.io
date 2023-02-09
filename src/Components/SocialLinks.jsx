import React from "react";

import { FiCodesandbox } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-scroll";
const SocialLinks = () => {
  return (
    <div>
      <p className="text-center text-orange-600 mt-4">—•—my details—•—</p>
      <div className="flex w-2/5 m-auto font-bold p-5 flex-col justify-center gap-10">
      <div className="flex gap-12 w-full">
          <div className="border-2 rounded-full w-10 flex justify-center items-center border-hidden text-black bg-orange-600 h-10	">
            {" "}
            <a
              className=""
              href="https://kritikumari4666@gmail.com"
            >
              <ImMail4/>
            </a>{" "}
          </div>
          <div className="md:text-xl sm: text-sm">kritikumari4666@gmail.com</div>
        </div>
        <div className="flex gap-12 w-full">
          <div className="border-2 rounded-full w-10 flex justify-center items-center border-hidden text-black bg-orange-600 h-10	">
            {" "}
            <a
              className=""
              href="https://www.linkedin.com/in/kriti-kumari-b17188224/"
            >
              <FaLinkedinIn />
            </a>{" "}
          </div>
          <div className="text-xl ">linkedin</div>
        </div>
        <div className="flex gap-12 w-full">
          <div className="border-2 rounded-full w-10 flex justify-center items-center border-hidden text-black bg-orange-600 h-10	">
            {" "}
            <a
              className=" flex flex-col gap-5"
              href="https://github.com/kriti4666"
            >
              {" "}
              <FaGithub />
            </a>{" "}
          </div>
          <div className="text-xl ">GitHub</div>
        </div>
        <div className="flex gap-12 w-full">
          <div className="border-2 rounded-full w-10 flex justify-center items-center border-hidden text-black bg-orange-600 h-10	">
            <IoIosCall/>
          </div>
          <div className="text-xl ">8210248654</div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
