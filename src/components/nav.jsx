import React from "react";
import NavBtn from "./navbtn";

const Nav = () => {
    return (
        <div className="bg-[#140849] fixed top-0 flex flex-row w-full rounded-b-lg justify-evenly z-10 shadow-lg">
            <NavBtn name="About me"/>
            <NavBtn name="Projects"/>
            <NavBtn name="Skills"/>
            <NavBtn name="Contact"/>
        </div>
    );
};

export default Nav;