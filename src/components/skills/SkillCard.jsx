import { motion } from "framer-motion";

const SkillCard = ({ icon, title, level }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{ duration: 0.2 }}
      className="
      bg-white
      border
      border-slate-200
      rounded-[22px]
      p-3
      sm:p-5
      shadow-sm
      hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]
      transition-all
      text-center
      relative
      overflow-hidden
    "
    >

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-indigo-50
        to-transparent
        opacity-0
        hover:opacity-100
        transition-all
      "
      />

      <div className="relative">

        <div
          className="
          w-12
          h-12
          sm:w-14
          sm:h-14
          mx-auto
          rounded-2xl
          bg-indigo-50
          flex
          items-center
          justify-center
          text-indigo-600
        "
        >
          {icon}
        </div>

        <h3
          className="
          text-[15px]
          font-semibold
          mt-4
          text-slate-900
        "
        >
          {title}
        </h3>

        <span
          className="
          inline-block
          mt-2
          px-3
          py-1
          rounded-full
          text-xs
          bg-slate-100
          text-slate-600
        "
        >
          {level}
        </span>

      </div>

    </motion.div>
  );
};

export default SkillCard;