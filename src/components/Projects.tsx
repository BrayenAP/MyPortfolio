import { useState } from 'react';

const projects = [
  {
    title: 'Creative Community Website',
    description:
      'A responsive creative community website for exploring artwork, submitting creative work, and interacting with the community.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    mediaType: 'video',
    media: '/projects/creative-community.mp4',
    mediaFit: 'contain',
    github: 'https://github.com/BrayenAP/PicverseHCI'
  },
  {
    title: 'AI-Powered Tuberculosis Detection',
    description:
      'A chest X-ray classification system using ConvNeXt and transfer learning to distinguish between Normal and Tuberculosis cases, with Grad-CAM for model interpretability.',
    technologies: [
      'Python',
      'PyTorch',
      'ConvNeXt',
      'Transfer Learning',
      'Grad-CAM',
      'Streamlit',
    ],
    mediaType: 'video',
    media: '/projects/tb-detection.mp4',
    featured: true,
    github: 'https://github.com/BrayenAP/AITBCDetection'
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive personal portfolio website designed to showcase software development projects, technical skills, and professional experience with a clean Liquid Glass-inspired interface.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'CSS',
      'Responsive Design',
      'Vercel',
    ],
    mediaType: 'image',
    media: '/projects/portfolio.png',
    github: 'https://github.com/BrayenAP/MyPortfolio'
  },
  {
    title: 'BocchiPoll',
    description:
      'Refactored a Java Swing polling application by separating UI, database, and application logic, improving modularity, readability, and maintainability.',
    technologies: ['Java', 'Java Swing', 'SQLite', 'OOP', 'Refactoring'],
    mediaType: 'image',
    media: '/projects/bocchipoll.jpg',
    github: 'https://github.com/JovanSiallagan/BocchiPoll-Refactoring'
  },
  {
    title: 'ServiceHub',
    description:
      'A mobile vehicle workshop platform that allows users to discover nearby workshops, book services, and schedule workshop appointments.',
    technologies: ['Flutter', 'Express.js', 'TiDB', 'Firebase'],
    mediaType: 'video',
    media: '/projects/servicehub.mp4',
    mediaFit: 'contain',
    github: 'https://github.com/Pteraaaa/ServiceHub'
  },
  {
    title: 'Picverse',
    description:
      'A digital artist community platform designed with a Modular Monolith architecture and multiple design patterns to improve system modularity and maintainability.',
    technologies: [
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Supabase',
      'Prisma',
    ],
    mediaType: 'image',
    media: '/projects/picverse.jpg',
    github: 'https://github.com/Pteraaaa/Picverse'
  },
  {
    title: 'LIVINHIR',
    description:
      'A property rental platform where users can discover apartments and boarding houses, view property details, manage favorites, ratings, and bookings.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'ReactJS',
      'PostgreSQL',
      'Prisma',
    ],
    mediaType: 'image',
    media: '/projects/livinhir.jpg',
    github: 'https://github.com/lixcoded/Livinhir'
  },
  {
    title: 'Deep Reinforcement Learning for Network Intrusion Detection',
    description:
      'A network intrusion detection approach using DQN-LSTM with an LLM-based interpretation layer for detecting and interpreting network attacks.',
    technologies: [
      'Python',
      'Deep Reinforcement Learning',
      'DQN',
      'LSTM',
      'LLM',
      'Network Security',
    ],
    mediaType: 'image',
    media: '/projects/drl-nid-poster.png',
    mediaFit: 'contain',
    github: 'https://github.com/BrayenAP/DRL-NID'
  },
];

