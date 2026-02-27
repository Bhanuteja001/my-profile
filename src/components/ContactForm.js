"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="glass rounded-[3rem] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-xl mb-12 max-w-md">
            Have a project in mind or just want to chat? I'm always open to new
            opportunities and collaborations.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  Email Me
                </div>
                <div className="text-lg font-bold">
                  bhanuchiluka234@gmail.com
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  Location
                </div>
                <div className="text-lg font-bold">Hyderabad, Telangana</div>
              </div>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold ml-2">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-white/5 border border-border rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold ml-2">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-white/5 border border-border rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold ml-2">Message</label>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              className="bg-white/5 border border-border rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors resize-none"
            ></textarea>
          </div>
          <button className="mt-4 px-10 py-5 rounded-2xl bg-accent text-accent-foreground font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-accent/40 active:scale-95 transition-all">
            Send Message
            <Send size={20} />
          </button>
        </motion.form>

        {/* Decorative mask */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-0" />
      </div>
    </section>
  );
}
