import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'MERN - Blog App',
      description: 'A full-stack blog application built with MongoDB, Express.js, React, and Node.js. Features include user authentication, CRUD operations for blog posts, and a responsive design.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/danukachathurya/blog-app',
      live: 'https://blog-app-demo.com'
    },
    {
      title: 'MERN - Hotel Booking App',
      description: 'A hotel booking platform with real-time availability checking, user authentication, and payment integration. Built with the MERN stack and styled with Tailwind CSS.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com/danukachathurya/hotel-booking',
      live: 'https://hotel-booking-demo.com'
    },
    {
      title: 'MERN - E-commerce Site',
      description: 'A full-featured e-commerce platform with product management, shopping cart, user authentication, and payment processing. Built with the MERN stack.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux'],
      github: 'https://github.com/danukachathurya/ecommerce',
      live: 'https://ecommerce-demo.com'
    },
    {
      title: 'Travel Site',
      description: 'A travel website with destination information, booking system, and user reviews. Built with HTML, CSS, JavaScript, PHP, and MySQL.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/danukachathurya/travel-site',
      live: 'https://travel-site-demo.com'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="section-padding bg-tertiary">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="heading mb-8 text-center">
            Projects
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-primary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-textSecondary mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-textSecondary hover:text-secondary transition-colors"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-textSecondary hover:text-secondary transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 