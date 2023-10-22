import type { ImageMetadata } from 'astro';
import type { AstroComponentFactory } from 'astro/dist/runtime/server';


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
  image?: ImageMetadata;
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
