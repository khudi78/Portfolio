import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import imagea from "./imagea.png";
import "./styles.css";

const AnimatedText = ({ text }) => {
  return (
    <div className="flex space-x-1">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            animation: `fadeIn 0.5s ease-out forwards`,
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};
function Home() {
  return (
    <div className="flex mt-40 gap-36">
      <div className="w-[700px]">
        <div className="flex flex-col text-left text-6xl">
          <span className="font-semibold mb-2">
            {" "}
            <AnimatedText text="Hello      I'm" />
          </span>{" "}
          <span className=" text-teal-600 font-bold">
            {" "}
            <AnimatedText text="Khushi     Kumari" />
          </span>
        </div>
        <div className="text-left mt-16 text-lg">
          Software Engineering student with a strong interest in Frontend
          development, specializing in C++, Python, JavaScript,
          Html,css,Tailwind css,Reactjs. Committed to delivering high-quality,
          scalable solutions and passionate about leveraging technology to drive
          innovation. Currently pursuing B.Tech(3rd Year) at CUSAT, eager to
          contribute skills and expertise to cutting-edge projects. and
          responsibilities carried out.
        </div>
        <div className="flex w-[500px] mt-6 p-3 gap-40 ml-28">
          <div className="relative">
            <div className="border-2 border-white rounded-3xl px-4 py-[6px] hover:bg-slate-950 cursor-pointer transition-all duration-300 hover:transform hover:scale-110 hover:font-semibold hover:shadow-lg hover:shadow-gray-700">
              View Resume
            </div>
          </div>
          <div className="flex text-3xl gap-5">
            <div>
              <FaGithub className="hover:text-slate-950 cursor-pointer" />
            </div>
            <div>
              <FaLinkedin className="hover:text-slate-950 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[350px] h-[350px]  rounded-full shadow-2xl shadow-slate-700">
        <img
          src={imagea}
          alt=""
          className="rounded-full w-[350px] h-[350px] brightness-75"
        />
        {/* image */}
      </div>
    </div>
  );
}

export default Home;
