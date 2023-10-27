import type { ImageFunction } from 'astro:content';
import { getCollection } from 'astro:content';

export { default as projects } from '~/data/projects.json';
export { default as skills } from '~/data/skills.json';
export { default as cv } from '~/data/cv.json';

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
