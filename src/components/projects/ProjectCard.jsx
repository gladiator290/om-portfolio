import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
      bg-white
      border
      border-slate-200
      rounded-[30px]
      p-7
      shadow-sm
      hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
      transition-all
    "
    >

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="text-slate-600 mt-4 leading-7">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">

        {tech.map((item, index) => (
          <span
            key={index}
            className="
            px-3
            py-2
            rounded-full
            bg-indigo-50
            text-indigo-600
            text-sm
            font-medium
          "
          >
            {item}
          </span>
        ))}

      </div>

      <div className="flex gap-3 mt-7">

        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="
          flex
          items-center
          gap-2
          px-5
          py-3
          rounded-xl
          bg-gradient-to-r
          from-indigo-600
          to-violet-600
          text-white
          font-medium
        "
        >
          Live Demo
          <FiExternalLink />
        </a>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="
          flex
          items-center
          gap-2
          px-5
          py-3
          rounded-xl
          border
          border-slate-200
          font-medium
        "
        >
          GitHub
          <FiGithub />
        </a>

      </div>

    </motion.div>
  );
};

export default ProjectCard;