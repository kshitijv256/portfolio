import React from "react";



const NavBtn = (props) => {
  const handleClickScroll = () => {
    const element = document.getElementById(props.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      className="hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:text-violet-400 uppercase bg-transparent font-semibold text-xl whitespace-nowrap py-2 px-4 rounded-sm cursor-pointer button-shadow text-white/75"
      onClick={handleClickScroll}
    >
      {props.name}
    </button>
  );
};

export default NavBtn;