import React from "react";
import { FaReact } from "react-icons/fa";

const SkillItem = (props) => {
    return (
        <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
            <div className="text-white rounded-full">
                {props.icon}
            </div>
            <div className="text-white/75 font-semibold text-2xl ml-3 flex">
            <p className="pl-2"> {props.name} </p>
            </div>
        </div>
        </div>
    );
    };

export default SkillItem;