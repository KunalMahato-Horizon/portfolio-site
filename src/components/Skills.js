import { motion } from "framer-motion";
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaFigma, FaPython, FaDatabase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare size={28} />, level: 90, color: "from-yellow-400 to-yellow-600" },
  { name: "React", icon: <FaReact size={28} />, level: 88, color: "from-cyan-400 to-cyan-600" },
  { name: "Node.js", icon: <FaNodeJs size={28} />, level: 85, color: "from-green-500 to-green-700" },
  { name: "HTML5", icon: <FaHtml5 size={28} />, level: 95, color: "from-orange-500 to-orange-700" },
  { name: "CSS3", icon: <FaCss3Alt size={28} />, level: 90, color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, level: 92, color: "from-teal-400 to-teal-600" },
  { name: "Git", icon: <FaGitAlt size={28} />, level: 87, color: "from-red-500 to-red-700" },
  { name: "Python", icon: <FaPython size={28} />, level: 75, color: "from-blue-700 to-blue-900" },
  { name: "Figma", icon: <FaFigma size={28} />, level: 82, color: "from-purple-400 to-purple-600" },
  { name: "MySQL", icon: <FaDatabase size={28} />, level: 80, color: "from-blue-500 to-blue-700" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Simplified animated background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: Math.random() * 80 + 30,
              height: Math.random() * 80 + 30,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          My Skills
        </motion.h2>
        
        <motion.p 
          className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Here are the technologies I work with to bring ideas to life.
        </motion.p>

        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 justify-center items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg cursor-pointer hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-700"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Skill level indicator */}
              <div className="absolute -top-2 left-0 right-0 h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
              
              <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-br ${skill.color} group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-3`}>
                {skill.icon}
              </div>
              
              <span className="text-white font-semibold text-xs sm:text-sm">{skill.name}</span>
              <span className="text-xs text-gray-400 mt-1">{skill.level}%</span>
              
              {/* Hover tooltip */}
              <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-xs text-white px-2 py-1 rounded-md">
                {skill.level}% proficiency
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-8 sm:mt-12 text-gray-400 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Always learning and adding new skills to my toolkit
        </motion.div>
      </div>
    </section>
  );
}