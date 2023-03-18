import React from "react";

const Project = (props) => {
    return (
        <div className="bg-slate-900 rounded-xl p-6 w-full">
                    <div className="flex flex-col item-start justify-start gap-6">
                    <h1 className="text-2xl font-bold">{props.name}</h1>
                    <p className="text-white text-lg">{props.desc}</p>
                        <div className="bg-white/10 rounded-lg p-4 flex-row flex-wrap items-center justify-start gap-6 w-fit">
                            <p className="text-white font-bold text-lg">{props.tech}</p>
                        </div>
                            <a href={props.link} target="_blank" rel="noreferrer">
                                <button className="bg-gradient-to-br from-violet-700 to-cyan-600 text-white font-bold py-2 px-4 rounded-lg">
                                    Check out
                                </button>
                            </a>
                    </div>
                </div>
    );
}

export default Project;