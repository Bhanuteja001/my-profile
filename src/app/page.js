import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 relative">
      <div className="fixed inset-0 -z-10">
        <Particles
          particleCount={250}
          particleSpread={12}
          speed={0.15}
          particleColors={["#6366f1", "#a855f7", "#ffffff"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={0.8}
          cameraDistance={25}
          disableRotation={false}
        />
      </div>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <div className="space-y-12">
          <ProjectShowcase />
          <Experience />
          <Education />
          <Skills />
          <ContactForm />
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-border mt-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold text-gradient">Portfolio</div>

          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Chiluka Bhanuteja. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Bhanuteja001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Github.
            </a>
            <a
              href="https://www.linkedin.com/in/bhanuteja-chiluka-mern-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
