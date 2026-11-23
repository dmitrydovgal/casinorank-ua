export const siteConfig = {
  name: 'CasinoRank UA',
  /** Global feature flags. Set a flag to false to remove the section (and its nav link) from the site. */
  features: {
    offers: true,
  },
  contact: {
    /** Placeholder — replace with the real inbox for commercial requests. */
    advertising: 'ads@casinorank.example',
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Каталог', href: '#catalog' },
  { label: 'Порівняння', href: '#compare' },
  { label: 'Бонуси', href: '/bonuses' },
  { label: 'Платежі', href: '/guides/payments' },
  { label: 'Новини', href: '#news' },
  { label: 'Гайди', href: '#guides' },
  { label: 'Рекламодавцям', href: '/advertisers' },
];
