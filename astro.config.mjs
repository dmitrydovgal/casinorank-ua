import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// For GitHub Pages project sites the site lives under /<repo>/. Set BASE_PATH=/<repo> at build time.
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '') || '/';

/** Prefix root-relative href/src attributes with the base path in the built HTML. */
const prefixBase = () => ({
  name: 'prefix-base',
  hooks: {
    'astro:build:done': ({ dir }) => {
      if (base === '/') return;
      const walk = (d) => readdirSync(d).forEach((f) => {
        const p = join(d, f);
        if (statSync(p).isDirectory()) return walk(p);
        if (!p.endsWith('.html')) return;
        const html = readFileSync(p, 'utf8').replace(
          /(\s(?:href|src)=")\/(?!\/)([^"]*)"/g,
          (m, a, rest) => (`/${rest}`.startsWith(`${base}/`) || `/${rest}` === base ? m : `${a}${base}/${rest}"`),
        );
        writeFileSync(p, html);
      });
      walk(fileURLToPath(dir));
    },
  },
});

export default defineConfig({ base, integrations: [prefixBase()] });
