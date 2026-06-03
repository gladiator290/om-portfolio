import { motion } from "framer-motion";

import GithubCard from "./GithubCard";
import LeetcodeCard from "./LeetcodeCard";
import LinkedinCard from "./LinkedinCard";

const Profiles = () => {
  return (
    <section
      id="profiles"
      className="
      py-32
      relative
      overflow-hidden
    "
    >

      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-0
        w-96
        h-96
        bg-indigo-200/30
        rounded-full
        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-96
        h-96
        bg-violet-200/30
        rounded-full
        blur-3xl
      "
      />

      <div className="relative">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          <span className="text-indigo-600 font-semibold">
            PROFILES
          </span>

          <h2
            className="
            text-5xl
            lg:text-6xl
            font-bold
            text-slate-900
            mt-4
          "
          >
            Connect With Me
          </h2>

          <p
            className="
            text-slate-600
            mt-5
            max-w-2xl
            mx-auto
            leading-8
          "
          >
            Explore my coding journey,
            open-source contributions,
            problem-solving progress and
            professional presence across
            multiple platforms.
          </p>

        </motion.div>

        {/* Cards */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
          grid
          lg:grid-cols-3
          gap-8
          items-stretch
        "
        >

          <GithubCard />

          <LeetcodeCard />

          <LinkedinCard />

        </motion.div>

      </div>

    </section>
  );
};

export default Profiles;