import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter, FaDownload, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from "react";
import heroImage from '../images/hero.JPG'; // Import your local image

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Floating animation variants
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Background shapes animation
  const backgroundShapes = {
    animate: {
      rotate: 360,
      transition: {
        duration: 180,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-slate-950 text-white py-16 md:py-0"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-teal-400/10 rounded-full blur-3xl"
          variants={backgroundShapes}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-64 h-64 md:w-96 md:h-96 bg-cyan-400/10 rounded-full blur-3xl"
          variants={backgroundShapes}
          animate="animate"
          style={{ rotate: 45 }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2 order-2 md:order-1 mt-10 md:mt-0"
        >
          <motion.p 
            className="text-teal-400 font-mono text-base sm:text-lg mb-3 inline-flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="animate-waving-hand mr-2">👋</span> Hello, I'm
          </motion.p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Kunal
            </span> 
            <span className="block mt-1">Mahato</span>
          </h1>
          
          <div className="h-8 mt-2 text-lg sm:text-xl">
            <TypeAnimation
              sequence={[
                'Web Developer',
                2000,
                'Frontend Engineer',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-teal-400 font-semibold"
            />
          </div>
          
          <motion.p 
            className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I craft <span className="font-semibold text-teal-400">responsive</span> and 
            <span className="font-semibold text-cyan-400"> performant</span> web experiences 
            that users love and businesses need.
          </motion.p>

          {/* Stats - Refined to match theme */}
          <motion.div 
            className="mt-6 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-teal-400">15+</div>
              <div className="text-xs sm:text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-cyan-400">1.5+</div>
              <div className="text-xs sm:text-sm text-gray-400">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-teal-400">99.9%</div>
              <div className="text-xs sm:text-sm text-gray-400">Satisfaction</div>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-2 sm:px-8 sm:py-3 bg-teal-400 text-slate-950 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
            
            <motion.a
              href="https://drive.google.com/file/d/10AWOS32iMBrFnYqK_FOaB_NxYRmZmQCZ/view?usp=sharing"
              download
              className="px-6 py-2 sm:px-8 sm:py-3 border-2 border-gray-700 rounded-full text-gray-300 font-medium hover:bg-gray-800 transition-all duration-300 flex items-center group text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-2" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            className="mt-8 flex space-x-4 sm:space-x-5 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[
              { icon: <FaGithub size={20} className="sm:w-6 sm:h-6" />, href: "https://github.com/KunalMahato-Horizon", label: "GitHub" },
              { icon: <FaLinkedin size={20} className="sm:w-6 sm:h-6" />, href: "https://www.linkedin.com/in/kunal-mahato-bb7551384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
              { icon: <FaInstagram size={20} className="sm:w-6 sm:h-6" />, href: "https://twitter.com", label: "Twitter" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content (Hero Illustration / Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 md:mt-0 md:w-2/5 flex justify-center relative order-1 md:order-2"
        >
          <motion.div 
            className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
            variants={floatingAnimation}
            animate="animate"
          >
            {/* Main profile image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-slate-700 shadow-2xl z-10">
              <img
                src={heroImage} // Using your imported local image
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-teal-500 text-white p-2 sm:p-3 rounded-xl shadow-lg z-20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="text-xs sm:text-sm font-bold">Web Dev</div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-cyan-500 text-white p-2 sm:p-3 rounded-xl shadow-lg z-20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div className="text-xs sm:text-sm font-bold">UI/UX</div>
            </motion.div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-20 blur-2xl -z-10 animate-pulse-slow"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse", delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-teal-400 flex flex-col items-center"
      >
        <span className="text-xs sm:text-sm mb-1">Scroll down</span>
        <FaArrowDown size={16} className="sm:w-5 sm:h-5" />
      </motion.div>
    </section>
  );
}