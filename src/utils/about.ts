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
  tech: string[];
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
