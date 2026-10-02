const technologies = [
  'Java',
  'C',
  'Python',
  'TypeScript',
  'SQL',
  'React',
  'NestJS',
  'MySQL',
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <p className="section-eyebrow">ABOUT ME</p>

          <h2>
            Turning ideas into
            <span> digital experiences.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a 3rd Year Computer Science student with a
              strong interest in software development and web
              development.
            </p>

            <p>
              I have experience working with programming
              languages such as Java, C, Python, TypeScript, and
              SQL, as well as technologies including React,
              NestJS, and MySQL.
            </p>

            <p>
              Through academic and personal projects, I've
              explored frontend and backend development,
              database systems, software architecture, machine
              learning, and network security.
            </p>
          </div>

          <div className="tech-card glass">
            <p className="tech-title">Technologies I work with</p>

            <div className="tech-list">
              {technologies.map((technology) => (
                <div className="tech-item" key={technology}>
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;