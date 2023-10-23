import { config } from '~/utils/config.ts';

const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

export const getFormattedDate = (date: Date): string => (date ? formatter.format(date) : '');

export const getGithubContentUrl = (id: string) => {
  return config.githubRepo + '/edit/main/src/content/post/' + id;
};
