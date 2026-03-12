import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Python Banking App',
    tech: ['Python', 'Tkinter', 'MySQL'],
    description: 'A comprehensive banking application built with Python and Tkinter for the GUI, backed by a MySQL database for secure transaction management and user data storage.',
    github: 'https://github.com/Mmmaihdnsc',
    color: 'cyan'
  },
  {
    title: 'Dungeons Game',
    tech: ['Python', 'Pygame'],
    description: 'A fantasy dungeon crawler game featuring character progression, multiple levels, and engaging adventure gameplay mechanics built entirely in Python.',
    github: 'https://github.com/Mmmaihdnsc/dungeon-riddle-game',
    color: 'purple'
  },
  {
    title: 'Musical Keyboard',
    tech: ['Python'],
    description: 'A virtual musical keyboard application built with Python, allowing users to play musical notes using their computer keyboard.',
    github: 'https://github.com/Mmmaihdnsc/python_musical_keyboard',
    color: 'cyan'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-glow-blue">
              <span className="text-neon-blue">03.</span> Projects
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-neon-blue to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => {
              const themeColor = project.color === 'cyan' ? 'neon-cyan' : 'neon-purple';
              const borderColor = project.color === 'cyan' ? 'border-neon-cyan/30 hover:border-neon-cyan' : 'border-neon-purple/30 hover:border-neon-purple';
              const shadowColor = project.color === 'cyan' ? 'hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]' : 'hover:shadow-[0_0_30px_rgba(188,19,254,0.3)]';
              const textColor = project.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple';

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`glass-panel rounded-2xl p-8 border transition-all duration-500 group relative overflow-hidden ${borderColor} ${shadowColor}`}
                >
                  {/* Scanline effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className={`text-2xl font-bold font-mono ${textColor} group-hover:text-glow-${project.color} transition-all`}>
                        {project.title}
                      </h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 hover:${textColor} transition-colors`}
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    </div>
                    
                    <p className="text-gray-300 mb-8 font-sans leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs font-mono rounded-full border border-${themeColor}/20 bg-${themeColor}/5 ${textColor}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corners */}
                  <div className={`absolute top-0 left-0 w-4 h-4 border-t border-l border-${themeColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className={`absolute bottom-0 right-0 w-4 h-4 border-b border-r border-${themeColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
