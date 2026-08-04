import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const navItems = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
  className="
  fixed
  top-0
  left-0
  right-0
  z-50
  bg-[#FAFBFF]
  py-4
"
>

      <div className="w-[96%] max-w-[1800px] mx-auto">

        <motion.nav
  className="
  bg-white
  rounded-[20px]
  px-4
  sm:px-6
  lg:px-8
  h-[74px]
  flex
  items-center
  justify-between
  shadow-[0_8px_30px_rgba(15,23,42,0.08)]
"
>

          {/* Logo */}

          <div className="flex items-center gap-3 min-w-0">

            <div
              className="
              w-11
              h-11
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              shrink-0
            "
            >
              OB
            </div>

            <div className="min-w-0">

              <h2 className="font-bold text-slate-900 truncate">
                Om Bhalla
              </h2>

              <p className="text-xs text-slate-500 truncate">
                Full Stack Developer
              </p>

            </div>

          </div>

          {/* Menu */}

          <ul
            className="
            hidden
            lg:flex
            items-center
            gap-8
          "
          >

            {navItems.map((item) => (
              <li key={item}>

                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                  text-[15px]
                  font-medium
                  text-slate-600
                  hover:text-indigo-600
                  transition-all
                "
                >
                  {item}
                </a>

              </li>
            ))}

          </ul>

          {/* Right */}

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">

            <a
              href="/resume.pdf"
              download
              className="
              h-12
              px-4
              sm:px-6
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              text-white
              flex
              items-center
              gap-2
              font-medium
              shadow-lg
              hover:scale-105
              transition-all
            "
            >
              <span className="hidden sm:inline">Resume</span>

              <FiDownload size={16} />

            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="
              lg:hidden
              w-12
              h-12
              rounded-xl
              border
              border-slate-200
              flex
              items-center
              justify-center
              text-slate-900
            "
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

          </div>

        </motion.nav>

        {/* Mobile Menu */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="
              lg:hidden
              mt-3
              bg-white
              rounded-[20px]
              shadow-[0_8px_30px_rgba(15,23,42,0.08)]
              overflow-hidden
            "
            >
              <ul className="flex flex-col p-2">

                {navItems.map((item) => (
                  <li key={item}>

                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMobileOpen(false)}
                      className="
                      block
                      px-4
                      py-3
                      rounded-2xl
                      text-[15px]
                      font-medium
                      text-slate-600
                      hover:text-indigo-600
                      hover:bg-slate-50
                      transition-all
                    "
                    >
                      {item}
                    </a>

                  </li>
                ))}

              </ul>

            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </header>
  );
};

export default Navbar;
