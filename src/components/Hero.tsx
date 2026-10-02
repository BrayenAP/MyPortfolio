function Hero() {
  return (
    <section className="hero">
      <div className="hero-layout">
        <div className="hero-profile">
          <img
            src="/profile.png"
            alt="Brayen Agustinus Putra"
          />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">
            Computer Science • Software Engineering
          </p>

          <h1>
            Hi, I'm <span>Brayen.</span>
          </h1>

          <p className="hero-description">
            I'm a third-year Computer Science student focused on
            software and web development, building practical
            projects across software engineering, machine
            learning, and network security.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="glass-button primary">
              View My Work
            </a>

            <a href="#contact" className="glass-button">
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
    </section>
  );
}

export default Hero;