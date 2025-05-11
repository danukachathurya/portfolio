import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'
import myProfile from '../assets/my.png'

const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center">
      <div className="container-padding mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-secondary mb-4">Hi, my name is</p>
            <h1 className="heading mb-4">
              Danuka Chathurya.
            </h1>
            <h2 className="subheading text-textSecondary mb-6">
              I build things for the web.
            </h2>
            <p className="text-textSecondary text-lg mb-8 max-w-2xl">
              I'm a 3rd-year IT undergraduate at SLIIT University, specializing in web development and software engineering.
              I'm passionate about creating efficient, scalable, and user-friendly applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary text-center cursor-pointer"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="border-2 border-secondary text-secondary px-6 py-3 rounded-md font-medium hover:bg-secondary/10 transition-all duration-300 text-center cursor-pointer"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex gap-6 mt-8">
              <a
                href="https://github.com/danukachathurya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/danukachathurya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary"
              >
                <img
                  src={myProfile}
                  alt="Danuka Chathurya"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-secondary/30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 