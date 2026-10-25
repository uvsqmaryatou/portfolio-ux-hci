const R = '/images/Chorify/research/'
const PAPER_URL = '/images/PosterPal/Chorify_research_paper.pdf'
const PAPER_TITLE = 'Chorify: A Phygital Approach to Fair and Engaging Chore Distribution'

const pillars = [
  {
    n: '01',
    title: 'Social aspects of household labour',
    points: [
      'Unequal distribution of domestic work.',
      'The invisible work of planning, anticipating and coordinating.',
      'Perceived unfairness and household conflict.',
      'Gendered assumptions about who manages the home.',
    ],
    excerpts: [
      ['Hochschild & Machung', 'Even in dual-earner homes, domestic labour stays skewed: the “second shift”.'],
      ['Barigozzi et al. (2025)', 'Mental load is a perception gap: 27% of couples systematically under-recognise one partner’s organisational work.'],
      ['Cerrato & Cifre (2018)', 'Tension comes less from the volume of chores than from not acknowledging their unequal distribution.'],
    ],
  },
  {
    n: '02',
    title: 'Gamification in household management',
    points: [
      'Playful mechanics can make repetitive tasks more engaging.',
      'Social interaction can support shared responsibility.',
      'Complexity, rewards, penalties and competition can backfire.',
    ],
    excerpts: [
      ['Diefenbach & Müssig (2019)', 'Counterproductive effects of gamification, analysed on the task manager Habitica.'],
      ['Igarashi & Yokoyama (2023)', 'Kajibuntan divides chores transparently, but is purely digital and has no game mechanics.'],
      ['Rumsamrong & Chiou (2021)', 'Embedding disputes in small game “arenas” can reduce resentment.'],
    ],
  },
  {
    n: '03',
    title: 'User behaviour and habit formation',
    points: [
      'Autonomy and freedom of choice.',
      'Feedback and recognition.',
      'Social connection and sustained motivation.',
      'The risk that novelty fades over time.',
    ],
    excerpts: [
      ['Sailer et al. (2017)', 'Different game elements satisfy different needs: feedback builds competence, social elements build relatedness.'],
      ['Pereira et al. (2025)', 'Gamified systems lean on extrinsic motivators; social and intrinsic ones matter more over time.'],
      ['Deterding et al. (2011)', 'Defines gamification as game design elements used in non-game contexts.'],
    ],
  },
]

const conclusions = [
  'Fairness requires making contributions visible.',
  'Gamification must support social fairness, not only individual competition.',
  'Sustainable engagement balances autonomy, feedback and social connection.',
]

const references = [
  ['Hochschild & Machung (2012)', 'The Second Shift', null],
  ['Barigozzi et al. (2025)', 'Beyond Time: Unveiling the Invisible Burden of Mental Load', 'https://doi.org/10.48550/arXiv.2505.11426'],
  ['Cerrato & Cifre (2018)', 'Gender Inequality in Household Chores and Work-Family Conflict', 'https://doi.org/10.3389/fpsyg.2018.01330'],
  ['Diefenbach & Müssig (2019)', 'Counterproductive Effects of Gamification: The Gamified Task Manager Habitica', 'https://doi.org/10.1016/j.ijhcs.2018.09.004'],
  ['Igarashi & Yokoyama (2023)', 'Kajibuntan: A House Chore Division App', 'https://doi.org/10.1609/aaai.v37i13.27075'],
  ['Deterding et al. (2011)', 'From Game Design Elements to Gamefulness: Defining Gamification', 'https://doi.org/10.1145/2181037.2181040'],
  ['Rumsamrong & Chiou (2021)', 'Gamification in Conflict Resolution Using Scaled Down Arenas', 'https://doi.org/10.1109/CSDE53843.2021.9718467'],
  ['Sailer et al. (2017)', 'How Gamification Motivates', 'https://doi.org/10.1016/j.chb.2016.12.033'],
  ['Pereira et al. (2025)', 'Investigating Gamification to Reduce Procrastination', 'https://doi.org/10.5753/jis.2025.5412'],
]

const contexts = ['Family member living with parents and siblings', 'Person living with their partner', 'Student sharing an apartment with roommates']

const insights = [
  ['01', 'Repeated imbalance hurts most', <>The <strong>same person</strong> keeps getting the worst chores.</>],
  ['02', 'No shared allocation system', <>Chores are assigned <strong>informally</strong>.</>],
  ['03', 'Uneven mental load', <>One person <strong>notices, decides and reminds</strong>.</>],
  ['04', 'Hidden tension', <>People <strong>avoid the topic</strong>; even random luck can breed resentment.</>],
]

const mapping = [
  ['Repeated imbalance', 'Randomised chore allocation'],
  ['Invisible contributions', 'Shared tracking and peer recognition'],
  ['Uncomfortable negotiations', 'Structured exchanges and challenges'],
  ['Low motivation', 'Playful, shared interactions'],
]

