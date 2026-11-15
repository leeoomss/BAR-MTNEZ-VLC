import { horario } from '../data/negocio';

// Hora actual en Valencia, venga de donde venga el visitante.
function ahoraEnValencia() {
  const partes = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Madrid',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (t: string) => partes.find((p) => p.type === t)?.value ?? '';
  const dias = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return { dia: dias.indexOf(get('weekday')), minutos: Number(get('hour')) * 60 + Number(get('minute')) };
}

const aMin = (h: string) => {
  const [hh, mm] = h.split(':').map(Number);
  return hh * 60 + mm;
};

export type Estado = { hoy: number; abierto: boolean; titulo: string; detalle: string };

export function estadoActual(): Estado {
  const { dia, minutos } = ahoraEnValencia();
  const h = horario[dia];
  const e = (abierto: boolean, detalle: string): Estado => ({
    hoy: dia,
    abierto,
    titulo: abierto ? 'Abierto' : 'Cerrado',
    detalle,
  });
  if (h.abre && h.cierra && minutos >= aMin(h.abre) && minutos < aMin(h.cierra)) {
    return e(true, `hasta las ${h.cierra}`);
  }
  if (h.abre && minutos < aMin(h.abre)) return e(false, `abre hoy a las ${h.abre}`);
  for (let i = 1; i <= 7; i++) {
    const sig = horario[(dia + i) % 7];
    if (sig.abre) {
      const cuando = i === 1 ? 'mañana' : `el ${sig.dia.toLowerCase()}`;
      return e(false, `abre ${cuando} a las ${sig.abre}`);
    }
  }
  return e(false, '');
}

// Rellena todos los elementos [data-estado] de la página.
export function pintarEstado() {
  const e = estadoActual();
  document.querySelectorAll<HTMLElement>('[data-estado]').forEach((el) => {
    el.dataset.abierto = String(e.abierto);
    const set = (sel: string, txt: string) => {
      const n = el.querySelector(sel);
      if (n) n.textContent = txt;
    };
    set('[data-estado-texto]', `${e.titulo} ahora · ${e.detalle}`);
    set('[data-estado-titulo]', e.titulo);
    set('[data-estado-detalle]', e.detalle);
    el.hidden = false;
  });
  document.querySelectorAll<HTMLElement>('[data-dia]').forEach((el) => {
    const esHoy = Number(el.dataset.dia) === e.hoy;
    el.toggleAttribute('data-hoy', esHoy);
    if (esHoy) el.setAttribute('aria-current', 'date');
  });
}
