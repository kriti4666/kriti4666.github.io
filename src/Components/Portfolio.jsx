import React from "react";
import bewakoof from "../assets/portfolio/bewakoof.png"
import credbee from "../assets/portfolio/credbee.png"
import fitclub from "../assets/portfolio/fitclub.png"
import farfetch from "../assets/portfolio/farfetch.png"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: bewakoof,
      title: "Bewakoof.com [Group Project]",
      tech:"HTML | CSS | JavaScript | localStorage",
      desc:"This is an online fashion and lifestyle E-commerce brand named Bewakoof. Users can buy fashion products on this website. Pages we made:Home page, Login/Signup page, Product Page, Footer Page, Cart page, Payment Page.",
      link: "https://stellar-choux-d17a1b.netlify.app/",
      repo: "https://github.com/NaziaSayyad/freezing-vacation-7444/tree/main/Bewakoof_web-final"
    },
    {
      id: 2,
      src: fitclub,
      title: "FitClub Gym website",
      tech:"HTML | CSS | JavaScript | React",
      desc:"I have built this a Gym website.This is a single-page Web Application for Gym, Fully Responsive with lots of Animation.Pages-04 sections :  Hero section, Program section , Plan section, testimonials section. ",
      link: "https://sage-muffin-0f2d01.netlify.app/",
      repo: "https://github.com/kriti4666/fit-club/tree/main/fit-club",
    },
    {
      id: 3,
      src: farfetch,
      title: "Farfetch e-commerce website",
      tech:"HTML | CSS | JavaScript | React",
      desc:"This is a e-commerce Website for Luxury Fashion.FARFETCH exists for the love of fashion. this website has 3 section men, women and kids, pussess the functionalities like login, signup authentication",
      link: "https://rad-mooncake-3e52f9.netlify.app/",
      repo: "https://github.com/kriti4666/primo-ice-5944/tree/main/my-farfetch-web",
    },
    {
      id: 4,
      src: credbee,
      title: "Credbee website",
      tech:"Node js | Express | MongoDB | React | React router-dom | Chakra Ui| Material Ui ",
      desc:"Credbee is a full-stack project build using MERN. It is a group project and pussess the functionalities like Login, Signup, filtering etc..",
      link: "https://tangerine-truffle-43e0b4.netlify.app/",
      repo: "https://github.com/kriti4666/credbee.com",
    },

   
  ];

  return (
    <div
      name="projects"
      className="	mb-20 w-full text-black max:h-400px"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-20 text-center">
          <p className="text-black text-4xl">
            Projects
          </p>
          <p className=" text-orange-600">—•— see my work —•—</p>
          {/* <p className="py-6 text-lg	font-medium	text-neutral-400">My Projects</p> */}
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-20  p-4 sm:px-0">
          {projects.map(({ id, src, link, repo,title ,tech,desc}) => (
            <div key={id} className="shadow-xl	 shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md h-72 w-full duration-200 hover:scale-105 p-10"
              />
              <div className="px-10 mt-0 ">
              <div className="text-center	 text-orange-500 font-bold	font-mono text-2xl	" >{title}</div>
             <div className="text-center pt-4 text-black	font-medium	text-1xl	"> <p>{desc}</p></div>
              <p className="text-center pt-4 text-black	text-base font-semibold	">Tech Stack: {tech}</p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/4 px-6 py-3 m-4   rounded-full text-white my-8 mx-auto flex justify-center items-center bg-gradient-to-b bg-stone-800  hover:bg-stone-700 duration-300 bg-bg-stone-800 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/4 px-6 py-3 m-4  rounded-full text-white text-1xl from-orange-600 to-orange-700  my-8 mx-auto flex justify-center items-center duration-300  hover:bg-orange-700 bg-orange-600 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
