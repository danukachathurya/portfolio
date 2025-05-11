import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaDocker, FaAws, FaJenkins } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: FaHtml5, level: 90 },
  { name: 'CSS', icon: FaCss3Alt, level: 85 },
  { name: 'JavaScript', icon: FaJs, level: 80 },
  { name: 'React', icon: FaReact, level: 75 },
  { name: 'MongoDB', icon: SiMongodb, level: 70 },
  { name: 'Java', icon: FaJava, level: 65 },
  { name: 'Docker', icon: FaDocker, level: 60 },
  { name: 'AWS', icon: FaAws, level: 50 },
  { name: 'Jenkins', icon: FaJenkins, level: 45 },
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding min-h-screen">
      <div className="container-padding mx-auto">
        <h2 className="heading mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div key={skill.name} className="bg-tertiary rounded-xl p-6 shadow-md flex flex-col justify-between min-h-[150px] border border-[#232228]">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-secondary p-3 rounded-lg flex items-center justify-center">
                  <skill.icon className="text-2xl text-primary" />
                </div>
                <span className="text-lg font-semibold text-white">{skill.name}</span>
              </div>
              <div className="mt-auto">
                <div className="relative w-full h-2 bg-[#232228] rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute left-0 top-0 h-full bg-secondary rounded-full"
                  />
                </div>
                <div className="flex justify-end">
                  <span className="text-sm text-gray-300 font-medium">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 