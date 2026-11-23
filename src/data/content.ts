export type IconName =
  | 'shield-check' | 'database' | 'scale' | 'refresh-cw' | 'file-search' | 'id-card' | 'credit-card'
  | 'lock-keyhole' | 'heart-handshake' | 'landmark' | 'calendar-check' | 'building-2' | 'link-2'
  | 'smartphone' | 'headset' | 'file-text';

export type Tone = 'ok' | 'warn' | 'bad' | 'neutral';

/* ---------- Operators (fictional demo data) ---------- */
export interface Operator {
  id: string;
  name: string;
  initials: string;
  hue: number;
  status: { label: string; tone: Tone };
  rating: number; // illustrative only
  attributes: { label: string; value: string }[];
  verifiedAt: string;
  href: string;
}

export const operators: Operator[] = [
  {
    id: 'alpha', name: 'Operator Alpha', initials: 'A', hue: 212,
    status: { label: 'Дані перевірено', tone: 'ok' },
    rating: 4.6,
    attributes: [
      { label: 'Верифікація', value: 'Документи + селфі' },
      { label: 'Платежі', value: '6 способів' },
      { label: 'Підтримка', value: 'Чат, e-mail' },
    ],
    verifiedAt: '12.11.2026', href: '/operators/alpha',
  },
  {
    id: 'beta', name: 'Operator Beta', initials: 'B', hue: 190,
    status: { label: 'Дані перевірено', tone: 'ok' },
    rating: 4.3,
    attributes: [
      { label: 'Верифікація', value: 'Документи' },
      { label: 'Платежі', value: '4 способи' },
      { label: 'Підтримка', value: 'Чат 24/7' },
    ],
    verifiedAt: '08.11.2026', href: '/operators/beta',
  },
  {
    id: 'gamma', name: 'Operator Gamma', initials: 'G', hue: 236,
    status: { label: 'Потребує оновлення', tone: 'warn' },
    rating: 4.0,
    attributes: [
      { label: 'Верифікація', value: 'Документи + селфі' },
      { label: 'Платежі', value: '5 способів' },
      { label: 'Підтримка', value: 'E-mail' },
    ],
    verifiedAt: '27.10.2026', href: '/operators/gamma',
  },
  {
    id: 'delta', name: 'Operator Delta', initials: 'D', hue: 170,
    status: { label: 'Дані перевіряються', tone: 'neutral' },
    rating: 3.8,
    attributes: [
      { label: 'Верифікація', value: 'Не уточнено' },
      { label: 'Платежі', value: '3 способи' },
      { label: 'Підтримка', value: 'Чат' },
    ],
    verifiedAt: '15.10.2026', href: '/operators/delta',
  },
];

/* ---------- Comparison ---------- */
export interface CompareRow { label: string; icon: IconName; values: Record<string, { text: string; tone?: Tone }>; }

export const compareRows: CompareRow[] = [
  { label: 'Ліцензійний статус', icon: 'landmark', values: {
    alpha: { text: 'Перевірте в реєстрі', tone: 'neutral' },
    beta: { text: 'Перевірте в реєстрі', tone: 'neutral' },
    gamma: { text: 'Дані оновлюються', tone: 'warn' },
    delta: { text: 'Не підтверджено', tone: 'bad' } } },
  { label: 'Способи оплати', icon: 'credit-card', values: {
    alpha: { text: 'Картки, e-wallet, банківський переказ' },
    beta: { text: 'Картки, банківський переказ' },
    gamma: { text: 'Картки, e-wallet' },
    delta: { text: 'Картки' } } },
  { label: 'Верифікація', icon: 'id-card', values: {
    alpha: { text: 'Документи + селфі', tone: 'ok' },
    beta: { text: 'Документи', tone: 'ok' },
    gamma: { text: 'Документи + селфі', tone: 'ok' },
    delta: { text: 'Не уточнено', tone: 'warn' } } },
  { label: 'Підтримка', icon: 'headset', values: {
    alpha: { text: 'Чат, e-mail' },
    beta: { text: 'Чат 24/7' },
    gamma: { text: 'E-mail' },
    delta: { text: 'Чат' } } },
  { label: 'Мобільна версія', icon: 'smartphone', values: {
    alpha: { text: 'Адаптивний сайт', tone: 'ok' },
    beta: { text: 'Адаптивний сайт', tone: 'ok' },
    gamma: { text: 'Адаптивний сайт', tone: 'ok' },
    delta: { text: 'Обмежена', tone: 'warn' } } },
  { label: 'Дата перевірки', icon: 'calendar-check', values: {
    alpha: { text: '12.11.2026' }, beta: { text: '08.11.2026' }, gamma: { text: '27.10.2026' }, delta: { text: '15.10.2026' } } },
];

