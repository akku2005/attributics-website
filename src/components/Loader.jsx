import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-purple-900 to-blue-900 flex flex-col items-center justify-center z-50">
      <div className="w-full max-w-md px-4">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Attributics
              </motion.span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="h-1 bg-purple-400 mt-2"
            />
          </div>
        </motion.div>
        
        {/* Loading Progress */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-400 to-blue-500"
            initial={{ width: '5%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>
        
        {/* Loading Text Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-1">
            {['L', 'o', 'a', 'd', 'i', 'n', 'g'].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
                className="text-white font-medium text-lg md:text-xl"
              >
                {letter}
              </motion.span>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="flex space-x-1"
            >
              {['.', '.', '.'].map((dot, index) => (
                <span key={index} className="text-white font-medium text-lg md:text-xl">{dot}</span>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        {/* Abstract Wave Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <motion.path 
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.3, pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              fill="rgba(139, 92, 246, 0.3)" 
              d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,144C672,128,768,128,864,144C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <motion.path 
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.2, pathLength: 1 }}
              transition={{ duration: 2.5, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
              fill="rgba(96, 165, 250, 0.2)" 
              d="M0,32L48,53.3C96,75,192,117,288,144C384,171,480,181,576,170.7C672,160,768,128,864,112C960,96,1056,96,1152,112C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Smaller loader for component-level loading
export function ComponentLoader() {
  return (
    <div className="w-full h-full min-h-48 flex items-center justify-center py-12">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-t-purple-600 border-r-transparent border-b-blue-500 border-l-transparent"
          />
        </div>
        <p className="mt-4 text-purple-800 dark:text-purple-300 font-medium">Loading...</p>
      </div>
    </div>
  );
}