function ProjectMedia({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  const mediaClass = featured
    ? 'featured-media'
    : `project-media ${
        project.mediaFit === 'contain' ? 'contain-media' : ''
      }`;

  if (project.mediaType === 'video') {
    return (
      <video
        className={mediaClass}
        src={project.media}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <img
      className={mediaClass}
      src={project.media}
      alt={`${project.title} project`}
    />
  );
}

function ProjectCard({
  project,
  index,
  activeIndex,
}: {
  project: (typeof projects)[number];
  index: number;
  activeIndex?: number;
}) {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  let positionClass = '';

  if (activeIndex !== undefined) {
    const distance = index - activeIndex;

    if (distance === 0) {
      positionClass = 'carousel-active';
    } else if (distance === -1) {
      positionClass = 'carousel-previous';
    } else if (distance === 1) {
      positionClass = 'carousel-next';
    } else {
      positionClass = 'carousel-hidden';
    }
  }

  return (
    <article
      className={`small-project-card glass ${positionClass}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      <div className="small-project-image">
        <ProjectMedia project={project} />
      </div>

      <div className="small-project-content">
        <div>
          <p className="project-number">
            {String(index + 1).padStart(2, '0')}
          </p>

          <h3>{project.title}</h3>

          <p className="project-description">
            {project.description}
          </p>

          <div className="project-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-github"
          onPointerDown={(e) => e.stopPropagation()}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        >
          <span>View on GitHub</span>
          <span>↗</span>
        </a>
      )}
    </article>
  );
}

function Projects() {
  const [viewMode, setViewMode] = useState<'grid' | 'slideshow'>(
    'slideshow'
  );

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const [slideIndex, setSlideIndex] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p className="section-eyebrow">SELECTED WORK</p>

        <h2>
          Projects that turn
          <span> ideas into reality.</span>
        </h2>
      </div>

      <div className="projects-view-toggle">
      <div
        className={`view-toggle-indicator ${
          viewMode === 'slideshow'
            ? 'slideshow-active'
            : 'grid-active'
        }`}
      />

      <button
        className={viewMode === 'slideshow' ? 'active' : ''}
        onClick={() => setViewMode('slideshow')}
      >
        Slideshow
      </button>

      <button
        className={viewMode === 'grid' ? 'active' : ''}
        onClick={() => setViewMode('grid')}
      >
        Grid
      </button>
    </div>


      {viewMode === 'grid' ? (
      <>
        {featuredProject && (
          <article
            className="featured-project glass"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();

              setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
          >
            <div className="featured-image">
              <ProjectMedia project={featuredProject} featured />
            </div>

            <div className="featured-content">
              <p className="project-number">01</p>

              <h3>{featuredProject.title}</h3>

              <p className="project-description">
                {featuredProject.description}
              </p>

              <div className="project-tags">
                {featuredProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            {featuredProject.github && (
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer"
                className="project-github"
                onPointerDown={(e) => e.stopPropagation()}
                style={{
                  left: mousePosition.x,
                  top: mousePosition.y,
                }}
              >
                <span>View on GitHub</span>
                <span>↗</span>
              </a>
            )}
          </article>
        )}

        <div className="projects-grid">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      </>
      ) : (
        <div className="projects-slideshow-wrapper">

          <div
            className={`projects-slideshow ${
              isDragging ? 'dragging' : ''
            }`}
            style={{
              transform: `translateX(calc(
                50vw - 260px - ${slideIndex * 548}px + ${dragOffset}px
              ))`,
            }}
            onPointerDown={(e) => {
              setIsDragging(true);
              setDragStart(e.clientX);
              e.currentTarget.setPointerCapture(e.pointerId);
            }}

            onPointerMove={(e) => {
              if (!isDragging) return;

              const distance = e.clientX - dragStart;
              setDragOffset(distance);
            }}

            onPointerUp={(e) => {
              const distance = e.clientX - dragStart;

              setIsDragging(false);
              setDragOffset(0);

              if (distance > 80) {
                setSlideIndex((current) =>
                  Math.max(current - 1, 0)
                );
              }

              if (distance < -80) {
                setSlideIndex((current) =>
                  Math.min(current + 1, projects.length - 1)
                );
              }

              e.currentTarget.releasePointerCapture(e.pointerId);
            }}

            onPointerCancel={() => {
              setIsDragging(false);
              setDragOffset(0);
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                activeIndex={slideIndex}
              />
            ))}
          </div>

          <div className="slideshow-pagination">
            <button
              className="pagination-arrow"
              onClick={() =>
                setSlideIndex((current) =>
                  Math.max(current - 1, 0)
                )
              }
              disabled={slideIndex === 0}
              aria-label="Previous project"
            >
              ←
            </button>

            <div className="pagination-dots">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  className={`pagination-dot ${
                    index === slideIndex ? 'active' : ''
                  }`}
                  onClick={() => setSlideIndex(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <span className="pagination-counter">
              {String(slideIndex + 1).padStart(2, '0')}
              <span>/</span>
              {String(projects.length).padStart(2, '0')}
            </span>

            <button
              className="pagination-arrow"
              onClick={() =>
                setSlideIndex((current) =>
                  Math.min(
                    current + 1,
                    projects.length - 1
                  )
                )
              }
              disabled={
                slideIndex === projects.length - 1
              }
              aria-label="Next project"
            >
              →
            </button>
          </div>

        </div>
      )}

    </section>
  );
}

export default Projects;