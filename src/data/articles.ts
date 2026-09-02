export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: string;
  updatedAt: string;
  image?: string;
  summary: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'ProBuilders Studios',
    slug: 'probuilders-studios',
    category: 'Main',
    tags: ['studio', 'roblox', 'games'],
    author: 'ProBuilders_55',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15',
    image: 'https://via.placeholder.com/800x400?text=ProBuilders+Studios',
    summary: 'Welcome to ProBuilders Studios, a Roblox game-development studio focused on creating original Roblox experiences.',
    content: `# ProBuilders Studios

ProBuilders Studios is a Roblox game-development studio dedicated to creating original and engaging Roblox experiences. Founded by ProBuilders_55, our team is passionate about building immersive games and fostering a vibrant development community.

## Mission

Our mission is to create innovative Roblox games that entertain and engage players worldwide while building a supportive community of developers.

## Team

Our talented team includes:
- **ProBuilders_55** — Founder / Lead Developer
- **ProBuilderWorker** — Developer
- **RhysRobloxRpGames_5** — Admin
- **Jetstarboy1093** — Admin

## Current Projects

- **Astro Toilet Story** — A unique Roblox experience currently in BETA development

## Community

We believe in building a strong development community. Join us to learn, create, and grow together!`
  },
  {
    id: '2',
    title: 'Astro Toilet Story',
    slug: 'astro-toilet-story',
    category: 'Games',
    tags: ['game', 'beta', 'roblox'],
    author: 'ProBuilders_55',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-15',
    image: 'https://via.placeholder.com/800x400?text=Astro+Toilet+Story',
    summary: 'Astro Toilet Story is a unique Roblox experience currently in BETA. An adventure awaits!',
    content: `# Astro Toilet Story

**Status:** [BETA]

Astro Toilet Story is an upcoming Roblox experience that pushes creative boundaries.

## Overview

This game is currently in active development as part of ProBuilders Studios' portfolio of innovative games.

## Status

The game is available in BETA for testing and community feedback. Players are welcome to join and experience the game while providing valuable input for development.

## Features

More information coming soon...

## How to Play

Visit the game on Roblox to get started. The experience is free to play.`
  },
  {
    id: '3',
    title: 'Studio History',
    slug: 'studio-history',
    category: 'About',
    tags: ['history', 'studio', 'timeline'],
    author: 'ProBuilders_55',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-15',
    summary: 'The history and timeline of ProBuilders Studios.',
    content: `# Studio History

ProBuilders Studios was founded with a vision to create innovative Roblox experiences and build a supportive community of developers.

## Timeline

**TBA** — Studio Foundation
**TBA** — First Game Launch
**TBA** — Astro Toilet Story Announcement
**TBA** — Astro Toilet Story BETA Launch

## Evolution

Our studio has grown from a small passion project to a collaborative team dedicated to pushing creative boundaries in the Roblox platform.`
  },
  {
    id: '4',
    title: 'Help',
    slug: 'help',
    category: 'Resources',
    tags: ['help', 'guide', 'faq'],
    author: 'ProBuilders_55',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15',
    summary: 'Need help? Check out our help and FAQ section.',
    content: `# Help & FAQ

Welcome to the ProBuilders Studios Wiki Help section!

## How to Use This Wiki

- Use the **Search bar** at the top to find information quickly
- Browse **Categories** to explore topics by subject
- Check **Recent Changes** to see what's new
- Visit **Random Page** to discover content

## How to Contribute

This wiki is powered by GitHub. To edit or suggest changes:
1. Navigate to the article you want to edit
2. Click the **Edit on GitHub** button
3. Make your changes and submit a pull request

## Common Questions

**Q: How do I play Astro Toilet Story?**
A: Visit the game on Roblox while it's in BETA. Check the game article for more details.

**Q: How can I join the team?**
A: Contact ProBuilders_55 or check the Discord for opportunities.

**Q: Is this wiki official?**
A: Yes! This is the official ProBuilders Studios Wiki hosted on GitHub Pages.`
  },
  {
    id: '5',
    title: 'Rules',
    slug: 'rules',
    category: 'Resources',
    tags: ['rules', 'guidelines', 'community'],
    author: 'ProBuilders_55',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15',
    summary: 'Community guidelines and wiki rules.',
    content: `# Wiki Rules & Guidelines

## Code of Conduct

All members of the ProBuilders Studios community are expected to:

1. **Be Respectful** - Treat all community members with courtesy and respect
2. **Stay On Topic** - Keep discussions relevant to the wiki and games
3. **Follow Copyright** - Only use original content or properly credited material
4. **No Spam** - Avoid excessive self-promotion or off-topic content
5. **Be Honest** - Report accurate information and cite sources

## Editing Guidelines

- Use clear, professional language
- Include images and media when helpful
- Keep articles organized and well-formatted
- Update timestamps when making changes
- Provide sources for factual claims

## Vandalism Policy

Vandalism, spam, or abusive content will be removed. Repeat offenders may be blocked.

For violations or concerns, contact the admin team.`
  }
];
