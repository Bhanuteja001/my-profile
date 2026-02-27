"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Be My Valentine",
    description: `An interactive Valentine’s Day web experience built using React (Vite) and Tailwind CSS, featuring playful proposal screens and a spin-the-wheel reward system.
Designed with smooth animations and responsive UI to create a fun and engaging.`,
    tags: ["React.js", "Tailwind", "Framer Motion"],
    web_link: "https://bemyvalentinecode.netlify.app/",
    github_link: "https://github.com/Bhanuteja001/Valintine_Code",
  },
  {
    title: "LuxeTrade",
    description:
      "A premium e-commerce platform for high-end fashion with a focus on seamless user experience and micro-interactions.",
    tags: ["React", "Node.js", "Stripe"],
    web_link: "https://luxe-trade.vercel.app/",
    github_link: "https://github.com/ChilukaBhanuteja/LuxeTrade",
  },

];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          A selection of my recent work where I've combined technical expertise
          with creative problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group glass rounded-3xl p-8 hover:border-accent/40 transition-all duration-300 flex flex-col h-full"
          >
            <div className="mb-6 flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground cursor-pointer transition-colors duration-300">
                <a
                  href={project.web_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground cursor-pointer transition-colors duration-300"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
