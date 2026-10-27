import { useState } from 'react'
import { allProjects, featuredProjects, processSteps } from './data/portfolio.js'
import { sitePath } from './sitePath.js'
import { publicAsset } from './publicAsset.js'

const contactLinks = [
  { label: 'Email', display: 'maryatou.kante@gmail.com', value: 'mailto:maryatou.kante@gmail.com' },
  { label: 'LinkedIn', display: 'LinkedIn profile', value: 'https://www.linkedin.com/in/maryatou-kante-46863a259/' },
]

const chips = [
  ['Reading', 'chip-violet'],
  ['Art', 'chip-pink'],
  ['Biology', 'chip-green'],
  ['Sociology', 'chip-amber'],
  ['Human behaviour', 'chip-blue'],
  ['Research', 'chip-violet'],
]

const skillGroups = [
  {
    title: 'UX/UI Design',
    tone: 'skills-violet',
    skills: ['UX/UI Design', 'User Research', 'Interaction Design', 'Wireframing & Prototyping', 'Usability Testing'],
  },
  {
    title: 'Immersive Experiences & 3D',
    tone: 'skills-rose',
    skills: ['VR/AR Design', 'Spatial Interaction', '3D Modeling', 'Interactive Experiences'],
  },
  {
    title: 'Development & Tools',
    tone: 'skills-sage',
    skills: ['Unity', 'C#', 'HTML, CSS & JavaScript', 'Python', 'Figma', 'Blender · currently exploring'],
  },
  {
    title: 'Soft Skills',
    tone: 'skills-amber',
    skills: ['Creative Problem-Solving', 'Analytical Thinking', 'User Empathy', 'Adaptability'],
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  )
}

