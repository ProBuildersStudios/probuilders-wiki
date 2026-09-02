import { articles } from '../data/articles';
import { games } from '../data/games';
import { teamMembers } from '../data/team';

export interface SearchResult {
  type: 'article' | 'game' | 'team';
  id: string;
  title: string;
  slug: string;
  summary: string;
  image?: string;
}

export function searchWiki(query: string): SearchResult[] {
  const lowercaseQuery = query.toLowerCase();
  const results: SearchResult[] = [];

  // Search articles
  articles.forEach(article => {
    if (
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.content.toLowerCase().includes(lowercaseQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    ) {
      results.push({
        type: 'article',
        id: article.id,
        title: article.title,
        slug: article.slug,
        summary: article.summary,
        image: article.image
      });
    }
  });

  // Search games
  games.forEach(game => {
    if (
      game.title.toLowerCase().includes(lowercaseQuery) ||
      game.description.toLowerCase().includes(lowercaseQuery) ||
      game.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    ) {
      results.push({
        type: 'game',
        id: game.id,
        title: game.title,
        slug: game.slug,
        summary: game.description,
        image: game.image
      });
    }
  });

  // Search team members
  teamMembers.forEach(member => {
    if (
      member.username.toLowerCase().includes(lowercaseQuery) ||
      member.role.toLowerCase().includes(lowercaseQuery) ||
      member.description.toLowerCase().includes(lowercaseQuery)
    ) {
      results.push({
        type: 'team',
        id: member.id,
        title: member.username,
        slug: member.username.toLowerCase(),
        summary: member.role,
        image: member.avatar
      });
    }
  });

  return results;
}
