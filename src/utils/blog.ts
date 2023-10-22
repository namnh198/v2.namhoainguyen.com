import {type CollectionEntry, getCollection, getEntries} from 'astro:content';
import type {GetStaticPathsOptions} from 'astro';
import type {Category, Post} from '~/types';

import {config} from '~/utils/config.ts';

const getNormalizedCategory = (category: CollectionEntry<'category'>): Category => {
  const {id, data} = category;
  const permalink = '/category/' + id;
  const { title, color, image, excerpt } = data;
  return {id, permalink, title, color, image, excerpt};
}

const getNormalizedPost = async (post: CollectionEntry<'post'>): Promise<Post> => {
  const { id, slug, data } = post;
  const { Content } = await post.render();
  const { 
    title, 
    publishedAt: rawPublishedAt = new Date(), 
    updatedAt:rawUpdateDate,
    categories: rawCategories = [],
    ...rest
  } = data;
  
  const categories = (await getEntries(rawCategories)).map(getNormalizedCategory);
  
  const permalink = '/' + slug;
  const publishedAt = new Date(rawPublishedAt);
  const updatedAt = rawUpdateDate ? new Date(rawUpdateDate) : undefined;
  
  return { id, slug, permalink, title, categories, publishedAt, updatedAt, Content, ...rest};
}

export const getStaticPathsBlogList = async ({ paginate }: GetStaticPathsOptions) => {
  const posts = await fetchPost();
  return paginate(posts, { 
    pageSize: config.postsPerPage
  });
}

export const fetchPost = async () => {
  const posts = await getCollection('post', ({ data }) => {
    return import.meta.env.NODE_ENV === 'production' ? true : !data.draft;
  });

  if (! posts || posts.length < 1) {
    return [];
  }

  const normalizedPosts = posts.map(
    async (post) => await getNormalizedPost(post)
  );
  return (await Promise.all(normalizedPosts))
    .sort(
      (a: any, b:any) => b?.publishedAt.valueOf() - a?.publishedAt.valueOf()
    );
}
