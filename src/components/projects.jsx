import React from "react";
import Project from "./project";

const Projects = () => {
  return (
    <div className="bg-slate-800 py-10 mx-4 rounded-xl mt-6 lg:w-3/5" id="projects">
      <div className="w-fit">
      <h1 className="pl-6 grad-text text-3xl font-bold">Projects</h1>
      </div>
      <div className="flex flex-col items-center justify-start p-10 text-white gap-4">
        <Project
          name="Voting App"
          desc="A full stack web application built with NodeJS, Express,
            PostgreSQL and TailwindCSS
            It provides a free and open-source platform to conduct polls easliy"
          tech="React | Tailwind | Express | Postgres"
          link="https://github.com/kshitijv256/Voting-App"
        />
        <Project
          name="Math Solver"
          desc="User can just click a picture of handwritten math question and get
          the answer from this app."
          tech="Flutter | Flask | Tensorflow | Open-CV"
          link="https://github.com/kshitijv256/Maths-Solver-using-ML"
        />
        <Project
          name="Classify"
          desc="Simpliﬁes managing classes for students and teachers."
          tech="Flutter | Firebase"
          link="https://github.com/kshitijv256/Classify"
        />
        <Project
          name="Todo App"
          desc="A full stack web application built with NodeJS, Express,
            PostgreSQL and TailwindCSS
            It provides a free and open-source platform to keep track of your daily tasks"
          tech="React | Tailwind | Express | Postgres"
          link="https://github.com/kshitijv256/Todo-App-JS"
        />
      </div>
    </div>
  );
};

export default Projects;
