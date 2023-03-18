import React from "react";
import NavBtn from "./navbtn";

const Nav = () => {
    return (
        <div className="bg-[#140849] fixed top-0 flex flex-row w-full rounded-b-lg justify-evenly z-10 shadow-lg pb-2">
            <NavBtn name="About me" id="intro"/>
            <NavBtn name="Projects" id="projects"/>
            <NavBtn name="Skills" id="skills"/>
            <NavBtn name="Contact" id="contact"/>
        </div>
    );
};

export default Nav;