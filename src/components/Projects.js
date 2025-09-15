import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";

// ✅ Import your local images
import projectAlpha from "../images/Sonvitri_Foundation-Template.png";
import projectBeta from "../images/Video_Editor-Template.png";
import projectGamma from "../images/ShopZone_Template.png";

const projects = [
  {
    title: "Sonvitri Foundation",
    description:
      "A responsive NGO website built to represent Sonvitri Foundation. It includes sections for activities, donation information, and volunteer opportunities, designed with a clean modern UI and smooth navigation.",
    image: projectAlpha,
    tech: ["React", "Tailwind CSS"],
    // liveUrl: "#", // add live link if you host it
    // githubUrl: "#", // add repo link
    featured: true,
  },
  {
    title: "Video Editor Portfolio",
    description:
      "A portfolio website made for a video editor, showcasing past projects, services, and contact details. The site is optimized for fast performance and includes a visually appealing layout tailored for creative professionals.",
    image: projectBeta,
    tech: ["React", "Tailwind CSS"],
    // liveUrl: "#",
    // githubUrl: "#",
    featured: false,
  },
  {
    title: "ShopZone (Team Project)",
    description:
      "A full-stack e-commerce platform built collaboratively with a team. It features product listings, cart management, authentication, and payment integration. My main focus was on front-end development with React and Tailwind, while collaborating on backend integration.",
    image: projectGamma,
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    // liveUrl: "#",
    // githubUrl: "#",
    featured: true,
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400 rounded-full mix-blend-soft-light filter blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-soft-light filter blur-3xl"
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
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 mb-6"
            initial={{ backgroundPosition: "0% 50%" }}
            whileInView={{ backgroundPosition: "100% 50%" }}
            viewport={{ once: true }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{ 
              backgroundSize: "200% auto" 
            }}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p 
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Here are some of my recent projects. Each one represents a unique challenge and creative solution.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project badge for featured projects */}
              {project.featured && (
                <motion.div 
                  className="absolute -top-6 left-0 right-0 md:right-auto md:left-6 z-20 flex justify-center md:justify-start"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-900 font-bold text-sm rounded-full shadow-lg flex items-center">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-2"></span>
                    Featured Project
                  </span>
                </motion.div>
              )}
              
              {/* Image Column */}
              <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Tech stack overlay */}
                <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 opacity-100 group-hover:opacity-0">
                  <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/90 text-slate-900"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + (i * 0.1) }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Hover overlay with buttons */}
                {/* <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/80"
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex space-x-6">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-500 text-slate-900 hover:bg-teal-400 transition-colors"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <FaExternalLinkAlt size={18} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View source code of ${project.title}`}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  </div>
                </motion.div> */}
              </div>

              {/* Text & Link Column */}
              <motion.div 
                className="w-full md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {project.featured && (
                  <span className="text-teal-400 font-semibold text-sm mb-2 block md:hidden">
                    <span className="inline-block w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                    Featured Project
                  </span>
                )}
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <motion.div 
                  className="my-6 p-5 bg-slate-800/40 rounded-xl border-l-4 border-teal-400 shadow-lg"
                  whileHover={{ backgroundColor: "rgba(30, 41, 59, 0.6)" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </motion.div>
                
                <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-700/70 text-teal-300 border border-slate-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex space-x-5 justify-center md:justify-start">
                  {/* <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-900 font-semibold hover:from-teal-400 hover:to-cyan-400 transition-all shadow-lg hover:shadow-teal-500/20"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 5px 20px rgba(45, 212, 191, 0.4)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 rounded-full border border-teal-400/60 text-teal-400 font-semibold hover:bg-teal-400/10 transition-colors hover:border-teal-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub />
                    <span>Code</span>
                  </motion.a> */}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <p className="text-gray-300 text-lg mb-8">Want to see more of my work or discuss a project?</p>
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-slate-800/60 text-teal-400 font-semibold hover:bg-slate-700/60 transition-colors group border border-slate-700"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(15, 23, 42, 0.8)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get in touch</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}