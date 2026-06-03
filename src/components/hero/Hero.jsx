import { motion } from "framer-motion";
import profile from "../../assets/profile.png";
import FloatingIcons from "./FloatingIcons";

const Hero = () => {
  return (
    <section
      id="home"
      className="
  pt-28
  pb-16
  relative
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

      <div
        className="
  relative
  w-full
  grid
  lg:grid-cols-2
  gap-16
  items-center
"
      >
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-emerald-50
            text-emerald-600
            text-sm
            font-medium
            mb-8
          "
          >
            🟢 Available for Full Stack Roles
          </div>

          <p
            className="
            text-lg
            font-medium
            text-slate-600
            mb-4
          "
          >
            Hi, I'm Om Bhalla
          </p>

          <h1
            className="
            text-5xl
            lg:text-7xl
            font-extrabold
            leading-[0.95]
          "
          >
            <span
              className="
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              bg-clip-text
              text-transparent
            "
            >
              Full Stack
            </span>

            <br />

            <span className="text-slate-900">Developer</span>
          </h1>

          <p
            className="
            mt-8
            text-lg
            text-slate-600
            leading-8
            max-w-xl
          "
          >
            Building scalable web applications, AI-powered products and modern
            digital experiences using React, Node.js, MongoDB, PHP and Java.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="
              h-14
              px-8
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              text-white
              font-medium
              flex
              items-center
              shadow-lg
              hover:scale-105
              transition-all
            "
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="
              h-14
              px-8
              rounded-2xl
              border
              border-slate-200
              bg-white
              font-medium
              flex
              items-center
              hover:shadow-lg
              transition-all
            "
            >
              Download Resume
            </a>
          </div>

          {/* Tech Pills */}

          <div className="flex flex-wrap gap-3 mt-10">
            <span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium">
              React
            </span>

            <span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium">
              Node.js
            </span>

            <span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium">
              MongoDB
            </span>

            <span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium">
              PHP
            </span>

            <span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium">
              Java
            </span>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
  relative
  flex
  justify-center
  px-10
"
        >
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-indigo-500/20
            to-violet-500/20
            blur-3xl
            rounded-full
          "
          />

          <div
            className="
            relative
            w-[400px]
            h-[470px]
            rounded-[40px]
            overflow-hidden
            bg-white
            border
            border-slate-200
            shadow-[0_25px_80px_rgba(15,23,42,0.12)]
          "
          >
            <img
              src={profile}
              alt="Om Bhalla"
              className="
              w-full
              h-full
              object-cover
            "
            />
          </div>

          <FloatingIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
