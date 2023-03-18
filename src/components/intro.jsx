import React from "react";
import kshitij from "../assets/kshitij.jpeg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Intro = () => {
  return (
    <div id="intro" className="bg-gradient-to-bl from-violet-900 via-slate-800 to-slate-800 py-10 mx-4 lg:w-3/5 rounded-xl mt-20 self-center">
      <div className="flex flex-col items-start justify-start p-10">
        <div className="flex flex-row items-center gap-10">
          <img
            className="object-center object-cover rounded-full h-36 w-36 hover:ring-8 ring-violet-800 ring-8 sm:ring-0"
            src={kshitij}
            alt="logo"
          />
          <div>
            <p className="text-3xl text-white font-bold mb-2 grad-text">Kshitij Verma</p>
            <p className="text-base sm:opacity-0 text-gray-400 font-normal md:group-hover:animate-fadeIn opacity-1">
              Full Stack Developer
            </p>
            <div className="flex flex-row gap-4 pt-3">
                <FaGithub className="text-2xl text-gray-400"/>
                <FaLinkedin className="text-2xl text-gray-400"/>
                <FaInstagram className="text-2xl text-gray-400"/>
            </div>
          </div>
        </div>
        <p className="p-6 text-gray-400 text-justify">
          Hi, I'm Kshitij Verma a 3rd year CS undergraduate. I like making
          mobile and web applications, contributing to the community and helping
          everyone to excel.
        </p>
      </div>
    </div>
  );
};

export default Intro;
