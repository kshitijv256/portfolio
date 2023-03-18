import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div
        id="contact"
        className="bg-slate-800 py-10 self-center w-full mt-10 text-white"
        >
            <div flex className=" flex flex-col px-10 gap-2">
                <p className="text-3xl font-bold">Contact Me</p>
                <p className="text-xl font-normal text-gray-400">
                    I'm always open to discussing new projects, creative ideas or
                    opportunities to be part of your visions.
                </p>
                <p className="pt-6">+91 9315460887</p>
                <p>kshitijv250@gmail.com</p>
                <div className="flex flex-row gap-4 pt-3">
                    <a href="https://github.com/kshitijv256">
                    <FaGithub className="text-3xl text-gray-400" />
                    </a>
                    <a href="https://www.linkedin.com/in/kshitijv256/">
                    <FaLinkedin className="text-3xl text-gray-400" />
                    </a>
                    <FaInstagram className="text-3xl text-gray-400" />
                </div>
            </div>
        </div>
    );
    }

export default Footer;