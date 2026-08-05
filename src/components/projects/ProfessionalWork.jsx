import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import ProjectPreview from "./ProjectPreview";

const professionalWork = [
  {
    title: "DigitalAdIn Website",
    badge: "Company Website",
    description:
      "Developed and worked on DigitalAdIn's production website, delivering a responsive and modern web experience for the company's digital presence.",
    iframeUrl: "https://digitaladin.com/",
    previewType: "desktop",
    links: [
      {
        label: "Visit Website",
        href: "https://digitaladin.com/",
        variant: "primary",
      },
    ],
  },

  {
    title: "DigitalAdIn CRM",
    badge: "Internal Business Platform",
    description:
      "A production business operations platform built for DigitalAdIn, combining lead management, communication, automation and internal workflow capabilities.",
    iframeUrl: "https://crm.digitaladin.in/",
    previewType: "desktop",
    features: [
      "Lead Management",
      "Payments",
      "WhatsApp",
      "IMAP / SMTP Email",
      "n8n Automation",
      "Workflow Automation",
      "AI Image Generation",
      "Social Publishing",
      "Tasks & Meetings",
      "Employee Access",
    ],
    links: [
      {
        label: "View CRM Login",
        href: "https://crm.digitaladin.in/",
        variant: "primary",
      },
    ],
  },

  {
    title: "JP Legal CRM",
    badge: "Client CRM · Legal Services",
    description:
      "Client project developed at DigitalAdIn for JP Legals, focused on lead management, lead analytics and WhatsApp-integrated communication workflows.",
    iframeUrl: "https://jpcrm.digitaladin.in/",
    previewType: "desktop",
    features: ["Lead Management", "Lead Analytics", "WhatsApp Integration"],
    links: [
      {
        label: "View CRM Login",
        href: "https://jpcrm.digitaladin.in/",
        variant: "primary",
      },
      {
        label: "Visit Client Website",
        href: "https://jplegals.in/",
        variant: "secondary",
      },
    ],
  },

  {
    title: "MOF Law Website",
    badge: "Client Website · Legal Services",
    description:
      "Client landing page developed at DigitalAdIn for MOF Law, delivering a responsive and professional web presence for the legal services firm.",
    iframeUrl: "https://moflaw.in/",
    previewType: "desktop",
    links: [
      {
        label: "Visit Website",
        href: "https://moflaw.in/",
        variant: "primary",
      },
    ],
  },
];

const ProfessionalWork = () => {
  return (
    <div className="mt-24">
      <div className="text-center mb-14">
        <span className="text-indigo-600 font-semibold">
          PROFESSIONAL WORK
        </span>

        <h3
          className="
          text-3xl
          lg:text-4xl
          font-bold
          text-slate-900
          mt-4
        "
        >
          DigitalAdIn — Production &amp; Client Work
        </h3>

        <p
          className="
          mt-5
          text-slate-600
          max-w-2xl
          mx-auto
          leading-8
        "
        >
          Selected production and client-facing work developed while working
          with DigitalAdIn.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {professionalWork.map((project, index) => (
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
            flex
            flex-col
          "
          >
            {/* Browser Bar */}

            <div
              className="
              flex
              items-center
              justify-between
              gap-3
              px-5
              h-12
              border-b
              border-slate-200
            "
            >
              <div className="flex gap-2 shrink-0">
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
                text-right
                min-w-0
                truncate
              "
              >
                {project.badge}
              </span>
            </div>

            {/* Preview */}

            <div className="h-[260px] bg-slate-100">
              <ProjectPreview
                liveUrl={project.iframeUrl}
                title={project.title}
                previewType={project.previewType}
              />
            </div>

            {/* Content */}

            <div className="p-5 sm:p-6 flex flex-col grow">
              <h4 className="text-2xl font-bold">{project.title}</h4>

              <p
                className="
                text-slate-600
                mt-3
                leading-7
              "
              >
                {project.description}
              </p>

              {project.features && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="
                      px-3
                      py-2
                      rounded-full
                      bg-indigo-50
                      text-indigo-600
                      text-sm
                      font-medium
                    "
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3 mt-6">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      link.variant === "primary"
                        ? "flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium"
                        : "flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 font-medium hover:bg-slate-50 transition-all"
                    }
                  >
                    {link.label}
                    <FiExternalLink />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalWork;
