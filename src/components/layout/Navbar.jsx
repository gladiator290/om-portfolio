import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
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
  px-8
  h-[74px]
  flex
  items-center
  justify-between
  shadow-[0_8px_30px_rgba(15,23,42,0.08)]
"
>

          {/* Logo */}

          <div className="flex items-center gap-3">

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
            "
            >
              OB
            </div>

            <div>

              <h2 className="font-bold text-slate-900">
                Om Bhalla
              </h2>

              <p className="text-xs text-slate-500">
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

            {[
              "Home",
              "About",
              "Projects",
              "Skills",
              "Experience",
              "Contact",
            ].map((item) => (
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

          <a
            href="/resume.pdf"
            download
            className="
            h-12
            px-6
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
            Resume

            <FiDownload size={16} />

          </a>

        </motion.nav>

      </div>

    </header>
  );
};

export default Navbar;  