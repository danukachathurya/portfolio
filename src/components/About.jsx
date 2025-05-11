import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const About = () => {
  return (
    <section id="about" className="section-padding bg-tertiary">
      <div className="container-padding mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="heading mb-8 text-center">
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="subheading text-secondary">Personal Info</h3>
              <div className="space-y-2">
                <p><span className="text-textSecondary">Date of Birth:</span> 2000-07-21</p>
                <p><span className="text-textSecondary">NIC:</span> 200020300484</p>
                <p><span className="text-textSecondary">Location:</span> C/86 Industrial Area Ampara</p>
                <p><span className="text-textSecondary">Current Residence:</span> Kaduwela</p>
                <p><span className="text-textSecondary">Languages:</span> English, Sinhala</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="subheading text-secondary">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">SLIIT University</h4>
                  <p className="text-textSecondary">2022 - present</p>
                  <p>BSc (Hons) in Information Technology</p>
                  <p>Specializing in Information Technology</p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="subheading text-secondary mb-4">Profile</h3>
            <p className="text-textSecondary leading-relaxed">
              I am a 3rd-year IT undergraduate at SLIIT University, aiming to build a career in web development, 
              software development, and software engineering. My academic journey has provided me with a strong 
              foundation in programming, full-stack development, and modern web technologies. I am eager to apply 
              my skills in real-world projects, contribute to innovative solutions, and continuously improve my 
              problem-solving abilities. My goal is to work on scalable and efficient applications that enhance 
              user experiences and drive business success.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 