const compared = [
  ['Chorify', 'Our proposed system at the early design stage.', 'proposed'],
  ['Habitica', 'A gamified task-management application.', 'habitica'],
  ['Home Tasker', 'A household chore-management application.', 'tasker'],
]

const dimensions = [
  ['Effort', 'How much work users must do to interact with the system.'],
  ['Fairness', 'How fair the allocation and outcomes are perceived to be.'],
  ['Conflict', 'The potential for interactions to create or intensify disagreements.'],
  ['Agency', 'How much control users have over their tasks and decisions.'],
  ['Social interaction', 'The extent to which the system supports collaborative or competitive interaction.'],
  ['Familiarity', 'How recognisable and easy to understand the interaction model is.'],
  ['Visibility of effort', 'How clearly household members can see one another’s contributions.'],
]

const pairs = [
  ['Assignment creates mental load', 'No clear, shared way to decide who does what.', <><strong>Random assignment</strong> with physical cards linked to the app.</>],
  ['Negotiation creates tension', 'Talking about undesirable chores breeds resentment.', <><strong>Structured exchanges</strong> and playful challenges.</>],
  ['Contributions need recognition', 'Effort stays invisible to others.', <><strong>Shared tracking</strong>, peer reviews and badges.</>],
  ['Complexity hurts engagement', 'Early token mechanics confused testers.', <><strong>Tokens removed</strong>, simpler recognition.</>],
]

const proto1 = [
  ['p1-action-menu.png', 'Choose an action: challenge, exchange or finish', 'Select a chore, then choose between an exchange and a challenge.'],
  ['p1-token-offer.png', 'Token offer and confirmation', 'Review or adjust the proposed token offer.'],
  ['p1-choose-game.png', 'Choose your game screen', 'Pick the game that will settle the chore.'],
  ['p1-play.png', 'A tic-tac-toe game played on paper', 'Play a skill-based or luck-based mini-game.'],
  ['p1-outcome.png', 'Schedule updated after the game', 'The chore allocation is updated from the outcome.'],
]

const proto2Steps = [
  'Randomly select a physical chore card.',
  'Scan its QR code with the mobile app to register the chore.',
  'Bring two cards together to start an exchange or a challenge.',
  'Select or play a skill-based or luck-based game.',
  'Update the household schedule.',
  'Record completed chores and recognise contributions through peer reviews and badges.',
]

const worked = [
  <><strong>Physical cards</strong> felt tangible, fun and intuitive.</>,
  <>Participants enjoyed the <strong>mini-games</strong>.</>,
  <>Losing a challenge was <strong>accepted gracefully</strong>.</>,
  <>Users liked <strong>choice</strong>: exchange first, challenge as fallback.</>,
]

const didnt = [
  <>The <strong>purpose of tokens</strong> was unclear.</>,
  'The prize readjustment was confusing: what is the point for the challenger?',
  <><strong>Misleading labels</strong>: “Important Alerts” read as a challenge entry.</>,
  <><strong>No onboarding</strong> explaining the rules.</>,
]

const decisions = [
  ['Token-based bidding', 'Remove the token system'],
  ['Complex reward adjustments', 'Introduce a simpler badge-based recognition'],
  ['Confusing navigation and labels', 'Clean up labels and clarify terminology'],
  ['No onboarding', 'Add rules behind an info button'],
  ['Digital interaction alone', 'Develop the physical-card-plus-app experience'],
  ['Unrestricted challenges', 'Limit challenges to two per week'],
]

const paperContents = [
  'Related work on mental load, household inequality, gamification and habit formation.',
  'System design and the rationale behind the physical cards and mobile interface.',
  'Methodology of the pilot user study.',
  'Quantitative and qualitative findings.',
  'Discussion of limitations and future research.',
]

