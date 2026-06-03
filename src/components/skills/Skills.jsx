import { useState } from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaEye,
  FaCss3Alt,
  FaKey,
  FaCreditCard,
  FaServer,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiVite,
  SiWebpack,
  SiVercel,
  SiJest,
} from "react-icons/si";

const mainSkills = [
  { icon: <FaReact size={24} />, title: "React.js", level: "Advanced" },
  { icon: <SiJavascript size={24} />, title: "JavaScript", level: "Advanced" },
  { icon: <FaNodeJs size={24} />, title: "Node.js", level: "Advanced" },
  { icon: <SiExpress size={24} />, title: "Express.js", level: "Intermediate" },
  { icon: <SiMongodb size={24} />, title: "MongoDB", level: "Intermediate" },
  { icon: <FaJava size={24} />, title: "Java", level: "Advanced" },
  { icon: <FaPhp size={24} />, title: "PHP", level: "Intermediate" },
  {
    icon: <SiTailwindcss size={24} />,
    title: "Tailwind CSS",
    level: "Advanced",
  },
  { icon: <FaGitAlt size={24} />, title: "Git", level: "Intermediate" },
  { icon: <FaGithub size={24} />, title: "GitHub", level: "Intermediate" },
  { icon: <SiFirebase size={24} />, title: "Firebase", level: "Intermediate" },
  { icon: <SiMysql size={24} />, title: "MySQL", level: "Intermediate" },
];
const allSkills = [
  { icon: <FaReact size={24} />, title: "React.js", level: "Advanced" },
  { icon: <SiNextdotjs size={24} />, title: "Next.js", level: "Intermediate" },
  { icon: <SiJavascript size={24} />, title: "JavaScript", level: "Advanced" },
  {
    icon: <SiTypescript size={24} />,
    title: "TypeScript",
    level: "Intermediate",
  },

  { icon: <FaNodeJs size={24} />, title: "Node.js", level: "Advanced" },
  { icon: <SiExpress size={24} />, title: "Express.js", level: "Intermediate" },
  { icon: <SiFastapi size={24} />, title: "FastAPI", level: "Intermediate" },
  { icon: <FaPhp size={24} />, title: "PHP", level: "Intermediate" },

  { icon: <SiMongodb size={24} />, title: "MongoDB", level: "Intermediate" },
  { icon: <SiMysql size={24} />, title: "MySQL", level: "Intermediate" },
  { icon: <SiFirebase size={24} />, title: "Firebase", level: "Intermediate" },

  { icon: <SiRedux size={24} />, title: "Redux", level: "Intermediate" },
  {
    icon: <SiTailwindcss size={24} />,
    title: "Tailwind CSS",
    level: "Advanced",
  },
  { icon: <SiHtml5 size={24} />, title: "HTML5", level: "Advanced" },
  { icon: <FaCss3Alt size={24} />, title: "CSS3", level: "Advanced" },

  { icon: <FaJava size={24} />, title: "Java", level: "Advanced" },
  { icon: <FaPython size={24} />, title: "Python", level: "Intermediate" },

  { icon: <FaGitAlt size={24} />, title: "Git", level: "Intermediate" },
  { icon: <FaGithub size={24} />, title: "GitHub", level: "Intermediate" },

  { icon: <SiVite size={24} />, title: "Vite", level: "Intermediate" },
  { icon: <SiWebpack size={24} />, title: "Webpack", level: "Intermediate" },
  { icon: <SiVercel size={24} />, title: "Vercel", level: "Intermediate" },

  { icon: <SiJest size={24} />, title: "Jest", level: "Intermediate" },

  { icon: <FaKey size={24} />, title: "JWT Auth", level: "Intermediate" },

  {
    icon: <FaCreditCard size={24} />,
    title: "Razorpay",
    level: "Intermediate",
  },

  { icon: <FaServer size={24} />, title: "REST APIs", level: "Advanced" },

  {
    icon: <FaLaptopCode size={24} />,
    title: "Responsive Design",
    level: "Advanced",
  },

  { icon: <FaCode size={24} />, title: "Context API", level: "Intermediate" },

  {
    icon: <FaDatabase size={24} />,
    title: "MongoDB Atlas",
    level: "Intermediate",
  },

  {
    icon: <FaCloud size={24} />,
    title: "Cloud Deployment",
    level: "Intermediate",
  },

  {
    icon: <FaRobot size={24} />,
    title: "AI API Integration",
    level: "Intermediate",
  },

  {
    icon: <FaEye size={24} />,
    title: "Computer Vision",
    level: "Intermediate",
  },
];

const Skills = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="skills" className="py-32">
      <div className="text-center mb-16">
        <span className="text-indigo-600 font-semibold">SKILLS</span>

        <h2 className="text-5xl font-bold text-slate-900 mt-4">
          Skills & Technologies
        </h2>

        <p
          className="
    mt-5
    text-slate-600
    max-w-2xl
    mx-auto
    leading-8
  "
        >
          Technologies, frameworks and tools I use to build scalable, modern and
          production-ready applications.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {mainSkills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            level={skill.level}
          />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowModal(true)}
          className="
    px-7
    py-3
    rounded-2xl
    bg-gradient-to-r
    from-indigo-600
    to-violet-600
    text-white
    font-medium
    shadow-lg
    hover:scale-105
    transition-all
  "
        >
          View All Skills →
        </button>
      </div>

      {showModal && (
        <div
          className="
  fixed
  inset-0
  bg-black/60
  backdrop-blur-sm
  z-50
  flex
  items-center
  justify-center
  p-6
"
        >
          <div
            className="
  bg-white
  rounded-[36px]
  p-8
  w-full
  max-w-6xl
  max-h-[85vh]
  overflow-y-auto
  shadow-[0_30px_80px_rgba(15,23,42,0.12)]
"
          >
            <div className="flex justify-between items-center mb-8">
              <h3
                className="
    text-4xl
    font-bold
    bg-gradient-to-r
    from-indigo-600
    to-violet-600
    bg-clip-text
    text-transparent
  "
              >
                All Skills & Technologies
              </h3>

              <button
                onClick={() => setShowModal(false)}
                className="
    w-10
    h-10
    rounded-xl
    bg-slate-100
    hover:bg-slate-200
    transition-all
    flex
    items-center
    justify-center
  "
              >
                ✕
              </button>
            </div>

            <div className="mb-8">
              <p className="text-slate-600">
                Complete technology stack, tools and frameworks used across my
                projects and development journey.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {allSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  icon={skill.icon}
                  title={skill.title}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
