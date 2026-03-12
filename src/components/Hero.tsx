import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-neon-cyan font-mono text-xl md:text-2xl mb-4 tracking-widest uppercase">
            &lt;System Initialization /&gt;
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans mb-6 text-glow-cyan tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Manoj Kumar</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg md:text-xl font-mono text-gray-300 mb-12">
            <span className="px-4 py-2 glass-panel rounded-full border-neon-cyan/30 text-neon-cyan">
              Computer Science Engineering Student
            </span>
            <span className="hidden md:block text-neon-purple">•</span>
            <span className="px-4 py-2 glass-panel rounded-full border-neon-purple/30 text-neon-purple">
              Python Developer
            </span>
            <span className="hidden md:block text-neon-blue">•</span>
            <span className="px-4 py-2 glass-panel rounded-full border-neon-blue/30 text-neon-blue">
              Robotics Enthusiast
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="https://github.com/Mmmaihdnsc"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-dark-surface border border-neon-cyan/50 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]"
          >
            <div className="absolute inset-0 bg-neon-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <div className="relative flex items-center gap-3 font-mono text-neon-cyan">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/manoj-kumar-06216636b"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-dark-surface border border-neon-blue/50 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]"
          >
            <div className="absolute inset-0 bg-neon-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <div className="relative flex items-center gap-3 font-mono text-neon-blue">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </div>
          </a>

          <a
            href="mailto:manoj2007rr@gmail.com"
            className="group relative px-8 py-4 bg-dark-surface border border-neon-purple/50 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(188,19,254,0.4)]"
          >
            <div className="absolute inset-0 bg-neon-purple/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <div className="relative flex items-center gap-3 font-mono text-neon-purple">
              <Mail className="w-5 h-5" />
              <span>Mail</span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neon-cyan/50 font-mono text-sm"
      >
        <span>SCROLL_DOWN</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan/50 to-transparent" />
      </motion.div>
    </section>
  );
}
