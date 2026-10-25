import { publicAsset } from './publicAsset.js'
import { useEffect, useRef, useState } from 'react'
import { sitePath } from './sitePath.js'
import { Footer, SiteHeader } from './Classic.jsx'

const arGardenNav = [
  ['ar-garden-about', 'About', '01'],
  ['ar-garden-experience', 'Experience', '02'],
  ['ar-garden-technology', 'Technology', '03'],
  ['ar-garden-visuals', 'Visuals', '04'],
]

function SectionNav({ items }) {
  const [active, setActive] = useState(null)
  const [progress, setProgress] = useState(0)
  const [pill, setPill] = useState({ left: 0, width: 0 })
  const trackRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      let current = null
      items.forEach(([id]) => {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id
      })
      setActive(current)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [items])

  useEffect(() => {
    const link = trackRef.current?.querySelector(`a[data-id="${active}"]`)
    if (link) setPill({ left: link.offsetLeft, width: link.offsetWidth })
  }, [active])

  return (
    <nav className="snav snav--ar-garden" aria-label="On this page">
      <div className="snav-track" ref={trackRef}>
        <span className="snav-pill" style={{ transform: `translateX(${pill.left}px)`, width: pill.width, opacity: active ? 1 : 0 }} aria-hidden="true" />
        {items.map(([id, label, number]) => (
          <a key={id} href={`#${id}`} data-id={id} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'true' : undefined}>
            <span>{number}</span>{label}
          </a>
        ))}
      </div>
      <span className="snav-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </nav>
  )
}

const experienceSteps = [
  ['01', 'Explore', 'Discover the virtual garden and its different elements.'],
  ['02', 'Interact', 'Use gardening tools, seeds, and plants to shape the experience.'],
  ['03', 'Grow', 'Plant and water elements of the garden as you go.'],
]

const technologies = [
  ['Unity', '3D environment creation and interactive scene development.'],
  ['Vuforia', 'Augmented reality framework used in the project.'],
  ['Image markers', 'Visual markers used to trigger or anchor AR content.'],
]

const gardenGallery = [
  {
    src: publicAsset('/images/AR%20Garden/Capture%20d%27%C3%A9cran%202026-10-14%20205226.png'),
    alt: 'The AR garden viewed through a camera, with flowers, stepping stones, and a planting prompt.',
    title: 'Explore the garden',
  },
  {
    src: publicAsset('/images/AR%20Garden/Capture%20d%27%C3%A9cran%202026-10-14%20205354.png'),
    alt: 'A virtual shovel appears over the garden during an interaction.',
    title: 'Use garden tools',
  },
  {
    src: publicAsset('/images/AR%20Garden/Capture%20d%27%C3%A9cran%202026-10-14%20210256.png'),
    alt: 'A virtual watering can appears over the AR garden.',
    title: 'Water the plants',
  },
  {
    src: publicAsset('/images/AR%20Garden/Capture%20d%27%C3%A9cran%202026-10-14%20210421.png'),
    alt: 'The garden with flowers and a watering can placed in the scene.',
    title: 'Watch the garden grow',
  },
]

