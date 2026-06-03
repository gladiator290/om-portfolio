
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const GithubCard = () => {
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
      p-8
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
        from-indigo-600
        to-violet-600
      "
      />

      <div className="flex items-center justify-between">

        <div
          className="
          w-14
          h-14
          rounded-2xl
          bg-slate-100
          flex
          items-center
          justify-center
        "
        >
          <FiGithub
            size={28}
            className="text-slate-900"
          />
        </div>

        <a
          href=""https://github.com/gladiator290""
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
          hover:bg-indigo-50
          hover:text-indigo-600
          transition-all
        "
        >
          <FiExternalLink />
        </a>

      </div>

      <h3 className="text-2xl font-bold mt-6">
        GitHub
      </h3>

      <p className="text-slate-600 mt-4 leading-7">
        Explore my open-source work, full-stack
        applications, development experiments and
        project repositories.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div
          className="
          bg-slate-50
          rounded-2xl
          p-4
          text-center
        "
        >
          <h4 className="font-bold text-2xl">
            20+
          </h4>

          <p className="text-sm text-slate-500 mt-1">
            Repositories
          </p>
        </div>

        <div
          className="
          bg-slate-50
          rounded-2xl
          p-4
          text-center
        "
        >
          <h4 className="font-bold text-2xl">
            Open
          </h4>

          <p className="text-sm text-slate-500 mt-1">
            Source
          </p>
        </div>

      </div>

      <a
        href="https://github.com/gladiator290"
        target="_blank"
        rel="noreferrer"
        className="
        mt-6
        inline-flex
        items-center
        gap-2
        text-indigo-600
        font-medium
      "
      >
        Visit Profile
        <FiExternalLink />
      </a>

    </motion.div>
  );
};

export default GithubCard;