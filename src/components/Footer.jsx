import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="container-padding mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
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

          <p className="text-textSecondary">
            © {new Date().getFullYear()} Danuka Chathurya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 