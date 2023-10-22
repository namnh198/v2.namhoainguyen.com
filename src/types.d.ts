import type { AstroComponentFactory } from 'astro/dist/runtime/server';

export interface Image {
  src: string;
  alt?: string;
}

export interface Metadata {
  title: string;
}

export interface Category {
  id: string;
  permalink: string;
  title: string;
  color: string;
  image?: Image;
  excerpt?: string;
}

export interface Post {
  id: string;
  slug: string;
  permalink: string;
  title: string;
  excerpt?: string;
  image?: Image;
  video?: string;
  categories?: Array<Category>;
  tags?: Array<string>;
  series?: string;
  part?: number;
  draft?: boolean;
  private?: boolean;
  publishedAt: Date;
  updatedAt?: Date;
  content?: string;
  Content?: AstroComponentFactory;
  readingTime?: number;
}
