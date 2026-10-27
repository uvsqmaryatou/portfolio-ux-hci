import { publicAsset } from './publicAsset.js'
import { sitePath } from './sitePath.js'
import { useEffect, useRef, useState } from 'react'
import './App.css'
import './PosterPal.css'
import './ZenRooms.css'
import './ZoomProMax.css'
import './MyLibrary.css'
import './Chorify.css'
import './ChorifyResearch.css'
import './Polish.css'
import './ARGarden.css'
import './VRMuseum.css'
import { ChResearchSection, ChPaperSection } from './ChorifyResearch.jsx'
import { SiteHeader, Footer, HomePage, ProjectsPage } from './Classic.jsx'
import ARGardenPage from './ARGarden.jsx'
import VRMuseumPage from './VRMuseum.jsx'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d="M4 10h11M10 5l5 5-5 5" />
    </svg>
  )
}

function FoodDimensionsDiagram() {
  const [expanded, setExpanded] = useState(false)
  const [paperExpanded, setPaperExpanded] = useState(false)

  return (
    <div className="food-dimensions-gallery">
      <figure className={`food-digital-diagram${expanded ? ' food-digital-diagram--expanded' : ''}`}>
        <div className="food-digital-diagram-image">
          <img
            id="food-digital-diagram-image"
            src={publicAsset('/images/FoodCharm/diagram_vrai.png')}
            alt="Food Charm design dimensions diagram. It compares keychain and fridge concepts across system trigger, input technology, user-centric giving, degree of communication, urgency of communication, and simplicity of locating."
            width="1536"
            height="1024"
            loading="lazy"
          />
        </div>
        <figcaption>
          <span>Digital design-dimensions diagram</span>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls="food-digital-diagram-image"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show compact view' : 'Expand diagram'}
          </button>
        </figcaption>
      </figure>

      <figure className={`food-paper-diagram${paperExpanded ? ' food-paper-diagram--expanded' : ''}`}>
        <img
          id="food-paper-diagram-image"
          src={publicAsset('/images/FoodCharm/diagram_papier.png')}
          alt="Photograph of the original handwritten paper version of the Food Charm design-dimensions diagram"
          width="535"
          height="539"
          loading="lazy"
        />
        <figcaption>
          <div>
            <strong>Original paper version</strong>
          </div>
          <button
            type="button"
            aria-expanded={paperExpanded}
            aria-controls="food-paper-diagram-image"
            onClick={() => setPaperExpanded(!paperExpanded)}
          >
            {paperExpanded ? 'Show compact view' : 'Expand paper diagram'}
          </button>
        </figcaption>
      </figure>
    </div>
  )
}

function useCaseReveal() {
  useEffect(() => {
    const page = document.querySelector('.food-charm-page')
    if (!page || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      return undefined
    }

    const sections = page.querySelectorAll('.food-case-section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('food-case-section--visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' })

    page.classList.add('food-reveal-ready')
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      page.classList.remove('food-reveal-ready')
    }
  }, [])
}

function SectionNav({ items, theme = '' }) {
  const [active, setActive] = useState(null)
  const [progress, setProgress] = useState(0)
  const [pill, setPill] = useState({ left: 0, width: 0 })
  const trackRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      let current = null
      items.forEach(([id]) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id
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
    <nav className={`snav ${theme}`} aria-label="On this page">
      <div className="snav-track" ref={trackRef}>
        <span className="snav-pill" style={{ transform: `translateX(${pill.left}px)`, width: pill.width, opacity: active ? 1 : 0 }} aria-hidden="true" />
        {items.map(([id, label, number]) => (
          <a
            key={id}
            href={`#${id}`}
            data-id={id}
            className={active === id ? 'is-active' : ''}
            aria-current={active === id ? 'true' : undefined}
          >
            <span>{number}</span>{label}
          </a>
        ))}
      </div>
      <span className="snav-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </nav>
  )
}

const foodNav = [
  ['overview', 'Overview', '01'],
  ['research', 'Research', '02'],
  ['scenario-mapping', 'Scenarios', '03'],
  ['concept-development', 'Concept', '04'],
  ['participatory-design', 'Participatory', '05'],
  ['final-concept', 'Final concept', '06'],
]

const posterNav = [
  ['poster-interviews', 'Interviews', '01'],
  ['poster-ai-limitations', 'AI limits', '02'],
  ['poster-concept', 'Concept', '03'],
  ['poster-design-exploration', 'Prototype', '04'],
  ['poster-wizard-of-oz', 'Wizard of Oz', '05'],
  ['poster-final-product', 'Final product', '06'],
]

const zenNav = [
  ['zen-overview', 'Overview', '01'],
  ['zen-challenge', 'Challenge', '02'],
  ['zen-flow', 'Flow', '03'],
  ['zen-interactions', 'Interactions', '04'],
  ['zen-feedback', 'Feedback', '05'],
  ['zen-implementation', 'Implementation', '06'],
  ['zen-gallery', 'Gallery', '07'],
]

const zpmNav = [
  ['zpm-overview', 'Overview', '01'],
  ['zpm-challenge', 'Challenge', '02'],
  ['zpm-layout', 'Layout', '03'],
  ['zpm-agenda', 'Agenda', '04'],
  ['zpm-prototype', 'Prototype', '05'],
]

