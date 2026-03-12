import { motion } from 'framer-motion';
import { Cpu, Terminal, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-glow-purple">
              <span className="text-neon-purple">01.</span> About Me
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-neon-purple to-transparent" />
          </div>

          <div className="holographic rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-start">
              <div className="space-y-6 text-gray-300 font-sans text-lg leading-relaxed">
                <p>
                  Hello! I'm <span className="text-neon-cyan font-semibold">Manoj Kumar</span>, a passionate Computer Science Engineering student with a deep fascination for the intersection of software and hardware.
                </p>
                <p>
                  My journey in tech is driven by an insatiable curiosity for <span className="text-neon-purple">Robotics</span> and <span className="text-neon-blue">Backend Development</span>. I thrive on building robust systems and bringing physical machines to life through code.
                </p>
                <p>
                  Whether I'm writing Python scripts, designing database architectures, or tinkering with Arduino, my goal is always to create efficient, innovative solutions to complex problems.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="glass-panel p-6 rounded-xl border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors group/card">
                  <Terminal className="w-8 h-8 text-neon-cyan mb-4 group-hover/card:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">Backend Dev</h3>
                  <p className="text-sm text-gray-400">Building scalable server-side applications and APIs using Python and MySQL.</p>
                </div>
                
                <div className="glass-panel p-6 rounded-xl border-neon-purple/20 hover:border-neon-purple/50 transition-colors group/card">
                  <Cpu className="w-8 h-8 text-neon-purple mb-4 group-hover/card:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">Robotics</h3>
                  <p className="text-sm text-gray-400">Designing and programming robotic systems, integrating sensors and microcontrollers.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 h-full">
                <div className="glass-panel p-6 rounded-xl border-neon-blue/20 hover:border-neon-blue/50 transition-colors group/card h-full flex flex-col">
                  <GraduationCap className="w-8 h-8 text-neon-blue mb-4 group-hover/card:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-6 font-mono">Education</h3>
                  
                  <div className="space-y-6 flex-1">
                    <div className="relative pl-4 border-l-2 border-neon-cyan/30">
                      <div className="absolute w-2 h-2 bg-neon-cyan rounded-full -left-[5px] top-1.5 shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
                      <h4 className="text-white font-semibold text-sm leading-tight mb-1">B.Tech in Computer Science Engineering</h4>
                      <p className="text-xs text-gray-400 mb-2">SRM Institute of Science and Technology, Trichy</p>
                      <span className="inline-block px-2 py-1 bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-[10px] uppercase tracking-wider rounded-full font-mono">
                        Currently Pursuing
                      </span>
                    </div>
                    
                    <div className="relative pl-4 border-l-2 border-neon-purple/30">
                      <div className="absolute w-2 h-2 bg-neon-purple rounded-full -left-[5px] top-1.5 shadow-[0_0_10px_rgba(188,19,254,0.8)]" />
                      <h4 className="text-white font-semibold text-sm leading-tight mb-1">Higher Secondary Education (11th & 12th)</h4>
                      <p className="text-xs text-gray-400">Stream: Computer Science</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/50 rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-purple/50 rounded-br-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
