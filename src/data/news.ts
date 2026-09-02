export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  publishedAt: string;
  image?: string;
  category: string;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Welcome to ProBuilders Studios Wiki',
    slug: 'welcome-to-probuilders-wiki',
    category: 'Announcements',
    author: 'ProBuilders_55',
    publishedAt: '2024-01-15',
    image: 'https://via.placeholder.com/800x400?text=Welcome',
    content: 'Welcome to the official ProBuilders Studios Wiki! This is your hub for information about our games, team, and community.'
  },
  {
    id: '2',
    title: 'Astro Toilet Story BETA Now Live',
    slug: 'astro-toilet-story-beta-live',
    category: 'Game Updates',
    author: 'ProBuilders_55',
    publishedAt: '2024-01-10',
    image: 'https://via.placeholder.com/800x400?text=Beta+Launch',
    content: 'Exciting news! Astro Toilet Story is now available in BETA on Roblox. Join us and help shape the future of the game!'
  }
];
