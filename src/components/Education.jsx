import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      period: '2022 - present',
      institution: 'SLIIT UNIVERSITY',
      degree: 'BSc (Hons) in Information Technology',
      specialization: 'Specializing in Information Technology',
      projects: [
        {
          title: 'Online Vehicle Parking System - Y1S2',
          tech: 'HTML, CSS, JavaScript, PHP, MySQL',
          description: 'Created a secure login system with CRUD operations and developed user authentication.'
        },
        {
          title: 'Vehicle Rental System - Y2S1',
          tech: 'Java, SQL, HTML, CSS',
          description: 'Implemented CRUD operations for vehicle details addition and designed response UI.'
        },
        {
          title: 'Game App & Note App - Y2S2',
          tech: 'Kotlin, Android Studio, SQLite',
          description: 'Designed and developed interactive gaming and note-taking mobile applications with offline storage.'
        },
        {
          title: 'Wooden Handmade Marketplace System - Y2S2',
          tech: 'MongoDB, Express.js, React, Node.js',
          description: 'Implemented shopping cart, wishlist, and filter functionalities with enhanced UI/UX.'
        }
      ]
    }
  ]

  return (
    <section id="education" className="section-padding">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading mb-12 text-center">
            Education & Projects
          </h2>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-tertiary p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/3">
                      <p className="text-secondary font-medium">{edu.period}</p>
                      <h3 className="font-semibold mt-2">{edu.institution}</h3>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-medium mb-2">{edu.degree}</h4>
                      {edu.specialization && (
                        <p className="text-textSecondary mb-4">{edu.specialization}</p>
                      )}
                      
                      {edu.projects && (
                        <div className="space-y-4 mt-4">
                          {edu.projects.map((project) => (
                            <div key={project.title} className="bg-primary/50 p-4 rounded-lg">
                              <h5 className="font-medium mb-2">{project.title}</h5>
                              <p className="text-sm text-secondary mb-2">Tech Stack: {project.tech}</p>
                              <p className="text-textSecondary text-sm">{project.description}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {edu.results && (
                        <ul className="list-disc list-inside text-textSecondary">
                          {edu.results.map((result, i) => (
                            <li key={i}>{result}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education 