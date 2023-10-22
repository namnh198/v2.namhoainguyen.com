import { type CollectionEntry, getCollection, getEntries } from 'astro:content';
import type { GetStaticPathsOptions } from 'astro';
import type { Category, Post, SearchIndex, Tag } from '~/types';

import slugify from 'limax';

import { config } from '~/utils/config.ts';

const getNormalizedCategory = (category: CollectionEntry<'category'>): Category => {
  const { id, data } = category;
  const permalink = getPermalink(id, 'category');
  const { title, color, image, excerpt } = data;
  return { id, permalink, title, color, image, excerpt };
};

const getNormalizedPost = async (post: CollectionEntry<'post'>): Promise<Post> => {
  const { id, slug, data } = post;
  const { Content } = await post.render();
  const {
    title,
    publishedAt: rawPublishedAt = new Date(),
    updatedAt: rawUpdateDate,
    categories: rawCategories = [],
    tags: rawTags = [],
    ...rest
  } = data;

  const categories = (await getEntries(rawCategories)).map(getNormalizedCategory);
  const tags = rawTags.map((tag) => {
    const id = slugify(tag);
    return {
      id: id,
      title: tag,
      permalink: getPermalink(id, 'tag'),
    };
  }) as Tag[];
  const permalink = getPermalink(slug);
  const publishedAt = new Date(rawPublishedAt);
  const updatedAt = rawUpdateDate ? new Date(rawUpdateDate) : undefined;

  return { id, slug, permalink, title, categories, tags, publishedAt, updatedAt, Content, ...rest };
};

export const getStaticPathsBlogList = async ({ paginate }: GetStaticPathsOptions) => {
  const posts = await fetchPost();
  return paginate(posts, {
    pageSize: config.postsPerPage,
  });
};

export const fetchPost = async () => {
  const posts = await getCollection('post', ({ data }) => {
    return import.meta.env.NODE_ENV === 'production' ? true : !data.draft;
  });

  if (!posts || posts.length < 1) {
    return [];
  }

  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));
  return (await Promise.all(normalizedPosts)).sort(
    (a: Post, b: Post) => b?.publishedAt.valueOf() - a?.publishedAt.valueOf()
  );
};

export const fetchCategories = async () => {
  const categories = await getCollection('category');
  if (!categories || categories.length < 1) {
    return [];
  }
  return categories.map(getNormalizedCategory);
};

export const searchIndex = async (): Promise<Array<SearchIndex>> => {
  const posts = await fetchPost();
  const tags = new Set();
  const categories = new Set();
  const searchIndex: SearchIndex[] = [];

  posts.forEach((post: Post) => {
    searchIndex.push({
      id: post.id,
      title: post.title,
      permalink: post.permalink,
      heading: 'Posts',
    });
    const { tags: postTags = [], categories: postCategories = [] } = post;
    postCategories.forEach((category: Category) => {
      if (categories.has(category.id)) {
        searchIndex.push({
          id: category.id,
          title: category.title,
          permalink: category.permalink,
          heading: 'Categories',
        });
      }
      categories.add(category.id);
    });
    postTags.forEach((tag: Tag) => {
      if (!tags.has(tag)) {
        searchIndex.push({
          id: tag.id,
          title: tag.title,
          permalink: tag.permalink,
          heading: 'Tags',
        });
      }
      tags.add(tag);
    });
  });

  return searchIndex;
};

export const getPermalink = (slug: string = '', prefix: string = ''): string => {
  let permalink: string = '/';
  if (prefix) {
    permalink += prefix;
  }
  permalink += slugify(slug);
  return permalink;
};
