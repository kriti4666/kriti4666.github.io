import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import Python from "../assets/python.png";
import Charts from "../assets/chart.png";
import figma from "../assets/figma.png";
import jwt from "../assets/jwt.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import mongo from "../assets/mongodb.png"
import node from "../assets/node.png"


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
   
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: nextjs,
      title: "nextjs",
      style: "shadow-sky-400",
    },
    
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 13,
      src: tailwind,
      title: "tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 15,
      src: node,
      title: "NodeJS",
      style: "shadow-green-600",
    },
    {
      id: 15,
      src: jwt,
      title: "JWT",
      style: "shadow-cyan-600",
    },
    {
      id: 15,
      src: figma,
      title: "FIGMA",
      style: "shadow-purple-400",
    },{
      id: 15,
      src: Charts,
      title: "Charts",
      style: "shadow-gray-600",
    },{
      id: 15,
      src: Python,
      title: "Python",
      style: "shadow-yellow-600",
    },
  ];

  return (
    <div style={{backgroundColor: "#202235"}}
      name="skills"
      className=" w-full max-h-fit			"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center">
          <p className="text-white	 text-4xl">
            Skills
          </p>
          <p className=" text-orange-600">—•— tech skills —•—</p>
          {/* <p className="py-6 text-lg	font-medium	text-neutral-400">These are the technologies I've worked with and used them in my projects.</p> */}
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-3 gap-12 text-center mt-11  sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
