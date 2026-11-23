/** Fictional, illustrative offers. Not real or currently available bonuses. */
export type Registration = 'none' | 'required';

export interface Offer {
  id: string;
  operatorId: 'alpha' | 'beta' | 'gamma' | 'delta';
  operator: string;
  initials: string;
  hue: number;
  type: string;
  /** Maximum bonus amount in UAH — used for display, filtering and sorting. */
  amount: number;
  /** Short caption under the amount. */
  amountNote: string;
  freeSpins?: number;
  registration: Registration;
  verification: 'none' | 'required';
  deposit: 'none' | 'required';
  depositNote: string;
  /** ISO date */
  expires: string;
}

export const bonusTypes = ['Вітальний', 'Без депозиту', 'Кешбек', 'Турнір', 'Перезавантаження'] as const;

export const amountRanges = [
  { id: 'any', label: 'Будь-який розмір', min: 0, max: Infinity },
  { id: 's', label: 'до 2 000 ₴', min: 0, max: 2000 },
  { id: 'm', label: '2 000 – 5 000 ₴', min: 2000, max: 5000 },
  { id: 'l', label: '5 000 – 10 000 ₴', min: 5000, max: 10000 },
  { id: 'xl', label: 'понад 10 000 ₴', min: 10000, max: Infinity },
] as const;

export const offers: Offer[] = [
  { id: 'alpha-welcome', operatorId: 'alpha', operator: 'Operator Alpha', initials: 'A', hue: 212, type: 'Вітальний',
    amount: 15000, amountNote: 'максимальний вітальний бонус', freeSpins: 100,
    registration: 'required', verification: 'required', deposit: 'required', depositNote: 'Від 200 ₴', expires: '2026-12-31' },
  { id: 'alpha-reload', operatorId: 'alpha', operator: 'Operator Alpha', initials: 'A', hue: 212, type: 'Перезавантаження',
    amount: 3000, amountNote: 'до суми повторного поповнення',
    registration: 'required', verification: 'none', deposit: 'required', depositNote: 'Від 300 ₴', expires: '2027-01-20' },
  { id: 'beta-cashback', operatorId: 'beta', operator: 'Operator Beta', initials: 'B', hue: 190, type: 'Кешбек',
    amount: 5000, amountNote: 'максимальне повернення за тиждень',
    registration: 'required', verification: 'none', deposit: 'none', depositNote: 'Не потрібен', expires: '2027-01-15' },
  { id: 'beta-nodeposit', operatorId: 'beta', operator: 'Operator Beta', initials: 'B', hue: 190, type: 'Без депозиту',
    amount: 500, amountNote: 'бонус за підтвердження профілю', freeSpins: 20,
    registration: 'required', verification: 'required', deposit: 'none', depositNote: 'Не потрібен', expires: '2026-12-20' },
  { id: 'beta-guest', operatorId: 'beta', operator: 'Operator Beta', initials: 'B', hue: 190, type: 'Без депозиту',
    amount: 200, amountNote: 'гостьовий режим, без облікового запису',
    registration: 'none', verification: 'none', deposit: 'none', depositNote: 'Не потрібен', expires: '2026-12-05' },
  { id: 'gamma-tournament', operatorId: 'gamma', operator: 'Operator Gamma', initials: 'G', hue: 236, type: 'Турнір',
    amount: 50000, amountNote: 'призовий фонд турніру',
    registration: 'required', verification: 'required', deposit: 'required', depositNote: 'За умовами турніру', expires: '2027-02-28' },
  { id: 'gamma-welcome', operatorId: 'gamma', operator: 'Operator Gamma', initials: 'G', hue: 236, type: 'Вітальний',
    amount: 8000, amountNote: 'максимальний вітальний бонус', freeSpins: 50,
    registration: 'required', verification: 'required', deposit: 'required', depositNote: 'Від 250 ₴', expires: '2027-01-31' },
  { id: 'delta-welcome', operatorId: 'delta', operator: 'Operator Delta', initials: 'D', hue: 170, type: 'Вітальний',
    amount: 1500, amountNote: 'максимальний вітальний бонус',
    registration: 'required', verification: 'none', deposit: 'required', depositNote: 'Від 100 ₴', expires: '2026-12-15' },
  { id: 'delta-nodeposit', operatorId: 'delta', operator: 'Operator Delta', initials: 'D', hue: 170, type: 'Без депозиту',
    amount: 300, amountNote: 'тестовий баланс без реєстрації',
    registration: 'none', verification: 'none', deposit: 'none', depositNote: 'Не потрібен', expires: '2026-12-10' },
];

export const featuredOffers = offers.filter((o) => ['alpha-welcome', 'beta-cashback', 'gamma-welcome'].includes(o.id));

export const formatAmount = (n: number) => n.toLocaleString('uk-UA').replace(/ /g, ' ') + ' ₴';
export const formatDate = (iso: string) => iso.split('-').reverse().join('.');
export const label = {
  registration: { none: 'Не потрібна', required: 'Потрібна' },
  verification: { none: 'Не потрібна', required: 'Потрібна' },
} as const;
