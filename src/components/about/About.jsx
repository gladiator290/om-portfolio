
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden"
    >

      {/* Watermark */}



      <div className="text-center mb-20">

        <span className="text-indigo-600 font-semibold">
          ABOUT ME
        </span>

        <h2
          className="
          text-5xl
          lg:text-6xl
          font-bold
          mt-4
        "
        >
          Building Solutions,
          <br />
          Not Just Applications
        </h2>

      </div>

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CARD */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div
            className="
            relative
            overflow-hidden
            rounded-[36px]
            p-10
            bg-gradient-to-br
            from-indigo-600
            to-violet-600
            text-white
            shadow-[0_30px_80px_rgba(99,102,241,0.25)]
          "
          >

            <div
              className="
              absolute
              -top-10
              -right-10
              w-40
              h-40
              rounded-full
              bg-white/10
            "
            />

            <div
              className="
              absolute
              -bottom-16
              -left-16
              w-56
              h-56
              rounded-full
              bg-white/10
            "
            />

            <h3
              className="
              text-3xl
              font-bold
              relative
            "
            >
              Full Stack Developer
            </h3>

            <p
              className="
              mt-4
              text-indigo-100
              relative
            "
            >
              Passionate about building scalable,
              high-performance web applications and
              solving real-world problems through technology.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12 relative">

              <div>
                <h4 className="text-5xl font-bold">
                  250+
                </h4>

                <p className="mt-2 text-indigo-100">
                  DSA Problems
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-bold">
                  10+
                </h4>

                <p className="mt-2 text-indigo-100">
                  Projects Built
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-bold">
                  15+
                </h4>

                <p className="mt-2 text-indigo-100">
                  Technologies
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-bold">
                  2026
                </h4>

                <p className="mt-2 text-indigo-100">
                  Graduate
                </p>
              </div>

            </div>

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p
            className="
            text-lg
            text-slate-600
            leading-8
          "
          >
            I'm Om Bhalla, a Computer Science graduate
            and Full Stack Developer focused on building
            scalable web applications, AI-powered products,
            CRM platforms and modern user experiences.
          </p>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            leading-8
          "
          >
            My expertise includes React, Node.js,
            MongoDB, Java and PHP. I enjoy turning
            complex problems into intuitive and
            efficient digital solutions.
          </p>

          {/* Highlights */}

          <div className="grid sm:grid-cols-3 gap-5 mt-10">

            <div
              className="
              bg-white
              border
              border-slate-200
              rounded-[24px]
              p-6
              text-center
              shadow-sm
            "
            >
              <FaGraduationCap
                size={26}
                className="
                text-indigo-600
                mx-auto
              "
              />

              <h3
                className="
                mt-4
                font-semibold
              "
              >
                Education
              </h3>

              <p
                className="
                mt-2
                text-sm
                text-slate-500
              "
              >
                B.Tech CSE
              </p>

            </div>

            <div
              className="
              bg-white
              border
              border-slate-200
              rounded-[24px]
              p-6
              text-center
              shadow-sm
            "
            >
              <FaLaptopCode
                size={26}
                className="
                text-indigo-600
                mx-auto
              "
              />

              <h3
                className="
                mt-4
                font-semibold
              "
              >
                Development
              </h3>

              <p
                className="
                mt-2
                text-sm
                text-slate-500
              "
              >
                MERN Stack
              </p>

            </div>

            <div
              className="
              bg-white
              border
              border-slate-200
              rounded-[24px]
              p-6
              text-center
              shadow-sm
            "
            >
              <FaBrain
                size={26}
                className="
                text-indigo-600
                mx-auto
              "
              />

              <h3
                className="
                mt-4
                font-semibold
              "
              >
                Problem Solving
              </h3>

              <p
                className="
                mt-2
                text-sm
                text-slate-500
              "
              >
                250+ DSA
              </p>

            </div>

          </div>

          {/* Tech Pills */}

          <div className="flex flex-wrap gap-3 mt-10">

            {[
              "React",
              "Node.js",
              "MongoDB",
              "Java",
              "PHP",
              "Express",
              "Firebase",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="
                px-4
                py-2
                rounded-full
                bg-white
                border
                border-slate-200
                text-sm
                font-medium
              "
              >
                {skill}
              </span>
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;
