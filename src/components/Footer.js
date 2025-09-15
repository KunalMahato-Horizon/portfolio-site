import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaGithub size={24} />, 
      href: "https://github.com/KunalMahato-Horizon", 
      label: "GitHub",
      color: "hover:text-purple-400"
    },
    { 
      icon: <FaLinkedin size={24} />, 
      href: "https://www.linkedin.com/in/kunal-mahato-bb7551384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      icon: <FaInstagram size={24} />, 
      href: "https://www.instagram.com/code_with_horizon?igsh=MTUzYTdxajJtNDJ2Nw==", 
      label: "Instagram",
      color: "hover:text-cyan-400"
    },
    { 
      icon: <FaEnvelope size={24} />, 
      href: "HorizonHub666@gmail.com", 
      label: "Email",
      color: "hover:text-teal-400"
    },
  ];

  // Show scroll-to-top button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.footer 
      className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-gray-400 py-16 px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Scroll to top button */}
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}

        <motion.h3 
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-4"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h3>
        
        <motion.p 
          className="text-lg mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind or just want to say hello? Feel free to reach out!
        </motion.p>

        <motion.div 
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${link.color} transition-all duration-300 p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-teal-500`}
              aria-label={link.label}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="#privacy" 
            className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <span className="hidden sm:inline">•</span>
          <a 
            href="#terms" 
            className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
          >
            Terms of Service
          </a>
          <span className="hidden sm:inline">•</span>
          <a 
            href="#sitemap" 
            className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
          >
            Sitemap
          </a>
        </motion.div>

        <motion.div 
          className="border-t border-slate-800 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm flex items-center">
            Made with <FaHeart className="text-red-500 mx-1" /> by Kunal Mahato
          </p>
          <p className="text-sm">
            &copy; {currentYear} Kunal Mahato. All Rights Reserved.
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute left-0 bottom-0 w-20 h-20 -translate-x-1/3 translate-y-1/3 bg-teal-500 rounded-full blur-3xl opacity-10 -z-10"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute right-0 top-0 w-20 h-20 translate-x-1/3 -translate-y-1/3 bg-cyan-500 rounded-full blur-3xl opacity-10 -z-10"
          animate={{ scale: [1.5, 1, 1.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
    </motion.footer>
  );
}