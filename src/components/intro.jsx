import React from "react";
import kshitij from "../assets/kshitij.jpeg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Intro = () => {
  return (
    <div id="intro" className="bg-gradient-to-bl from-violet-900 via-slate-800 to-slate-800 py-10 self-center w-full">
        <div className="flex flex-row flex-wrap lg:w-1/2">
      <div className="flex flex-col items-start justify-start p-10 pt-20">
        <div className="flex flex-row items-center gap-10">
          <img
            className="object-center object-cover rounded-full h-40 w-40 hover:ring-8 ring-violet-800 ring-8 sm:ring-0"
            src={kshitij}
            alt="logo"
          />
          <div>
            <p className="text-5xl text-white font-bold mb-2 grad-text">Kshitij Verma</p>
            <p className="text-lg sm:opacity-0 text-gray-400 font-normal md:group-hover:animate-fadeIn opacity-1">
              Full Stack Developer
            </p>
            <div className="flex flex-row gap-4 pt-3">
            <a href="https://github.com/kshitijv256">
                    <FaGithub className="text-3xl text-gray-400" />
                    </a>
                    <a href="https://www.linkedin.com/in/kshitijv256/">
                    <FaLinkedin className="text-3xl text-gray-400" />
                    </a>
                <FaInstagram className="text-3xl text-gray-400"/>
            </div>
          </div>
        </div>
        <p className="p-6 text-xl text-gray-300 text-justify">
          Hi, I'm Kshitij Verma a 3rd year CS undergraduate. I like making
          mobile and web applications, contributing to the community and helping
          everyone to excel.
        </p>
      </div>
      </div>

    </div>
  );
};

export default Intro;
