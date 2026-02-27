// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, Sparkles } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative pt-48 pb-24 px-6 flex flex-col items-center text-center overflow-hidden"
//     >
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-accent"
//       >
//         <Sparkles size={14} />
//         <span>Available for new projects</span>
//       </motion.div>

//       <motion.h1
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl"
//       >
//         I'm <span className="text-gradient">Chiluka Bhanuteja</span>, Crafting
//         Digital Experiences
//       </motion.h1>

//       <motion.p
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.3 }}
//         className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
//       >
//         I'm a Full-Stack Developer specializing in building high-performance,
//         premium web applications that push the boundaries of design and
//         functionality.
//       </motion.p>

//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.4 }}
//         className="flex flex-col sm:flex-row gap-4"
//       >
//        <a href="#projects">
//          <button className="cursor-pointer px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all">
//           View Projects
//           <ArrowRight size={18} />
//         </button>
//        </a>
//         <button className="cursor-pointer px-8 py-4 rounded-full glass font-bold hover:bg-white/5 transition-colors">
//           About Me
//         </button>
//       </motion.div>

//       {/* Decorative Elements */}
//       <motion.div
//         animate={{
//           y: [0, -20, 0],
//           rotate: [0, 10, 0],
//         }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-1/4 -left-12 w-24 h-24 bg-accent/20 rounded-2xl blur-2xl -z-10"
//       />
//       <motion.div
//         animate={{
//           y: [0, 20, 0],
//           rotate: [0, -10, 0],
//         }}
//         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-1/4 -right-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10"
//       />
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-48 pb-24 px-6 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Top Badge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-accent"
      >
        <Sparkles size={14} />
        <span>Available for new projects</span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl"
      >
        I'm <span className="text-gradient">Chiluka Bhanuteja</span>, Crafting
        Digital Experiences
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
      >
        I'm a Full-Stack Developer specializing in building high-performance,
        premium web applications that push the boundaries of design and
        functionality.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a href="#projects">
          <button className="cursor-pointer px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all">
            View Projects
            <ArrowRight size={18} />
          </button>
        </a>

        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer px-8 py-4 rounded-full glass font-bold hover:bg-white/5 transition-colors"
        >
          About Me
        </button>
      </motion.div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <h2 className="text-3xl font-bold mb-4 text-gradient">
                About Me
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                I am Chiluka Bhanuteja, a passionate MERN Stack Developer with
                strong expertise in React.js, Node.js, and modern UI
                animations. I enjoy building interactive, high-performance web
                applications that combine clean design with scalable backend
                architecture.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-12 w-24 h-24 bg-accent/20 rounded-2xl blur-2xl -z-10"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10"
      />
    </section>
  );
}