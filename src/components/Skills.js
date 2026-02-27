"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  ShieldCheck,
  Zap,
  Globe,
  Cpu,
  Database,
  Layout,
} from "lucide-react";

const skills = [
  {
    name: "Languages",
    icon: <Code2 size={20} />,
    active: "bg-yellow-500",
    items: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    name: "Libraries & Frameworks",
    icon: <Globe size={20} />,
    active: "bg-blue-500",
    items: [
      "React JS",
      "Node JS",
      "Express JS",
      "RESTful APIs",
      "Bootstrap",
      "TailwindCSS",
    ],
  },
  {
    name: "Technologies & Tools",
    icon: <Database size={20} />,
    active: "bg-green-500",
    items: ["MongoDB", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          A comprehensive overview of the tools and technologies I use to bring
          ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div
              className={`w-12 h-12 rounded-2xl ${skill.active} bg-opacity-10 flex items-center justify-center text-foreground mb-6 shadow-2xl shadow-current`}
            >
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
            <ul className="space-y-3">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <Zap size={14} className="text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
