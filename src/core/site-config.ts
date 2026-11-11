export const siteConfig = {
  name: 'Almeida & Associados',
  title: 'Almeida & Associados | Advocacia',
  isDemonstration: true,
  contact: {
    email: 'contato@almeida-associados.example',
    phone: '(00) 00000-0000',
    whatsAppUrl: import.meta.env.VITE_WHATSAPP_URL ?? '',
  },
  portfolioUrl: import.meta.env.VITE_ER_WEB_PORTFOLIO_URL ?? '',
} as const

export const unsplashImages = {
  hero: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=85',
  meeting: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
  team: [
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  ],
} as const
