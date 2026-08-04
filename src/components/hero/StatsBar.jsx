import { motion } from "framer-motion";

const stats = [
  {
    number: "250+",
    label: "DSA Problems Solved",
  },

  {
    number: "10+",
    label: "Projects Built",
  },

  {
    number: "15+",
    label: "Technologies",
  },

  {
    number: "2026",
    label: "B.Tech Graduate",
  },
];

const StatsBar = () => {
  return (
    <section className="pb-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
        relative
        overflow-hidden
        bg-white/80
        backdrop-blur-xl
        border
        border-slate-200
        rounded-[36px]
        p-5
        sm:p-8
        shadow-[0_20px_60px_rgba(15,23,42,0.06)]
      "
      >

        {/* Background Glow */}

        <div
          className="
          absolute
          -top-20
          -left-20
          w-56
          h-56
          bg-indigo-200/30
          rounded-full
          blur-3xl
        "
        />

        <div
          className="
          absolute
          -bottom-20
          -right-20
          w-56
          h-56
          bg-violet-200/30
          rounded-full
          blur-3xl
        "
        />

        <div
          className="
          relative
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-8
        "
        >

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
              text-center
            "
            >

              <h2
                className="
                text-4xl
                lg:text-5xl
                font-extrabold
                bg-gradient-to-r
                from-indigo-600
                to-violet-600
                bg-clip-text
                text-transparent
              "
              >
                {item.number}
              </h2>

              <p
                className="
                mt-3
                text-slate-600
                font-medium
              "
              >
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
};

export default StatsBar;