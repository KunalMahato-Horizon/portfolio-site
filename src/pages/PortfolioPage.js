import React from "react";
import { motion } from "framer-motion";
import ProjectGrid from "../components/ProjectGrid";
import Footer from "../components/Footer";
import { FaArrowRight, FaCode, FaRocket, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col">
      {/* Enhanced Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Hero / Header - Updated to match projects section style */}
      <section className="relative py-20 text-center bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-soft-light filter blur-3xl animation-delay-2000"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-size-200 animate-gradient">Projects</span>
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A curated collection of my work—from concept to code. 
            Explore the projects below to see my skills in action.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 5px 15px rgba(45, 212, 191, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode />
              <span>View Projects</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-teal-400 text-teal-400 font-semibold rounded-full hover:bg-teal-400/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get in Touch</span>
              <FaArrowRight />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-teal-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Project Grid - Updated styling */}
      <section id="projects" className="relative py-16 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Showcase</span>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="max-w-2xl mx-auto text-center text-gray-400 mb-12 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Each project represents unique challenges and creative solutions. 
            Click on any project to explore details, technologies, and live demos.
          </motion.p>
          
          <ProjectGrid />
        </motion.div>
      </section>

      {/* Enhanced Call to Action */}
      <section id="contact" className="relative py-20 text-center px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-soft-light filter blur-3xl animation-delay-2000"></div>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to bring your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">ideas to life</span>?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm always excited to take on new challenges and collaborate on innovative projects. 
            Let's create something amazing together.
          </motion.p>

          {/* Quick Contact Options */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-teal-400 hover:bg-slate-700/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              <span>Send an Email</span>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-teal-400 hover:bg-slate-700/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
              <span>Connect on LinkedIn</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-teal-400 hover:bg-slate-700/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              <span>View GitHub</span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="/#contact-form"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 5px 20px rgba(45, 212, 191, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
              <span>Start a Project</span>
            </motion.a>
            <motion.a
              href="/#about"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-teal-400 text-teal-400 font-semibold rounded-full hover:bg-teal-400/10 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More About Me</span>
              <FaArrowRight />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}