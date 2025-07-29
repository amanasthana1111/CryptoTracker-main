import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <>
     <div className="about-container">
      <div className="about-card">
        <img
          src="https://avatars.githubusercontent.com/u/120777911?v=4"
          alt="Aman Asthana"
          className="about-avatar"
        />
        <h1 className="about-name">Aman Asthana</h1>
        <p className="about-role">Full-Stack Developer & Crypto Enthusiast</p>
        <p className="about-bio">
          I’m passionate about building fast, accessible web apps and exploring
          the future of blockchain, AI, and tech innovation. Currently working on
          crypto tools and contributing to open-source.
        </p>
        <div className="about-socials">
          <a
            href="https://github.com/amanasthana1111"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amanasthanacse/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/@dev_aman12"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About