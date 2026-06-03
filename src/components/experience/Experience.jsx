import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

const experiences = [
  {
    title: "Frontend Developer Intern",
    organization: "Digital Ad In",
    period: "Jul 2025 - Jan 2026",
    description:
      "Built responsive web applications, optimized frontend performance and developed modern user interfaces using React and JavaScript.",
    icon: <FaBriefcase />,
  },

  {
    title: "Frontend Development Intern",
    organization: "InternPe",
    period: "May 2025 - Jun 2025",
    description:
      "Developed reusable frontend components, collaborated in agile workflows and delivered bug-free features across multiple projects.",
    icon: <FaBriefcase />,
  },

  {
    title: "Full Stack Developer",
    organization: "Self-Initiated Projects",
    period: "2025 - Present",
    description:
      "Designed and developed full-stack applications including FurniSelect AI, Verify and Online Voting System using React, Node.js, MongoDB, PHP and cloud deployment platforms.",
    icon: <FaBriefcase />,
  },

  {
    title: "Bachelor of Technology (CSE)",
    organization: "AKTU",
    period: "2022 - 2026",
    description:
      "Completed Computer Science Engineering while building real-world projects, participating in hackathons and strengthening problem-solving skills.",
    icon: <FaGraduationCap />,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 relative"
    >

      <div className="text-center mb-20">

        <span className="text-indigo-600 font-semibold">
          EXPERIENCE
        </span>

        <h2
          className="
          text-5xl
          lg:text-6xl
          font-bold
          mt-4
        "
        >
          Journey & Experience
        </h2>

        <p
          className="
          mt-5
          text-slate-600
          max-w-2xl
          mx-auto
          leading-8
        "
        >
          My professional experience, internships
          and academic journey that shaped my
          development career.
        </p>

      </div>

      <div className="max-w-5xl mx-auto relative">

        {/* Timeline Line */}

        <div
          className="
          absolute
          left-6
          top-0
          bottom-0
          w-[2px]
          bg-gradient-to-b
          from-indigo-600
          to-violet-600
        "
        />

        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="
            relative
            pl-20
            mb-10
          "
          >

            {/* Timeline Dot */}

            <div
              className="
              absolute
              left-0
              top-6
              w-12
              h-12
              rounded-full
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              text-white
              flex
              items-center
              justify-center
              shadow-lg
            "
            >
              {item.icon}
            </div>

            {/* Card */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="
              bg-white
              border
              border-slate-200
              rounded-[28px]
              p-8
              shadow-sm
              hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              transition-all
            "
            >

              <span
                className="
                inline-block
                px-4
                py-2
                rounded-full
                bg-indigo-50
                text-indigo-600
                text-sm
                font-medium
              "
              >
                {item.period}
              </span>

              <h3
                className="
                text-2xl
                font-bold
                mt-5
              "
              >
                {item.title}
              </h3>

              <p
                className="
                text-indigo-600
                font-medium
                mt-2
              "
              >
                {item.organization}
              </p>

              <p
                className="
                text-slate-600
                mt-4
                leading-7
              "
              >
                {item.description}
              </p>

            </motion.div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Experience;