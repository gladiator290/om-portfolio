import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="py-12">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1400px] mx-auto"
      >

        <div
          className="
          relative
          overflow-hidden
          bg-white
          border
          border-slate-200
          rounded-[36px]
          p-10
          shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        "
        >

          {/* Background Glow */}

          <div
            className="
            absolute
            top-0
            right-0
            w-72
            h-72
            bg-indigo-100
            rounded-full
            blur-3xl
            opacity-40
          "
          />

          <div className="relative">

            {/* Top Section */}

            <div
              className="
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-8
            "
            >

              <div>

                <h3
                  className="
                  text-3xl
                  font-bold
                  bg-gradient-to-r
                  from-indigo-600
                  to-violet-600
                  bg-clip-text
                  text-transparent
                "
                >
                  Om Bhalla
                </h3>

                <p
                  className="
                  text-slate-600
                  mt-3
                  max-w-md
                  leading-7
                "
                >
                  Full Stack Developer passionate
                  about building scalable web
                  applications, AI-powered products
                  and modern digital experiences.
                </p>

              </div>

              {/* Socials */}

              <div className="flex items-center gap-4">

                <a
                  href=""https://github.com/gladiator290""
                  target="_blank"
                  rel="noreferrer"
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-slate-100
                  flex
                  items-center
                  justify-center
                  hover:bg-indigo-50
                  hover:text-indigo-600
                  transition-all
                "
                >
                  <FiGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/om-bhalla/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-slate-100
                  flex
                  items-center
                  justify-center
                  hover:bg-indigo-50
                  hover:text-indigo-600
                  transition-all
                "
                >
                  <FiLinkedin size={20} />
                </a>

                <a
                  href="https://leetcode.com/u/ombhalla29/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-slate-100
                  flex
                  items-center
                  justify-center
                  hover:bg-indigo-50
                  hover:text-indigo-600
                  transition-all
                "
                >
                  <SiLeetcode size={20} />
                </a>

                <a
                  href="mailto:ombhalla29@gmail.com"
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-slate-100
                  flex
                  items-center
                  justify-center
                  hover:bg-indigo-50
                  hover:text-indigo-600
                  transition-all
                "
                >
                  <FiMail size={20} />
                </a>

              </div>

            </div>

            {/* Middle */}

            <div
              className="
              border-t
              border-slate-200
              mt-8
              pt-8
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-5
            "
            >

              <div className="flex gap-6 text-slate-600">

                <a href="#home" className="hover:text-indigo-600">
                  Home
                </a>

                <a href="#about" className="hover:text-indigo-600">
                  About
                </a>

                <a href="#projects" className="hover:text-indigo-600">
                  Projects
                </a>

                <a href="#contact" className="hover:text-indigo-600">
                  Contact
                </a>

              </div>

              <a
                href="#home"
                className="
                flex
                items-center
                gap-2
                text-indigo-600
                font-medium
              "
              >
                Back To Top
                <FiArrowUp />
              </a>

            </div>

            {/* Bottom */}

            <div
              className="
              border-t
              border-slate-200
              mt-8
              pt-6
              text-center
              text-slate-500
            "
            >
              © 2026 Om Bhalla.
            </div>

          </div>

        </div>

      </motion.div>

    </footer>
  );
};

export default Footer;