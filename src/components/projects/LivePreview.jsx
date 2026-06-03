import { motion } from "framer-motion";
import votingPreview from "../../assets/projects/voting-preview.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const featuredProjects = [
  {
    title: "Verify",
    description:
      "AI-powered fake news detection platform that helps users verify news articles and analyze credibility using modern web technologies.",
    liveUrl: "https://verify-2db20.web.app/",
    githubUrl: "https://github.com/gladiator290/verifynews",
  },

  {
    title: "Furniture CRM",
    description:
      "Full-stack furniture management system featuring inventory tracking, AI room visualization, customer management and admin dashboard.",
    liveUrl: "https://furniselect-ai.vercel.app/",
    githubUrl: "https://github.com/gladiator290/Furniselect-AI",
  },

  {
    title: "Online Voting System",
    description:
      "Secure online voting platform with voter authentication, candidate management, vote casting and result processing.",
    liveUrl: "https://onlinevotingsystemphp.page.gd/?i=1",
    githubUrl: "https://github.com/gladiator290/online-voting-system",
    image: votingPreview,
  },
];

const LivePreview = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -8,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
          bg-white
          border
          border-slate-200
          rounded-[32px]
          overflow-hidden
          shadow-sm
          hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          transition-all
          h-full
        "
        >
          {/* Browser Bar */}

          <div
            className="
            flex
            items-center
            justify-between
            px-5
            h-12
            border-b
            border-slate-200
          "
          >
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <span
              className="
              text-xs
              font-medium
              text-indigo-600
              bg-indigo-50
              px-2
              py-1
              rounded-full
            "
            >
              Featured
            </span>
          </div>

          {/* Preview */}

          <div className="h-[260px] bg-slate-100">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                src={project.liveUrl}
                title={project.title}
                className="w-full h-full"
              />
            )}
          </div>

          {/* Content */}

          <div className="p-6">
            <h3 className="text-2xl font-bold">{project.title}</h3>

            <p
              className="
              text-slate-600
              mt-3
              leading-7
              min-h-[100px]
            "
            >
              {project.description}
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                bg-gradient-to-r
                from-indigo-600
                to-violet-600
                text-white
                font-medium
              "
              >
                Live Demo
                <FiExternalLink />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                border
                border-slate-200
                font-medium
                hover:bg-slate-50
                transition-all
              "
              >
                GitHub
                <FiGithub />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LivePreview;
