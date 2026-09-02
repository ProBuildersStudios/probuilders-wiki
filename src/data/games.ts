export interface Game {
  id: string;
  title: string;
  slug: string;
  status: 'development' | 'beta' | 'released' | 'archived';
  description: string;
  releaseDate?: string;
  developer: string;
  tags: string[];
  image?: string;
}

export const games: Game[] = [
  {
    id: '1',
    title: 'Astro Toilet Story',
    slug: 'astro-toilet-story',
    status: 'beta',
    description: 'An innovative Roblox experience currently in BETA. Join us on an adventure!',
    developer: 'ProBuilders Studios',
    tags: ['adventure', 'beta', 'roblox'],
    image: 'https://via.placeholder.com/400x300?text=Astro+Toilet+Story'
  }
];
