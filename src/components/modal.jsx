import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const Modal = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal fixed top-0 left-0 flex justify-center items-center bg-slate-700/30 w-full h-full">
        <div className="modal-content">
            <span className="close grad-text" onClick={props.closeModal}>
            Press it
            </span>
            <p>{props.children}</p>
        </div>
        <div
        id="contact"
        className="bg-slate-800 py-10 self-center w-full"
        >
        </div>
        </div>
    );
    }

export default Modal;