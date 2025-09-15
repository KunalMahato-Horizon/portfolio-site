import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaReact, 
  FaSass, 
  FaFigma, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaGitAlt,
  FaAws,
  FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120
      }
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 mb-4 bg-size-200 animate-gradient"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          
          {/* Left Column: About Content */}
          <motion.div
            className="w-full md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3 
              className="text-3xl font-semibold text-gray-100 mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Crafting <span className="text-teal-400">digital experiences</span> that users love
            </motion.h3>
            
            <div className="space-y-4 mb-8">
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Hello, I'm Kunal. I'm a passionate front-end developer based in India, specializing in building <span className="text-teal-300 font-medium">clean, accessible, and high-performance websites</span>. My journey into web development started with a simple fascination for how websites work and has evolved into a passion for creating exceptional user experiences.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                I believe that great design isn't just about how things look, but about how they work. I thrive on solving complex problems with elegant solutions and enjoy the process of turning ideas into reality through code.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
              </motion.p>
            </div>
            
            <motion.div 
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h4 className="text-xl font-semibold text-teal-400 mb-5 flex items-center">
                <FaLaptopCode className="mr-2" /> My Toolkit
              </h4>
              <motion.div 
                className="grid grid-cols-3 sm:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="skill-card group">
                  <div className="p-3 bg-slate-800 rounded-lg transition-all duration-300 group-hover:bg-teal-900/30 group-hover:scale-105">
                    <FaReact size={28} className="text-cyan-400 mx-auto" />
                    <span className="text-gray-300 text-sm mt-2 block text-center">React</span>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="skill-card group">
                  <div className="p-3 bg-slate-800 rounded-lg transition-all duration-300 group-hover:bg-teal-900/30 group-hover:scale-105">
                    <SiNextdotjs size={28} className="text-white mx-auto" />
                    <span className="text-gray-300 text-sm mt-2 block text-center">Next.js</span>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="skill-card group">
                  <div className="p-3 bg-slate-800 rounded-lg transition-all duration-300 group-hover:bg-teal-900/30 group-hover:scale-105">
                    <FaJsSquare size={28} className="text-yellow-400 mx-auto" />
                    <span className="text-gray-300 text-sm mt-2 block text-center">JavaScript</span>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="skill-card group">
                  <div className="p-3 bg-slate-800 rounded-lg transition-all duration-300 group-hover:bg-teal-900/30 group-hover:scale-105">
                    <SiTypescript size={28} className="text-blue-400 mx-auto" />
                    <span className="text-gray-300 text-sm mt-2 block text-center">TypeScript</span>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="skill-card group">
                  <div className="p-3 bg-slate-800 rounded-lg transition-all duration-300 group-hover:bg-teal-900/30 group-hover:scale-105">
                    <SiTailwindcss size={28} className="text-cyan-400 mx-auto" />
                    <span className="text-gray-300 text-sm mt-2 block text-center">Tailwind</span>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="skill-card group">
                  <div className="p-3 bg-slate-800 rounded-lg transition-all duration-300 group-hover:bg-teal-900/30 group-hover:scale-105">
                    <FaHtml5 size={28} className="text-orange-500 mx-auto" />
                    <span className="text-gray-300 text-sm mt-2 block text-center">HTML5</span>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="skill-card group">
                  <div className="p-3 bg-slate-800 rounded-lg transition-all duration-300 group-hover:bg-teal-900/30 group-hover:scale-105">
                    <FaCss3Alt size={28} className="text-blue-500 mx-auto" />
                    <span className="text-gray-300 text-sm mt-2 block text-center">CSS3</span>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="skill-card group">
                  <div className="p-3 bg-slate-800 rounded-lg transition-all duration-300 group-hover:bg-teal-900/30 group-hover:scale-105">
                    <FaGitAlt size={28} className="text-red-500 mx-auto" />
                    <span className="text-gray-300 text-sm mt-2 block text-center">Git</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.a 
                href="#projects"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 font-bold rounded-full shadow-lg transition-all duration-300 
                bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 hover:from-teal-300 hover:to-cyan-300 group"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(45, 212, 191, 0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                See My Projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
              
              <motion.a 
                href="#contact"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 font-bold rounded-full border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Image/Illustration */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              <motion.div
                className="absolute -top-6 -right-6 w-28 h-28 bg-cyan-400/20 rounded-xl rotate-12 z-0"
                animate={floatingAnimation}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-400/20 rounded-xl -rotate-12 z-0"
                animate={floatingAnimation}
              />
              
              <div className="relative z-10">
                <motion.img
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="A developer working on a computer"
                  className="rounded-3xl shadow-2xl border-4 border-slate-700 saturate-50 hover:saturate-100 transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-3xl animate-pulse-slow"></div>
                
                <motion.div 
                  className="absolute -bottom-5 -right-5 bg-slate-800/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-slate-700"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-gray-200">Currently coding</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}