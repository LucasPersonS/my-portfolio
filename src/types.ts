export interface Project {
  title: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: 'Register & Login APIs',
    image: '/PROJECT1.png',
    tags: ['AUTHENTICATION', 'SOCIAL MEDIA', 'APIs'],
    link: 'https://github.com/LucasPersonS/clean-energy-blog/blob/master/README.md',
    github: 'https://github.com/LucasPersonS/clean-energy-blog',
  },
  {
    title: 'Ogi Insurance Chatbot',
    image: '/PROJECT2.png',
    tags: ['ARTIFICIAL INTELLIGENCE', "CHATBOT", "GEMINI"],
    link: 'https://gemini-ai-chatbot-green-nu.vercel.app',
    github: 'https://github.com/LucasPersonS/gemini-ai-chatbot',
  },
  {
    title: 'Porto Insurance Website',
    image: '/PROJECT3.png',
    tags: ['APIs', "CHATBOT", "AUTHENTICATION"],
    link: 'https://porto-site.vercel.app',
    github: 'https://github.com/LucasPersonS/portoSite',
  },
  {
    title: 'Twitch Clicker Game',
    image: '/PROJECT4.png',
    tags: ['GAMING', "DESIGN", "CODING"],
    link: 'https://v0-twitch-clicker-3-0-gre07yh97o4-lucaspersons-projects.vercel.app',
    github: 'https://github.com/LucasPersonS/twitch-clicker-game',

  },
  {
    title: 'COLLEGE DASHBOARD',
    image: '/PROJECT5.png',
    tags: ['DASHBOARD', "DESIGN", "APIs"],
    link: 'https://example.com/project1',
    github: 'https://github.com/user/project1',
  },

  {
    title: 'COMMUNITY WEBSITE',
    image: '/PROJECT6.png',
    tags: ['COMMUNITY', "DESIGN", "CODING"],
    link: 'https://example.com/project1',
    github: 'https://github.com/user/project1',
  },
  {
    title: 'PORTFOLIO',
    image: '/PROJECT7.png',
    tags: ['WEBSITE DESIGN', "CODING"],
    link: 'https://example.com/project1',
    github: 'https://github.com/user/project1',
  },

  {
    title: 'STREAMING WEBSITE',
    image: '/PROJECT8.png',
    tags: ['DESIGN', "CODING"],
    link: 'https://example.com/project1',
    github: 'https://github.com/user/project1',
  },
];
