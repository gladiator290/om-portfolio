import { motion } from "framer-motion";
import { FiLinkedin, FiExternalLink } from "react-icons/fi";

const LinkedinCard = () => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      className="
      relative
      overflow-hidden
      bg-white
      border
      border-slate-200
      rounded-[32px]
      p-6
      sm:p-8
      shadow-sm
      hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
      transition-all
    "
    >

      {/* Top Gradient */}

      <div
        className="
        absolute
        top-0
        left-0
        right-0
        h-1
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
      "
      />

      <div className="flex items-center justify-between">

        <div
          className="
          w-14
          h-14
          rounded-2xl
          bg-blue-50
          flex
          items-center
          justify-center
        "
        >
          <FiLinkedin
            size={28}
            className="text-[#0A66C2]"
          />
        </div>

        <a
          href="https://www.linkedin.com/in/om-bhalla/"
          target="_blank"
          rel="noreferrer"
          className="
          w-10
          h-10
          rounded-xl
          bg-slate-100
          flex
          items-center
          justify-center
          hover:bg-blue-50
          hover:text-blue-600
          transition-all
        "
        >
          <FiExternalLink />
        </a>

      </div>

      <h3 className="text-2xl font-bold mt-6">
        LinkedIn
      </h3>

      <p className="text-slate-600 mt-4 leading-7">
        Professional profile showcasing
        internships, projects, technical skills
        and career growth journey.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div
          className="
          bg-blue-50
          rounded-2xl
          p-4
          text-center
        "
        >
          <h4 className="font-bold text-2xl">
            2026
          </h4>

          <p className="text-sm text-slate-500 mt-1">
            Graduate
          </p>
        </div>

        <div
          className="
          bg-blue-50
          rounded-2xl
          p-4
          text-center
        "
        >
          <h4 className="font-bold text-lg">
            Full Stack
          </h4>

          <p className="text-sm text-slate-500 mt-1">
            Developer
          </p>
        </div>

      </div>

      <a
        href="https://www.linkedin.com/in/om-bhalla/"
        target="_blank"
        rel="noreferrer"
        className="
        mt-6
        inline-flex
        items-center
        gap-2
        text-blue-600
        font-medium
      "
      >
        Visit Profile
        <FiExternalLink />
      </a>

    </motion.div>
  );
};

export default LinkedinCard;
