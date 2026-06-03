import LivePreview from "./LivePreview";
import ProjectCard from "./ProjectCard";

const otherProjects = [
  {
    title: "Elané – Style That Speaks",
    description:
      "Responsive fashion e-commerce website with modern UI and seamless shopping experience.",
    tech: ["Java", "DSA"],
    liveUrl: "https://gladiator290.github.io/Elane/",
    githubUrl: "https://github.com/gladiator290/Elane",
  },

  {
    title: "Portfolio Website",
    description:
      "Modern SaaS inspired personal portfolio website. ",
    tech: ["React", "Tailwind"],
    liveUrl: "https://om-portfolio-pearl.vercel.app/",
    githubUrl: "https://github.com/gladiator290/om-portfolio",
  },
  
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-32">

      <div className="text-center mb-20">

  <span className="text-indigo-600 font-semibold">
    PROJECTS
  </span>

  <h2 className="text-5xl font-bold text-slate-900 mt-4">
    Featured Projects
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
    Real-world applications showcasing full-stack
    development, AI integration and modern web
    technologies.
  </p>

</div>

      <LivePreview />

      <div className="mt-20">

       
        <div className="grid lg:grid-cols-3 gap-8">

          {otherProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;