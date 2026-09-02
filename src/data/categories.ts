export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Games',
    slug: 'games',
    description: 'Information about ProBuilders Studios games',
    icon: 'Gamepad2'
  },
  {
    id: '2',
    name: 'Characters',
    slug: 'characters',
    description: 'Character guides and information',
    icon: 'Users'
  },
  {
    id: '3',
    name: 'Team',
    slug: 'team',
    description: 'Meet the ProBuilders Studios team',
    icon: 'Users2'
  },
  {
    id: '4',
    name: 'News',
    slug: 'news',
    description: 'Latest news and announcements',
    icon: 'Newspaper'
  },
  {
    id: '5',
    name: 'About',
    slug: 'about',
    description: 'About the studio and resources',
    icon: 'Info'
  }
];
