export interface SiteConfig {
  site: string;
  base: string;
  title: string;
  titleTemplate: string;
  description: string;
  postsPerPage: number;
  googleVerificationId: string;
  googleAnalytics: string;
}

export const config = {
  site: import.meta.env.SITE || 'https://namhoainguyen.com',
  base: import.meta.env.BASE || '/',
  title: import.meta.env.TITLE || 'Blog of Nam',
  titleTemplate: import.meta.env.TITLE_TEMPLATE || '%s | Blog of Nam',
  description: import.meta.env.DESCRIPTION || '',
  postsPerPage: import.meta.env.POSTS_PER_PAGE || 12,
  googleVerificationId: import.meta.env.GOOGLE_SITE_VERIFICATION_ID || '',
  googleAnalytics: import.meta.env.GOOGLE_ANALYTICS || '',
} as SiteConfig;
