"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    institution: "Aurora’s PG College (MCA) Ramanthapur, Hyderabad",
    degree: "MCA - Computer Applications",
    duration: "Oct 2023",
    grade: "CGPA: 7.1",
  },
  {
    institution: "Nalanda Degree College, Jagtial",
    degree: "Bachelor’s Degree – BSc MStcs",
    duration: "June 2021",
    grade: "CGPA: 8.86",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Educational <span className="text-gradient">Background</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          My academic journey and qualifications that built my foundation in
          computer science.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 hover:border-accent/30 transition-all duration-300 relative group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <GraduationCap size={24} />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-xs font-semibold text-accent">
                <Calendar size={12} />
                <span>{edu.duration}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
              {edu.degree}
            </h3>
            <p className="text-muted-foreground mb-6 line-clamp-2">
              {edu.institution}
            </p>

            <div className="flex items-center gap-2 text-foreground font-bold italic">
              <Award size={18} className="text-accent" />
              <span>{edu.grade}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
