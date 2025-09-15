import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 -z-10">
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-3/4 h-3/4 bg-teal-400 rounded-full blur-3xl opacity-20"
          animate={{ 
            y: [0, -40, 0], 
            x: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-3/4 h-3/4 bg-cyan-400 rounded-full blur-3xl opacity-20"
          animate={{ 
            y: [0, 40, 0], 
            x: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400 opacity-10"
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-4"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Contact Form */}
          {/* <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-semibold mb-6 flex items-center">
              <FaPaperPlane className="mr-3 text-teal-400" />
              Drop a message
            </motion.h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 text-center"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="text-2xl font-bold text-teal-400 mb-2">Message Sent!</h4>
                <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants} className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm transition-all"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm transition-all"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent backdrop-blur-sm transition-all"
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                >
                  Send Message
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            )}
          </motion.div> */}

          {/* Right Column: Direct Info & Socials */}
          <motion.div 
            className="lg:w-1/2 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-semibold mb-6 flex items-center">
              <FaMapMarkerAlt className="mr-3 text-teal-400" />
              Connect with me
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-300 mb-8 text-lg">
              Let's create something amazing together. Reach out through any of these channels.
            </motion.p>
            
            <motion.div variants={itemVariants} className="w-full space-y-6">
              <a
                href="mailto:Horizonhub666@gmail.com"
                className="group flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-teal-500 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/70"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  <FaEnvelope size={24} className="text-teal-400 group-hover:text-teal-300 relative z-10 transition-colors" />
                </div>
                <div>
                  <span className="text-gray-300 group-hover:text-teal-300 transition-colors block">Email</span>
                  <span className="text-teal-400 group-hover:text-teal-300 transition-colors text-sm">Horizonhub666@gmail.com</span>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/kunal-mahato-bb7551384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-teal-500 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/70"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  <FaLinkedin size={24} className="text-teal-400 group-hover:text-teal-300 relative z-10 transition-colors" />
                </div>
                <div>
                  <span className="text-gray-300 group-hover:text-teal-300 transition-colors block">LinkedIn</span>
                  <span className="text-teal-400 group-hover:text-teal-300 transition-colors text-sm">/in/kunal</span>
                </div>
              </a>
              
              <a
                href="https://github.com/KunalMahato-Horizon"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-teal-500 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/70"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  <FaGithub size={24} className="text-teal-400 group-hover:text-teal-300 relative z-10 transition-colors" />
                </div>
                <div>
                  <span className="text-gray-300 group-hover:text-teal-300 transition-colors block">GitHub</span>
                  <span className="text-teal-400 group-hover:text-teal-300 transition-colors text-sm">@kunal</span>
                </div>
              </a>
              
              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 transition-all duration-300 backdrop-blur-sm">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  <FaPhoneAlt size={24} className="text-teal-400 group-hover:text-teal-300 relative z-10 transition-colors" />
                </div>
                <div>
                  <span className="text-gray-300 group-hover:text-teal-300 transition-colors block">Phone</span>
                  <span className="text-teal-400 group-hover:text-teal-300 transition-colors text-sm">+1 (91) 94317 96346</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 p-6 rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 backdrop-blur-sm"
            >
              <h4 className="font-semibold text-teal-400 mb-2">Response Time</h4>
              <p className="text-gray-300 text-sm">I typically respond to emails within 24 hours. For urgent matters, feel free to connect on LinkedIn.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}