import { publicAsset } from '../publicAsset.js'
const projects = [
  { slug: 'food-charm', number: '01', title: 'Food Charm', category: 'UX/UI · Food & dining', art: 'food', symbol: 'FC', image: publicAsset('/images/FoodCharm/preview.png'), detailPath: '/projects/food-charm', description: 'A connected keychain reimagining how communities share food. Explore how research, scenario mapping, and interaction design shaped a more personal and accessible food-sharing experience.' },
  { slug: 'vr-museum', number: '02', title: 'VR Museum', category: 'VR · Culture', art: 'museum', symbol: 'VM', image: publicAsset('/images/VR%20museum/Capture%20d%27%C3%A9cran%202026-09-28%20181002.png'), detailPath: '/projects/vr-museum', description: 'A collaborative Unity VR museum with three themed exhibitions. My contribution focused on the Japanese room.' },
  { slug: 'vr-garden', number: '03', title: 'VR Garden', category: 'VR · Nature', art: 'garden', symbol: 'VG' },
  { slug: 'zoom-promax', number: '04', title: 'ZoomEvenMore', category: 'UX/UI · Communication', art: 'zoom', symbol: 'Z+', image: publicAsset('/images/Zoom++/preview.png'), detailPath: '/projects/zoom-promax', description: 'A redesign of the video-meeting experience with a customizable participant layout and a built-in interactive agenda, explored through a Figma prototype.' },
  { slug: 'ar-garden', number: '05', title: 'AR Garden', category: 'Immersive experience · HCI · AR', art: 'ar', symbol: 'AR', image: publicAsset('/images/AR%20Garden/image.png'), detailPath: '/projects/ar-garden', description: 'An interactive virtual gardening experience for planting, watering, and interacting with elements of a garden.' },
  { slug: 'chorify', number: '06', title: 'Chorify', category: 'UX/UI · Phygital', art: 'chorify', symbol: 'C', image: publicAsset('/images/Chorify/preview-centered.png'), detailPath: '/projects/chorify', description: 'A phygital household chore system: physical QR chore cards, a shared weekly calendar, task exchanges, mini-game challenges and badges, designed to make shared responsibilities visible.' },
  { slug: 'layover-app', number: '07', title: 'LayoverApp', category: 'UX/UI · Travel', art: 'layover', symbol: 'L' },
  { slug: 'my-library', number: '08', title: 'MyLibrary', category: 'UX/UI · Reading', art: 'library', symbol: 'M', image: publicAsset('/images/MyLibrary/homepage.png'), detailPath: '/projects/mylibrary', description: 'A social reading platform that combines a personal library with book discovery, friends’ activity, and shared reading with page-level notes.' },
  { slug: 'poster-pal', number: '09', title: 'PosterPal', category: 'HCAI · Human-centered AI', art: 'poster', symbol: 'P', image: publicAsset('/images/PosterPal/preview.png'), detailPath: '/projects/posterpal', description: 'A Human-Centered AI (HCAI) project: an AI-assisted poster-creation workflow that helps novice users design while keeping creative control in their hands.' },
  { slug: 'zen-rooms', number: '10', title: 'Zen Rooms', category: 'HCI · Virtual Reality', art: 'zen', symbol: 'ZR', image: publicAsset('/images/ZenRooms/preview.png'), detailPath: '/projects/zen-rooms', description: 'An immersive VR library experience exploring tangible emotional interaction through responsive visuals, sound, and a virtual guide.' },
  { slug: 'zoom-plus-plus', number: '11', title: 'Zoom++', category: 'UX/UI · Communication', art: 'zoom', symbol: 'Z++' },
].map((project) => ({
  ...project,
  description: project.description || '',
}))

export const featuredProjects = [projects[0], projects[8], projects[9], projects[7], projects[3], projects[5]]
export const allProjects = [
  ...featuredProjects,
  ...projects.filter((project) => !featuredProjects.includes(project)),
].filter((project) => !['vr-garden', 'zoom-plus-plus', 'layover-app'].includes(project.slug))

export const processSteps = [
  {
    number: '01',
    title: 'Understand the user',
    description: 'Explore needs, context, behaviors, and pain points with research methods suited to the project.',
  },
  {
    number: '02',
    title: 'Define the problem',
    description: 'Synthesize insights into a clear problem, user needs, and meaningful design objectives.',
  },
  {
    number: '03',
    title: 'Ideate and explore',
    description: 'Generate ideas, sketch interactions, and consider a range of possible directions.',
  },
  {
    number: '04',
    title: 'Prototype and design',
    description: 'Shape ideas into wireframes, interface designs, and interactive prototypes.',
  },
  {
    number: '05',
    title: 'Test and iterate',
    description: 'Evaluate where possible, identify usability issues, and refine the experience.',
  },
]
