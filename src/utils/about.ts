import type { ImageFunction } from 'astro:content';
import { getCollection } from 'astro:content';

export interface Tech {
  id: string;
  title: string;
  image: ImageFunction;
  url: string;
}

export interface Skill {
  name: string;
  tech: String[];
}

export interface CV {
  where: string;
  logo: string;
  title: string;
  url: string;
  date: string;
  activity: Array<string>;
  techs: Array<string>;
}

export interface Project {
  title: string;
  type: string;
  color: string;
  url: string;
  description: string;
  techs: Array<string>;
}

export const skills = [
  {
    name: 'Frontend',
    tech: ['js', 'nextjs'],
  },
  {
    name: 'Backend',
    tech: ['nodejs', 'mongodb'],
  },
  {
    name: 'DevOps',
    tech: ['linux'],
  },
] as Skill[];

export const experiences = [
  {
    where: 'NestJS',
    logo: 'https://dinhanhthi.com/img/about/exp/ideta-single.png',
    title: 'Software Engineer',
    url: 'https://nestjs.com/',
    date: '2022 - on going',
    activity: [
      'Ideta is a solution that allows companies to very easily create conversational assistants for many communication channels like Messenger, SMS, Slack, Wechat, Skype Business, ... but also for voice like Google Home. The solution makes the creation of chatbots accessible to everyone.',
      'My job is to understand how things work both on the backend and on the frontend, and then integrate some Natural Language Processing services into the main platform.',
    ],
    techs: ['nodejs', 'js'],
  },
  {
    where: 'NestJS',
    logo: 'https://dinhanhthi.com/img/about/exp/ideta-single.png',
    title: 'Software Engineer',
    url: 'https://nestjs.com/',
    date: '2022 - on going',
    activity: [
      'Ideta is a solution that allows companies to very easily create conversational assistants for many communication channels like Messenger, SMS, Slack, Wechat, Skype Business, ... but also for voice like Google Home. The solution makes the creation of chatbots accessible to everyone.',
      'My job is to understand how things work both on the backend and on the frontend, and then integrate some Natural Language Processing services into the main platform.',
    ],
    techs: ['nodejs', 'js'],
  },
] as CV[];

export const educations = [
  {
    where: 'Self-learning',
    logo: 'https://dinhanhthi.com/img/about/exp/self-learn.webp',
    title: 'Data Science',
    date: '2019 — current',
    activity: [
      "I've been learning myself Data Science using online courses (Coursera, deeplearning.ai, Dataquest, Fastai, Oxford) and real projects.",
    ],
  },
  {
    where: 'Self-learning',
    logo: 'https://dinhanhthi.com/img/about/exp/self-learn.webp',
    title: 'Web Development',
    date: '2013 — current',
    activity: ["I've been learning myself Web Development by making applications, websites and real projects."],
  },
  {
    where: 'Self-learning',
    logo: 'https://dinhanhthi.com/img/about/exp/self-learn.webp',
    title: 'Computer Science',
    date: '2008 — current',
    activity: [
      "I've been learning myself CS by watching online video courses, reading books, and practicing programming on sites like Hackerrank.",
    ],
  },
] as CV[];

