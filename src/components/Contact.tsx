function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card glass">
          <p className="section-eyebrow">GET IN TOUCH</p>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p className="contact-description">
            I'm always open to discussing new projects, ideas,
            collaborations, or opportunities to build something
            useful together.
          </p>

          <div className="contact-links">
          <a
            href="mailto:brayen.putra@binus.ac.id"
            className="contact-link"
          >
            <div className="contact-link-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.5l9 5.5 9-5.5V7H3Zm18 2.35-8.48 5.19a1 1 0 0 1-1.04 0L3 9.35V17h18V9.35Z"
                />
              </svg>
            </div>

            <div>
              <strong>Email</strong>
              <span>brayen.putra@binus.ac.id</span>
            </div>

            <span className="contact-link-arrow">↗</span>
          </a>

            <a
              href="https://github.com/BrayenAP"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 8.18c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.48A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
                  />
                </svg>
              </div>

              <div>
                <strong>GitHub</strong>
                <span>github.com/BrayenAP</span>
              </div>

              <span className="contact-link-arrow">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/brayen-agustinus-putra-71a691325"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6.5 8.5A2.5 2.5 0 1 0 6.5 3a2.5 2.5 0 0 0 0 5.5ZM4.5 21h4V10h-4v11ZM11 10v11h4v-5.5c0-1.45.28-2.9 2.1-2.9 1.79 0 1.9 1.71 1.9 3.01V21h4v-6.2c0-3.05-.66-5.4-4.23-5.4-1.72 0-2.87.95-3.34 1.85h-.06V10H11Z"
                  />
                </svg>
              </div>

              <div>
                <strong>LinkedIn</strong>
                <span>linkedin.com/in/brayen-agustinus-putra</span>
              </div>

              <span className="contact-link-arrow">↗</span>
            </a>
          </div>
      </div>
      <footer className="footer">
          <p>© 2026 Brayen Agustinus Putra. All rights reserved.</p>
        </footer>
        </div>
    </section>
  );
}

export default Contact;