function FoodCharmPage() {
  useCaseReveal()

  return (
    <div className="food-charm-shell">
      <SiteHeader projectsPage />
      <main className="food-charm-page">
        <nav className="case-breadcrumb" aria-label="Breadcrumb">
          <a href={sitePath('/')}>Home</a><span aria-hidden="true">/</span><a href={sitePath('/projects')}>Projects</a><span aria-hidden="true">/</span><span aria-current="page">Food Charm</span>
        </nav>

        <header className="food-case-hero">
          <div className="food-case-heading">
            <p className="eyebrow">UX/UI · FOOD &amp; DINING · CASE STUDY</p>
            <h1>Food <span>Charm</span></h1>
            <p className="food-case-lede">A proximity-based food-sharing concept built around a connected keychain, helping nearby community members share surplus food.</p>
          </div>
          <img
            className="food-case-banner"
            src={publicAsset('/images/FoodCharm/banner.png')}
            alt="Food Charm keychain concept with a nearby food-sharing alert and community food locker"
            fetchPriority="high"
          />
          <dl className="food-project-meta">
            <div><dt>My contribution</dt><dd>Designer</dd></div>
            <div><dt>Duration</dt><dd>1.5 months</dd></div>
            <div><dt>Team</dt><dd>5 people</dd></div>
            <div><dt>Project context</dt><dd>University project</dd></div>
            <div><dt>Project type</dt><dd>UX/UI food-sharing concept</dd></div>
          </dl>
        </header>

        <SectionNav items={foodNav} theme="snav--food" />

        <section className="food-case-section" id="overview">
          <div className="food-section-label"><span>01</span><p>Overview &amp; Design Challenge</p></div>
          <div className="food-section-content food-overview-layout">
            <div>
              <h2>Starting with the <span>challenge.</span></h2>
              <p>Food sharing can help communities make better use of surplus food, but how can we make the process more accessible, convenient, and social?</p>
              <p>Food Charm explores a proximity-based food-sharing system built around a connected keychain, allowing nearby community members to share food through a simple, interactive experience.</p>
            </div>
            <aside className="food-note">
              <p className="eyebrow">Project details</p>
              <p><strong>Role:</strong> HCI - UX Design - Collaborative Team Project</p>
              <p><strong>Process:</strong> User Interviews, Problem Identification, Scenario Mapping, Design Dimensions, Prototyping, Concept Development</p>
              <p><strong>Deliverable:</strong> Food-sharing service concept and connected keychain design</p>
            </aside>
          </div>
        </section>

        <section className="food-case-section" id="research">
          <div className="food-section-label"><span>02</span><p>User Research &amp; Key Problems</p></div>
          <div className="food-section-content">
            <div className="food-section-heading">
              <h2>What people <span>need.</span></h2>
            </div>
            <div className="food-evidence-grid">
              <article className="food-evidence-card">
                <span className="food-card-index">A</span>
                <h3>User interviews</h3>
                <div className="food-interview-quotes">
                  <figure>
                    <blockquote>“I didn’t cook much at that time because I was too busy with the moving process. I didn’t have the time, even if I wanted to cook.”</blockquote>
                    <figcaption>— a student moving from their house to their student accomodation</figcaption>
                  </figure>
                  <figure>
                    <blockquote>“Yes, I feel very guilty when I have to throw food away”</blockquote>
                    <figcaption>— a student who has avery small fridge</figcaption>
                  </figure>
                  <figure>
                    <blockquote>“Sometimes they reply late. So by the time they reply the food is no longer good.”</blockquote>
                    <figcaption>— an indonesian food seller</figcaption>
                  </figure>
                </div>
              </article>
              <article className="food-evidence-card food-evidence-card--problems">
                <span className="food-card-index">B</span>
                <h3>Key problems</h3>
                <ol className="food-problem-list">
                  <li>Fragmented food-sharing networks</li>
                  <li>Time-sensitive food surplus</li>
                  <li>Limited access to affordable food</li>
                  <li>Barriers to participation</li>
                </ol>
              </article>
            </div>
            <section className="food-research-insights" aria-labelledby="food-research-insights-title">
              <div className="food-research-insights-heading">
                <h3 id="food-research-insights-title">Research insights</h3>
                <span>Provisional · not verified against source materials</span>
              </div>
              <div className="food-insight-groups">
                <article className="food-insight-group">
                  <h4>Breakdowns</h4>
                  <ul>
                    <li>Difficulty identifying available surplus food.</li>
                    <li>Uncertainty about food freshness and availability.</li>
                    <li>Challenges coordinating food exchanges.</li>
                    <li>Difficulty locating food for collection.</li>
                    <li>Delays in communicating food availability.</li>
                  </ul>
                </article>
                <article className="food-insight-group">
                  <h4>Workarounds</h4>
                  <ul>
                    <li>Manually notifying others about surplus food.</li>
                    <li>Using direct communication to share food information.</li>
                    <li>Arranging collection individually.</li>
                    <li>Providing addresses or directions to locate food.</li>
                    <li>Coordinating pickup times manually.</li>
                  </ul>
                </article>
                <article className="food-insight-group">
                  <h4>Design Opportunities</h4>
                  <ul>
                    <li>Real-time food availability alerts.</li>
                    <li>Simple food reservation through the keychain.</li>
                    <li>Clear information about available food.</li>
                    <li>A designated community food locker.</li>
                    <li>QR-code-based food collection.</li>
                  </ul>
                </article>
              </div>
            </section>
          </div>
        </section>

        <section className="food-case-section" id="scenario-mapping">
          <div className="food-section-label"><span>03</span><p>Scenario Mapping</p></div>
          <div className="food-section-content food-exploration">
            <div className="food-personas-intro">
              <span className="food-exploration-index">THREE USER PERSONAS</span>
              <h2>Different people, one <span>shared system.</span></h2>
              <p>We used personas to represent different relationships with food and make sure the concept could serve both people sharing surplus and people looking for food.</p>
            </div>
            <div className="food-persona-grid">
              <article className="food-persona-card">
                <span className="food-persona-number">01 / DONOR</span>
                <img className="food-persona-image" src={publicAsset('/images/PosterPal/richie.png')} alt="Portrait representing Richie, a student with surplus food to share" />
                <h3>Richie</h3>
                <p className="food-persona-role">A well-off student</p>
                <p>Richie does not struggle to afford food and tends to buy more than he needs. As a result, some of his food goes bad before he can eat it.</p>
                <span className="food-persona-need">Need: an easy way to share extra food before it is wasted.</span>
              </article>
              <article className="food-persona-card food-persona-card--highlight">
                <span className="food-persona-number">02 / RECIPIENT</span>
                <img className="food-persona-image" src={publicAsset('/images/PosterPal/Brooke.png')} alt="Portrait representing Brooke, a student looking for affordable food nearby" />
                <h3>Brooke</h3>
                <p className="food-persona-role">An extreme student persona</p>
                <p>Brooke represents a student who does not have enough money to afford food throughout every month. This extreme persona helps keep affordability and access in focus.</p>
                <span className="food-persona-need">Need: timely, nearby access to food she can afford.</span>
              </article>
              <article className="food-persona-card">
                <span className="food-persona-number">03 / DONOR</span>
                <img className="food-persona-image" src={publicAsset('/images/PosterPal/lucc.png')} alt="Portrait representing Luc, a restaurant owner with end-of-day surplus food" />
                <h3>Luc</h3>
                <p className="food-persona-role">A restaurant owner</p>
                <p>Luc has surplus food at the end of the day and needs a practical way to let people nearby know it is available.</p>
                <span className="food-persona-need">Need: quickly offer end-of-day surplus to the community.</span>
              </article>
            </div>
            <div className="food-scenario-heading">
              <span className="food-exploration-index">SCENARIOS / FOOD ALERT TO PICKUP</span>
              <h2>Two ways to <span>share food.</span></h2>
            </div>
            <div className="food-scenario-stories">
              <article className="food-scenario-story">
                <div className="food-scenario-story-heading">
                  <span className="food-persona-number">SCENARIO 01</span>
                  <h3>Richie shares what he cannot finish</h3>
                </div>
                <ol className="food-scenario-flow">
                  <li><span>01</span><p><strong>Richie has surplus food</strong> that may go bad before he can eat it.</p></li>
                  <li><span>02</span><p><strong>He uses his keychain to offer it</strong> and sends a food alert to people nearby.</p></li>
                  <li><span>03</span><p><strong>Brooke receives an alert</strong> that food is available in her vicinity.</p></li>
                  <li><span>04</span><p><strong>Brooke goes to collect it</strong> from the designated food locker.</p></li>
                </ol>
              </article>
              <article className="food-scenario-story">
                <div className="food-scenario-story-heading">
                  <span className="food-persona-number">SCENARIO 02</span>
                  <h3>Luc shares end-of-day surplus</h3>
                </div>
                <ol className="food-scenario-flow">
                  <li><span>01</span><p><strong>Luc has surplus food</strong> left at his restaurant at the end of the day.</p></li>
                  <li><span>02</span><p><strong>He creates a food alert</strong> to let people nearby know it is available.</p></li>
                  <li><span>03</span><p><strong>Brooke receives the alert</strong> about food available in her vicinity.</p></li>
                  <li><span>04</span><p><strong>Brooke goes to collect it</strong> from the designated food locker.</p></li>
                </ol>
              </article>
            </div>
          </div>
        </section>

        <section className="food-case-section" id="concept-development">
          <div className="food-section-label"><span>04</span><p>Concept Development &amp; Design Dimensions</p></div>
          <div className="food-section-content food-exploration">
            <div className="food-concept-evolution" aria-label="Food Charm concept evolution">
              <figure className="food-prototype-card food-prototype-card--fridge">
                <div className="food-prototype-image-wrap">
                  <img
                    src={publicAsset('/images/FoodCharm/image.png')}
                    alt="Paper prototype of a smart fridge food-sharing interface attached to a refrigerator"
                    loading="lazy"
                  />
                </div>
                <figcaption className="food-prototype-caption">
                  <span className="food-exploration-index">01 / FIRST DIRECTION</span>
                  <h3>Start with a smart fridge</h3>
                  <p>Our first idea placed food-sharing information on a shared fridge: a familiar place to see what was available and coordinate a pickup.</p>
                </figcaption>
              </figure>

              <div className="food-evolution-arrow" aria-hidden="true">
                <span>RETHINK</span>
                <svg viewBox="0 0 48 20"><path d="M1 10h43M36 2l8 8-8 8" /></svg>
              </div>

              <article className="food-prototype-card food-prototype-card--keychain">
                <div className="food-prototype-caption">
                  <span className="food-exploration-index">02 / A MORE PERSONAL INTERACTION</span>
                  <h3>Explore a keychain</h3>
                  <p>We shifted the interaction from a fixed appliance to a small device people could carry. The keychain first alerts people to available food, then lets them scan it to continue the exchange.</p>
                </div>
                <div className="food-keychain-prototypes">
                  <figure>
                    <img
                      src={publicAsset('/images/FoodCharm/keychain_foodalert.png')}
                      alt="Handmade paper keychain prototype showing a new food alert"
                      loading="lazy"
                    />
                    <figcaption>1. Receive a food alert</figcaption>
                  </figure>
                  <figure>
                    <img
                      src={publicAsset('/images/FoodCharm/keychain_scan.png')}
                      alt="Paper prototype exploring how the Food Charm keychain scans or identifies shared food"
                      loading="lazy"
                    />
                    <figcaption>2. Scan the food</figcaption>
                  </figure>
                </div>
              </article>
            </div>

            <figure className="food-storyboard">
              <figcaption className="food-storyboard-caption">
                <span className="food-exploration-index">FIRST CONCEPT / SMART FRIDGE</span>
                <h3>How the fridge idea could work</h3>
                <p>The storyboard follows the first direction: the fridge detects food, alerts the user, shares details and lets them upload an item to the system.</p>
              </figcaption>
              <img
                src={publicAsset('/images/FoodCharm/fridge_sb.png')}
                alt="Four-frame smart-fridge storyboard: the fridge detects food, sends an alert, shows food details and expiration, and lets the user upload the food"
                loading="lazy"
              />
            </figure>

            <article className="food-exploration-step food-dimensions-step">
              <div className="food-exploration-copy">
                <span className="food-exploration-index">03 / COMPARING THE DIRECTIONS</span>
                <h2>Design <span>dimensions.</span></h2>
                <p>After exploring both concepts, we compared the fridge and keychain across six design dimensions: system trigger, input technology, user-centric giving, communication, urgency, and ease of locating food. This helped us make the trade-offs visible and refine the keychain direction.</p>
                <p className="food-diagram-legend"><span><i className="food-legend-keychain" /> Keychain</span><span><i className="food-legend-fridge" /> Fridge</span></p>
              </div>
              <FoodDimensionsDiagram />
            </article>

            <aside className="food-direction-rationale">
              <span className="food-rationale-mark" aria-hidden="true">→</span>
              <div>
                <p className="eyebrow">Why we kept the keychain</p>
                <h3>More accessible. Easier to use.</h3>
                <p>The team chose the keychain direction because it felt more accessible and straightforward to use. Unlike a fixed shared fridge, a portable keychain can stay with the person and make the interaction easier to reach in everyday situations.</p>
              </div>
            </aside>

          </div>
        </section>

        <section className="food-case-section" id="participatory-design">
          <div className="food-section-label"><span>05</span><p>Participatory Design</p></div>
          <div className="food-section-content food-participatory-content">
            <figure className="food-workshop-instructions">
              <img
                src={publicAsset('/images/FoodCharm/pd_instructions.png')}
                alt="Participatory design workshop instructions showing two activities: customize a paper keychain and debate keychain versus app and centralized pickup versus peer-to-peer exchange"
                loading="lazy"
              />
              <figcaption>
                <span>Original participatory-design instruction sheet</span>
              </figcaption>
            </figure>
            <div className="food-participatory-copy">
              <div className="food-participatory-intro">
                <span className="food-exploration-index">TWO SIMPLE ACTIVITIES</span>
                <h2>Designing <span>together.</span></h2>
                <p>We invited our classmates to take part in a simple participatory-design session and share their perspectives on the concept.</p>
              </div>
              <article className="food-participatory-activity">
                <span>01</span>
                <div>
                  <h3>Customize a keychain</h3>
                  <p>Classmates personalized a paper keychain with their food preferences, then discussed their grocery habits and whether they would share food with someone they met.</p>
                </div>
              </article>
              <article className="food-participatory-activity">
                <span>02</span>
                <div>
                  <h3>Debate design choices</h3>
                  <p>In small groups, they debated keychain vs. app and shared pickup points vs. peer-to-peer exchange, then compared conclusions with classmates from other teams.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="food-case-section" id="final-concept">
          <div className="food-section-label"><span>06</span><p>The Final Concept — Food Charm</p></div>
          <div className="food-section-content">
            <div className="food-section-heading">
              <h2>The concept, <span>in context.</span></h2>
              <p>The final direction brings together a portable keychain, a nearby food locker, and a simple flow for offering, reserving, and collecting food.</p>
            </div>
            <figure className="food-storyboard food-storyboard--final">
              <figcaption className="food-storyboard-caption">
                <span className="food-exploration-index">FINAL CONCEPT / KEYCHAIN + LOCKER</span>
                <h3>From finding food to finding food-friends</h3>
                <p>The final storyboard shows the keychain experience end to end: finding a locker, scanning its QR code, receiving a nearby-food alert, collecting food and connecting with other food-sharing neighbours.</p>
              </figcaption>
              <img
                src={publicAsset('/images/FoodCharm/kc_sb.png')}
                alt="Eight-frame Food Charm storyboard showing Richie finding a locker and scanning its QR code, Brooke receiving a nearby-food alert and collecting food, and the two becoming food-friends"
                loading="lazy"
              />
            </figure>
            <h3 className="food-final-flow-title">The keychain interaction, step by step</h3>
            <img
              className="food-transition-image"
              src={publicAsset('/images/FoodCharm/steps.png')}
              alt="Five-step Food Charm interaction journey, from connecting keychains in proximity through collecting food from a locker"
              loading="lazy"
            />
          </div>
        </section>

        <nav className="food-case-pagination" aria-label="Project navigation">
          <a href={sitePath('/projects')}>All projects</a>
          <a href={sitePath('/projects/posterpal')}>Next project: PosterPal</a>
          <a href="#top">Back to top</a>
        </nav>
      </main>
      <Footer />
    </div>
  )
}

const posterAssets = {
  paperPrototype: [
    {
      image: publicAsset('/images/PosterPal/pp1.jpeg'),
      aspectRatio: '655 / 921',
      alt: 'Paper prototype photo of the Mood Board screen, showing Basic Information, Related Files, and Crucial Information',
      label: '01 — Define',
      captionVerb: 'Capture',
      captionRest: 'project context, references, and essential poster information.',
    },
    {
      image: publicAsset('/images/PosterPal/pp2.jpeg'),
      aspectRatio: '1565 / 1096',
      alt: 'Paper prototype photo of the Visual Elements screen with hand-drawn asset cards',
      label: '02 — Curate',
      captionVerb: 'Browse',
      captionRest: 'and select visual assets for the composition.',
    },
    {
      image: publicAsset('/images/PosterPal/pp3.jpeg'),
      aspectRatio: '1536 / 1102',
      alt: 'Paper prototype photo of a hand moving a cut-out visual element onto the poster canvas',
      label: '03 — Manipulate',
      captionVerb: 'Explore',
      captionRest: 'direct manipulation by moving individual elements onto the canvas.',
    },
    {
      image: publicAsset('/images/PosterPal/pp4.jpeg'),
      aspectRatio: '1599 / 1124',
      alt: 'Paper prototype photo of the assembled “Donate, They Need You” poster with several visual elements',
      label: '04 — Compose',
      captionVerb: 'Assemble',
      captionRest: 'the selected elements into a complete poster.',
    },
  ],
  screens: [
    { id: '01', title: 'Home / Dashboard', description: 'Start a new poster or return to recent projects.', image: publicAsset('/images/PosterPal/Homepage.png'), alt: 'PosterPal home dashboard with a clothes donation drive project and poster templates' },
    { id: '02', title: 'Project Setup', description: 'Set the event details and audience for the charity poster.', image: publicAsset('/images/PosterPal/project%20setup.png'), alt: 'PosterPal project setup form for a clothes donation drive, with suggested styles and event details' },
    { id: '03', title: 'Moodboard', description: 'Gather visual references and choose a style direction.', image: publicAsset('/images/PosterPal/Moodboard%20de%20don%20de%20v%C3%AAtements.png'), alt: 'PosterPal clothes donation drive moodboard with visual inspiration, colors, and style options' },
    { id: '04', title: 'Asset Library', description: 'Browse photos, illustrations, icons, and shapes.', image: publicAsset('/images/PosterPal/asset_library.png'), alt: 'PosterPal asset library showing clothing photos, illustrations, icons, and shapes' },
    { id: '05', title: 'Main Poster Editor', description: 'Open the editor and work directly on the poster canvas.', image: publicAsset('/images/PosterPal/main_poster_edit.png'), alt: 'PosterPal poster editor with an empty canvas, design controls, and asset tools' },
    { id: '06', title: 'Refine Poster Text', description: 'Adjust the headline and other design details.', image: publicAsset('/images/PosterPal/interface%20making.png'), alt: 'PosterPal editor with the clothes donation poster and headline text editing controls' },
    { id: '07', title: 'Add Elements to the Canvas', description: 'Bring selected visual assets onto the poster.', image: publicAsset('/images/PosterPal/elements_on_img.png'), alt: 'PosterPal editor showing a clothing image being placed onto the poster canvas' },
    { id: '08', title: 'AI Editing with Generated Alternatives', description: 'Compare AI-generated versions and refine the design.', image: publicAsset('/images/PosterPal/AI_talking.png'), alt: 'PosterPal AI editing view with generated poster alternatives and refinement suggestions' },
    { id: '09', title: 'AI Assistant Chat', description: 'Explore poster changes through a conversation with the assistant.', image: publicAsset('/images/PosterPal/talking%20to%20AI.png'), alt: 'PosterPal AI assistant chat alongside the clothes donation poster' },
  ],
}

