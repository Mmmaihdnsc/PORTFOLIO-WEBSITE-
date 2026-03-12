import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-glow-cyan">
              <span className="text-neon-cyan">04.</span> Contact
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-neon-cyan to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold font-mono text-white mb-6">
                Let's connect &lt;/&gt;
              </h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:manoj2007rr@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group p-4 glass-panel rounded-xl border border-white/5 hover:border-neon-cyan/30"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-mono">manoj2007rr@gmail.com</span>
                </a>
                
                <a
                  href="https://github.com/Mmmaihdnsc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-neon-purple transition-colors group p-4 glass-panel rounded-xl border border-white/5 hover:border-neon-purple/30"
                >
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-mono">github.com/Mmmaihdnsc</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/manoj-kumar-06216636b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group p-4 glass-panel rounded-xl border border-white/5 hover:border-neon-blue/30"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-mono">linkedin.com/in/manoj-kumar</span>
                </a>
              </div>
            </div>

            <form 
              action="mailto:manoj2007rr@gmail.com" 
              method="POST" 
              encType="text/plain"
              className="glass-panel p-8 rounded-2xl border border-neon-cyan/20 space-y-6 relative overflow-hidden group"
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-neon-cyan">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-sans"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-neon-purple">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-neon-blue">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all font-sans resize-none"
                    placeholder="Hello Manoj..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg font-mono font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