/* ---------- Methodology ---------- */
export interface Feature { icon: IconName; title: string; text: string; }
export const methodology: Feature[] = [
  { icon: 'shield-check', title: 'Перевірка інформації', text: 'Кожна характеристика звіряється з офіційними матеріалами оператора та відкритими реєстрами.' },
  { icon: 'database', title: 'Джерела даних', text: 'Для кожного показника вказуємо джерело, щоб ви могли перевірити його самостійно.' },
  { icon: 'scale', title: 'Прозора методологія', text: 'Критерії та їхня вага описані публічно й не залежать від комерційних відносин.' },
  { icon: 'refresh-cw', title: 'Регулярне оновлення', text: 'Дату останньої перевірки показано на кожній картці та в порівнянні.' },
];

/* ---------- Licensing ---------- */
export const licensingSteps: Feature[] = [
  { icon: 'file-search', title: 'Перевірка ліцензії', text: 'Знайдіть оператора в офіційному реєстрі та порівняйте назву юридичної особи.' },
  { icon: 'building-2', title: 'Офіційні джерела', text: 'Користуйтеся сайтами регулятора, а не посиланнями з реклами чи соцмереж.' },
  { icon: 'shield-check', title: 'Статус оператора', text: 'Перевірте, чи діє ліцензія, і чи немає обмежень або призупинень.' },
  { icon: 'calendar-check', title: 'Дата оновлення', text: 'Реєстри змінюються — звертайте увагу на дату актуалізації даних.' },
];

/* ---------- News ---------- */
export interface Article {
  title: string; category: string; date: string; excerpt: string; href: string; hue: number; variant: 0 | 1 | 2;
}
export const articles: Article[] = [
  { title: 'Зміни у регулюванні азартних ігор в Україні', category: 'Регулювання', date: '18.11.2026',
    excerpt: 'Короткий огляд нормативних змін та того, що вони означають для гравців і операторів.', href: '/news/regulation-changes', hue: 212, variant: 0 },
  { title: 'Як працює ліцензування операторів', category: 'Аналітика', date: '10.11.2026',
    excerpt: 'Етапи отримання ліцензії, вимоги до заявників і те, де шукати підтвердження.', href: '/news/licensing-explained', hue: 190, variant: 1 },
  { title: 'Платіжні методи: на що звертати увагу', category: 'Фінанси', date: '02.11.2026',
    excerpt: 'Комісії, строки виплат та перевірка платіжних реквізитів без зайвого ризику.', href: '/news/payment-methods', hue: 232, variant: 2 },
];

/* ---------- Guides ---------- */
export interface Guide { icon: IconName; title: string; text: string; href: string; }
export const guides: Guide[] = [
  { icon: 'file-search', title: 'Як перевірити ліцензію', text: 'Покрокова перевірка в офіційних реєстрах.', href: '/guides/license-check' },
  { icon: 'id-card', title: 'Як працює верифікація', text: 'Які документи потрібні та навіщо.', href: '/guides/verification' },
  { icon: 'credit-card', title: 'Платіжні методи', text: 'Порівняння способів поповнення та виведення.', href: '/guides/payments' },
  { icon: 'lock-keyhole', title: 'Захист персональних даних', text: 'Що збирають сервіси і як це контролювати.', href: '/guides/privacy' },
  { icon: 'heart-handshake', title: 'Відповідальна гра', text: 'Ліміти, самоконтроль і де шукати допомогу.', href: '/guides/responsible-play' },
];

/* ---------- Footer ---------- */
export const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  { title: 'Платформа', links: [
    { label: 'Каталог', href: '/catalog' }, { label: 'Порівняння', href: '/compare' },
    { label: 'Новини', href: '/news' }, { label: 'Гайди', href: '/guides' } ] },
  { title: 'Проєкт', links: [
    { label: 'Про проєкт', href: '/about' }, { label: 'Редакційна політика', href: '/editorial-policy' },
    { label: 'Методологія', href: '/methodology' }, { label: 'Рекламодавцям', href: '/advertisers' }, { label: 'Контакти', href: '/contacts' } ] },
  { title: 'Правова інформація', links: [
    { label: 'Політика конфіденційності', href: '/privacy' }, { label: 'Умови використання', href: '/terms' },
    { label: 'Відповідальна гра', href: '/guides/responsible-play' } ] },
];

export const heroShortcuts = [
  { label: 'Ліцензовані', href: '#catalog' },
  { label: 'Способи оплати', href: '/guides/payments' },
  { label: 'Верифікація', href: '/guides/verification' },
  { label: 'Мобільна версія', href: '#compare' },
];
