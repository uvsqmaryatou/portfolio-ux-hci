import { publicAsset } from './publicAsset.js'
import { useEffect, useRef, useState } from 'react'
import { sitePath } from './sitePath.js'
import { Footer, SiteHeader } from './Classic.jsx'

const museumNav = [
  ['museum-context', 'Overview', '01'],
  ['museum-japanese', 'Japanese room', '02'],
  ['museum-build', 'Tools & making', '03'],
  ['museum-tour', 'Museum tour', '04'],
  ['museum-simon', 'Audio & Simon Says', '05'],
  ['museum-reflection', 'Reflection', '06'],
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
    <nav className="snav snav--museum" aria-label="On this page">
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

const japaneseGallery = [
  {
    src: publicAsset('/images/VR%20museum/JAP%27.png'),
    alt: 'Wide view through the Japanese exhibition, with timber framing, shoji-style walls, tatami mats, and display pedestals.',
    caption: 'A clear central route through the exhibition',
    className: 'museum-gallery-wide',
  },
  {
    src: publicAsset('/images/VR%20museum/jap.png'),
    alt: 'Framed artwork and collectible objects displayed against the shoji-style wall.',
    caption: 'Artworks and objects along the shoji walls',
    className: 'museum-gallery-tall',
  },
  {
    src: publicAsset('/images/VR%20museum/JAP3.png'),
    alt: 'A view along the Japanese gallery showing framed artworks, tatami flooring, timber beams, and display pedestals.',
    caption: 'Timber structure, wall pieces, and tatami flooring',
    className: 'museum-gallery-wide',
  },
  {
    src: publicAsset('/images/VR%20museum/jap2.png'),
    alt: 'Collectible swords displayed on wooden exhibition shelves.',
    caption: 'Selected artifacts on the display shelves',
    className: 'museum-gallery-tall',
  },
]

export default function VRMuseumPage() {
  return (
    <div className="vr-museum-shell">
      <SiteHeader projectsPage />
      <main className="vr-museum-page">
        <nav className="case-breadcrumb" aria-label="Breadcrumb">
          <a href={sitePath('/')}>Home</a><span aria-hidden="true">/</span><a href={sitePath('/projects')}>Projects</a><span aria-hidden="true">/</span><span aria-current="page">VR Museum</span>
        </nav>

        <header className="museum-hero" id="museum-top">
          <div className="museum-hero-copy">
            <p className="museum-eyebrow">COLLABORATIVE PROJECT · UNITY · VIRTUAL REALITY</p>
            <h1>VR <em>Museum</em></h1>
            <p className="museum-subtitle">Designing an immersive Japanese exhibition in virtual reality.</p>
            <p className="museum-intro">A collaborative Unity museum bringing together <strong>three themed spaces</strong>: Japan, Marvel / Star Wars, and video games. My personal contribution focused on designing and developing the <strong>Japanese exhibition room</strong>.</p>
            <dl className="museum-meta">
              <div><dt>Context</dt><dd>University project</dd></div>
              <div><dt>Role</dt><dd>Designer / developer</dd></div>
              <div><dt>Duration</dt><dd>1.5 months</dd></div>
              <div><dt>Tools</dt><dd>Unity</dd></div>
            </dl>
            <div className="museum-tags" aria-label="Project disciplines">
              <span>Unity</span><span>Virtual Reality</span><span>3D Environment Design</span>
            </div>
          </div>
          <figure className="museum-hero-image">
            <img
              src={publicAsset('/images/VR%20museum/Capture%20d%27%C3%A9cran%202026-09-28%20181002.png')}
              alt="Preview of the Japanese exhibition room in the VR museum, with tatami flooring, shoji-style walls, and display pedestals."
              fetchPriority="high"
            />
            <figcaption>Japanese exhibition · in-experience view</figcaption>
          </figure>
        </header>

        <SectionNav items={museumNav} />

        <section className="museum-context" id="museum-context" aria-labelledby="museum-context-title">
          <div className="museum-context-copy">
            <p className="museum-eyebrow">01 / CONTEXT &amp; CONCEPT</p>
            <h2 id="museum-context-title">Three worlds, <em>one museum.</em></h2>
            <p>The collaborative project brings three distinct collections together in one virtual museum: <strong>Japanese culture</strong>, <strong>Marvel / Star Wars</strong>, and <strong>video games</strong>. Each theme has its own exhibition space.</p>
            <p>My work centered on the <strong>Japanese room</strong>. Wooden structures, shoji-style grid walls, tatami flooring, framed artwork, pedestals, and collectibles shape its visual language.</p>
            <ul className="museum-theme-list" aria-label="Museum exhibition themes">
              <li>Japanese culture</li><li>Marvel / Star Wars</li><li>Video games</li>
            </ul>
          </div>
          <figure className="museum-context-image">
            <img src={publicAsset('/images/VR%20museum/image.png')} alt="Unity scene view of the complete Japanese room, showing the tatami layout, central pedestals, wall displays, and timber framing." loading="lazy" />
            <figcaption>Complete room layout · Japanese exhibition</figcaption>
          </figure>
        </section>

        <section className="museum-gallery" id="museum-japanese" aria-labelledby="museum-gallery-title">
          <div className="museum-section-heading">
            <p className="museum-eyebrow">02 / MY CONTRIBUTION · JAPANESE ROOM</p>
            <h2 id="museum-gallery-title">A room for <em>discovery.</em></h2>
            <p>The <strong>open central route</strong> leads visitors past the displays, while artworks and objects remain visible around the room.</p>
          </div>
          <div className="museum-gallery-grid">
            {japaneseGallery.map((item, index) => (
              <figure className={`museum-gallery-item ${item.className} museum-gallery-item--${index + 1}`} key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption><span>0{index + 1}</span>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="museum-gallery-observation">
            <span>SPATIAL COMPOSITION</span>
            <p>The tatami forms a <strong>central axis</strong> with pedestals placed along it. Framed pieces line the shoji walls, while smaller artifacts sit on dedicated shelves. Warm timber contrasts with the lighter wall panels and mats.</p>
          </div>
        </section>

        <section className="museum-build" id="museum-build" aria-labelledby="museum-build-title">
          <div className="museum-build-heading">
            <p className="museum-eyebrow">03 / TOOLS &amp; MAKING</p>
            <h2 id="museum-build-title">What I made, textured, <em>and sourced.</em></h2>
            <p>I used <strong>Unity</strong> and the <strong>XR Interaction Toolkit</strong> to build the VR experience. My room work combined original models, object finishing, and a sourced room asset.</p>
            <div className="museum-tool-chips" aria-label="Technologies used">
              <span>Unity</span><span>XR Interaction Toolkit</span><span>Blender</span><span>Sketchfab</span>
            </div>
          </div>
          <div className="museum-work-grid">
            <article className="museum-work-card museum-work-card--craft">
              <div className="museum-work-card-copy">
                <span className="museum-work-number">01 / MODELLED BY ME</span>
                <h3>Built from scratch</h3>
                <p>I modelled the <strong>sword shelf</strong> and the <strong>exhibition pedestals</strong> from scratch in Blender. The cases and stands give the objects a clear place in the room.</p>
              </div>
              <div className="museum-work-pair">
                <figure>
                  <img src={publicAsset('/images/VR%20museum/jap2.png')} alt="The wooden shelf I modelled from scratch, displaying swords and other artifacts." loading="lazy" />
                  <figcaption>Sword shelf</figcaption>
                </figure>
                <figure>
                  <img src={publicAsset('/images/VR%20museum/jap.png')} alt="Pedestals and cases I modelled from scratch for the Japanese room exhibits." loading="lazy" />
                  <figcaption>Display pedestals</figcaption>
                </figure>
              </div>
            </article>
            <article className="museum-work-card museum-work-card--blender">
              <div className="museum-work-card-copy">
                <span className="museum-work-number">02 / FINISHED IN BLENDER</span>
                <h3>Textures &amp; color</h3>
                <p>I used <strong>Blender</strong> to texture and color the swords and other objects on display.</p>
              </div>
              <figure className="museum-work-single-image">
                <img src={publicAsset('/images/VR%20museum/JAP3.png')} alt="Textured objects and framed artwork arranged in the Japanese exhibition." loading="lazy" />
                <figcaption>Exhibited objects in the finished room</figcaption>
              </figure>
            </article>
            <article className="museum-work-card museum-work-card--sketchfab">
              <div className="museum-work-card-copy">
                <span className="museum-work-number">03 / SOURCED ASSET</span>
                <h3>Room from Sketchfab</h3>
                <p>I found the <strong>Japanese room itself</strong> on Sketchfab and arranged my original exhibits within it.</p>
              </div>
              <figure className="museum-work-single-image">
                <img src={publicAsset('/images/VR%20museum/image.png')} alt="Japanese room environment sourced from Sketchfab, with the exhibition arranged in Unity." loading="lazy" />
                <figcaption>Room asset arranged in Unity</figcaption>
              </figure>
            </article>
          </div>
        </section>

        <section className="museum-tour" id="museum-tour" aria-labelledby="museum-tour-title">
          <div className="museum-section-heading">
            <p className="museum-eyebrow">04 / THE COMPLETE MUSEUM</p>
            <h2 id="museum-tour-title">Step inside <em>the project.</em></h2>
            <p>A recorded tour of the collaborative museum and its themed spaces.</p>
          </div>
          <figure className="museum-tour-video">
            <video controls preload="metadata" poster={publicAsset('/images/VR%20museum/Capture%20d%27%C3%A9cran%202026-09-28%20181002.png')} aria-label="Tour of the complete collaborative VR museum">
              <source src={publicAsset('/images/VR%20museum/museum_tour%20%281%29.mp4')} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
            <figcaption>VR Museum · complete collaborative tour</figcaption>
          </figure>
        </section>

        <section className="museum-simon" id="museum-simon" aria-labelledby="museum-simon-title">
          <div className="museum-simon-copy">
            <p className="museum-eyebrow">05 / SPATIAL AUDIO &amp; INTERACTION</p>
            <h2 id="museum-simon-title">A simple game of <em>Simon Says.</em></h2>
            <p>I used <strong>3D audio</strong> as part of the museum experience and created a simple <strong>Simon Says game</strong>. Players watch a sequence of colors, then repeat it using the response buttons.</p>
          </div>
          <div className="museum-simon-media">
            <figure className="museum-simon-screenshot">
              <div className="museum-simon-frame">
                <img src={publicAsset('/images/VR%20museum/Capture%20d%27%C3%A9cran%202026-09-28%20181146.png')} alt="The Simon Says color-sequence game displayed on the Japanese room's shoji wall." loading="lazy" />
              </div>
              <figcaption>Simon Says · in-room game view</figcaption>
            </figure>
            <figure className="museum-simon-video">
              <video controls preload="metadata" poster={publicAsset('/images/VR%20museum/Capture%20d%27%C3%A9cran%202026-09-28%20181146.png')} aria-label="Video of the Simon Says game">
                <source src={publicAsset('/images/VR%20museum/game%20%281%29.mp4')} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <figcaption>Simon Says · gameplay video</figcaption>
            </figure>
          </div>
        </section>

        <section className="museum-reflection" id="museum-reflection" aria-labelledby="museum-reflection-title">
          <p className="museum-eyebrow">06 / REFLECTION</p>
          <h2 id="museum-reflection-title">Making space for <em>objects.</em></h2>
          <p>Designing an exhibition for VR made <strong>spatial composition</strong> central to the work. The room needed to feel coherent while keeping each artwork and collectible visible from the visitor’s viewpoint. A consistent palette of <strong>wood, shoji grids, and tatami</strong> brings the different displays together.</p>
        </section>

        <figure className="museum-closing-image">
          <img src={publicAsset('/images/VR%20museum/JAP%27.png')} alt="Wide view of the Japanese exhibition's tatami room, wooden architecture, and display pedestals." loading="lazy" />
          <figcaption>Japanese exhibition · VR Museum</figcaption>
        </figure>

        <nav className="food-case-pagination museum-pagination" aria-label="Project navigation">
          <a href={sitePath('/projects')}>← All projects</a>
          <a href={sitePath('/projects/zoom-promax')}>Next project · ZoomEvenMore →</a>
          <a href="#museum-top">Back to top ↑</a>
        </nav>
      </main>
      <Footer />
    </div>
  )
}
