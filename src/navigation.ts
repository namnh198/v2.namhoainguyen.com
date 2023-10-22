export interface NavbarItemType {
  name: string;
  permalink: string;
}

export const navigation = [
  {
    name: 'Home',
    permalink: '/',
  },
  {
    name: 'About',
    permalink: '/about',
  },
  {
    name: 'Blog',
    permalink: '/blog',
  },
  {
    name: 'Series',
    permalink: '/series',
  },
  {
    name: 'Tags',
    permalink: 'tags',
  },
] as NavbarItemType[];

export const footerSocial = [
  {
    name: 'Facebook',
    permalink: '',
    icon: 'fa6-brands:square-facebook',
  },
  {
    name: 'Linkedin',
    permalink: '',
    icon: 'fa6-brands:linkedin',
  },
  {
    name: 'Github',
    permalink: '',
    icon: 'fa6-brands:square-github',
  },
  {
    name: 'Youtube',
    permalink: '',
    icon: 'fa6-brands:square-youtube',
  },
];
