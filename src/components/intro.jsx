import React from "react";
import kshitij from "../assets/kshitij.jpeg";

const Intro = () => {
    return (
        <div className="bg-slate-800 py-10 mx-4 rounded-xl">
            <div className="flex flex-col items-center justify-start p-10">
                <div className="flex flex-row items-center gap-10">
                    <img className="object-center object-cover rounded-full h-36 w-36 group-hover:ring-8 ring-violet-700 ring-8 sm:ring-0" src={kshitij} alt="logo"/>
                    <div> 
                    <p className="text-3xl text-white font-bold mb-2">Kshitij Verma</p>
                    <p className="text-base sm:opacity-0 text-gray-400 font-normal md:group-hover:animate-fadeIn opacity-1">
                        Full Stack Developer
                    </p>
                    </div>
                </div>
                <p className="p-6 text-gray-400 text-justify">
                    Hi, I'm Kshitij Verma a 3rd year CS undergraduate. I like making mobile and web applications,
contributing to the community and helping everyone to excel.
                    </p>
            </div>
        </div>
    );
};

export default Intro;