function Fig({ src, alt, caption, w, h, className = '' }) {
  return (
    <figure className={`ch-fig ${className}`}>
      <img src={`${R}${src}`} alt={alt} width={w} height={h} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

function Module({ n, title, description, teaser, children }) {
  return (
    <article className="ch-module">
      <p className="ch-module-n">Research {n}</p>
      <h3>{title}</h3>
      <p className="ch-module-desc">{description}</p>
      <ul className="ch-teaser" aria-label="Key topics">
        {teaser.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <details className="ch-details">
        <summary>
          <span className="ch-summary-open">Explore research</span>
          <span className="ch-summary-close">Hide research</span>
          <span className="ch-summary-icon" aria-hidden="true" />
        </summary>
        <div className="ch-details-body">{children}</div>
      </details>
    </article>
  )
}

export function ChResearchSection() {
  return (
    <section className="food-case-section ch-section ch-research" id="ch-research">
      <p className="ch-label"><span>02</span>Research &amp; exploration</p>
      <h2>The evidence <em>behind the concept.</em></h2>
      <p className="ch-intro">We studied how <strong>chores are shared</strong>, why they create <strong>tension</strong>, and how <strong>play</strong> could make it fairer, through <strong>literature</strong>, <strong>interviews</strong>, <strong>competitive analysis</strong> and <strong>prototyping</strong>.</p>

      <div className="ch-modules">
        <Module
          n="01"
          title="Understanding the invisible workload"
          description={<>Why do chore apps fall short? <strong>Inequality</strong>, <strong>mental load</strong>, <strong>gamification</strong>, habits.</>}
          teaser={['Social aspects of household labour', 'Gamification', 'Habit formation']}
        >
          <div className="ch-pillars">
            {pillars.map((p) => (
              <section key={p.n} className="ch-pillar">
                <h4><span>{p.n}</span>{p.title}</h4>
                <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                <div className="ch-excerpts">
                  {p.excerpts.map(([src, text]) => (
                    <blockquote key={src}><p>{text}</p><cite>{src}</cite></blockquote>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="ch-learned">
            <h4>What the literature taught us</h4>
            <ol>{conclusions.map((c) => <li key={c}>{c}</li>)}</ol>
          </div>
          <details className="ch-refs">
            <summary>References ({references.length})</summary>
            <ul>
              {references.map(([who, what, url]) => (
                <li key={who}>
                  <strong>{who}.</strong> {url ? <a href={url} target="_blank" rel="noopener noreferrer">{what} ↗</a> : what}
                </li>
              ))}
            </ul>
          </details>
          <p className="ch-note">Excerpts are summaries of the sources, written from our literature review and paper. They are not direct quotations.</p>
        </Module>

        <Module
          n="02"
          title="Understanding real household dynamics"
          description={<><strong>3 story interviews</strong> in different households: how chores are assigned and where <strong>tension</strong> appears.</>}
          teaser={['3 household contexts', '4 insight themes', 'Research → design']}
        >
          <ul className="ch-contexts" aria-label="Interview contexts">
            {contexts.map((c, i) => <li key={c}><span>{i + 1}</span>{c}</li>)}
          </ul>
          <div className="ch-insights">
            {insights.map(([n, t, d]) => (
              <div key={n} className="ch-insight"><span>{n}</span><h4>{t}</h4><p>{d}</p></div>
            ))}
          </div>
          <h4 className="ch-sub">From insight to design</h4>
          <ul className="ch-mapping">
            {mapping.map(([a, b]) => (
              <li key={a}><span>{a}</span><i aria-hidden="true">→</i><strong>{b}</strong></li>
            ))}
          </ul>
          <p className="ch-note">Themes are our synthesis of the three interviews. The raw interview notes are not published here, so no participant quotations are shown.</p>
        </Module>

        <Module
          n="03"
          title="Where existing solutions fall short"
          description={<>Chorify’s early concept vs <strong>Habitica</strong> and <strong>Home Tasker</strong>.</>}
          teaser={['Chorify', 'Habitica', 'Home Tasker']}
        >
          <ul className="ch-compared">
            {compared.map(([n, d, k]) => <li key={n} className={`ch-compared--${k}`}><strong>{n}</strong><span>{d}</span></li>)}
          </ul>
          <Fig
            src="competitive-radar.png"
            alt="Radar chart comparing the proposed system, Habitica and Home Tasker on conflict, fairness, effort, visibility, familiarity, competitive social interaction, collaborative social interaction and agency"
            w={905} h={900} className="ch-fig--radar"
            caption="App comparison: unique vs shared dimensions. Blue is Chorify (proposed system), orange is Habitica, green is Home Tasker."
          />
          <p className="ch-takeaway">Chorify explored a more social and interactive approach to household management, with greater emphasis on user agency and visible contributions. However, its early competitive mechanics also introduced potential conflict and additional interaction effort.</p>
          <p className="ch-note">These ratings are our team’s initial qualitative assessment of the design space. They are not an objective benchmark or a validated user-study result.</p>
        </Module>

        <Module
          n="04"
          title="Exploring the design space"
          description={<>Concepts mapped on <strong>7 dimensions</strong> to weigh <strong>trade-offs</strong> before choosing.</>}
          teaser={['Early design', 'Final design', '7 dimensions']}
        >
          <div className="ch-plots">
            <Fig src="dimensions-early.png" alt="System dimension plot of the early, app-based design" w={641} h={562} caption="Early design: app-based system." />
            <Fig src="dimensions-final.png" alt="Dimension plot of the final gamified mixed system" w={495} h={376} caption="Final design: gamified mixed (physical + digital) system." />
          </div>
          <dl className="ch-legend">
            {dimensions.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}
          </dl>
          <p className="ch-takeaway">The design exploration revealed a central tension: increasing social interaction and user agency could make chores more engaging, but excessive competition and complexity could undermine fairness and ease of use.</p>
        </Module>
      </div>

      <div className="ch-bridge">
        <h3>From research insights <em>to design principles</em></h3>
        <div className="ch-pairs">
          {pairs.map(([title, insight, response], i) => (
            <article key={title} className="ch-pair">
              <div className="ch-pair-insight">
                <p className="ch-pair-tag">Insight {String(i + 1).padStart(2, '0')}</p>
                <h4>{title}</h4>
                <p>{insight}</p>
              </div>
              <span className="ch-pair-arrow" aria-hidden="true">→</span>
              <div className="ch-pair-response">
                <p className="ch-pair-tag">Design response</p>
                <p>{response}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="ch-proto">
        <h3>Two prototypes. <em>One evolving concept.</em></h3>

        <div className="ch-proto-block">
          <div className="ch-proto-head">
            <p className="ch-pair-tag">Prototype 01</p>
            <h4>Digital-first chore challenges</h4>
            <p>A paper wireframe of a mobile app, using Post-it notes to simulate pop-ups. This version explored agency, negotiation and competitive interaction, but introduced confusion about the purpose and value of tokens.</p>
          </div>
          <ol className="ch-proto-strip">
            {proto1.map(([src, alt, step], i) => (
              <li key={src}>
                <Fig src={src} alt={alt} w={320} h={450} />
                <span>{i + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="ch-proto-block ch-proto-block--two">
          <div className="ch-proto-head">
            <p className="ch-pair-tag">Prototype 02</p>
            <h4>A phygital card-based system</h4>
            <p>Physical cards made allocation tangible and interactive, while the mobile app provided tracking, scheduling and recognition. NFC was envisioned for the full system; QR codes were used as a functional substitute during the study.</p>
            <ol className="ch-steps">
              {proto2Steps.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>
          <div className="ch-proto-media">
            <Fig src="storyboard-prototype-2.png" alt="Five-step storyboard: drawing chore cards, scanning a card, starting a challenge, playing tic-tac-toe, and the updated weekly schedule" w={1556} h={311} caption="Storyboard of the card-based flow: draw, scan, challenge, play, update." />
            <Fig src="p2-cards.png" alt="Two handwritten paper chore cards reading Do the Dishes and Take out the trash" w={370} h={295} caption="The paper chore cards used in the prototype." className="ch-fig--small" />
          </div>
        </div>
      </div>

      <div className="ch-study">
        <h3>We tested the assumptions. <em>Then we simplified.</em></h3>
        <p className="ch-intro">Three participants tested both early prototypes in a think-aloud session. They were asked to challenge another household member for a chore and play a game, so we could examine usability, clarity, the token mechanics and the experience of interacting through physical cards.</p>
        <div className="ch-two-col">
          <div className="ch-col ch-col--good">
            <h4>What worked</h4>
            <ul>{worked.map((w, i) => <li key={i}>{w}</li>)}</ul>
          </div>
          <div className="ch-col ch-col--bad">
            <h4>What didn’t</h4>
            <ul>{didnt.map((w, i) => <li key={i}>{w}</li>)}</ul>
          </div>
        </div>
        <table className="ch-decisions">
          <caption>Evidence-based decisions</caption>
          <thead><tr><th scope="col">Earlier approach</th><th scope="col">Decision</th></tr></thead>
          <tbody>
            {decisions.map(([a, b]) => <tr key={a}><td>{a}</td><td>{b}</td></tr>)}
          </tbody>
        </table>
        <p className="ch-note">This was an early comparative study with three participants, run during design. It is separate from the later eight-participant pilot study described in the paper.</p>
      </div>
    </section>
  )
}

export function ChPaperSection() {
  return (
    <section className="food-case-section ch-section ch-paper" id="ch-paper">
      <p className="ch-label"><span>04</span>Scientific paper</p>
      <h2>Beyond the interface: <em>the research behind Chorify.</em></h2>
      <div className="ch-paper-card">
        <div>
          <p className="ch-paper-title">{PAPER_TITLE}</p>
          <p className="ch-paper-authors">Maryatou Kante, Jay Gupte, Yousra Bourguiba · Université Paris-Saclay</p>
          <p>Chorify was developed alongside a research paper exploring how a phygital, gamified system could support fairer chore distribution and make household responsibilities more visible and engaging.</p>
          <a className="ch-paper-button" href={PAPER_URL} target="_blank" rel="noopener noreferrer">Read the scientific paper ↗</a>
          <p className="ch-note">Project paper (PDF). It is not presented here as peer-reviewed or formally published.</p>
        </div>
        <div>
          <p className="ch-paper-contents-title">The paper includes</p>
          <ul className="ch-paper-contents">
            {paperContents.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
