"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Menu } from "lucide-react";

export default function Navbar() {
  const navItems = [
    "Home",
    "Projects",
    "Experience",
    "Education",
    "Skills",
    "Contact",
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <nav className="glass flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full">
        <div className="text-xl font-bold text-gradient">Portfolio</div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 border-r border-border pr-4 mr-2">
            <a
              href="https://github.com/Bhanuteja001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/bhanuteja-chiluka-mern-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <button className="md:hidden text-foreground">
            <Menu size={24} />
          </button>
          <a
            href="#contact"
            className="hidden sm:block px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
