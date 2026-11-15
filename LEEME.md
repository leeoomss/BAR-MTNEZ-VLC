# Bar MTNEZ VLC · web

Web estática con Astro 7 + Tailwind 4. Dirección visual «Rótulo de barrio».

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Dónde se cambia cada cosa
- Datos del bar (teléfono, horario, nota de Google, coordenadas): `src/data/negocio.ts`
- Carta, precios y menús de grupo: `src/data/carta.ts` (rellenar `precio: '8,50 €'` y desaparece el aviso)
- Dominio definitivo: `astro.config.mjs` (`SITE`) y `public/robots.txt`
- Fotos: guardarlas en `src/assets/` y sustituir cada `<HuecoFoto>` por `<Picture>` de `astro:assets`
  (genera WebP/AVIF, tamaños responsive y lazy loading).
