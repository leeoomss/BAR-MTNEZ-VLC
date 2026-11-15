// Carta del día a día. Platos sacados de los menús de grupo publicados por el bar
// y de los que más mencionan los clientes en Google.
// PRECIOS: pendientes. Cuando el dueño pase la carta, rellenar `precio` (ej. '8,50 €').

export type Plato = {
  nombre: string;
  detalle?: string;
  precio?: string;
  destacado?: string; // etiqueta de sello, solo si está respaldada por reseñas
};

export type Categoria = { id: string; titulo: string; nota?: string; platos: Plato[] };

export const carta: Categoria[] = [
  {
    id: 'picar',
    titulo: 'Para picar',
    platos: [
      { nombre: 'Patatas bravas' },
      { nombre: 'Croquetas caseras' },
      { nombre: 'Torrezno de Soria', detalle: 'con mahonesa de kimchi' },
      { nombre: 'Alcachofas crujientes', detalle: 'con romesco' },
      { nombre: 'Fritura de boquerón de playa', detalle: 'sin espinas, al limón' },
    ],
  },
  {
    id: 'frio',
    titulo: 'Del frío',
    platos: [
      { nombre: 'Ensaladilla rusa', detalle: 'con encurtidos y ventresca de atún' },
      { nombre: 'Tartar de atún rojo', detalle: 'con encurtidos' },
      { nombre: 'Tosta de hojaldre', detalle: 'con pimiento caramelizado y anchoa del Cantábrico' },
      { nombre: 'Jamón ibérico' },
      { nombre: 'Tabla de quesos del mundo' },
    ],
  },
  {
    id: 'cocina',
    titulo: 'De cocina',
    platos: [
      {
        nombre: 'Gambas con sobrasada y huevo frito',
        destacado: 'El que más piden',
      },
      { nombre: 'Calamar a la plancha' },
      { nombre: 'Entrecot de Angus', detalle: 'con patatas y pimientos de Padrón' },
    ],
  },
  {
    id: 'arroces',
    titulo: 'Arroces',
    platos: [
      { nombre: 'Arroz meloso de carrillada y calabaza' },
      { nombre: 'Arroz al horno valenciano' },
    ],
  },
  {
    id: 'postres',
    titulo: 'Postres',
    platos: [{ nombre: 'Tarta de queso y pistacho' }, { nombre: 'Tarta de 3 chocolates' }],
  },
];

// Menús para grupos: datos reales publicados por el bar en 2026.
export type Menu = {
  nombre: string;
  precio: number;
  bloques: { titulo: string; regla: string; platos: string[]; nota?: string }[];
};

export const menus: Menu[] = [
  {
    nombre: 'Menú A',
    precio: 35,
    bloques: [
      {
        titulo: 'Entrantes',
        regla: 'Uno de cada por cada 4 personas',
        platos: [
          'Tosta de hojaldre con pimiento caramelizado y anchoa del Cantábrico',
          'Ensaladilla rusa con encurtidos y ventresca de atún',
          'Torrezno de Soria con mahonesa de kimchi',
          'Tartar de atún rojo con encurtidos',
          'Alcachofas crujientes con romesco',
        ],
      },
      {
        titulo: 'Principal',
        regla: 'Uno por cada 3 personas',
        platos: ['Entrecot de Angus con patatas y pimientos de Padrón'],
      },
      {
        titulo: 'Postre',
        regla: 'Uno de cada por cada 4 personas',
        platos: ['Tarta de queso y pistacho', 'Tarta de 3 chocolates'],
      },
    ],
  },
  {
    nombre: 'Menú con arroz',
    precio: 40,
    bloques: [
      {
        titulo: 'Entrantes',
        regla: 'Uno de cada por cada 4 personas',
        platos: [
          'Jamón ibérico',
          'Tabla de quesos del mundo',
          'Ensaladilla rusa con encurtidos y ventresca de atún',
          'Fritura de boquerón de playa sin espinas al limón',
          'Tartar de atún rojo con encurtidos',
          'Alcachofas crujientes con romesco',
        ],
      },
      {
        titulo: 'Principal',
        regla: 'A elegir',
        platos: ['Arroz meloso de carrillada y calabaza', 'Arroz al horno valenciano'],
        nota: 'El arroz es para toda la mesa: un solo tipo por mesa.',
      },
      {
        titulo: 'Postre',
        regla: 'Uno de cada por cada 4 personas',
        platos: ['Tarta de queso y pistacho', 'Tarta de 3 chocolates'],
      },
    ],
  },
];

export const condicionesMenus = [
  'Bebida incluida durante la comida, con todos los comensales en la mesa: agua, refrescos, cerveza de barril y vino tinto y blanco de la casa.',
  'Café no incluido.',
];