function PosterSectionHeading({ number, title, description }) {
  return (
    <div className="poster-section-heading">
      <span className="poster-section-number">{number}</span>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}

function PosterScreenWalkthrough({ screen }) {
  return (
    <article className={`poster-screen poster-screen--${screen.id}`}>
      <div className="poster-screen-heading">
        <span>{screen.id}</span>
        <div>
          <h3>{screen.title}</h3>
          <p>{screen.description}</p>
        </div>
      </div>
      <figure className="poster-screen-frame">
        <div className="poster-screen-browserbar" aria-hidden="true"><i /><i /><i /><span>PosterPal · Clothes Donation Drive</span></div>
        <img className="poster-screen-image" src={screen.image} alt={screen.alt} loading="lazy" />
      </figure>
    </article>
  )
}

function PosterPalPage() {
  const [zoom, setZoom] = useState(null)

  useEffect(() => {
    if (!zoom) return undefined
    const onKey = (event) => { if (event.key === 'Escape') setZoom(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [zoom])

  const handleZoomClick = (event) => {
    const img = event.target
    if (img instanceof HTMLImageElement && !img.closest('a, button')) {
      setZoom({ src: img.currentSrc || img.src, alt: img.alt })
    }
  }

  useEffect(() => {
    const page = document.querySelector('.posterpal-page')
    if (!page || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      return undefined
    }

    const sections = page.querySelectorAll('.poster-section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('poster-section--visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' })

    page.classList.add('poster-reveal-ready')
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      page.classList.remove('poster-reveal-ready')
    }
  }, [])

  return (
    <div className="food-charm-shell posterpal-shell">
      <SiteHeader projectsPage />
      <main className="food-charm-page posterpal-page" onClick={handleZoomClick}>
        <nav className="case-breadcrumb" aria-label="Breadcrumb">
          <a href={sitePath('/')}>Home</a><span aria-hidden="true">/</span><a href={sitePath('/projects')}>Projects</a><span aria-hidden="true">/</span><span aria-current="page">PosterPal</span>
        </nav>

        <header className="poster-hero">
          <div className="poster-hero-copy">
            <p className="eyebrow">00 / MEET POSTERPAL</p>
            <h1>Poster<span>Pal</span></h1>
            <p className="poster-hero-subtitle">Human-Centered AI (HCAI)</p>
            <p className="poster-hero-intro">PosterPal helps novice creators make promotional posters with AI assistance, while keeping creative decisions in their hands. This is a Human-Centered AI (HCAI) project, not a classic HCI one: the design question is how people and an AI collaborate, not only how people use an interface.</p>
            <dl className="poster-meta">
              <div><dt>Role</dt><dd>Main Designer</dd></div>
              <div><dt>Duration</dt><dd>1.5 months</dd></div>
              <div><dt>Team</dt><dd>4 people</dd></div>
              <div><dt>Context</dt><dd>University Project</dd></div>
              <div><dt>Project type</dt><dd>Human-Centered AI design</dd></div>
            </dl>
          </div>
          <div className="poster-hero-product" aria-label="PosterPal interface previews">
            <figure className="poster-hero-visual poster-hero-visual--editor">
              <img
                src={publicAsset('/images/PosterPal/interface%20making.png')}
                alt="PosterPal poster editor showing the clothes donation poster on its canvas with editing controls"
                fetchPriority="high"
              />
              <figcaption>Poster editor · Clothes Donation Drive</figcaption>
            </figure>
            <figure className="poster-hero-visual poster-hero-visual--assets">
              <img
                src={publicAsset('/images/PosterPal/asset_library.png')}
                alt="PosterPal asset library with clothing photos, illustrations, icons, and shapes"
                fetchPriority="high"
              />
              <figcaption>Browse and select visual assets</figcaption>
            </figure>
          </div>
        </header>

        <SectionNav items={posterNav} theme="snav--poster" />

        <section className="poster-section" id="poster-interviews">
          <PosterSectionHeading
            number="01"
            title="Story Interviews"
            description="Story interviews initiated the research. Use this section to document the real experiences behind making an advertisement or promotional poster."
          />
          <div className="poster-interview-context">
            <article>
              <span className="poster-kicker">RESEARCH CONTEXT</span>
              <h3><strong>8</strong> people</h3>
              <p>We interviewed people with little to no experience designing posters.</p>
            </article>
            <aside className="poster-interview-approach">
              <span className="poster-kicker">INTERVIEW APPROACH</span>
              <h3>From concept to publication</h3>
              <p>Story-based interviews traced real poster-making experiences from the initial idea through feedback and publication.</p>
            </aside>
          </div>
          <div className="poster-interview-evidence">
            <article className="poster-interview-evidence-panel">
              <span className="poster-kicker">01 / INTERVIEW EVIDENCE</span>
              <h3>Difficulties</h3>
              <p className="poster-interview-panel-intro">Key challenges in the poster process</p>
              <ul>
                <li><strong>Ethical impact</strong><span>Make the campaign moving without making people feel guilty or uncomfortable.</span></li>
                <li><strong>Clarity across formats</strong><span>Prioritize key information so it reads quickly on mobile and in print.</span></li>
                <li><strong>Creative freedom</strong><span>Balance originality with Canva’s speed and structured templates.</span></li>
              </ul>
              <small>Source: Story Interview + documented Main Issues</small>
            </article>
            <article className="poster-interview-evidence-panel poster-interview-evidence-panel--workarounds">
              <span className="poster-kicker">02 / INTERVIEW EVIDENCE</span>
              <h3>Workarounds</h3>
              <p className="poster-interview-panel-intro">How she addressed those challenges</p>
              <ul>
                <li><strong>Considered visuals</strong><span>Used warm, neutral colors and hands holding clothes to avoid depicting people experiencing homelessness directly.</span></li>
                <li><strong>Essential information first</strong><span>Kept the goal, donation types, and deadline on the poster; moved extra details to the caption or comments.</span></li>
                <li><strong>Quick iteration</strong><span>Used Canva for structure and shared a draft with the team to refine tone, readability, and donation locations.</span></li>
              </ul>
              <small>Strategies directly supported by the participant’s account.</small>
            </article>
          </div>
          <div className="poster-participant-voices">
            <div className="poster-voices-heading">
              <div>
                <span className="poster-kicker">03 / PARTICIPANT VOICES</span>
                <h3>Selected quotes from the interview</h3>
              </div>
              <small>Quotes reproduced from the original interviews</small>
            </div>
            <div className="poster-quote-grid">
              <figure>
                <blockquote>“The hardest part was finding the right balance between being impactful and not being guilt-inducing.”</blockquote>
                <figcaption><span>01</span> Ethical communication</figcaption>
              </figure>
              <figure>
                <blockquote>“It limited me a bit in terms of originality, but it helped me focus more on clarity and structure rather than complex design.”</blockquote>
                <figcaption><span>02</span> Creative tools</figcaption>
              </figure>
              <figure>
                <blockquote>“I would probably create multiple versions of the post: one more emotional, one more informative, and maybe a short video.”</blockquote>
                <figcaption><span>03</span> Exploring alternatives</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="poster-section" id="poster-ai-limitations">
          <PosterSectionHeading
            number="02"
            title="Current Limitations of AI"
            description="AI can accelerate poster creation, but users may struggle to translate intentions into precise prompts, get consistent results, and refine generated designs without losing creative control."
          />
          <div className="poster-limitations">
            {[
              {
                number: '01',
                title: 'Limited control over generated results',
                detail: 'AI-generated designs may not fully match the user’s visual intentions.',
                opportunity: 'Let users select, adjust, and combine suggested elements.',
              },
              {
                number: '02',
                title: 'Difficulties with iterative editing',
                detail: 'Changing one element can lead to unexpected changes elsewhere in the design.',
                opportunity: 'Support targeted edits and preserve previous versions.',
              },
              {
                number: '03',
                title: 'Unpredictable results from prompts',
                detail: 'Users may struggle to understand how to describe what they want or how a prompt will affect the output.',
                opportunity: 'Offer prompt suggestions, visual alternatives, and conversational guidance.',
              },
            ].map(({ number, title, detail, opportunity }) => (
              <article className="poster-limitation" key={number}>
                <span>{number} / LIMITATION</span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
                <div className="poster-limitation-opportunity">
                  <span>DESIGN OPPORTUNITY</span>
                  <p>{opportunity}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="poster-section" id="poster-concept">
          <PosterSectionHeading
            number="03"
            title="Design Concept"
            description="PosterPal explores an AI-assisted workflow for novice poster creators. The principles below describe the intended design direction, not validated outcomes."
          />
          <div className="poster-challenge">
            <span className="poster-kicker">DESIGN CHALLENGE</span>
            <p>How might AI support novice creators in making a promotional poster without taking away their creative control?</p>
          </div>
          <div className="poster-concept-journey">
            <div className="poster-concept-journey-heading">
              <span className="poster-kicker">DESIGN PROPOSAL / WORKFLOW MODEL</span>
              <p>Work step by step, delegate a task to AI, or generate a complete first draft. The poster stays editable throughout.</p>
            </div>
            <ol className="poster-concept-flow" aria-label="Intended PosterPal creation support">
            {[
              {
                number: '01',
                title: 'Define the project',
                detail: <><span className="poster-step-verb">Set</span> the event purpose, audience, main message, goals, and essential information. <span className="poster-step-verb">Upload</span> PDFs or briefs; AI can <span className="poster-step-verb">extract</span> and <span className="poster-step-verb">organize</span> details.</>,
              },
              {
                number: '02',
                title: 'Build the moodboard',
                detail: <><span className="poster-step-verb">Add</span>, <span className="poster-step-verb">remove</span>, or <span className="poster-step-verb">replace</span> reference images, colors, and styles. AI can <span className="poster-step-verb">interpret</span> them and <span className="poster-step-verb">suggest</span> a coherent visual direction.</>,
              },
              {
                number: '03',
                title: 'Explore the asset library',
                detail: <><span className="poster-step-verb">Browse</span> AI-recommended photos, illustrations, icons, shapes, and typography. <span className="poster-step-verb">Drag</span> assets onto the canvas while keeping the library accessible.</>,
              },
              {
                number: '04',
                title: 'Create and refine',
                detail: <><span className="poster-step-verb">Edit</span> any canvas element manually or <span className="poster-step-verb">ask</span> AI for a specific change, or <span className="poster-step-verb">generate</span> a whole poster from the brief, then <span className="poster-step-verb">refine</span> it.</>,
                interaction: 'Compare, accept, reject, or refine suggestions for text, layout, color, or type. Upload or draw a sketch to guide a change; edit manually at any time.',
              },
              {
                number: '05',
                title: 'Review and export',
                detail: <><span className="poster-step-verb">Check</span> date, location, main message, and other requirements from the user’s brief. <span className="poster-step-verb">Flag</span> missing details, <span className="poster-step-verb">preview</span> the result, and <span className="poster-step-verb">choose</span> export options.</>,
              },
            ].map(({ number, title, detail, interaction }) => (
              <li key={number} className={number === '04' ? 'poster-concept-step--ai' : ''}>
                <span className="poster-concept-step-number">{number}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
                {interaction && <p className="poster-concept-step-detail">{interaction}</p>}
              </li>
            ))}
            </ol>
            <div className="poster-ai-throughout">
              <span className="poster-kicker">HUMAN–AI INTERACTION THROUGHOUT THE JOURNEY</span>
              <p>AI-generated suggestions <i aria-hidden="true">·</i> User selection and editing <i aria-hidden="true">·</i> On-demand AI assistance <i aria-hidden="true">·</i> Continuous manual control</p>
            </div>
          </div>
          <div className="poster-principles-heading">
            <span className="poster-kicker">DESIGN PRINCIPLES</span>
            <h3>Key design concepts of PosterPal</h3>
          </div>
          <div className="poster-principles">
            {[
              ['01', 'User control', 'Let users choose which AI-generated suggestions to apply, edit, or reject.', 'Apply to canvas'],
              ['02', 'AI transparency', 'Make AI suggestions and their potential changes easy to understand.', 'Preview alternatives before applying'],
              ['03', 'Reversibility', 'Allow users to explore different designs without losing previous work.', 'Undo and version history'],
              ['04', 'Guidance for novices', 'Help beginners create effective posters through prompts, suggestions, and simple editing tools.', 'Contextual AI suggestions'],
            ].map(([number, title, detail, implication]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
                <div className="poster-design-implication">
                  <small>DESIGN IMPLICATION</small>
                  <strong>{implication}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="poster-section" id="poster-design-exploration">
          <PosterSectionHeading
            number="04"
            title="Design Exploration — From Paper to Interaction"
            description="Early paper prototyping explored how users could define their poster requirements, curate visual assets, and compose a design through direct manipulation."
          />
          <div className="poster-artifact-note">
            <span className="poster-kicker">RESEARCH ARTIFACTS / PAPER PROTOTYPE</span>
            <p>Photographs document the early interaction concepts as they were explored on paper.</p>
          </div>
          <div className="poster-paper-prototype-grid">
            {posterAssets.paperPrototype.map((photo) => (
              <figure className="poster-paper-prototype-photo" key={photo.label}>
                <div
                  className={`poster-paper-prototype-image${photo.filename === 'pp1.jpeg' ? ' poster-paper-prototype-image--define' : ''}`}
                  style={{ aspectRatio: photo.aspectRatio }}
                >
                  <img src={photo.image} alt={photo.alt} loading="lazy" />
                </div>
                <figcaption>
                  <b>{photo.label}</b>
                  <span><strong>{photo.captionVerb}</strong> {photo.captionRest}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="poster-section" id="poster-wizard-of-oz">
          <PosterSectionHeading
            number="05"
            title="Wizard of Oz Study"
            description="A concise study of novice users creating a charity poster with AI assistance."
          />
          <div className="poster-woz-grid">
            <article className="poster-woz-overview">
              <span className="poster-kicker">01 / STUDY OVERVIEW</span>
              <h3>Explore AI-assisted poster creation</h3>
              <p><strong>Participants</strong> 3 novices <span aria-hidden="true">·</span> <strong>Task</strong> Create a charity poster</p>
            </article>
            <article>
              <span className="poster-kicker">02 / KEY INSIGHTS</span>
              <h3>Where users needed support</h3>
              <ul>
                <li>AI visuals sometimes missed expectations, prompting repeated attempts and frustration.</li>
                <li>Novices needed clearer guidance to get started and create their posters.</li>
              </ul>
            </article>
            <article>
              <span className="poster-kicker">03 / DESIGN IMPLICATIONS</span>
              <h3>Make creation easier to navigate</h3>
              <p>Clarify onboarding and help users select, edit, and refine visual assets.</p>
            </article>
            <article>
              <span className="poster-kicker">04 / PROTOTYPE UPDATES</span>
              <h3>Guide and empower users</h3>
              <p>Updated the prototype with clearer onboarding and improved ways to choose, edit, and refine visuals.</p>
            </article>
          </div>
          <div className="poster-interface-evidence">
            <div className="poster-interface-evidence-heading">
              <p>Browse visual assets, then refine the poster directly on the canvas. These interface screens show the design responses, not additional study results.</p>
            </div>
            <div className="poster-interface-evidence-grid">
              <figure>
                <div className="poster-interface-evidence-image">
                  <img
                    src={publicAsset('/images/PosterPal/asset_library.png')}
                    alt="PosterPal asset library with photos, illustrations, icons, and shapes"
                    loading="lazy"
                  />
                </div>
                <figcaption><strong>Asset library</strong><span>Browse visual elements before adding them to a design.</span></figcaption>
              </figure>
              <figure>
                <div className="poster-interface-evidence-image">
                  <img
                    src={publicAsset('/images/PosterPal/interface%20making.png')}
                    alt="PosterPal editor showing a clothes donation poster with text-editing controls"
                    loading="lazy"
                  />
                </div>
                <figcaption><strong>Poster editor</strong><span>Refine the poster directly on the canvas.</span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="poster-section poster-section--final" id="poster-final-product">
          <PosterSectionHeading
            number="06"
            title="The Final Product"
            description="Follow the clothes donation poster workflow, from project setup through asset selection and AI-assisted editing."
          />
          <div className="poster-final-context">
            <span className="poster-kicker">ONE CONTINUOUS PROJECT</span>
            <p>Clothes Donation Drive · same event, poster content, and visual identity across the full product walkthrough.</p>
          </div>
          <div className="poster-screen-list">
            {posterAssets.screens.map((screen) => <PosterScreenWalkthrough key={screen.id} screen={screen} />)}
          </div>
        </section>

        <nav className="food-case-pagination poster-case-pagination" aria-label="Project navigation">
          <a href={sitePath('/projects')}>All projects</a>
          <a href={sitePath('/projects/zen-rooms')}>Next project: Zen Rooms</a>
          <a href="#top">Back to top</a>
        </nav>
      </main>
      {zoom && (
        <div className="ml-lightbox" role="dialog" aria-modal="true" aria-label="Enlarged image" onClick={() => setZoom(null)}>
          <button type="button" className="ml-lightbox-close" aria-label="Close" onClick={() => setZoom(null)}>×</button>
          <img src={zoom.src} alt={zoom.alt} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
      <Footer />
    </div>
  )
}

const zenExperienceSteps = [
  ['01', 'Enter the library', 'Arrive in the virtual room and meet the guide.'],
  ['02', 'Choose emotion papers', 'Select papers representing the emotions to reflect on.'],
  ['03', 'Sort the papers', 'Place the selected papers into the emotion box.'],
  ['04', 'Notice the feedback', 'Observe the stress sphere and hear the guide’s responsive feedback.'],
  ['05', 'Release and close', 'Dispose of the papers to trigger particles, then finish with End.'],
]

const zenGalleryItems = [
  [publicAsset('/images/ZenRooms/room.png'), 'The Library Room in VR'],
  [publicAsset('/images/ZenRooms/emotion_bos.png'), 'The emotion box'],
  [publicAsset('/images/ZenRooms/anxiety_cards.png'), 'The anxiety cards'],
  [publicAsset('/images/ZenRooms/virtual_guide.png'), 'The virtual guide'],
]

const zenImplementationItems = [
  ['Unity', 'Implemented the Library Room experience and its interaction sequence.', 'A clear, guided flow from arrival to closure.'],
  ['XR interaction components', 'Used for interactive objects where documented in the project implementation.', 'Papers can be grabbed and moved naturally.'],
  ['Blender', 'Emotion papers, buttons, and the emotion bin were created for the project.', 'Recognizable, tangible objects that make emotions easy to handle.'],
  ['Mixamo · Blendshapes · ElevenLabs', 'Mixamo animations, facial blendshapes for expressions and lip synchronization, and generated text-to-speech audio.', 'A guide that feels present, expressive, and reassuring.'],
  ['Particle systems', 'Used for the emotion-paper disposal effect.', 'A visible, satisfying sense of release and closure.'],
]

function ZenRoomsPage() {
  return (
    <div className="food-charm-shell zen-rooms-shell">
      <SiteHeader projectsPage />
      <main className="zen-rooms-page">
        <nav className="case-breadcrumb" aria-label="Breadcrumb">
          <a href={sitePath('/')}>Home</a><span aria-hidden="true">/</span><a href={sitePath('/projects')}>Projects</a><span aria-hidden="true">/</span><span aria-current="page">Zen Rooms</span>
        </nav>

        <header className="zen-hero" id="zen-top">
          <div className="zen-hero-copy">
            <p className="eyebrow">HCI · IMMERSIVE VR</p>
            <h1>Zen <span>Rooms</span></h1>
            <p className="zen-hero-subtitle">Designing immersive interactions for emotional regulation.</p>
            <p className="zen-hero-description">A collaborative VR project exploring how immersive environments can support mindfulness and emotional reflection. My individual contribution focused on the Library Room.</p>
            <div className="zen-hero-tags" aria-label="Project topics">
              <span>HCI</span><span>Virtual Reality</span><span>Interaction Design</span><span>Unity</span>
            </div>
            <dl className="zen-hero-meta">
              <div><dt>My contribution</dt><dd>Library Room</dd></div>
              <div><dt>Role</dt><dd>Developer / designer</dd></div>
              <div><dt>Context</dt><dd>University project</dd></div>
              <div><dt>Tools</dt><dd>Unity, Blender</dd></div>
              <div><dt>Project type</dt><dd>Immersive VR experience</dd></div>
            </dl>
          </div>
          <figure className="zen-hero-image" style={{ "--zen-hero-background": `url("${publicAsset('/images/ZenRooms/preview.png')}")` }}>
            <img
              src={publicAsset('/images/ZenRooms/preview.png')}
              alt="Preview image for the Zen Rooms virtual-reality project"
              fetchPriority="high"
            />
            <figcaption>Zen Rooms · Library Room project preview</figcaption>
          </figure>
          <p className="zen-collaboration-note">A collaborative project across four environments. This page focuses on my Library Room contribution.</p>
        </header>

        <SectionNav items={zenNav} theme="snav--zen" />
        <div className="zen-intro-row">

        <section className="zen-section zen-overview" id="zen-overview">
          <div className="zen-section-marker"><span>01</span><p>Project Overview</p></div>
          <div className="zen-section-content zen-overview-layout">
            <div>
              <p className="zen-kicker">A COLLABORATIVE VR PROJECT</p>
              <h2>Making space for <em>emotional reflection.</em></h2>
              <p>Zen Rooms explores how immersive environments can support emotional regulation through interaction, sensory feedback, and guided experiences. Within this collaborative project, I worked on the Library Room: users interact with representations of emotions and receive responsive visual, auditory, and interpersonal feedback.</p>
            </div>
          </div>
        </section>
        </div>

        <section className="zen-section zen-challenge" id="zen-challenge">
          <div className="zen-section-marker"><span>02</span><p>The Design Challenge</p></div>
          <div className="zen-section-content">
            <p className="zen-kicker">DESIGN QUESTION</p>
            <h2>How might we help users externalize and reflect on their emotions through tangible interactions in an immersive virtual environment?</h2>
            <p className="zen-challenge-intro">The Library Room translates an abstract inner experience into a sequence of choices, objects, and responses. These are design intentions, not validated outcomes.</p>
            <div className="zen-principles">
              <article><span>01</span><h3>Make emotions tangible</h3><p>Represent emotional states as objects that can be selected and moved.</p></article>
              <article><span>02</span><h3>Make feedback legible</h3><p>Coordinate visual, auditory, and interpersonal cues.</p></article>
              <article><span>03</span><h3>Support reflection</h3><p>Use a guided interaction sequence from arrival through closure.</p></article>
            </div>
          </div>
        </section>

        <section className="zen-section" id="zen-flow">
          <div className="zen-section-marker"><span>03</span><p>Experience Flow</p></div>
          <div className="zen-section-content">
            <div className="zen-section-heading">
              <div><p className="zen-kicker">THE LIBRARY ROOM</p><h2>A guided <em>five-step journey.</em></h2></div>
              <p>The sphere communicates the system’s calculated level based on selected emotions; it is not a clinically validated measure of a person’s psychological state.</p>
            </div>
            <ol className="zen-flow-list">
              {zenExperienceSteps.map(([number, title, description]) => (
                <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="zen-section zen-interactions" id="zen-interactions">
          <div className="zen-section-marker"><span>04</span><p>Interaction Design</p></div>
          <div className="zen-section-content">
            <div className="zen-section-heading">
              <div><p className="zen-kicker">THE CORE INTERACTIONS</p><h2>From selection to <em>release.</em></h2></div>
              <p>The interaction logic and feedback described here are implemented project features. The video shows the emotion-paper interaction in action.</p>
            </div>

            <article className="zen-interaction-row" id="zen-emotion-papers">
              <figure className="zen-interaction-video">
                <video
                  aria-label="Emotion papers being selected in the Zen Rooms Library Room"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                >
                  <source src={publicAsset('/images/ZenRooms/papers.mp4')} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <figcaption>
                  Emotion papers are selected as part of the guided interaction.
                  <span className="zen-video-audio-note">
                    <span className="zen-video-audio-icon" aria-hidden="true">♫</span>
                    <span><strong>Sound on!</strong> Unmute to hear the music and feel the heartbeat shift with the sphere.</span>
                    <span className="zen-video-audio-pulse" aria-hidden="true" />
                  </span>
                </figcaption>
              </figure>
              <div className="zen-interaction-copy">
                <span className="zen-interaction-index">A / SELECT &amp; EXTERNALIZE</span>
                <h3>Emotion papers</h3>
                <p>Users select physical-looking virtual papers representing anxiety, sadness, anger, calmness, happiness, and serenity. Turning an emotion into a manipulable object makes it part of the interaction.</p>
                <p className="zen-annotation"><strong>Interaction logic</strong> Select a paper, then place it in the sorting box.</p>
              </div>
            </article>

            <article className="zen-interaction-row zen-interaction-row--reverse" id="zen-stress-sphere">
              <div className="zen-stress-visual" role="group" aria-label="Three visual states of the stress sphere">
                <div className="zen-stress-states">
                  <figure className="zen-stress-state zen-stress-state--green">
                    <img src={publicAsset('/images/ZenRooms/vert.png')} alt="Green sphere in the Library Room" />
                    <figcaption><span>01</span><strong>Lower</strong><small>Calm</small></figcaption>
                  </figure>
                  <figure className="zen-stress-state zen-stress-state--yellow">
                    <img src={publicAsset('/images/ZenRooms/jaune.png')} alt="Yellow sphere in the Library Room" />
                    <figcaption><span>02</span><strong>Moderate</strong><small>Intermediate</small></figcaption>
                  </figure>
                  <figure className="zen-stress-state zen-stress-state--red">
                    <img src={publicAsset('/images/ZenRooms/rouge.png')} alt="Red sphere in the Library Room" />
                    <figcaption><span>03</span><strong>Higher</strong><small>More intense</small></figcaption>
                  </figure>
                </div>
                <p className="zen-stress-caption">Three system-calculated visual states · shown as interaction feedback, not a psychological assessment.</p>
              </div>
              <div className="zen-interaction-copy">
                <span className="zen-interaction-index">B / VISUALIZE SYSTEM FEEDBACK</span>
                <h3>A responsive stress sphere</h3>
                <p>The sphere communicates the system-calculated level based on the selected emotion papers. It expresses that calculation through several coordinated feedback channels—not as an objective reading of a user’s psychological state.</p>
                <dl className="zen-sphere-encoding">
                  <div><dt><span className="zen-level-dot zen-level-dot--green" />Lower / calm</dt><dd>Green · slower pulse · smaller sphere · lower audio pitch and volume</dd></div>
                  <div><dt><span className="zen-level-dot zen-level-dot--yellow" />Moderate</dt><dd>Yellow · intermediate visual and audio feedback</dd></div>
                  <div><dt><span className="zen-level-dot zen-level-dot--red" />Higher</dt><dd>Red · faster pulse · larger sphere · higher audio pitch and volume</dd></div>
                </dl>
              </div>
            </article>

            <article className="zen-interaction-row" id="zen-guide">
              <div className="zen-guide-media">
                <figure className="zen-guide-video">
                  <video
                    aria-label="Virtual guide speaking and responding in the Library Room"
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  >
                    <source src={publicAsset('/images/ZenRooms/virtual_guide.mp4')} type="video/mp4" />
                    Your browser does not support embedded video.
                  </video>
                  <figcaption>
                    A moment with the virtual guide in the Library Room.
                    <span className="zen-video-audio-note">
                      <span className="zen-video-audio-icon" aria-hidden="true">♫</span>
                      <span><strong>Sound on!</strong> Turn your sound on to hear the guide speak.</span>
                      <span className="zen-video-audio-pulse" aria-hidden="true" />
                    </span>
                  </figcaption>
                </figure>
                <div className="zen-guide-expressions" aria-label="The guide's facial expressions and animation states">
                  <figure>
                    <img src={publicAsset('/images/ZenRooms/idle.png')} alt="The guide in an idle standing pose" />
                    <figcaption><strong>Idle</strong><span>Waiting presence</span></figcaption>
                  </figure>
                  <figure>
                    <img src={publicAsset('/images/ZenRooms/clapping.png')} alt="The guide clapping with a smile" />
                    <figcaption><strong>Clapping</strong><span>Encouragement</span></figcaption>
                  </figure>
                  <figure>
                    <img src={publicAsset('/images/ZenRooms/neutral.png')} alt="The guide with a neutral facial expression" />
                    <figcaption><strong>Neutral</strong><span>Listening</span></figcaption>
                  </figure>
                  <figure>
                    <img src={publicAsset('/images/ZenRooms/smiling.png')} alt="The guide smiling warmly" />
                    <figcaption><strong>Smiling</strong><span>Reassurance</span></figcaption>
                  </figure>
                </div>
              </div>
              <div className="zen-interaction-copy">
                <span className="zen-interaction-index">C / GUIDE THE EXPERIENCE</span>
                <h3>A responsive virtual guide</h3>
                <p>The guide welcomes users, responds to selected emotions, offers reassurance, and closes the session. Voice and animation help give each stage a clear interpersonal presence.</p>
                <ul className="zen-feature-list">
                  <li>ElevenLabs text-to-speech audio</li>
                  <li>Facial blendshapes, eye tracking, and lip synchronization</li>
                  <li>Idle and clapping animations from Mixamo</li>
                </ul>
              </div>
            </article>

            <article className="zen-interaction-row zen-interaction-row--reverse" id="zen-release">
              <figure className="zen-interaction-video">
                <video
                  aria-label="Emotion papers disappearing in a particle effect during the release interaction"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                >
                  <source src={publicAsset('/images/ZenRooms/particles%20(1).mp4')} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <figcaption>The selected emotion papers disappear in a particle effect, marking the end of the interaction.</figcaption>
              </figure>
              <div className="zen-interaction-copy">
                <span className="zen-interaction-index">D / DISPOSE &amp; CONCLUDE</span>
                <h3>Emotional release</h3>
                <p>Users place their selected emotion papers in the bin. The papers disappear and trigger a particle effect, symbolically marking the end of the interaction.</p>
                <p className="zen-annotation"><strong>Session control</strong> The End button closes the guided sequence.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="zen-section zen-feedback" id="zen-feedback">
          <div className="zen-section-marker"><span>05</span><p>Multimodal Feedback</p></div>
          <div className="zen-section-content">
            <div className="zen-section-heading">
              <div><p className="zen-kicker">COORDINATING THE SENSES</p><h2>One interaction, <em>multiple signals.</em></h2></div>
              <p>Coordinating modalities can make an interaction easier to notice and interpret. Their effectiveness for users has not been evaluated.</p>
            </div>
            <div className="zen-feedback-grid">
              <article><span>01 / VISUAL</span><h3>Visible change</h3><p>Sphere size, color, and pulse; paper-disposal particles; the guide’s facial expressions.</p></article>
              <article><span>02 / AUDITORY</span><h3>Sound and voice</h3><p>Voice guidance, background music, sphere heartbeat, clicking, and interaction sounds.</p></article>
              <article><span>03 / INTERACTIVE</span><h3>Action and response</h3><p>Manipulating emotion papers, placing them in the bin, and controlling the session.</p></article>
            </div>
          </div>
        </section>

        <section className="zen-section" id="zen-implementation">
          <div className="zen-section-marker"><span>06</span><p>Technical Implementation</p></div>
          <div className="zen-section-content">
            <div className="zen-section-heading">
              <div><p className="zen-kicker">FROM INTERACTION TO VR</p><h2>Technology in service of <em>the user experience.</em></h2></div>
              <p>Each tool was chosen to support a specific interaction goal. Project-created elements are distinguished from sourced content.</p>
            </div>
            <div className="zen-implementation-layout">
              <div className="zen-implementation-list">
                {zenImplementationItems.map(([tool, built, goal]) => (
                  <article key={tool}>
                    <h3>{tool}</h3>
                    <p>{built}</p>
                    <p className="zen-impl-goal"><strong>User benefit</strong>{goal}</p>
                  </article>
                ))}
              </div>
              <aside className="zen-asset-note"><span className="zen-kicker">SOURCED ENVIRONMENT</span><p>The virtual environment was sourced from the Unity Asset Store. It is distinguished here from the interaction objects created for the project.</p></aside>
            </div>
          </div>
        </section>

        <section className="zen-section zen-gallery" id="zen-gallery">
          <div className="zen-section-marker"><span>07</span><p>Project Gallery</p></div>
          <div className="zen-section-content">
            <div className="zen-section-heading">
              <div><p className="zen-kicker">LIBRARY ROOM / VISUAL RECORD</p><h2>Images from the <em>experience.</em></h2></div>
            </div>
            <div className="zen-gallery-grid">
              {zenGalleryItems.map(([src, alt], index) => (
                <figure key={src} className={`zen-gallery-item zen-gallery-photo zen-gallery-item--${index + 1}`}>
                  <img src={src} alt={alt} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <nav className="food-case-pagination zen-pagination" aria-label="Project navigation">
          <a href={sitePath('/projects')}>All projects</a>
          <a href={sitePath('/projects/mylibrary')}>Next project: MyLibrary</a>
          <a href="#zen-top">Back to top</a>
        </nav>
      </main>
      <Footer />
    </div>
  )
}

const zpmLayoutActions = [
  ['Swipe up', 'Zoom in and out', 'Scale a participant window up or down, so the people who matter most to the conversation take more space.'],
  ['Swipe down', 'Turn the mic on and off', 'Mute or unmute a participant directly from their window.'],
  ['Swipe left', 'Hide the person', 'Hide a window to reduce visual noise. Hidden participants stay on screen as small markers and can be brought back.'],
  ['Swipe right', 'Pin the person', 'Pinning keeps a chosen participant emphasized in the layout, whoever is speaking.'],
]

const zpmAgendaActions = [
  ['Move', 'Reorder agenda items as the meeting evolves.'],
  ['Edit', 'Adjust an item’s content or timing on the fly.'],
  ['Delete', 'Remove an item that is no longer needed. The item is marked in red before it disappears.'],
  ['Pin', 'Keep a key agenda item visible while the meeting moves on.'],
]

function ZoomProMaxPage() {
  useCaseReveal()

  return (
    <div className="food-charm-shell zpm-shell">
      <SiteHeader projectsPage />
      <main className="food-charm-page zpm-page">
        <nav className="case-breadcrumb" aria-label="Breadcrumb">
          <a href={sitePath('/')}>Home</a><span aria-hidden="true">/</span><a href={sitePath('/projects')}>Projects</a><span aria-hidden="true">/</span><span aria-current="page">ZoomEvenMore</span>
        </nav>

        <header className="food-case-hero zpm-hero">
          <div className="food-case-heading">
            <p className="eyebrow">UX/UI · COMMUNICATION · INTERACTION DESIGN</p>
            <h1>Zoom<span>EvenMore</span></h1>
            <p className="food-case-lede">A redesign of the video-meeting experience that makes it more personal, flexible, and adaptable to how each person follows a conversation.</p>
          </div>
          <div className="zpm-hero-visual">
            <figure>
              <img src={publicAsset('/images/Zoom++/layout-resized.png')} alt="ZoomEvenMore meeting window with a resized, personalized participant layout" width="520" height="342" fetchPriority="high" />
              <figcaption>Personalized participant layout</figcaption>
            </figure>
            <figure>
              <img src={publicAsset('/images/Zoom++/agenda.png')} alt="ZoomEvenMore meeting window with the built-in agenda on the right" width="535" height="370" fetchPriority="high" />
              <figcaption>Built-in interactive agenda</figcaption>
            </figure>
          </div>
          <dl className="food-project-meta zpm-meta">
            <div><dt>Team</dt><dd>3 people</dd></div>
            <div><dt>Project type</dt><dd>Interaction design &amp; prototyping</dd></div>
            <div><dt>Tools</dt><dd>Figma</dd></div>
            <div><dt>Context</dt><dd>University project</dd></div>
            <div><dt>Duration</dt><dd>1.5 months</dd></div>
          </dl>
        </header>

        <SectionNav items={zpmNav} theme="snav--zpm" />

        <section className="food-case-section" id="zpm-overview">
          <div className="food-section-label"><span>01</span><p>Project Overview</p></div>
          <div className="food-section-content food-overview-layout">
            <div>
              <h2>Meetings that adapt <span>to you.</span></h2>
              <p>ZoomEvenMore is an interaction design project exploring how the Zoom video-conferencing experience could feel more personal. Instead of one fixed interface for everyone, users shape the meeting screen around what they need to see and follow.</p>
              <p>We designed two features and demonstrated their behavior in an interactive Figma prototype. This was a design and prototyping project, not a fully implemented Zoom product.</p>
            </div>
            <aside className="food-note">
              <p className="eyebrow">Two features</p>
              <p><strong>01 · Customizable participant layout:</strong> resize, hide, and pin participant windows.</p>
              <p><strong>02 · Built-in interactive schedule:</strong> a live agenda users can move, edit, delete, and pin.</p>
            </aside>
          </div>
        </section>

        <section className="food-case-section" id="zpm-challenge">
          <div className="food-section-label"><span>02</span><p>The Design Challenge</p></div>
          <div className="food-section-content">
            <div className="food-section-heading">
              <h2>More flexible, <span>easier to follow.</span></h2>
              <p>The opportunity: make video meetings easier to navigate by letting people control how participants and meeting structure are presented.</p>
            </div>
            <div className="zpm-challenge-grid">
              <article>
                <span>AREA 01</span>
                <h3>Participant windows</h3>
                <p>How might people customize the video grid so the most relevant participants are easy to see, and less relevant ones stay out of the way?</p>
              </article>
              <article>
                <span>AREA 02</span>
                <h3>Meeting agenda</h3>
                <p>How might the meeting’s structure live inside the call, so everyone can follow what is happening and what comes next?</p>
              </article>
            </div>
          </div>
        </section>

        <section className="food-case-section zpm-feature zpm-feature--layout" id="zpm-layout">
          <div className="food-section-label"><span>03</span><p>Feature 01</p></div>
          <div className="food-section-content">
            <div className="food-section-heading">
              <h2>A personalized <span>meeting layout.</span></h2>
              <p>Each participant window becomes something the user can shape: resized, hidden, or pinned.</p>
            </div>
            <figure className="zpm-gesture-map">
              <img src={publicAsset('/images/Zoom++/features.png')} alt="Gesture map around a participant: swipe up to zoom in or out, down for mic on or off, left to hide, right to pin" width="1476" height="1065" loading="lazy" />
              <figcaption><strong>One gesture per action.</strong> Swiping a participant window in one of four directions triggers zoom, mic, hide, or pin.</figcaption>
            </figure>
            <div className="zpm-action-row zpm-action-row--four">
              {zpmLayoutActions.map(([gesture, title, text]) => (
                <article key={gesture}><span>{gesture}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
            <div className="zpm-steps-visual">
              <figure>
                <span className="zpm-step-badge">1</span>
                <img src={publicAsset('/images/Zoom++/layout-controls.png')} alt="Directional controls around the main participant window for zoom, hide, pin, and microphone" width="532" height="357" loading="lazy" />
                <figcaption><strong>Controls on the window.</strong> A cross of directional controls appears around a participant, giving direct access to zoom, hide, pin, and microphone actions.</figcaption>
              </figure>
              <figure>
                <span className="zpm-step-badge">2</span>
                <img src={publicAsset('/images/Zoom++/layout-resized.png')} alt="Meeting grid after the main participant window has been resized" width="520" height="342" loading="lazy" />
                <figcaption><strong>The grid adapts.</strong> Resizing the main window lets the other participants reflow into a larger, more readable grid.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="food-case-section zpm-feature zpm-feature--agenda" id="zpm-agenda">
          <div className="food-section-label"><span>04</span><p>Feature 02</p></div>
          <div className="food-section-content">
            <div className="food-section-heading">
              <h2>An interactive <span>meeting agenda.</span></h2>
              <p>The agenda sits beside the video and updates as the meeting progresses, as represented in the prototype.</p>
            </div>
            <div className="zpm-agenda-visual">
              <figure>
                <img src={publicAsset('/images/Zoom++/agenda.png')} alt="Meeting window with a timeline agenda panel listing presentation groups and breaks" width="535" height="370" loading="lazy" />
                <figcaption><strong>Agenda beside the call.</strong> A timeline lists each item with its time slot. A check mark flags the item already covered.</figcaption>
              </figure>
              <figure>
                <img src={publicAsset('/images/Zoom++/agenda-delete.png')} alt="Agenda item highlighted in red with a trash icon while being deleted" width="529" height="369" loading="lazy" />
                <figcaption><strong>Direct manipulation.</strong> Items are handled in place: here an item is marked in red with a trash icon as it is being deleted.</figcaption>
              </figure>
            </div>
            <div className="zpm-action-row zpm-action-row--four">
              {zpmAgendaActions.map(([title, text]) => (
                <article key={title}><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="food-case-section" id="zpm-prototype">
          <div className="food-section-label"><span>05</span><p>Interactive Prototype &amp; Design Reflection</p></div>
          <div className="food-section-content">
            <div className="food-section-heading">
              <h2>See it <span>in action.</span></h2>
              <p>A scenario video walks through a student joining a class call and using both features in the Figma prototype.</p>
            </div>
            <figure className="zpm-video">
              <video controls preload="metadata" poster={publicAsset('/images/Zoom++/scenario-title.jpg')} aria-label="ZoomEvenMore prototype scenario walkthrough">
                <source src={publicAsset('/images/Zoom++/zoompromax-scenario.mp4')} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <figcaption>Scenario walkthrough of the ZoomEvenMore prototype · about 2 minutes</figcaption>
            </figure>
          </div>
        </section>

        <nav className="food-case-pagination" aria-label="Project navigation">
          <a href={sitePath('/projects')}>All projects</a>
          <a href={sitePath('/projects/chorify')}>Next project: Chorify</a>
          <a href="#top">Back to top</a>
        </nav>
      </main>
      <Footer />
    </div>
  )
}

const mlFeatures = [
  'Personal library: Want to read, Currently reading, Read',
  'Book discovery',
  'Detailed book pages',
  'Friend profiles and activity',
  'Shared reading pages',
  'Individual reading progress',
  'Comments and notes tied to a book or a page',
]

const mlPrinciples = [
  ['Make personal reading easy to manage', 'Every book sits in one of three statuses, and the current read always shows its page count and a single Continue action. A personal progress page adds a segmented bar, chapters and notes.', [
    { src: 'homepage.png', alt: 'Continue reading and Want to read panels on the MyLibrary homepage', x: 30, y: 380, w: 1055, h: 285 },
    { src: 'progress-page.png', alt: 'Personal progress page with a segmented progress bar and the chapter list', x: 305, y: 470, w: 830, h: 540 },
  ]],
  ['Make discovery feel natural', 'Recommendations are grouped by where they come from — for you, popular, new releases, friends, award winners — so users can browse by intent.', { src: 'discover.png', alt: 'Discovery tabs and featured book of the week', x: 335, y: 268, w: 810, h: 335 }],
  ['Make reading together meaningful', 'A shared page keeps each reader’s progress visible next to the conversation, so comments can be placed in the context of where everyone is in the book.', { src: 'shared-reading.png', alt: 'Reading together panel showing each reader’s progress', x: 1080, y: 140, w: 430, h: 350 }],
]

const mlSpaces = [
  {
    name: 'Personal space',
    note: 'Library, progress, goals, private notes',
    branches: [
      { title: 'My Library', items: ['Want to read', 'Currently reading', 'Read'] },
      { title: 'Discover', items: ['Book discovery', 'Book details & personal notes'] },
      { title: 'Personal reading progress', items: ['Reading goal', 'Segmented progress', 'Chapters & milestones', 'Notes & highlights'] },
    ],
  },
  {
    name: 'Social space',
    note: 'Shared pages, discussions, groups',
    social: true,
    branches: [
      { title: 'Shared reading', items: ['Shared pages', 'Reading progress', 'Discussions', 'Shared notes'] },
      { title: 'Community', items: ['Friends', 'Friends’ activity', 'Reading groups'] },
    ],
  },
]

function MlCrop({ src, alt, x, y, w, h, iw = 1536 }) {
  return (
    <div className="ml-crop" style={{ aspectRatio: `${w} / ${h}` }}>
      <img
        src={publicAsset(`/images/MyLibrary/${src}`)}
        alt={alt}
        loading="lazy"
        style={{ width: `${(iw / w) * 100}%`, marginLeft: `${(-x / w) * 100}%`, marginTop: `${(-y / w) * 100}%` }}
      />
    </div>
  )
}

function MlSectionLabel({ number, children }) {
  return <p className="ml-label"><span>{number}</span>{children}</p>
}

function MlScreen({ number, title, role, src, alt, w, h, notes, className = '' }) {
  return (
    <article className={`ml-screen ${className}`}>
      <div className="ml-screen-text">
        <p className="ml-screen-number">{number}</p>
        <h3>{title}</h3>
        <p className="ml-screen-role">{role}</p>
        <ol className="ml-notes">
          {notes.map((note) => <li key={note}>{note}</li>)}
        </ol>
      </div>
      <figure>
        <img src={publicAsset(`/images/MyLibrary/${src}`)} alt={alt} width={w} height={h} loading="lazy" />
      </figure>
    </article>
  )
}

const mlNav = [
  ['ml-overview', 'Overview', '01'],
  ['ml-problem', 'Problem', '02'],
  ['ml-principles', 'Principles', '03'],
  ['ml-structure', 'Structure', '04'],
  ['ml-screens', 'Screens', '05'],
]

function MyLibraryPage() {
  useCaseReveal()
  const [zoom, setZoom] = useState(null)
  const [active, setActive] = useState(null)
  const [progress, setProgress] = useState(0)
  const [pill, setPill] = useState({ left: 0, width: 0 })
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      let current = null
      mlNav.forEach(([id]) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id
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
  }, [])

  useEffect(() => {
    const link = navRef.current?.querySelector(`a[data-id="${active}"]`)
    if (link) setPill({ left: link.offsetLeft, width: link.offsetWidth })
  }, [active])

  const openZoom = (img) => setZoom({ src: img.currentSrc || img.src, alt: img.alt })

  useEffect(() => {
    if (!zoom) return undefined
    const onKey = (event) => { if (event.key === 'Escape') setZoom(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [zoom])

  return (
    <div className="food-charm-shell ml-shell">
      <SiteHeader projectsPage />
      <main className="food-charm-page ml-page">
        <nav className="case-breadcrumb" aria-label="Breadcrumb">
          <a href={sitePath('/')}>Home</a><span aria-hidden="true">/</span><a href={sitePath('/projects')}>Projects</a><span aria-hidden="true">/</span><span aria-current="page">MyLibrary</span>
        </nav>

        <header className="ml-hero">
          <p className="ml-eyebrow">UX/UI DESIGN · SOCIAL READING PLATFORM</p>
          <h1>MyLibrary <span>Making reading a shared experience.</span></h1>
          <div className="ml-hero-intro">
            <p>MyLibrary is a personal and social reading experience. It helps readers organize their books, track their progress, keep their thoughts, and connect with other readers.</p>
            <dl className="ml-meta">
              <div><dt>Project type</dt><dd>Product &amp; interface design</dd></div>
              <div><dt>Role</dt><dd>Designer</dd></div>
              <div><dt>Tools</dt><dd>Figma, HTML, CSS, JavaScript, NodeJS</dd></div>
              <div><dt>Context</dt><dd>University project</dd></div>
            </dl>
          </div>
          <p className="ml-code-note">I also coded an early version using HTML, CSS, JavaScript, and NodeJS. <a href="https://github.com/uvsqmaryatou/MyLibrary" target="_blank" rel="noopener noreferrer">View it on GitHub.</a></p>
          <figure className="ml-hero-visual">
            <img src={publicAsset('/images/MyLibrary/homepage.png')} alt="MyLibrary homepage with a welcome banner, current reads, want-to-read list, discovery, reading goal, and friends’ activity" width="1536" height="1024" fetchPriority="high" />
          </figure>
        </header>

        <nav className="ml-nav" aria-label="On this page">
          <div className="ml-nav-track" ref={navRef}>
            <span className="ml-nav-pill" style={{ transform: `translateX(${pill.left}px)`, width: pill.width, opacity: active ? 1 : 0 }} aria-hidden="true" />
            {mlNav.map(([id, label, number]) => (
              <a
                key={id}
                href={`#${id}`}
                data-id={id}
                className={active === id ? 'is-active' : ''}
                aria-current={active === id ? 'true' : undefined}
              >
                <span>{number}</span>{label}
              </a>
            ))}
          </div>
          <span className="ml-nav-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
        </nav>

        <section className="food-case-section ml-section" id="ml-overview">
          <MlSectionLabel number="01">Project overview</MlSectionLabel>
          <h2>Reading is personal. <em>It doesn’t have to be solitary.</em></h2>
          <div className="ml-overview-grid">
            <div><h3>The context</h3><p>Readers manage their lists in one place and talk about books somewhere else. Reading itself is mostly a solo activity.</p></div>
            <div><h3>The challenge</h3><p>Combine personal organization and social discovery in a single experience without making either one feel secondary.</p></div>
            <div><h3>The goal</h3><p>A platform where tracking a book, finding the next one, and reading it with friends all happen in the same place.</p></div>
          </div>
          <p className="ml-section-lede ml-dimensions-lede">Three dimensions work together, so a book can be followed from discovery to the last page and then talked about.</p>
          <div className="ml-overview-grid ml-dimensions">
            <div><h3>Organize</h3><p>Books are centralized and sorted into Want to read, Currently reading, and Read.</p></div>
            <div><h3>Reflect</h3><p>Progress, reading goals, and personal notes and highlights are kept with each book.</p></div>
            <div><h3>Connect</h3><p>Friends’ activity feeds discovery, and shared pages let readers compare progress and discuss a book.</p></div>
          </div>
          <ul className="ml-feature-list" aria-label="Main features">
            {mlFeatures.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </section>

        <section className="food-case-section ml-section" id="ml-problem">
          <MlSectionLabel number="02">The problem</MlSectionLabel>
          <div className="ml-problem">
            <div>
              <h2>Reading habits are <em>scattered.</em></h2>
              <p>Personal lists, reading history, recommendations from friends, and group discussions tend to live in different tools. MyLibrary treats them as parts of one experience.</p>
              <blockquote>How might we bring personal reading management and social discovery together in one coherent experience?</blockquote>
            </div>
            <div className="ml-converge" role="img" aria-label="Personal reading and Social reading converge into MyLibrary">
              <div className="ml-converge-a"><strong>Personal reading</strong><span>Lists · History · Progress</span></div>
              <div className="ml-converge-b"><strong>Social reading</strong><span>Friends · Recommendations · Discussion</span></div>
              <div className="ml-converge-c">MyLibrary</div>
            </div>
          </div>
        </section>

        <section className="food-case-section ml-section" id="ml-principles">
          <MlSectionLabel number="03">Design principles</MlSectionLabel>
          <h2>Three principles <em>guided the design.</em></h2>
          <div className="ml-principles">
            {mlPrinciples.map(([title, text, crop], index) => (
              <article key={title}>
                <div>
                  <span className="ml-principle-number">{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <div className="ml-principle-visuals">
                  {(Array.isArray(crop) ? crop : [crop]).map((item) => <MlCrop key={item.src} {...item} />)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="food-case-section ml-section" id="ml-structure">
          <MlSectionLabel number="04">Information architecture</MlSectionLabel>
          <h2>How the platform <em>is organized.</em></h2>
          <p className="ml-section-lede">One product with two spaces: a personal one for organizing, tracking and reflecting, and a social one for reading with others.</p>
          <div className="ml-ia">
            <p className="ml-ia-root">MyLibrary</p>
            <div className="ml-ia-spaces">
              {mlSpaces.map(({ name, note, social, branches }) => (
                <div className={`ml-ia-space${social ? ' ml-ia-space--social' : ''}`} key={name} style={{ '--cols': branches.length }}>
                  <p className="ml-ia-space-label"><strong>{name}</strong><span>{note}</span></p>
                  <div className="ml-ia-columns">
                    {branches.map(({ title, items }) => (
                      <div className="ml-ia-branch" key={title}>
                        <h3 className="ml-ia-node ml-ia-node--branch">{title}</h3>
                        <ul>
                          {items.map((item) => <li key={item}><span className="ml-ia-node">{item}</span></li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="ml-ia-bridge">Personal notes stay with the reader; shared notes belong to a shared page.</p>
          </div>
        </section>

        <section
          className="food-case-section ml-section ml-section--wide"
          id="ml-screens"
          onClick={(event) => {
            if (event.target.tagName === 'IMG') openZoom(event.target)
          }}
        >
          <MlSectionLabel number="05">Key screens</MlSectionLabel>
          <h2>Key screens, <em>one experience.</em></h2>
          <p className="ml-section-lede">Interface mockups of the main moments, with the design decisions behind each.</p>

          <MlScreen className="ml-screen--full" number="01" title="Homepage" role="Library, progress, discovery, and friends in one view." src="homepage.png" alt="MyLibrary homepage" w="1536" h="1024" notes={[
            'Continue reading shows page progress and one clear action per book.',
            'The reading goal (3 / 12 books) keeps personal tracking visible.',
            'Friends’ activity sits beside personal content, not on a separate page.',
          ]} />

          <div className="ml-screen-pair">
            <MlScreen number="02" title="Want to read" role="Organizing books by status." src="want-to-read.png" alt="Want to read list with filters" w="1536" h="1024" notes={[
              'Counts beside each status show the whole library at a glance.',
              'Filters for genre, author, rating, and date, plus sort and grid or list views.',
            ]} />
            <MlScreen number="03" title="Book detail" role="Everything needed to decide, and to act." src="book-detail.png" alt="Book detail page for The Poppy War" w="1536" h="1024" notes={[
              'A status menu and an “Add to my library” button sit next to the cover.',
              '“Readers you know” shows how friends relate to this book.',
            ]} />
          </div>

          <MlScreen className="ml-screen--full" number="04" title="Personal reading progress" role="A private space to track, annotate and reflect." src="progress-page.png" alt="Personal reading progress page for Dune, with segmented progress bar, chapters, reading goal and recent notes" w="1536" h="1024" notes={[
            'A segmented bar shows progress through the book (page 312 / 604, 52%).',
            'Chapters are listed with their page ranges, completed ones checked and the current chapter marked.',
            'My notes and My highlights sit in tabs beside progress, and recent notes are summarized in the side column.',
            'The reading goal (3 / 12 books) stays visible while reading.',
          ]} />

          <MlScreen className="ml-screen--right" number="05" title="Discover new books" role="Recommendations from several sources." src="discover.png" alt="Discover new books page" w="1536" h="1024" notes={[
            'Tabs separate For you, Popular, New releases, From your friends, and Award winners.',
            'A featured book carries one strong action: add to my library.',
            'Trending and friends’ additions sit in a side column.',
          ]} />

          <MlScreen className="ml-screen--left" number="06" title="My Friends" role="What friends are reading, at a glance." src="friends.png" alt="My Friends page" w="1536" h="1024" notes={[
            'Filter friends by what they are reading, want to read, or have read.',
            'Each friend row shows the current book with progress.',
            'Recent activity includes notes left on specific pages.',
          ]} />

          <MlScreen className="ml-screen--right" number="07" title="Shared reading" role="A book read by several people at once." src="shared-reading.png" alt="Shared reading page for The Pariah" w="1536" h="1024" notes={[
            'Reading together lists every reader with their own progress bar.',
            'Chapters and milestones frame the conversation.',
            'The terracotta “Update my progress” button is the main action.',
          ]} />

          <figure className="ml-screen-wide">
            <img src={publicAsset('/images/MyLibrary/discussion.png')} alt="Shared reading page in two states: Discussion tab with page-tagged comments, and Progress tab with reading insights" width="2172" height="724" loading="lazy" />
            <figcaption>
              <span>08</span>
              <h3>Discussion and reading progress</h3>
              <p>Comments carry a page number, and tabs separate Discussion, Detailed notes, Progress, and About. The Progress state adds reading insights for the group.</p>
            </figcaption>
          </figure>

          <MlScreen className="ml-screen--left" number="09" title="Detailed interaction" role="Adding a note to a page." src="note-modal.png" alt="Add a reading note window over the shared reading page" w="1536" h="1024" notes={[
            'The page number field shows the total (88 / 544).',
            'The note has a character counter, and a quote and tags are optional.',
            'Cancel is quiet; Post note is the single terracotta action.',
          ]} />
        </section>

        <nav className="food-case-pagination" aria-label="Project navigation">
          <a href={sitePath('/projects')}>All projects</a>
          <a href={sitePath('/projects/zoom-promax')}>Next project: ZoomEvenMore</a>
          <a href="#top">Back to top</a>
        </nav>
      </main>
      <Footer />
      {zoom && (
        <div className="ml-lightbox" role="dialog" aria-modal="true" aria-label="Enlarged screen" onClick={() => setZoom(null)}>
          <button type="button" className="ml-lightbox-close" aria-label="Close" onClick={() => setZoom(null)}>×</button>
          <img src={zoom.src} alt={zoom.alt} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </div>
  )
}

const chNav = [
  ['ch-challenge', 'Challenge', '01'],
  ['ch-research', 'Research', '02'],
  ['ch-experience', 'Screens', '03'],
  ['ch-paper', 'Paper', '04'],
]

const chInfo = [
  ['Project type', 'Phygital (physical + digital) chore management system'],
  ['Context', 'University project'],
  ['Role', 'Designer, Researcher'],
  ['Team', '3 designers'],
  ['Methods', 'Interviews, competitive analysis, paper prototyping, usability testing'],
  ['Tools', 'Figma, HTML, CSS, JavaScript, NodeJS'],
]

const chChallenge = [
  ['Coordination', <>Who does <strong>what</strong>, and <strong>when</strong>?</>],
  ['Negotiation', <>Tasks get swapped or contested through <strong>informal talk</strong>.</>],
  ['Visibility', <>Contributions go <strong>unnoticed</strong> when nobody sees them.</>],
]

const chScreens = [
  {
    number: '01', title: 'Home / Dashboard', src: 'homepage.png', w: 948, h: 1659, tone: 'lav',
    alt: 'Chorify home screen with today’s task, housemates, shortcuts, weekly calendar, weekly progress and recent activity',
    purpose: 'The household week at a glance.',
    interaction: <><strong>Scan</strong>, <strong>Exchange</strong> and <strong>Challenge</strong> sit under today’s task: one tap away.</>,
  },
  {
    number: '02', title: 'Task calendar', src: 'calendar.png', w: 948, h: 1659, tone: 'cream',
    alt: 'Chorify weekly calendar with the tasks of the selected day and a weekly overview by person',
    purpose: 'Who does what, across the week.',
    interaction: <>Pick a day, <strong>mark tasks done</strong>. Overview by <strong>person</strong> or <strong>task</strong>.</>,
  },
  {
    number: '03', title: 'Scan chore', src: 'scan.png', w: 948, h: 1659, tone: 'lime',
    alt: 'Chorify scan screen showing a physical chore card with a QR code inside the scanning frame',
    purpose: 'Links the physical card to the app.',
    interaction: <>Three steps: <strong>Scan, Confirm, Added</strong>.</>,
  },
  {
    number: '04', title: 'Challenge / Exchange', src: 'challenge_exchange.png', w: 948, h: 1660, tone: 'lav',
    alt: 'Chorify screen offering to exchange a chore or challenge a housemate to a mini-game, with the option to keep the chore',
    purpose: 'Three options: exchange, play, or keep.',
    interaction: <>An <strong>exchange</strong> can be accepted or declined. A <strong>challenge</strong> is settled by a quick game.</>,
  },
  {
    number: '06', title: 'Badges', src: 'badge.png', w: 948, h: 1659, tone: 'cream',
    alt: 'Chorify badges screen with 6 of 12 badges earned and locked badges greyed out',
    purpose: 'Recognises effort beyond the task list.',
    interaction: <><strong>Earned</strong> badges in colour, <strong>locked</strong> ones greyed, with a progress bar.</>,
  },
]

function ChScreen({ screen }) {
  return (
    <article className="ch-screen">
      <div className="ch-screen-text">
        <p className="ch-screen-number">{screen.number}</p>
        <h3>{screen.title}</h3>
        <p className="ch-screen-purpose">{screen.purpose}</p>
        <p>{screen.interaction}</p>
      </div>
      <figure className={`ch-screen-figure ch-tone-${screen.tone}`}>
        <img src={publicAsset(`/images/Chorify/${screen.src}`)} alt={screen.alt} width={screen.w} height={screen.h} loading="lazy" />
      </figure>
    </article>
  )
}

function ChorifyPage() {
  useCaseReveal()
  const [zoom, setZoom] = useState(null)

  useEffect(() => {
    if (!zoom) return undefined
    const onKey = (event) => { if (event.key === 'Escape') setZoom(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [zoom])

  const handleZoomClick = (event) => {
    const img = event.target
    if (img instanceof HTMLImageElement && img.closest('.ch-screen-figure, .ch-hero-phone, .ch-games, .ch-fig')) {
      setZoom({ src: img.currentSrc || img.src, alt: img.alt })
    }
  }

  return (
    <div className="food-charm-shell ch-shell">
      <SiteHeader projectsPage />
      <main className="food-charm-page ch-page" onClick={handleZoomClick}>
        <nav className="case-breadcrumb" aria-label="Breadcrumb">
          <a href={sitePath('/')}>Home</a><span aria-hidden="true">/</span><a href={sitePath('/projects')}>Projects</a><span aria-hidden="true">/</span><span aria-current="page">Chorify</span>
        </nav>

        <header className="ch-hero">
          <div className="ch-hero-copy">
            <p className="ch-eyebrow">UX / HCI / GAMIFICATION</p>
            <h1>Chorify</h1>
            <p className="ch-headline">Rethinking how we share <em>household responsibilities.</em></p>
            <p className="ch-lead">Chorify is a phygital (physical + digital) chore management system. Physical chore cards with QR codes connect to a mobile app where housemates organise tasks in a shared weekly calendar, exchange chores, settle them with mini-games and earn badges.</p>
            <p className="ch-lead">The idea is not to digitise a checklist, but to explore how physical objects, digital interfaces, social interaction and game mechanics can work together to structure responsibilities at home.</p>
            <p className="ch-lead ch-code-note">I also coded an early version using HTML, CSS, JavaScript, and NodeJS. <a href="https://github.com/uvsqmaryatou/Chorify" target="_blank" rel="noopener noreferrer">View it on GitHub.</a></p>
          </div>
          <figure className="ch-hero-phone">
            <span className="ch-hero-blob ch-hero-blob--lime" aria-hidden="true" />
            <span className="ch-hero-blob ch-hero-blob--purple" aria-hidden="true" />
            <img src={publicAsset('/images/Chorify/homepage.png')} alt="Chorify home screen on a phone, showing today’s task, shortcuts, weekly progress and recent activity" width="948" height="1659" fetchPriority="high" />
          </figure>

        <dl className="ch-info">
          {chInfo.map(([label, value]) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
        </header>

        <SectionNav items={chNav} theme="snav--chorify" />

        <section className="food-case-section ch-section" id="ch-challenge">
          <p className="ch-label"><span>01</span>The challenge</p>
          <h2>Chores are about more than <em>completing tasks.</em></h2>
          <div className="ch-two">
            <p>Sharing a home means <strong>coordinating</strong>, <strong>negotiating</strong> and making contributions <strong>visible</strong>. The goal: a <strong>fairer split</strong> without extra friction.</p>
            <p className="ch-question"><span>Design question</span>How might a shared system encourage a <strong>fairer distribution</strong> of chores <strong>without extra effort</strong>?</p>
          </div>
          <ul className="ch-triad">
            {chChallenge.map(([title, text]) => (
              <li key={title}><h3>{title}</h3><p>{text}</p></li>
            ))}
          </ul>
        </section>

        <ChResearchSection />

        <section className="food-case-section ch-section ch-section--wide" id="ch-experience">
          <p className="ch-label"><span>03</span>The final experience</p>
          <h2>Six screens, <em>one household.</em></h2>
          <div className="ch-screens">
            {chScreens.slice(0, 4).map((screen) => <ChScreen key={screen.number} screen={screen} />)}

            <article className="ch-screen ch-screen--wide">
              <div className="ch-screen-text">
                <p className="ch-screen-number">05</p>
                <h3>Game selection &amp; gameplay</h3>
                <p className="ch-screen-purpose">Clear consequences before, during and after the game.</p>
                <p>Pick a game, play <strong>Rock Paper Scissors</strong>, then see <strong>who does which chore</strong> and the <strong>updated schedule</strong>.</p>
              </div>
              <figure className="ch-games ch-tone-lime">
                <img src={publicAsset('/images/Chorify/pierre_feuille_ciseaux.png')} alt="Three Chorify screens: choosing a game, a Rock Paper Scissors round, and the result with the updated schedule" width="1536" height="1024" loading="lazy" />
              </figure>
            </article>

            {chScreens.slice(4).map((screen) => <ChScreen key={screen.number} screen={screen} />)}
          </div>
        </section>

        <ChPaperSection />

        <nav className="food-case-pagination ch-pagination" aria-label="Project navigation">
          <a href={sitePath('/projects')}>All projects</a>
          <a href={sitePath('/projects/vr-museum')}>Next project: VR Museum</a>
          <a href="#top">Back to top</a>
        </nav>
      </main>
      {zoom && (
        <div className="ml-lightbox" role="dialog" aria-modal="true" aria-label="Enlarged screen" onClick={() => setZoom(null)}>
          <button type="button" className="ml-lightbox-close" aria-label="Close" onClick={() => setZoom(null)}>×</button>
          <img src={zoom.src} alt={zoom.alt} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
      <Footer />
    </div>
  )
}

function App() {
  const basePath = import.meta.env.BASE_URL.replace(/\/+$/, '')
  const browserPath = window.location.pathname
  const pathname = (browserPath.startsWith(`${basePath}/`) ? browserPath.slice(basePath.length) : browserPath).replace(/\/+$/, '') || '/'
  const projectsPage = pathname === '/projects'
  const foodCharmPage = pathname === '/projects/food-charm'
  const posterPalPage = pathname === '/projects/posterpal'
  const zenRoomsPage = pathname === '/projects/zen-rooms'
  const zoomProMaxPage = pathname === '/projects/zoom-promax'
  const myLibraryPage = pathname === '/projects/mylibrary'
  const chorifyPage = pathname === '/projects/chorify'
  const arGardenPage = pathname === '/projects/ar-garden'
  const vrMuseumPage = pathname === '/projects/vr-museum'
  useEffect(() => {
    const main = document.querySelector('main:not(.food-charm-page)')
    if (!main || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      return undefined
    }

    const sections = main.querySelectorAll(':scope > section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('portfolio-section-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' })

    main.classList.add('portfolio-reveal-ready')
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      main.classList.remove('portfolio-reveal-ready')
    }
  }, [])

  useEffect(() => {
    document.title = pathname === '/projects/food-charm'
      ? 'Food Charm — HCI / UX Design Portfolio'
      : pathname === '/projects/posterpal'
        ? 'PosterPal — HCI / UX Design Portfolio'
      : pathname === '/projects/zen-rooms'
        ? 'Zen Rooms — HCI / UX Design Portfolio'
      : pathname === '/projects/zoom-promax'
        ? 'ZoomEvenMore — HCI / UX Design Portfolio'
      : pathname === '/projects/mylibrary'
        ? 'MyLibrary — HCI / UX Design Portfolio'
      : pathname === '/projects/chorify'
        ? 'Chorify — HCI / UX Design Portfolio'
      : pathname === '/projects/ar-garden'
        ? 'AR Garden — HCI / UX Design Portfolio'
      : pathname === '/projects/vr-museum'
        ? 'VR Museum — HCI / UX Design Portfolio'
      : pathname === '/projects'
        ? 'My Projects — HCI / UX Design Portfolio'
        : 'HCI / UX Design Portfolio'

    const supportsProjectAnchors = pathname === '/projects' || pathname === '/projects/food-charm' || pathname === '/projects/posterpal' || pathname === '/projects/zen-rooms' || pathname === '/projects/zoom-promax' || pathname === '/projects/mylibrary' || pathname === '/projects/chorify' || pathname === '/projects/ar-garden' || pathname === '/projects/vr-museum'
    if (!supportsProjectAnchors || !window.location.hash) return undefined

    const targetId = window.location.hash.slice(1)
    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView()
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [pathname])

  if (foodCharmPage) return <FoodCharmPage />
  if (posterPalPage) return <PosterPalPage />
  if (zenRoomsPage) return <ZenRoomsPage />
  if (zoomProMaxPage) return <ZoomProMaxPage />
  if (myLibraryPage) return <MyLibraryPage />
  if (chorifyPage) return <ChorifyPage />
  if (arGardenPage) return <ARGardenPage />
  if (vrMuseumPage) return <VRMuseumPage />

  return (
    <>
      <SiteHeader projectsPage={projectsPage} />
      {projectsPage ? <ProjectsPage /> : <HomePage />}
    </>
  )
}

export default App
