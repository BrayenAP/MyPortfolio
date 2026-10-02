const experiences = [
  {
    title: 'Part-Time Software Laboratory Teaching Assistant',
    organization: 'BINUS University',
    description:
      'Assisted students during software laboratory sessions and helped them understand programming concepts, practical implementations, and problem-solving techniques.',
    subjects: [
      'Database Technology',
      'Computer Graphics',
      'Object-Oriented Programming',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-header">
          <p className="section-eyebrow">EXPERIENCE</p>

          <h2>
            Learning by
            <span> building and teaching.</span>
          </h2>
        </div>

        <div className="experience-card glass">
          <div className="experience-period">
            <img
              src="/experience/teaching-assistant.jpg"
              alt="Software Laboratory Teaching Assistant"
            />
          </div>
          <div className="experience-main">
            <h3>{experiences[0].title}</h3>

            <p className="experience-company">
              {experiences[0].organization}
            </p>

            <p className="experience-description">
              {experiences[0].description}
            </p>

            <div className="subjects">
              {experiences[0].subjects.map((subject) => (
                <span key={subject}>
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;