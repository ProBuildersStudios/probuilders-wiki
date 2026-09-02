export interface TeamMember {
  id: string;
  username: string;
  role: string;
  description: string;
  joinDate?: string;
  avatar?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    username: 'ProBuilders_55',
    role: 'Founder / Lead Developer',
    description: 'Founder and lead developer of ProBuilders Studios.',
    joinDate: '2024-01-01',
    avatar: 'https://via.placeholder.com/100?text=PB55'
  },
  {
    id: '2',
    username: 'ProBuilderWorker',
    role: 'Developer',
    description: 'Talented developer contributing to studio projects.',
    avatar: 'https://via.placeholder.com/100?text=PBW'
  },
  {
    id: '3',
    username: 'RhysRobloxRpGames_5',
    role: 'Admin',
    description: 'Administrator managing community and projects.',
    avatar: 'https://via.placeholder.com/100?text=Rhys'
  },
  {
    id: '4',
    username: 'Jetstarboy1093',
    role: 'Admin',
    description: 'Administrator supporting studio operations.',
    avatar: 'https://via.placeholder.com/100?text=Jet'
  }
];
