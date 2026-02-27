"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "ENut Technologies Pvt Ltd",
    location: "Hyderabad",
    duration: "01/2024 – 05/2024",
    role: "MERN Developer Intern",
    description: [
      "Implemented full CRUD functionalities for SurgyLife.com, enhancing data management efficiency.",
      "Developed dynamic and interactive user interfaces using ReactJS, focusing on performance and user experience.",
      "Engineered responsive web designs ensuring seamless adaptation across a wide range of devices and screen sizes.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          My journey in the tech industry, starting with impactful internships
          and projects.
        </p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap gap-4 text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-accent" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-accent" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-accent self-start">
                <Calendar size={14} />
                <span>{exp.duration}</span>
              </div>
            </div>

            <ul className="space-y-4">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-muted-foreground leading-relaxed"
                >
                  <div className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
