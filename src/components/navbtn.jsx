import React from "react";

const NavBtn = (props) => {
    return (
        <div className="bg-transparent hover:bg-white/10 p-4">
            <p className="text-white font-bold text-lg">{props.name}</p>
        </div>
    );
};

export default NavBtn;