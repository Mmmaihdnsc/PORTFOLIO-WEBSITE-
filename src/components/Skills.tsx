import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', color: 'cyan' },
  { name: 'C++', color: 'purple' },
  { name: 'MySQL', color: 'blue' },
  { name: 'Backend Development', color: 'cyan' },
  { name: 'Arduino', color: 'purple' },
  { name: 'Robotics', color: 'blue' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16 flex-row-reverse">
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-glow-cyan">
              Skills <span className="text-neon-cyan">.02</span>
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-neon-cyan to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const colorClass = 
                skill.color === 'cyan' ? 'border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] hover:bg-neon-cyan/10' :
                skill.color === 'purple' ? 'border-neon-purple text-neon-purple shadow-[0_0_15px_rgba(188,19,254,0.2)] hover:shadow-[0_0_30px_rgba(188,19,254,0.6)] hover:bg-neon-purple/10' :
                'border-neon-blue text-neon-blue shadow-[0_0_15px_rgba(0,102,255,0.2)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] hover:bg-neon-blue/10';

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`glass-panel border rounded-xl p-6 text-center cursor-crosshair transition-all duration-300 ${colorClass}`}
                >
                  <div className="font-mono text-lg font-semibold tracking-wider">
                    {skill.name}
                  </div>
                  
                  {/* Decorative tech lines */}
                  <div className="mt-4 flex justify-between items-center opacity-50">
                    <div className="w-2 h-2 rounded-full bg-current" />
                    <div className="h-[1px] flex-1 bg-current mx-2" />
                    <div className="font-mono text-xs">{(index + 1).toString().padStart(2, '0')}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
