import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-bg"
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-2 border-r-2 border-neon-cyan opacity-50"
        />
        {/* Inner rotating ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-4 rounded-full border-b-2 border-l-2 border-neon-purple opacity-50"
        />
        
        {/* Center content */}
        <div className="text-center font-mono">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple mb-2">
            {progress}%
          </div>
          <div className="text-xs text-neon-blue tracking-widest uppercase animate-pulse">
            Initializing System
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-64 h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