export default function ARGardenPage() {
  return (
    <div className="ar-garden-shell">
      <SiteHeader projectsPage />
      <main className="ar-garden-page">
        <nav className="case-breadcrumb" aria-label="Breadcrumb">
          <a href={sitePath('/')}>Home</a><span aria-hidden="true">/</span><a href={sitePath('/projects')}>Projects</a><span aria-hidden="true">/</span><span aria-current="page">AR Garden</span>
        </nav>

        <header className="ar-garden-hero" id="ar-garden-top">
          <div className="ar-garden-hero-copy">
            <p className="ar-garden-eyebrow">IMMERSIVE EXPERIENCE · HUMAN-COMPUTER INTERACTION</p>
            <h1>AR <span>Garden</span></h1>
            <p className="ar-garden-subtitle">Bringing gardening into an interactive virtual world.</p>
            <div className="ar-garden-tags" aria-label="Project technologies and themes">
              <span>Unity</span><span>Vuforia</span><span>AR</span><span>Interactive Experience</span>
            </div>
            <dl className="ar-garden-meta">
              <div><dt>My contribution</dt><dd>Designer</dd></div>
              <div><dt>Context</dt><dd>University project</dd></div>
              <div><dt>Duration</dt><dd>1.5 months</dd></div>
              <div><dt>Tools</dt><dd>Unity, Vuforia</dd></div>
              <div><dt>Team</dt><dd>2 people</dd></div>
            </dl>
          </div>
          <figure className="ar-garden-hero-image">
            <img
              src={publicAsset('/images/AR%20Garden/image.png')}
              alt="Full view of the 3D garden with cherry blossom trees, grass, a stone fountain, stepping-stone paths, flowers, and a wooden fence."
              fetchPriority="high"
            />
            <figcaption>AR Garden · 3D environment</figcaption>
          </figure>
        </header>

        <SectionNav items={arGardenNav} />

        <section className="ar-garden-about" id="ar-garden-about" aria-labelledby="ar-garden-about-title">
          <p className="ar-garden-section-kicker">01 / ABOUT THE PROJECT</p>
          <div className="ar-garden-about-grid">
            <h2 id="ar-garden-about-title">A garden you can <em>play in.</em></h2>
            <p>AR Garden is an interactive gardening experience designed to let users explore the joy of gardening in a virtual environment. Through playful interactions, users can manipulate gardening tools, plant seeds, water plants, and engage with the elements of a garden. The project explores how immersive technologies can transform everyday activities into engaging digital experiences.</p>
          </div>
        </section>

        <section className="ar-garden-experience" id="ar-garden-experience" aria-labelledby="ar-garden-experience-title">
          <div className="ar-garden-section-heading">
            <div>
              <p className="ar-garden-section-kicker">02 / THE EXPERIENCE</p>
              <h2 id="ar-garden-experience-title">Explore. Interact. <em>Grow.</em></h2>
            </div>
            <p>Three simple actions guide the experience.</p>
          </div>
          <ol className="ar-garden-steps">
            {experienceSteps.map(([number, title, description]) => (
              <li key={number}>
                <span className="ar-garden-step-number">{number}</span>
                <span className="ar-garden-step-icon" aria-hidden="true">{number === '01' ? '↗' : number === '02' ? '✳' : '✶'}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="ar-garden-technology" id="ar-garden-technology" aria-labelledby="ar-garden-technology-title">
          <div className="ar-garden-section-heading">
            <div>
              <p className="ar-garden-section-kicker">03 / TECHNOLOGY</p>
              <h2 id="ar-garden-technology-title">Built with <em>purpose.</em></h2>
              <p className="ar-garden-tech-note">Garden elements were sourced from Sketchfab and the Unity Asset Store. Blender was used to adjust textures and colors to fit the scene.</p>
            </div>
          </div>
          <ul className="ar-garden-tech-list">
            {technologies.map(([name, description], index) => (
              <li key={name}>
                <span className="ar-garden-tech-number">0{index + 1}</span>
                <div><h3>{name}</h3><p>{description}</p></div>
                <span className="ar-garden-tech-arrow" aria-hidden="true">↗</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="ar-garden-gallery" id="ar-garden-visuals" aria-labelledby="ar-garden-gallery-title">
          <div className="ar-garden-section-heading">
            <div>
              <p className="ar-garden-section-kicker">04 / PROJECT VISUALS</p>
              <h2 id="ar-garden-gallery-title">A closer <em>look.</em></h2>
            </div>
          </div>
          <div className="ar-garden-gallery-grid">
            {gardenGallery.map((item) => (
              <figure className="ar-garden-gallery-card" key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
            <figure className="ar-garden-tools-card">
              <img src={publicAsset('/images/AR%20Garden/image2.png')} alt="Virtual shovel, watering can, and seeds used in the garden experience." loading="lazy" />
              <figcaption>Gardening tools &amp; objects</figcaption>
            </figure>
            <figure className="ar-garden-video-card">
              <video controls preload="metadata" poster={publicAsset('/images/AR%20Garden/image.png')} aria-label="AR Garden project video">
                <source src={publicAsset('/images/AR%20Garden/AR_video.mp4')} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <figcaption>AR Garden · project video</figcaption>
            </figure>
          </div>
        </section>

        <nav className="food-case-pagination ar-garden-pagination" aria-label="Project navigation">
          <a href={sitePath('/projects')}>All projects</a>
          <a href={sitePath('/projects/chorify')}>Next project: Chorify</a>
          <a href="#ar-garden-top">Back to top</a>
        </nav>
      </main>
      <Footer />
    </div>
  )
}
