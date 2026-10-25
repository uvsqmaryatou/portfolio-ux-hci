# HCI Portfolio — Design System & Project Guidelines

## Project goal

Build a distinctive portfolio for an M2 Human-Computer Interaction student at Université Paris-Saclay, aimed at securing an internship in HCI, UX research, interaction design, product design or creative technology.

The portfolio must communicate the ability to understand human needs, design digital interfaces, prototype interactions and explore emerging technologies.

## Art direction: Clean & Modern × Playful & Creative

The website should feel like a contemporary digital design studio: clean, sophisticated, expressive and visually playful.

Combine a clear layout and strong usability with creative compositions, real interface screenshots, prototype artifacts and immersive project imagery.

Avoid generic portfolio templates, corporate SaaS aesthetics, journalism-style layouts, decorative illustrations without purpose, and excessive visual effects.

## Color palette

Define reusable CSS custom properties for:

- Soft White: #F7F7F2 — primary background
- Deep Indigo: #201747 — primary text and strong surfaces
- Electric Violet: #6C5CFF — primary accent, links and interactive states
- Periwinkle: #B9B0FF — project visuals and supporting surfaces
- Soft Lavender: #E6E0FA — secondary backgrounds
- Acid Lime: #E4F47A — rare, playful accent
- White: #FFFFFF — interface surfaces
- Muted Gray: #777487 — secondary text
- Subtle Border: #DDD8E8 — dividers and outlines

Use Soft White and Deep Indigo as the foundation. Use Electric Violet selectively. Reserve Acid Lime for small accents.

Do not use terracotta, rust, burnt orange, or a pink-dominant palette.

## Typography

- Use Space Grotesk for headings and navigation.
- Use DM Sans for body text, buttons, captions and metadata.
- Use responsive type scales, clear hierarchy, comfortable line height and deliberate spacing.
- Avoid excessively bold headings and uncontrolled line breaks.
- Load fonts efficiently and provide sensible fallbacks.

## Homepage architecture

1. Navigation: compact and clear, with Work, About and Contact.
2. Hero: positioning statement and short introduction on the left; a playful, carefully composed arrangement of genuine project visuals on the right.
3. Selected Work: a curated selection of projects presented with varied image proportions and layouts.
4. Design Process: research, exploration, prototyping and iteration, using authentic project evidence where available.
5. Playground: experiments and emerging-technology projects that do not require full case studies.
6. About: concise background, HCI interests and professional goals.
7. Contact: clear contact link and CV link when actual destinations are provided.

## Hero visual composition

The Hero should balance clear typography with a creative composition of two or three real project artifacts.

Prefer carefully controlled overlap, varied image proportions and restrained depth. Do not create generic empty browser windows, fake interface screenshots, random floating labels or abstract decorations just to fill space.

If suitable project assets are not available, use clearly labeled placeholders that are easy to replace.

## Project content integrity

Potential projects include MyLibrary, Chorify, Zoom++, VR Museum, VR Garden, FoodCharm, ZenRooms and other interaction-design experiments.

Only use project names and facts confirmed by the owner. Never invent user quotes, research findings, metrics, test results or project outcomes.

MyLibrary is a completed product. Its existing interface must not be redesigned. Only its presentation within the portfolio may be designed.

The homepage should not automatically prioritize MyLibrary. Project order must remain easy to change.

## Case-study principles

Each case study should adapt to the real project rather than forcing every project into an identical process.

When available, explain context, problem, role, research methods, insights, design decisions, prototypes, implementation, testing, outcomes and reflections.

Clearly distinguish actual research evidence from hypotheses or illustrative examples.

## Technical constraints

- Keep the existing React + Vite setup and JavaScript.
- Use reusable components and maintainable CSS.
- Centralize design tokens in CSS custom properties.
- Avoid unnecessary dependencies.
- Preserve working navigation and links unless a change is explicitly approved.
- Make all sections responsive and accessible.
- Respect keyboard navigation, visible focus states, sufficient contrast and reduced-motion preferences.
- Optimize image sizes and avoid heavy animations.

## Implementation workflow

- Inspect existing files before editing.
- Explain the intended changes before substantial modifications.
- Work in small, reviewable milestones.
- Preserve working functionality and unrelated project files.
- Never rebuild the entire application unnecessarily.
- Test the result in the browser and resolve errors introduced by changes.
- Wait for approval before major implementation steps.