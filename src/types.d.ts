import type { ImageMetadata } from 'astro';
import type { AstroComponentFactory } from 'astro/dist/runtime/server';

export interface Metadata {
  title: string;
}

export interface SearchIndex {
  title: string;
  id: string;
  permalink: string;
  heading: string;
}

export interface Category {
  id: string;
  permalink: string;
  title: string;
  color: string;
  image?: Image;
  excerpt?: string;
}

export interface Tag {
  id: string;
  permalink: string;
  title: string;
}

export interface Post {
  id: string;
  slug: string;
  permalink: string;
  title: string;
  excerpt?: string;
  image?: ImageMetadata;
  video?: string;
  categories?: Array<Category>;
  tags?: Array<Tag>;
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
