import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, User, Code2, Briefcase, Mail } from 'lucide-react';

const menuItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Code2, label: 'Skills' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export default function HologramFidget() {
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  // Don't render until we have window size to set constraints properly
  if (windowSize.width === 0) return null;

  return (
    <motion.div
      className="fixed z-[100] bottom-10 right-10 flex flex-col items-center"
      drag
      dragConstraints={{ 
        left: -windowSize.width + 120, 
        right: 20, 
        top: -windowSize.height + 120, 
        bottom: 20 
      }}
      dragElastic={0.2}
      dragMomentum={true}
      onDragStart={() => {
        setIsDragging(true);
        setHasInteracted(true);
        setIsOpen(false); // Close menu when dragging
      }}
      onDragEnd={() => setIsDragging(false)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        opacity: { duration: 1, delay: 3 },
        scale: { duration: 1, delay: 3 }
      }}
    >
      {/* Hologram Menu Items */}
      <motion.div 
        className="flex flex-col gap-3 mb-4 items-center"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: "auto", transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          closed: { opacity: 0, pointerEvents: "none", transition: { staggerChildren: 0.05, staggerDirection: -1 } }
        }}
      >
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            onPointerDownCapture={(e) => e.stopPropagation()} // Prevent dragging when clicking buttons
            className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-dark-bg/80 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20 hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] backdrop-blur-md transition-colors"
            variants={{
              open: { opacity: 1, y: 0, scale: 1 },
              closed: { opacity: 0, y: 20, scale: 0.5 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <item.icon className="w-5 h-5" />
            {/* Tooltip for menu item */}
            <span className="absolute right-full mr-4 px-2 py-1 rounded bg-dark-bg/90 border border-neon-cyan/30 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* The Fidget Orb */}
      <motion.div
        className="relative w-24 h-24 flex items-center justify-center cursor-grab active:cursor-grabbing"
        onTap={() => {
          setHasInteracted(true);
          setIsOpen(!isOpen);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: isDragging || isOpen ? 0 : [0, -15, 0] }}
        transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      >
        {/* Tooltip */}
        {!hasInteracted && (
          <motion.div
            className="absolute -top-8 whitespace-nowrap text-xs font-mono text-neon-cyan bg-dark-bg/80 px-2 py-1 rounded border border-neon-cyan/30 pointer-events-none"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click or Drag!
          </motion.div>
        )}

        {/* Core Glow */}
        <motion.div
          className={`absolute w-6 h-6 rounded-full blur-[4px] transition-colors duration-300 ${isDragging ? 'bg-neon-purple' : isOpen ? 'bg-white' : 'bg-neon-cyan'}`}
          animate={{
            boxShadow: isDragging
              ? "0 0 40px 20px rgba(188, 19, 254, 0.6)"
              : isOpen
              ? "0 0 40px 20px rgba(255, 255, 255, 0.6)"
              : "0 0 40px 20px rgba(0, 243, 255, 0.6)"
          }}
        />

        {/* Inner Ring */}
        <motion.div
          className={`absolute w-12 h-12 rounded-full border-2 border-t-transparent border-b-transparent transition-colors duration-300 ${isDragging ? 'border-neon-purple' : isOpen ? 'border-white' : 'border-neon-cyan'}`}
          animate={{ rotateX: 360, rotateY: 180, rotateZ: 360 }}
          transition={{ duration: isOpen ? 2 : 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Middle Ring */}
        <motion.div
          className={`absolute w-16 h-16 rounded-full border-2 border-l-transparent border-r-transparent transition-colors duration-300 ${isDragging ? 'border-pink-500' : isOpen ? 'border-gray-300' : 'border-blue-500'}`}
          animate={{ rotateX: -360, rotateY: 360, rotateZ: -180 }}
          transition={{ duration: isOpen ? 3 : 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Outer Ring */}
        <motion.div
          className={`absolute w-20 h-20 rounded-full border border-dashed transition-colors duration-300 ${isDragging ? 'border-neon-purple' : isOpen ? 'border-white' : 'border-neon-cyan'} opacity-50`}
          animate={{ rotateZ: 360 }}
          transition={{ duration: isOpen ? 4 : 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Particles / Dots */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isDragging ? 'bg-pink-400' : isOpen ? 'bg-white' : 'bg-white'}`}
            style={{
              top: '50%',
              left: '50%',
              marginTop: '-3px',
              marginLeft: '-3px',
            }}
            animate={{
              x: [0, Math.cos(i * Math.PI / 2) * (isOpen ? 60 : 45), 0],
              y: [0, Math.sin(i * Math.PI / 2) * (isOpen ? 60 : 45), 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: isOpen ? 1.5 : 3,
              repeat: Infinity,
              delay: i * (isOpen ? 0.25 : 0.5),
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
