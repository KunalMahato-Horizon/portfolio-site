import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group relative border border-slate-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image container with overlay */}
      <div className="relative overflow-hidden">
        <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
          {!imageLoaded && (
            <div className="w-12 h-12 border-4 border-teal-100/20 border-t-teal-400 rounded-full animate-spin"></div>
          )}
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-48 object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-70"></div>
        
        {/* Hover overlay with buttons */}
        <motion.div 
          className="absolute inset-0 bg-black/80 opacity-0 flex items-center justify-center gap-6"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-900 hover:from-teal-400 hover:to-cyan-400 transition-all shadow-lg"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View live demo of ${project.title}`}
          >
            <FaExternalLinkAlt size={16} />
          </motion.a>
          <motion.a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-slate-800 text-teal-400 border border-teal-400/30 hover:bg-teal-400/10 transition-colors"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View source code of ${project.title}`}
          >
            <FaGithub size={18} />
          </motion.a>
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <motion.div 
            className="absolute top-4 right-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-slate-900 rounded-full mr-1.5"></span>
            Featured
          </motion.div>
        )}

        {/* Tech badges on image */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          {project.tech.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs bg-teal-500/90 text-slate-900 rounded-full font-semibold"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2.5 py-1 text-xs bg-slate-800/80 text-teal-300 rounded-full font-semibold">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-5 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <motion.span
              key={i}
              className="px-3 py-1.5 text-xs bg-slate-700/60 text-teal-300 rounded-full font-medium border border-slate-600"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-slate-700">
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors group/link"
            whileHover={{ x: 5 }}
          >
            <FaEye className="text-teal-400" />
            <span>Live Demo</span>
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.a>
          
          <motion.a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 font-medium hover:text-teal-400 transition-colors group/link"
            whileHover={{ x: 5 }}
          >
            <FaCode className="text-gray-400" />
            <span>View Code</span>
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}