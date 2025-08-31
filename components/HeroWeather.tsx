"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { copy } from "@/lib/copy";

export default function HeroWeather() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const [timeOfDay, setTimeOfDay] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const hour = new Date().getHours();
    setTimeOfDay(hour);
    
    // Set window dimensions after component mounts
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  const skyOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const skyColor = timeOfDay < 6 || timeOfDay > 20 ? "from-storm-900 to-sky-900" :
                   timeOfDay < 10 ? "from-sun-200 to-sky-200" :
                   timeOfDay < 16 ? "from-sky-200 to-sky-400" :
                   "from-sun-400 to-magenta-400";

  return (
    <section 
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${skyColor}`}
    >
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ opacity: skyOpacity }}
      >
        {windowSize.width > 0 && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{ 
              x: Math.random() * windowSize.width, 
              y: Math.random() * windowSize.height,
              opacity: 0.3
            }}
            animate={{ 
              y: [null, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <motion.h1 
          className="font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {copy.home.heroTitle.split('、').map((part, i) => (
            <span key={i} className={i === 1 ? "text-sun-200" : ""}>
              {part}{i === 0 ? '、' : ''}
            </span>
          ))}
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {copy.home.heroSub}
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            asChild 
            size="lg"
            className="bg-white text-sky-600 hover:bg-white/90 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/experience">{copy.home.ctaPrimary}</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-8 py-3 rounded-full text-lg backdrop-blur transition-all duration-300"
          >
            <Link href="/vision">{copy.home.ctaSecondary}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}