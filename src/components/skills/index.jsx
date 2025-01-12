'use client'

import { motion } from "framer-motion"
// import { DownloadButton } from "./download-button"
// import { Toaster } from "./ui/toaster"
import { DownloadButton } from "../DownloadButton"
import { Toaster } from "../ui/toaster"

const technologies = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "bg-blue-600/10 text-blue-600"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "bg-green-500/10 text-green-500"
  },
  {
    name: "Mongo",
    icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    color: "bg-pink-500/10 text-pink-500"
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "bg-black/10 text-white"
  },
  {
    name: "Tailwind",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    color: "bg-cyan-500/10 text-cyan-500"
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "bg-blue-600/10 text-blue-600"
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    color: "bg-teal-500/10 text-teal-500"
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "bg-gray-500/10 text-gray-500"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "bg-yellow-600/10 text-yellow-600"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen  bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Skills</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate web developer creating innovative and user-friendly applications. 
            Firm believer in lifelong learning as the foundation for growth and creativity.
          </p>
          <div className="mt-12">
            <DownloadButton />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className={`${tech.color} p-6 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center justify-center space-y-4 group`}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full p-4 transition-transform group-hover:scale-110 duration-300">
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg group-hover:text-white transition-colors duration-300">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Toaster />
    </section>
  )
}

