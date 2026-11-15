// Datos reales del negocio. Todo lo marcado como PENDIENTE hay que confirmarlo con el dueño.

export const negocio = {
  nombre: 'Bar MTNEZ VLC',
  nombreCorto: 'MTNEZ.',
  telefono: '+34 670 00 17 52',
  telefonoHref: 'tel:+34670001752',
  direccion: {
    calle: "Carrer del Comte d'Altea, 35",
    cp: '46005',
    ciudad: 'València',
    region: 'Comunitat Valenciana',
    pais: 'ES',
    barrio: "L'Eixample",
    referencia: 'Entre Ruzafa y la Gran Vía',
  },
  geo: { lat: 39.4670175, lng: -0.3661065 },
  mapsUrl: 'https://maps.app.goo.gl/YJEcNbwhCV36HoVM9',
  mapsEmbed:
    'https://www.google.com/maps?q=BAR+MTNEZ+VLC,+Carrer+del+Comte+d%27Altea+35,+46005+Val%C3%A8ncia&z=17&output=embed',
  google: { nota: 4.7, resenas: 760, textoResenas: 'más de 760' },
  precio: '€€',
} as const;

// 0 = domingo ... 6 = sábado (igual que Date.getDay()).
// null = cerrado. Horas en formato 24 h, hora de Madrid.
export const horario: { dia: string; abre: string | null; cierra: string | null }[] = [
  { dia: 'Domingo', abre: '11:00', cierra: '23:00' },
  { dia: 'Lunes', abre: null, cierra: null },
  { dia: 'Martes', abre: '11:00', cierra: '23:00' },
  { dia: 'Miércoles', abre: '11:00', cierra: '23:00' },
  { dia: 'Jueves', abre: '11:00', cierra: '23:00' },
  { dia: 'Viernes', abre: '11:00', cierra: '23:00' },
  { dia: 'Sábado', abre: '11:00', cierra: '23:00' },
];

// Orden de la semana tal y como se lee en España (empieza en lunes).
export const ordenSemana = [1, 2, 3, 4, 5, 6, 0];