export const projects = [
  {
    title: 'nextjs-tailwind-starter',
    icon: '🐕',
    description: 'A starter for Next.js 13.4+ with preconfigured Tailwind CSS, ESLint, VSCode Settings and Prettier.',
    source: 'https://github.com/dinhanhthi/nextjs-tailwind-starter',
    tech: ['nextjs', 'react', 'scss', 'ts', 'tailwindcss'],
  },
  {
    title: 'chrome-extension-react-starter',
    icon: '🦖',
    description: 'A starter for quickly creating a Chrome Extension that uses React and Tailwind CSS by default.',
    source: 'https://github.com/dinhanhthi/chrome-extension-react-starter',
    tech: ['chrome-extension', 'react', 'scss', 'ts', 'tailwindcss'],
  },
  {
    title: 'chrome-extension-ts-starter',
    icon: '🚙',
    description:
      'A starter for developing a Chrome Extension with TypeScript (only, without React) + Webpack + TailwindCSS + ESLint + Prettier.',
    source: 'https://github.com/dinhanhthi/chrome-extension-ts-starter',
    tech: ['chrome-extension', 'js', 'scss', 'tailwindcss', 'ts'],
  },
  {
    title: 'vite-react-ts-tailwind-starter',
    icon: '⚡',
    description:
      'A starter to quickly create a playground for a React app. It includes preconfigured ESLint, Prettier, and VSCode settings.',
    source: 'https://github.com/dinhanhthi/vite-react-ts-tailwind-starter',
    tech: ['react', 'scss', 'tailwindcss', 'ts', 'vite'],
  },
  {
    title: 'wordpress-gatsby',
    icon: '🎒',
    description: 'Build a Gatsby site using source from Wordpress.',
    source: 'https://github.com/dinhanhthi/wordpress-gatsby',
    url: 'https://dinhanhthi.com/build-a-website-using-wordpress-and-gatsby-1/',
    tech: [
      'bash',
      'gatsby',
      'git',
      'graphql',
      'js',
      'php',
      'postman',
      'python',
      'react',
      'scss',
      'tailwindcss',
      'ts',
      'wordpress',
    ],
  },
  {
    title: 'dinhanhthi.com',
    icon: '⭐',
    description: '11ty theme. Current version of my personal website.',
    source: 'https://github.com/dinhanhthi/dinhanhthi.com',
    url: 'http://dinhanhthi.com',
    tech: ['eleventy', 'git', 'html5', 'js', 'liquid', 'nodejs', 'notion', 'nunjucks', 'postman', 'scss', 'vscode'],
  },
  {
    title: 'dinhanhthi.com-v4 in gatsby',
    description:
      "An implementation of my personal website (v4) using GatsbyJS and TailwindCSS. It's not complete (and I've discontinued) but it's well written.",
    source: 'https://github.com/dinhanhthi/dinhanhthi.com-v4-gatsby',
    icon: '🥕',
    tech: ['gatsby', 'js', 'react', 'tailwindcss', 'graphql'],
  },
  {
    title: 'Google APIs Playground',
    icon: '🏖',
    description: 'A playground for Google APIs',
    source: 'https://github.com/dinhanhthi/google-api-playground',
    url: 'https://dinhanhthi.com/google-dialogflow-api/',
    tech: ['dialogflow', 'js', 'google-nodejs-api'],
  },
  {
    title: 'TEXmath Rebuild',
    icon: '🧨 ',
    description:
      'New version of TEXmath. A website about LaTeX and Tech Tutorials. This site is a part of our main project - Math2IT.',
    source: 'https://github.com/math2it/texmath-gas',
    url: 'http://texmath.com',
    tech: ['gatsby', 'js', 'react', 'tailwindcss', 'graphql', 'wordpress'],
  },
  {
    title: 'Data Science Learning',
    description:
      'All the courses, assignments, exercises, mini-projects, and books that I have worked on so far in my self-study of Machine Learning and Data Science.',
    source: 'https://github.com/dinhanhthi/data-science-learning',
    icon: '📊',
    tech_text: ['many techs'],
  },
  {
    title: 'Mountain vs Beach Classifier',
    description: 'A small project to create a classifier: mountain vs beach.',
    source: 'https://github.com/dinhanhthi/mountain-vs-beach',
    icon: '🏖',
    tech: ['bootstrap', 'html5', 'js', 'scss', 'tensorflow'],
  },
  {
    title: '11ty + ElasticlunrJS',
    description: "A demo of the search function on eleventy's website using Elasticlunr.js.",
    source: 'https://github.com/dinhanhthi/eleventy-elasticlunr-js',
    icon: '🔎',
    tech: ['eleventy', 'js', 'nodejs'],
  },
  {
    title: 'Web Dev Learning',
    description: 'Everything I have done so far to learn Web Development myself.',
    source: 'https://github.com/dinhanhthi/web-dev-learning',
    icon: '🌐',
    tech_text: ['many techs'],
  },
  {
    title: 'P13 Discussion Group',
    description: 'Private group to exchange ideas in IT between Vietnamese friends at Sorbonne Paris Nord University',
    source: 'https://github.com/dinhanhthi/P13-discuss-group',
    icon: '💡',
    tech_text: ['many techs'],
  },
  {
    title: 'Simple Perso',
    icon: '🍒',
    description: 'A simple and beautiful personal jekyll theme.',
    source: 'https://github.com/dinhanhthi/simple-perso',
    url: 'https://dinhanhthi.github.io/simple-perso/',
    tech: ['bootstrap', 'docker', 'html5', 'jekyll', 'scss'],
  },
  {
    title: 'dinhanhthi.com-v1',
    description: 'A personal Jekyll theme. The first version of my website.',
    source: 'https://github.com/dinhanhthi/dinhanhthi.com-v1',
    icon: '⛑',
    tech: ['bootstrap', 'html5', 'jekyll', 'scss'],
  },
  {
    title: 'dinhanhthi.com-v2',
    description: 'A personal Jekyll theme. The second version of my website.',
    source: 'https://github.com/dinhanhthi/dinhanhthi.com-v2',
    icon: '🥕',
    tech: ['bootstrap', 'docker', 'html5', 'jekyll', 'scss'],
  },
  {
    title: 'dinhanhthi.com-v3',
    description: 'A personal Jekyll theme. The third version of my website.',
    source: 'https://github.com/dinhanhthi/dinhanhthi.com-v3',
    icon: '🍅',
    tech: ['bootstrap', 'docker', 'html5', 'jekyll', 'scss'],
  },
  {
    title: 'Cafe in HCM',
    icon: '☕',
    description:
      'A final project for the "Applied Data Science Capstone" course from IBM on Coursera. Setting up a café in Ho Chi Minh City.',
    source: 'https://github.com/dinhanhthi/cafe-in-hcm',
    url: 'https://note.dinhanhthi.com/setting-up-a-cafe-in-hcmc',
    tech: ['foursquare-api', 'jupyter', 'python', 'scikit-learn'],
  },
  {
    title: 'ThiThesisTemp',
    icon: '🎨',
    description: 'A simple, beautiful LaTeX theme for books, thesis.',
    source: 'https://github.com/dinhanhthi/ThiThesisTemp',
    tech: ['latex'],
  },
  {
    title: 'Math2ITwp',
    icon: '🐘',
    description: 'A nice Wordpress theme based on Bootstrap with different layouts for posts.',
    source: 'https://github.com/dinhanhthi/math2itwp',
    url: 'https://math2it.com',
    tech: ['bootstrap', 'docker', 'html5', 'js', 'mysql', 'nodejs', 'php', 'scss', 'wordpress'],
  },
  {
    title: 'NoteTheme',
    icon: '📝',
    description: 'An AIO Jekyll theme designed for the purpose of notes.',
    url: 'https://dinhanhthi.github.io/NoteTheme/',
    source: 'https://github.com/dinhanhthi/NoteTheme',
    tech: ['bootstrap', 'docker', 'html5', 'jekyll', 'liquid', 'scss'],
  },
  {
    title: 'math2it.com',
    icon: '🔥',
    description: 'A Vietnamese website for intuitive knowledge (math, education and technology).',
    url: 'http://math2it.com',
    tech: ['latex'],
    tech_text: ['maths', 'IT', 'tutorial'],
  },
  {
    title: 'Math2IT Group',
    icon: '🎲',
    description: 'A Vietnamese community about math, education and technology.',
    url: 'https://www.facebook.com/groups/math2it/',
    tech: ['latex'],
    tech_text: ['community', 'forum', 'Q&A'],
  },
  {
    title: 'TaniaJekyll',
    icon: '🚀',
    description: 'A beautiful Jekyll personal theme with different layouts for posts, based on Bootstrap & Jekyll.',
    url: 'https://dinhanhthi.github.io/TaniaJekyll',
    source: 'https://github.com/dinhanhthi/TaniaJekyll',
    tech: ['bootstrap', 'docker', 'html5', 'jekyll', 'liquid', 'scss'],
  },
  {
    title: 'NXFEM',
    icon: '🔢',
    source: 'https://github.com/dinhanhthi/nxfem',
    description: 'A Matlab library for Nitsche - Extended Finite Element Method.',
    tech: ['matlab', 'latex'],
    tech_text: ['numerical methods', 'maths'],
  },
];

export const getTechs = async (filterTechs: Array<string>): Promise<Tech[]> => {
  if (!filterTechs) {
    return [];
  }
  const techs = await getCollection('tech');
  // @ts-ignore
  return techs
    .filter((tech) => filterTechs.includes(tech.id))
    .map((tech) => {
      return {
        id: tech.id,
        title: tech.data.title,
        image: tech.data.image,
        url: tech.data.url,
      };
    });
};
