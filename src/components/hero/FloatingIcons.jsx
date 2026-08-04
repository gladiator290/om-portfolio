import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const FloatingIcons = () => {
  return (
    <>
      {/* React */}

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
        hidden
        sm:flex
        absolute
        top-10
        left-0
        bg-white
        rounded-2xl
        px-4
        py-3
        shadow-[0_15px_40px_rgba(15,23,42,0.08)]
        items-center
        gap-2
        z-10
      "
      >
        <FaReact
          className="text-sky-500"
          size={22}
        />

        <span className="font-medium">
          React
        </span>
      </motion.div>

      {/* Node */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        hidden
        sm:flex
        absolute
        top-28
        right-0
        bg-white
        rounded-2xl
        px-4
        py-3
        shadow-[0_15px_40px_rgba(15,23,42,0.08)]
        items-center
        gap-2
        z-10
      "
      >
        <FaNodeJs
          className="text-green-600"
          size={22}
        />

        <span className="font-medium">
          Node.js
        </span>
      </motion.div>

      {/* MongoDB */}

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
        className="
        hidden
        sm:flex
        absolute
        bottom-24
        left-2
        bg-white
        rounded-2xl
        px-4
        py-3
        shadow-[0_15px_40px_rgba(15,23,42,0.08)]
        items-center
        gap-2
        z-10
      "
      >
        <SiMongodb
          className="text-green-700"
          size={20}
        />

        <span className="font-medium">
          MongoDB
        </span>
      </motion.div>

      {/* Java */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
        }}
        className="
        hidden
        sm:flex
        absolute
        bottom-10
        right-2
        bg-white
        rounded-2xl
        px-4
        py-3
        shadow-[0_15px_40px_rgba(15,23,42,0.08)]
        items-center
        gap-2
        z-10
      "
      >
        <FaJava
          className="text-orange-500"
          size={22}
        />

        <span className="font-medium">
          Java
        </span>
      </motion.div>
    </>
  );
};

export default FloatingIcons;
