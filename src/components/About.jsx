import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-3xl font-bold capitalize mt-20">
        I'm 2024 MCA graduate with strong Knowledge of Web Development.Intrested in building and desgining Web Applications.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Javascript and Mongodb.
        </p>

        <br />

       
      </div>
    </div>
  );
};

export default About;
