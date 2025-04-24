import React, { useState } from "react";
import image from "../assets/about.png";
import { NavLink } from "react-router-dom";

const AboutMe = () => {
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);
  const [refference, setRefference] = useState(false);
  const [isActive, setIsActive] = useState("education");

  const handleClick = (tab) => {
    setIsActive(tab);
    if (tab === "education") displayEducationHandler();
    if (tab === "skills") displaySkillsHandler();
    if (tab === "experience") displayExperienceHandler();
    if (tab === "refference") displayRefferenceHandler();
  };

  const displayEducationHandler = () => {
    setEducation(true);
    setSkills(false);
    setExperience(false);
    setRefference(false);
  };

  const displaySkillsHandler = () => {
    setSkills(true);
    setEducation(false);
    setExperience(false);
    setRefference(false);
  };
  const displayExperienceHandler = () => {
    setExperience(true);
    setSkills(false);
    setEducation(false);
    setRefference(false);
  };
  const displayRefferenceHandler = () => {
    setExperience(false);
    setSkills(false);
    setEducation(false);
    setRefference(true);
  };

  return (
    <div className="flex justify-center  mt-8 pr-20  h-screen snap-start">
      <div className="mr-20 ">
        <h1 className="text-[50px] font-bold pb-8 text-gray-600">About me</h1>
        <div className="bg-purple-200 h-84 w-64 rounded-lg">
          <img src={image} alt="" className="h-92 w-64 mr-12 pb-8 rounded-lg" />
        </div>
      </div>

      <div className=" w-160 ">
        <p className=" text-sm text-gray-600 mt-4 ">
          I'm a passionate front-end developer with a strong foundation in HTML,
          CSS, JavaScript and React, recently completing my front-end
          development course. I enjoy creating responsive, user-friendly
          websites and am constantly exploring other mordern frameworks like
          Angular and to enhance my skills. With a keen eye for design and a
          love for clean, efficient code, I aim to build engaging digital
          experiences that make an impact. When I'm not coding, you'll find me
          experimenting with new web technologies or contributing to open-source
          projects. Let's connect and build something amazing together!
        </p>

        <div className="text-gray-600 mt-2 mb-2 font-bold text-sm">
          <span
            className={`mr-8 cursor-pointer  ${
              isActive === "education"
                ? "border-b-2 border-purple-400 hover:rounded-xs text-purple-500"
                : ""
            }`}
            onClick={() => handleClick("education")}
          >
            EDUCATION
          </span>
          <span
            className={`mr-8 cursor-pointer  ${
              isActive === "skills"
                ? "border-b-2 border-purple-400 mb-2 text-purple-500"
                : ""
            }`}
            onClick={() => handleClick("skills")}
          >
            SKILLS
          </span>

          <span
            className={`mr-8 cursor-pointer  ${
              isActive === "experience"
                ? "border-b-2 border-purple-400 text-purple-500"
                : ""
            }`}
            onClick={() => handleClick("experience")}
          >
            EXPERIENCE
          </span>

          <span
            className={`mr-8 cursor-pointer  ${
              isActive === "refference"
                ? "border-b-2 border-purple-400 text-purple-500"
                : ""
            }`}
            onClick={() => handleClick("refference")}
          >
            REFFERENCE
          </span>
        </div>

        {education && (
          <div className="education ">
            <h5 className="text-sm font-bold text-indigo-600">
              Zaio Institute of Technology{" "}
            </h5>
            <p className="text-sm text-gray-600">Front-End Engineer</p>
            <h5 className="text-sm font-bold pt-2 text-indigo-600">
              Univeristy of London GoldSmiths
            </h5>
            <p className="text-sm text-gray-600">Web Design</p>
          </div>
        )}

        {skills && (
          <div className="">
            <h5 className="text-sm  font-bold text-indigo-600">
              Technical skills and tools
            </h5>
            <h5 className="text-sm font-bold text-gray-600">
              HTML5, CSS3, JavaScript
            </h5>
            <h5 className="text-sm font-bold text-gray-600">React</h5>
            <h5 className="text-sm font-bold text-gray-600">Tailwind</h5>
            <h5 className="text-sm font-bold text-gray-600">TypeScript</h5>
            <h5 className="text-sm font-bold text-gray-600">
              Responsive Design
            </h5>
            <h5 className="text-sm font-bold text-gray-600">Git, GitHub</h5>

            <h5 className="text-sm pt-2 font-bold text-indigo-600">
              Soft skills
            </h5>
            <h5 className="text-sm font-bold text-gray-600">Problem-solving</h5>
            <h5 className="text-sm font-bold text-gray-600">Communication </h5>
            <h5 className="text-sm font-bold text-gray-600">
              Attention to detail
            </h5>
            <h5 className="text-sm font-bold text-gray-600">collaboration</h5>
          </div>
        )}

        {refference && (
          <div>
            <p className="text-md text-indigo-600">
              Akhil Boddu (Zaio Instructor) :<br />
              <span className="font-bold text-lg text-gray-600 ">akhil4mara@gmail.com</span>
            </p>
            <p className="text-md text-indigo-600 mt-4">
              Ulli Haw (Prev Employer) :<br />
              <span className="font-bold text-lg text-gray-600">ulli@westwoods.co.za</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