export function SiteHeader({ projectsPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const homeHref = projectsPage ? `${sitePath('/')}#home` : '#home'
  const aboutHref = projectsPage ? `${sitePath('/')}#about` : '#about'
  const contactHref = projectsPage ? `${sitePath('/')}#contact` : '#contact'

  return (
    <header className="site-header" id="top">
      <a className="wordmark" href={homeHref} aria-label="Maryatou Kante, home">
        <span className="wordmark-mark" aria-hidden="true">MK</span>
        <span>Maryatou Kante</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
        <span className={`menu-icon${menuOpen ? ' menu-icon--open' : ''}`} aria-hidden="true"><i /><i /></span>
      </button>
      <nav
        className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
        id="site-navigation"
        aria-label="Main navigation"
      >
        <a href={homeHref} aria-current={!projectsPage ? 'page' : undefined} onClick={() => setMenuOpen(false)}>Home</a>
        <a href={sitePath('/projects')} aria-current={projectsPage ? 'page' : undefined} onClick={() => setMenuOpen(false)}>My Projects</a>
        <a href={aboutHref} onClick={() => setMenuOpen(false)}>About</a>
        <a href={contactHref} onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <span>Copyright (c) 2026 Maryatou Kante</span>
      <span>Human-computer interaction | UX/UI design</span>
      <a className="back-to-top" href="#top">Back to top</a>
    </footer>
  )
}

function ProjectCard({ project }) {
  return (
    <a className="project-card" id={project.slug} href={sitePath(project.detailPath)}>
      <div className={`project-image project-image--${project.art}`}>
        <img className="project-preview-image" src={project.image} alt="" loading="lazy" />
      </div>
      <div className="project-meta">
        <div>
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-hook">{project.hook}</p>
        </div>
        <span className="project-arrow" aria-hidden="true"><ArrowIcon /></span>
      </div>
      <div className="project-details">
        <p>{project.description}</p>
        <span className="project-action">View case study <ArrowIcon /></span>
      </div>
    </a>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">HCI / UX designer</p>
        <h1>Maryatou <span className="hero-name-accent">Kante</span></h1>
        <p className="hero-position">Designing between people <span>&amp; technology.</span></p>
        <p className="hero-intro">
          Understanding people, exploring interactions, and shaping digital experiences with care.
        </p>
        <a className="primary-button" href="#selected-work">
          <span>Explore my work</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}

function WorkSection() {
  return (
    <section className="work-section" id="selected-work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Projects between <span>research and interface.</span></h2>
        </div>
        <p className="section-intro">A selection of projects exploring interaction, research, and design.</p>
      </div>
      <div className="project-grid">
        {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
      <a className="see-more-link" href={sitePath('/projects')}>
        <span>See all projects</span>
        <ArrowIcon />
      </a>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-heading">
        <p className="eyebrow">About me</p>
        <h2>Curious about people, <span>technology & the world.</span></h2>
      </div>
      <div className="about-card">
        <span className="about-blob about-blob--a" aria-hidden="true" />
        <span className="about-blob about-blob--b" aria-hidden="true" />
        <span className="about-blob about-blob--c" aria-hidden="true" />
        <div className="about-copy">
          <p>
            I’m a Master’s student in <mark>Human-Computer Interaction</mark> at Université Paris-Saclay, interested in exploring the relationship between people, technology, and the world around us. My approach combines <mark className="mark-pink">research, critical thinking, and creative experimentation</mark> to design meaningful interactive experiences. I’m fascinated by understanding human behaviours, questioning everyday interactions, and exploring how research can inform design decisions.
          </p>
          <p>
            Beyond HCI, I’m an avid reader with a love for <mark className="mark-amber">art, biology, and sociology</mark>. I’m curious about how people think, how living systems work, and how societies shape our experiences. These diverse interests constantly feed my curiosity and influence the way I observe, question, and approach design.
          </p>
        </div>
        <ul className="about-chips" aria-label="Interests">
          {chips.map(([label, tone]) => <li key={label} className={tone}>{label}</li>)}
        </ul>
        <div className="about-skills">
          <div className="about-skills-heading">
            <p className="eyebrow">Skills &amp; tools</p>
            <span>A mix of design, technology, and perspective.</span>
          </div>
          <div className="about-skills-grid">
            {skillGroups.map((group, index) => (
              <article className={`about-skill-card ${group.tone}`} key={group.title}>
                <div className="about-skill-card-heading">
                  <span>0{index + 1}</span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <div className="about-cv">
          <div className="about-cv-heading">
            <p className="eyebrow">Curriculum vitae</p>
            <span>Choose your preferred language.</span>
          </div>
          <div className="about-cv-links">
            <a className="about-cv-link" href={publicAsset('/cv_ang.pdf')} target="_blank" rel="noopener noreferrer">
              <span className="about-cv-language" aria-hidden="true">EN</span>
              <span className="about-cv-copy"><strong>CV in English</strong><small>PDF · Opens in a new tab</small></span>
              <span className="about-cv-format">PDF</span>
            </a>
            <a className="about-cv-link" href={publicAsset('/cv_fr.pdf')} target="_blank" rel="noopener noreferrer">
              <span className="about-cv-language" aria-hidden="true">FR</span>
              <span className="about-cv-copy"><strong>CV en français</strong><small>PDF · Ouvrir dans un nouvel onglet</small></span>
              <span className="about-cv-format">PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ApproachSection() {
  return (
    <section className="approach-section" id="approach">
      <div className="approach-heading">
        <p className="eyebrow">Approach</p>
        <h2>A flexible process, <span>people at the center.</span></h2>
      </div>
      <ol className="process-list">
        {processSteps.map((step) => (
          <li className="process-step" key={step.number}>
            <span className="step-number">{step.number}</span>
            <span className="step-marker" aria-hidden="true" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's make something <span>meaningful.</span></h2>
        </div>
      </div>
      <ul className="contact-links" id="contact-links" aria-label="Contact links">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a href={link.value}>{link.display || link.label}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export function ProjectsPage() {
  return (
    <>
      <main className="projects-page">
        <section className="projects-page-intro">
          <p className="eyebrow">The complete collection</p>
          <h1>A collection of <span>projects.</span></h1>
          <p>Selected explorations in people, technology, and the experiences in between.</p>
        </section>
        <section className="work-section work-section--page">
          <div className="project-grid">
            {allProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
