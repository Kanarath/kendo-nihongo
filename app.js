/* Kendō Nihongo — app de japonés sin vidas, sin energía y sin rachas. */
'use strict';

// ===================== utilidades =====================
const $ = (s, r = document) => r.querySelector(s);
function h(tag, props, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (v == null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k === 'html') e.innerHTML = v;
    else if (k === 'style') e.style.cssText = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v === true ? '' : v);
  }
  kids.flat(Infinity).forEach(c => { if (c != null && c !== false) e.append(c.nodeType ? c : document.createTextNode(c)); });
  return e;
}
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const pick = a => a[Math.floor(Math.random() * a.length)];
const DAY = 86400000;
const dayStart = ts => { const d = new Date(ts); d.setHours(0, 0, 0, 0); return d.getTime(); };
const dayKey = ts => { const d = new Date(ts); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); };
const md = s => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');

// ===================== estado guardado =====================
const KEY = 'kendo-nihongo-v1';
const defaults = () => ({ xp: 0, days: [], srs: {}, done: {}, collection: [], ui: { collapsed: {} }, settings: { sound: true, romaji: true, furigana: true, cameo: true, rate: 0.85, vibrate: true } });
function loadState() {
  try { const j = JSON.parse(localStorage.getItem(KEY)); if (j) { const d = defaults(); return Object.assign(d, j, { settings: Object.assign(d.settings, j.settings || {}) }); } } catch (e) {}
  return defaults();
}
let S = loadState();
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

// ===================== repetición espaciada (Leitner) =====================
// Cajas 0..5 con intervalos crecientes. Fallar nunca "quita" nada: solo vuelve a salir antes.
const INTERVALS = [0, 1, 3, 7, 16, 35];
function applyResult(id, ok) {
  const r = S.srs[id] || { box: 0, seen: 0 };
  r.seen++;
  if (ok) { r.box = Math.min(5, r.box + 1); r.due = dayStart(Date.now()) + INTERVALS[r.box] * DAY; }
  else { r.box = r.box <= 1 ? 0 : 1; r.due = Date.now(); }
  S.srs[id] = r;
}
const dueItems = () => Object.keys(S.srs).filter(id => ITEMS[id] && S.srs[id].due <= Date.now())
  .sort((a, b) => S.srs[a].box - S.srs[b].box || S.srs[a].due - S.srs[b].due);
const learnedIds = () => Object.keys(S.srs).filter(id => ITEMS[id]);

// ===================== rangos =====================
function rankIdx(xp) { let i = 0; RANKS.forEach((r, k) => { if (xp >= r.xp) i = k; }); return i; }

// ===================== audio =====================
let jaVoice = null;
function pickVoice() { if (!('speechSynthesis' in window)) return; jaVoice = speechSynthesis.getVoices().find(v => /^ja/i.test(v.lang)) || null; }
if ('speechSynthesis' in window) { speechSynthesis.onvoiceschanged = pickVoice; pickVoice(); }
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja-JP'; if (jaVoice) u.voice = jaVoice; u.rate = S.settings.rate;
    speechSynthesis.speak(u);
  } catch (e) {}
}
// Lo que se pronuncia: la lectura en kana para kanji y palabras con kanji, no el dibujo.
const sayOf = it => it.say || it.kana || it.jp;
let AC = null;
function tone(freq, t0, dur, type = 'sine', vol = 0.12) {
  if (!S.settings.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    const o = AC.createOscillator(), g = AC.createGain();
    o.type = type; o.frequency.value = freq; o.connect(g); g.connect(AC.destination);
    const t = AC.currentTime + t0;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.start(t); o.stop(t + dur);
  } catch (e) {}
}
const buzz = p => { if (S.settings.vibrate && navigator.vibrate) try { navigator.vibrate(p); } catch (e) {} };
const sfx = {
  ok() { tone(660, 0, .12); tone(990, .09, .18); buzz(12); },
  bad() { tone(300, 0, .18, 'triangle', .1); tone(250, .12, .22, 'triangle', .08); buzz([20, 30, 20]); },
  tap() { tone(520, 0, .05, 'sine', .06); },
  pair() { tone(700, 0, .08); tone(1000, .06, .12); },
  win() { [523, 659, 784, 1047].forEach((f, i) => tone(f, i * .11, .3, 'square', .07)); buzz([30, 40, 60]); },
  chest() { [392, 523, 659, 784, 1047].forEach((f, i) => tone(f, i * .08, .25, 'triangle', .1)); }
};

// ===================== mascota pixel-art =====================
// Chopper (fan art) con una katana: sombrero rosa con cruz, cuernos, nariz azul.
const SPRITE = [
  '.a............a.',
  '..appppwwppppa..',
  '..appwwwwwwppa..',
  '.aappppwwppppaa.',
  '..PPPPPPPPPPPP.g',
  '...bbbbbbbbbb..g',
  '...bckcccckcb..g',
  '...bcccnncccb..g',
  '...bcccrrcccb..g',
  '....bbbbbbbb...g',
  '...bbbbbbbbbb..g',
  '..bbbbbbbbbbbbby',
  '...ssssssssss..k',
  '....ssssssss...k',
  '....bbb..bbb....',
  '....kkk..kkk....'
];
const PAL = { a: '#e8c98a', p: '#f27ba5', P: '#c9467a', w: '#fff6ea', b: '#a8683a', c: '#f0bd8c', k: '#3a2418', n: '#3d8fe0', r: '#e34a4a', s: '#2f5fb0', g: '#d5dde5', y: '#f2b84b' };
function mascot(px = 6, extra = '', pose = 'wave') {
  const d = h('div', { class: 'chop ' + extra, html: chopperSVG(pose) });
  d.style.width = (16 * px) + 'px';
  return d;
}
// Chopper se asoma un momento durante las lecciones (sin tapar nada ni interrumpir)
function cameo(pose, text) {
  if (S.settings.cameo === false) return;
  document.querySelectorAll('.cameo').forEach(e => e.remove());
  const el = h('div', { class: 'cameo', 'aria-hidden': 'true' }, h('div', { class: 'cbubble' }, text), h('div', { class: 'chop', html: chopperSVG(pose) }));
  document.body.append(el); setTimeout(() => el.remove(), 2700);
}
function maybeCameo(ok) {
  if (!SS || SS.cfg.exam || S.settings.cameo === false) return;
  const gap = SS.done - (SS.lastCameo ?? -9), combo = ok ? SS.combo + 1 : 0;
  let pose = null, text = '';
  if (ok && combo >= 5 && combo % 5 === 0) { pose = 'cheer'; text = pick(['¡Racha de ' + combo + '!', '¡Imparable!', '¡Qué máquina!']); }
  else if (ok && gap >= 6 && Math.random() < 0.12) { pose = pick(['wave', 'dance', 'cheer']); text = pick(['¡Muy bien!', '¡Sigue así!', '¡Eres genial!', '¡Ippon!']); }
  else if (!ok && gap >= 5 && Math.random() < 0.15) { pose = 'think'; text = pick(['¡Casi!', 'Tranquilo, ya sale', 'Fallar también enseña']); }
  if (pose) { SS.lastCameo = SS.done; cameo(pose, text); }
}

// ===================== efectos =====================
function confetti(n = 36) {
  const box = h('div', { class: 'confetti' });
  const cols = ['#d63a2f', '#e7b83c', '#34457f', '#f4efe6', '#3aa76d'];
  for (let i = 0; i < n; i++) {
    box.append(h('i', { style: `--x:${Math.random() * 100}vw;--r:${Math.random() * 720 - 360}deg;--d:${1.4 + Math.random() * 1.2}s;--dl:${Math.random() * .3}s;background:${pick(cols)}` }));
  }
  document.body.append(box); setTimeout(() => box.remove(), 3000);
}

// ===================== navegación =====================
const app = $('#app'), nav = $('#nav');
let tab = 'home';
function show(node, withNav = true) {
  app.replaceChildren(node); nav.classList.toggle('hidden', !withNav); window.scrollTo(0, 0);
}
function go(t) { tab = t; nav.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.t === t)); ({ home: viewHome, review: viewReview, coll: viewColl, dojo: viewDojo })[t](); }
nav.querySelectorAll('button').forEach(b => b.addEventListener('click', () => { sfx.tap(); go(b.dataset.t); }));

// ===================== vistas =====================
const GREET = [
  'Sin presión: cualquier ejercicio suma. 頑張って (ganbatte).',
  'Dos minutos bastan. ¡Soy médico, confía en mí!',
  'Aquí no se pierde nada. Solo se avanza.',
  'Hoy un poquito, mañana otro poquito. 少しずつ.',
  'Un corte limpio a la vez. 一本!',
  '¡Vamos a por un algodón de azúcar… digo, a por un kanji!'
];
function topbar() {
  const i = rankIdx(S.xp), r = RANKS[i], nx = RANKS[i + 1];
  const pct = nx ? Math.round((S.xp - r.xp) / (nx.xp - r.xp) * 100) : 100;
  return h('header', { class: 'top' },
    h('div', { class: 'rank' }, h('span', { class: 'rk-jp' }, r.jp), h('div', {}, h('b', {}, r.name), h('small', {}, r.title))),
    h('div', { class: 'xpwrap' }, h('div', { class: 'xpbar' }, h('i', { style: `width:${pct}%` })), h('small', {}, nx ? `${S.xp} / ${nx.xp} XP` : `${S.xp} XP`)),
    h('div', { class: 'days', title: 'Días que has entrenado en total' }, '🔥 ', h('b', {}, S.days.length), h('small', {}, ' días'))
  );
}
function viewHome() {
  const wrap = h('div', { class: 'view' }, topbar());
  const due = dueItems().length;
  wrap.append(h('div', { class: 'hero' }, mascot(8, 'bob', 'wave'), h('div', { class: 'bubble' }, pick(GREET))));
  wrap.append(h('button', { class: 'card review-card', onclick: () => { sfx.tap(); go('review'); } },
    h('span', { class: 'big-emoji' }, due ? '🍜' : '🍵'),
    h('div', {}, h('b', {}, due ? `${due} cosas listas para repasar` : 'Todo al día'), h('small', {}, due ? 'Repaso rápido de ~2 min' : 'Puedes hacer práctica libre cuando quieras')),
    h('span', { class: 'chev' }, '›')));
  if (('speechSynthesis' in window) && !jaVoice) {
    wrap.append(h('div', { class: 'warn' }, '🔇 No detecto voz japonesa en este dispositivo. En Android: Ajustes › Sistema › Idioma › Salida de texto a voz › Google › Instalar datos de voz › Japonés.'));
  }
  const nextL = UNITS.flatMap(u => u.lessons).find(l => !S.done[l.id]);
  if (nextL) wrap.append(h('button', { class: 'card next-card', onclick: () => { sfx.tap(); startLesson(nextL); } },
    h('span', { class: 'circle sm' }, nextL.icon), h('div', {}, h('small', {}, 'Siguiente lección'), h('b', {}, nextL.title)), h('span', { class: 'go' }, 'Ir ›')));
  UNITS.forEach(u => {
    const doneN = u.lessons.filter(l => S.done[l.id]).length;
    const shut = S.ui.collapsed[u.id] ?? !u.lessons.includes(nextL); // por defecto solo se despliega la unidad en curso
    wrap.append(h('button', { class: 'unit', 'aria-expanded': !shut, onclick: () => { S.ui.collapsed[u.id] = !shut; save(); viewHome(); } },
      h('span', { class: 'uhead' }, h('span', {}, u.title), h('span', { class: 'ucount' }, `${doneN}/${u.lessons.length} ${shut ? '▸' : '▾'}`)), h('small', {}, u.sub)));
    if (shut) return;
    const path = h('div', { class: 'path' });
    u.lessons.forEach((l, i) => {
      const n = S.done[l.id] || 0;
      path.append(h('button', { class: 'node ' + (i % 2 ? 'r' : 'l') + (n ? ' done' : '') + (l === nextL ? ' next' : ''), onclick: () => { sfx.tap(); startLesson(l); } },
        h('span', { class: 'circle' }, l.icon),
        h('span', { class: 'ntxt' }, h('b', {}, l.title), h('small', {}, l.sub), h('span', { class: 'stars' }, n ? '★'.repeat(Math.min(n, 3)) + '☆'.repeat(3 - Math.min(n, 3)) : h('em', {}, 'nueva')))));
    });
    wrap.append(path);
  });
  wrap.append(h('p', { class: 'foot-note' }, 'Todas las lecciones están abiertas: entra por donde quieras.'));
  show(wrap);
}

function viewReview() {
  const due = dueItems(), learned = learnedIds();
  const wrap = h('div', { class: 'view' }, topbar(), h('h2', { class: 'unit' }, 'Repaso', h('small', {}, 'Recordar es lo que fija lo aprendido')));
  const card = h('div', { class: 'card center' }, mascot(5, '', 'think'));
  if (!learned.length) card.append(h('p', {}, 'Aún no has aprendido nada que repasar. ¡Haz tu primera lección!'));
  else if (due.length) card.append(h('p', {}, h('b', {}, due.length), ' listas para repasar'), h('button', { class: 'btn', onclick: () => startReview(false) }, 'Empezar repaso'));
  else card.append(h('p', {}, 'Todo al día. ¡Buen trabajo!'), h('button', { class: 'btn', onclick: () => startReview(true) }, 'Práctica libre (sin límite)'));
  if (due.length && learned.length) card.append(h('button', { class: 'btn ghost', onclick: () => startReview(true) }, 'O practicar lo que quiera'));
  card.append(h('button', { class: 'btn ghost', onclick: randomReading }, '📖 Lectura al azar'));
  wrap.append(card);
  if (learned.length) {
    wrap.append(h('h3', {}, 'Mapa de dominio'), h('p', { class: 'muted' }, 'Cuanto más intenso el color, mejor lo recuerdas.'));
    const grid = h('div', { class: 'mastery' });
    learned.forEach(id => { const it = ITEMS[id]; grid.append(h('button', { class: 'chip b' + S.srs[id].box, onclick: () => speak(sayOf(it)), title: it.es }, it.kind === 'phrase' ? '文' : it.kind === 'text' ? '読' : it.jp)); });
    wrap.append(grid);
  }
  show(wrap);
}

function viewColl() {
  const wrap = h('div', { class: 'view' }, topbar(), h('h2', { class: 'unit' }, 'Colección', h('small', {}, `${S.collection.length} / ${TREASURES.length} tesoros`)));
  const grid = h('div', { class: 'treasures' });
  TREASURES.forEach((t, i) => {
    const own = S.collection.includes(i);
    grid.append(h('div', { class: 'tr' + (own ? ' own' : '') }, h('span', {}, own ? t[0] : '❔'), h('small', {}, own ? t[1] : '???')));
  });
  wrap.append(grid, h('p', { class: 'muted center' }, 'Cada lección y cada repaso terminado te da un cofre.'), h('div', { class: 'center' }, mascot(6, 'bob', 'cheer')));
  show(wrap);
}

function viewDojo() {
  const wrap = h('div', { class: 'view' }, topbar(), h('h2', { class: 'unit' }, 'Dōjō', h('small', {}, 'Tu progreso y ajustes')));
  const kanaDone = learnedIds().filter(i => ITEMS[i].kind === 'kana').length, kanaTot = Object.values(ITEMS).filter(i => i.kind === 'kana').length;
  wrap.append(h('div', { class: 'stats' },
    stat('🔥', S.days.length, 'días entrenados'), stat('⭐', S.xp, 'XP total'),
    stat('あ', `${kanaDone}/${kanaTot}`, 'kana'), stat('漢', learnedIds().filter(i => ITEMS[i].kind === 'kanji').length, 'kanji'),
    stat('語', learnedIds().filter(i => !['kana', 'kanji'].includes(ITEMS[i].kind)).length, 'palabras y frases')));

  const set = S.settings;
  const toggle = (label, key) => h('label', { class: 'row' }, h('span', {}, label), h('input', { type: 'checkbox', ...(set[key] ? { checked: '' } : {}), onchange: e => { set[key] = e.target.checked; save(); } }));
  const last = (S.exams || []).slice(-1)[0];
  wrap.append(h('h3', {}, 'Examen de nivel'), h('div', { class: 'card list' },
    h('p', { class: 'muted' }, 'Unas 50 preguntas de kana, vocabulario, kanji, gramática, verbos, lectura y escucha. Sin pistas y sin prisa; no pasa nada si fallas. Dura unos 12-15 minutos.'),
    last ? h('p', {}, '🎓 Último resultado: ', h('b', {}, last.pct + ' %'), ' (' + new Date(last.d).toLocaleDateString('es-ES') + ')') : null,
    (last && last.missed && last.missed.length) ? h('button', { class: 'btn ghost', onclick: () => startFixes(last.missed) }, '🔁 Repasar los errores del último examen (' + last.missed.length + ')') : null,
    h('button', { class: 'btn', onclick: () => startExam('learned') }, '🎓 Sobre lo que he estudiado'),
    h('button', { class: 'btn ghost', onclick: () => startExam('all') }, 'Todo el curso')));
  wrap.append(h('h3', {}, 'Ajustes'), h('div', { class: 'card list' },
    toggle('Sonidos', 'sound'), toggle('Vibración', 'vibrate'), toggle('Mostrar romaji (letras latinas)', 'romaji'), toggle('Furigana (lectura sobre los kanji)', 'furigana'), toggle('Chopper se asoma en las lecciones', 'cameo'),
    h('label', { class: 'row' }, h('span', {}, 'Velocidad de la voz'), h('input', { type: 'range', min: 0.5, max: 1.1, step: 0.05, value: set.rate, onchange: e => { set.rate = +e.target.value; save(); speak('こんにちは'); } })),
    h('button', { class: 'btn ghost', onclick: () => speak('こんにちは。わたしは けんです。') }, '🔊 Probar la voz')));

  wrap.append(h('h3', {}, 'Cómo aprendes aquí'), h('div', { class: 'card science' },
    sci('Repetición espaciada', 'Lo que ya sabes vuelve cada vez más tarde (1, 3, 7, 16, 35 días). Es de lo más sólido que hay en investigación sobre memoria.'),
    sci('Recuerdo activo', 'Siempre tienes que sacar la respuesta, no solo mirarla. Recordar con esfuerzo fija más que releer.'),
    sci('Sonido + imagen', 'Cada carácter llega con audio y una regla mnemotécnica visual: dos vías de memoria mejor que una.'),
    sci('Errores sin castigo', 'Si fallas, vuelve a salir pronto en la misma sesión. Fallar y corregir es parte de aprender.'),
    sci('Variedad', 'Mezclamos tipos de ejercicio (oír, leer, ordenar, emparejar) para que no aburra y se recuerde en más contextos.')));

  wrap.append(h('h3', {}, 'Copia de seguridad'), h('div', { class: 'card list' },
    h('p', { class: 'muted' }, 'Tu progreso vive en este dispositivo. Descárgalo de vez en cuando por si cambias de móvil.'),
    h('button', { class: 'btn ghost', onclick: exportSave }, '⬇ Descargar copia'),
    h('label', { class: 'btn ghost filebtn' }, '⬆ Restaurar copia', h('input', { type: 'file', accept: 'application/json', onchange: importSave })),
    h('button', { class: 'btn danger', onclick: () => { if (confirm('¿Borrar TODO el progreso? No se puede deshacer.')) { S = defaults(); save(); go('home'); } } }, 'Borrar progreso')));
  show(wrap);
}
const stat = (i, v, l) => h('div', { class: 'stat' }, h('span', {}, i), h('b', {}, v), h('small', {}, l));
const sci = (t, d) => h('p', {}, h('b', {}, t + '. '), d);
function exportSave() {
  const a = h('a', { href: URL.createObjectURL(new Blob([JSON.stringify(S)], { type: 'application/json' })), download: 'kendo-nihongo-progreso.json' });
  document.body.append(a); a.click(); a.remove();
}
function importSave(e) {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => { try { const j = JSON.parse(r.result); if (typeof j.xp !== 'number') throw 0; S = Object.assign(defaults(), j); save(); alert('Progreso restaurado ✔'); go('dojo'); } catch (x) { alert('Ese archivo no es una copia válida.'); } };
  r.readAsText(f);
}

// ===================== generador de ejercicios =====================
function distract(it, prop, n = 3) {
  const pool = Object.values(ITEMS).filter(x => x.kind === it.kind && x.id !== it.id && x[prop] != null && x[prop] !== it[prop] && x.rom !== it.rom && (x.script || '') === (it.script || '')); // mismo sonido (お/を) = respuesta ambigua
  const pref = shuffle(pool.filter(x => x.group === it.group || S.srs[x.id]));
  const rest = shuffle(pool.filter(x => !pref.includes(x)));
  const out = [], seen = new Set([it[prop]]);
  for (const x of [...pref, ...rest]) { if (!seen.has(x[prop])) { seen.add(x[prop]); out.push(x); } if (out.length >= n) break; }
  return out;
}
function mcqOptions(it, prop, optJp) {
  return shuffle([it, ...distract(it, prop)]).map(x => ({ key: x.id, label: x[prop], jp: optJp, correct: x.id === it.id }));
}
// Cada ejercicio es { itemId, make() } para poder regenerarlo con opciones nuevas al reintentar.
const E = {
  k2r: it => ({ itemId: it.id, make: () => ({ type: 'mcq', question: '¿Cómo se lee?', big: it.jp, speak: sayOf(it), options: mcqOptions(it, 'rom'), answerText: it.rom }) }),
  listenKana: it => ({ itemId: it.id, make: () => ({ type: 'mcq', question: '¿Qué carácter oyes?', listen: true, speak: sayOf(it), options: mcqOptions(it, 'jp', true), answerText: it.jp }) }),
  w2es: it => ({ itemId: it.id, make: () => ({ type: 'mcq', question: '¿Qué significa?', big: it.jp, sub: (S.settings.romaji && !EXAM()) ? it.rom : '', speak: sayOf(it), options: mcqOptions(it, 'es'), answerText: it.es }) }),
  es2jp: it => ({ itemId: it.id, make: () => ({ type: 'mcq', question: 'Elige la palabra en japonés', big: it.es, bigSmall: true, options: mcqOptions(it, 'jp', true), answerText: it.jp + (it.rom ? ' (' + it.rom + ')' : ''), speakOnAnswer: sayOf(it) }) }),
  listenWord: it => ({ itemId: it.id, make: () => ({ type: 'mcq', question: 'Escucha y elige lo que oyes', listen: true, speak: sayOf(it), options: mcqOptions(it, 'jp', true), answerText: it.jp }) }),
  p2es: it => ({ itemId: it.id, make: () => ({ type: 'mcq', question: '¿Qué significa la frase?', phrase: it, speak: sayOf(it), options: mcqOptions(it, 'es'), answerText: it.es }) }),
  tiles: it => ({ itemId: it.id, make: () => {
    const own = new Set(it.tokens.map(t => t[0]));
    const extra = shuffle(Object.values(ITEMS).filter(x => x.kind === 'phrase').flatMap(x => x.tokens).filter(t => !own.has(t[0]))).filter((t, i, a) => a.findIndex(u => u[0] === t[0]) === i).slice(0, 2);
    return { type: 'tiles', question: 'Traduce al japonés', big: it.es, bigSmall: true, speak: sayOf(it), tokens: shuffle([...it.tokens, ...extra]), answer: it.tokens.map(t => t[0]), answerText: it.jp };
  } })
};
// --- kanji y palabras con kanji ---
E.reading = it => ({ itemId: it.id, make: () => ({ type: 'mcq', question: '¿Cómo se lee?', big: it.jp, speak: sayOf(it), options: mcqOptions(it, 'kana', true), answerText: it.kana + (it.rom ? ' (' + it.rom + ')' : '') }) });
E.kmean = it => ({ itemId: it.id, make: () => ({ type: 'mcq', question: '¿Qué significa este kanji?', big: it.jp, speak: sayOf(it), options: mcqOptions(it, 'es'), answerText: it.es }) });
E.kfrom = it => ({ itemId: it.id, make: () => ({ type: 'mcq', question: 'Elige el kanji correcto', big: it.es, bigSmall: true, options: mcqOptions(it, 'jp', true), answerText: it.jp + ' (' + it.read + ')', speakOnAnswer: sayOf(it) }) });
E.kread = it => ({ itemId: it.id, make: () => {
  const mine = new Set(it.yomi);
  const others = shuffle([...new Set(Object.values(ITEMS).filter(x => x.kind === 'kanji' && x.id !== it.id).flatMap(x => x.yomi))].filter(y => !mine.has(y)));
  const ok = pick(it.yomi), isK = /[ァ-ヶ]/.test(ok);
  others.splice(0, others.length, ...others.filter(y => /[ァ-ヶ]/.test(y) === isK)); // distractores del mismo tipo (on o kun)
  return { type: 'mcq', question: 'Una lectura de este kanji es…', big: it.jp, speak: sayOf(it),
    options: shuffle([{ key: 'ok', label: ok, jp: true, correct: true }, ...others.slice(0, 3).map((y, i) => ({ key: 'd' + i, label: y, jp: true, correct: false }))]),
    answerText: it.read };
} });
// --- verbos: forma de diccionario y forma て ---
E.conj = it => ({ itemId: it.id, make: () => {
  const stem = it.jp.slice(0, -1);
  const wrong = shuffle(['って', 'んで', 'いて', 'いで', 'して', 'て'].map(e => stem + e).filter(w => w !== it.te)).slice(0, 3);
  return { type: 'mcq', question: 'Forma て de «' + it.jp + '» (' + it.es + ')', big: it.jp,
    sub: 'Grupo ' + it.grp + (it.grp === 1 ? ' · termina en ' + it.kana.slice(-1) : ''), speak: sayOf(it),
    options: shuffle([{ key: 'ok', label: it.te, jp: true, correct: true }, ...wrong.map((w, i) => ({ key: 'w' + i, label: w, jp: true, correct: false }))]),
    answerText: it.te + ' (' + it.teKana + ')', speakOnAnswer: it.teKana };
} });
E.teRead = it => ({ itemId: it.id, make: () => {
  const seen = new Set([it.teKana]), opts = [];
  for (const x of shuffle(Object.values(ITEMS).filter(v => v.kind === 'verb' && v.id !== it.id))) { if (!seen.has(x.teKana)) { seen.add(x.teKana); opts.push(x); } if (opts.length >= 3) break; }
  return { type: 'mcq', question: '¿Cómo se lee esta forma て?', big: it.te, speak: it.teKana,
    options: shuffle([it, ...opts]).map(x => ({ key: x.id, label: x.teKana, jp: true, correct: x.id === it.id })), answerText: it.teKana };
} });
// formas ない y た (y lectura de cualquier forma con campos X y XKana)
E.conjForm = (it, k) => ({ itemId: it.id, make: () => {
  const stem = it.jp.slice(0, -1), name = { nai: 'ない', ta: 'た' }[k];
  const cand = k === 'nai'
    ? [stem + 'ない', it.jp + 'ない', stem + 'らない', stem + 'まない', stem + 'わない', stem + 'かない', stem + 'さない', stem + 'ります']
    : [stem + 'った', stem + 'んだ', stem + 'いた', stem + 'いだ', stem + 'した', stem + 'た', stem + 'ます'];
  const wrong = shuffle([...new Set(cand)].filter(w => w !== it[k])).slice(0, 3);
  return { type: 'mcq', question: 'Forma ' + name + ' de «' + it.jp + '» (' + it.es + ')', big: it.jp,
    sub: 'Grupo ' + it.grp + (it.grp === 1 ? ' · termina en ' + it.kana.slice(-1) : ''), speak: sayOf(it),
    options: shuffle([{ key: 'ok', label: it[k], jp: true, correct: true }, ...wrong.map((w, i) => ({ key: 'w' + i, label: w, jp: true, correct: false }))]),
    answerText: it[k] + ' (' + it[k + 'Kana'] + ')', speakOnAnswer: it[k + 'Kana'] };
} });
E.formRead = (it, k) => ({ itemId: it.id, make: () => {
  const seen = new Set([it[k + 'Kana']]), opts = [];
  for (const x of shuffle(Object.values(ITEMS).filter(v => v.kind === 'verb' && v.id !== it.id))) { if (!seen.has(x[k + 'Kana'])) { seen.add(x[k + 'Kana']); opts.push(x); } if (opts.length >= 3) break; }
  return { type: 'mcq', question: '¿Cómo se lee esta forma ' + { nai: 'ない', ta: 'た', te: 'て' }[k] + '?', big: it[k], speak: it[k + 'Kana'],
    options: shuffle([it, ...opts]).map(x => ({ key: x.id, label: x[k + 'Kana'], jp: true, correct: x.id === it.id })), answerText: it[k + 'Kana'] };
} });
// --- ejercicios del examen: completar la frase y escuchar una frase ---
const PARTICLES = ['は', 'が', 'を', 'に', 'へ', 'で', 'の', 'も', 'と', 'か', 'から', 'まで', 'より'];
E.gap = it => {
  if (!it.tokens || it.tokens.length < 2) return null;
  const idxP = it.tokens.map((t, i) => PARTICLES.includes(t[0]) ? i : -1).filter(i => i >= 0);
  return { itemId: it.id, make: () => {
    const i = (idxP.length && Math.random() < 0.65) ? pick(idxP) : it.tokens.length - 1 - (it.tokens.length > 3 && Math.random() < 0.3 ? 1 : 0);
    const ans = it.tokens[i][0];
    // distractores que de verdad no encajan (nunca は/が/も entre sí ni に/へ entre sí)
    const TOPIC = ['は', 'が', 'も'], clash = ans === 'に' ? ['へ'] : ans === 'へ' ? ['に'] : [];
    let pool = PARTICLES.includes(ans) ? PARTICLES.filter(t => !(TOPIC.includes(ans) && TOPIC.includes(t)) && !(!TOPIC.includes(ans) && TOPIC.includes(t)) && !clash.includes(t)) :[...new Set(Object.values(ITEMS).filter(x => x.kind === 'phrase').flatMap(x => x.tokens.map(t => t[0])))].filter(t => !PARTICLES.includes(t) && t !== ans);
    const wrong = shuffle(pool.filter(t => t !== ans)).slice(0, 3);
    return { type: 'mcq', question: 'Completa la frase', big: it.tokens.map((t, k) => k === i ? '＿＿' : t[0]).join(' '), bigSmall: true, sub: it.es,
      options: shuffle([ans, ...wrong]).map((t, k) => ({ key: 'g' + k, label: t, jp: true, correct: t === ans })), answerText: ans };
  } };
};
E.listenPhrase = it => ({ itemId: it.id, make: () => ({ type: 'mcq', question: 'Escucha y elige lo que significa', listen: true, speak: sayOf(it), options: mcqOptions(it, 'es'), answerText: it.es }) });
E.q = (it, q) => ({ itemId: it.id, make: () => ({ type: 'mcq', question: q[0], passageItem: it,
  options: shuffle(q[1].map((label, i) => ({ key: i, label, correct: i === q[2] }))), answerText: q[1][q[2]] }) });
function exercisesFor(it, mode, focus) {
  if (it.kind === 'verb') return mode === 'lesson' ? (focus === 'te' ? [E.conj(it), E.teRead(it)] : (focus === 'nai' || focus === 'ta') ? [E.conjForm(it, focus), E.formRead(it, focus)] : [E.reading(it), E.w2es(it)]) : [pick([() => E.reading(it), () => E.w2es(it), () => E.conj(it), () => E.teRead(it), () => E.listenWord(it), ...(it.nai ? [() => E.conjForm(it, 'nai'), () => E.conjForm(it, 'ta')] : [])])()];
  if (it.kind === 'kanji') return mode === 'lesson' ? [E.kmean(it), E.kread(it)] : [pick([E.kmean, E.kread, E.kfrom])(it)];
  if (it.kind === 'word' && it.kana) return mode === 'lesson' ? [E.reading(it), pick([E.w2es, E.listenWord])(it)] : [pick([E.reading, E.w2es, E.es2jp, E.listenWord])(it)];
  if (it.kind === 'text') return mode === 'lesson' ? it.qs.map(q => E.q(it, q)) : [E.q(it, pick(it.qs))];
  if (it.kind === 'kana') return mode === 'lesson' ? [E.k2r(it), E.listenKana(it)] : [pick([E.k2r, E.listenKana])(it)];
  if (it.kind === 'word') return mode === 'lesson' ? [E.w2es(it), E.listenWord(it)] : [pick([E.w2es, E.es2jp, E.listenWord])(it)];
  return mode === 'lesson' ? [E.tiles(it), E.p2es(it)] : [pick([E.tiles, E.p2es])(it)];
}
function matchStep(items) {
  const kana = items[0].kind === 'kana';
  items = items.filter((it, i) => items.findIndex(o => (kana ? o.rom : o.es) === (kana ? it.rom : it.es)) === i); // sin respuestas repetidas
  return { type: 'match', items: items.map(i => i.id), pairs: items.map(i => ({ id: i.id, l: i.jp, r: kana ? i.rom : i.es })) };
}

// ===================== sesiones =====================
let SS = null; // sesión actual
function startLesson(lesson) {
  const items = lesson.items.map(id => ITEMS[id]);
  const steps = [];
  if (lesson.note) steps.push({ type: 'note', note: lesson.note });
  items.forEach(it => steps.push({ type: 'intro', item: it }));
  const ex = shuffle(items.flatMap(it => exercisesFor(it, 'lesson', lesson.focus)));
  // intercalar: primeros 3 ejercicios inmediatamente tras las presentaciones
  steps.push(...ex);
  if (['kana', 'word', 'kanji', 'verb'].includes(items[0].kind) && items.length > 1) steps.push(matchStep(items.slice(0, 5)));
  runSession({ title: lesson.title, steps, itemIds: lesson.items, lessonId: lesson.id, mode: 'lesson', focus: lesson.focus });
}
function startReview(free) {
  let ids = free ? shuffle(learnedIds()).slice(0, 10) : dueItems().slice(0, 10);
  if (!ids.length) return;
  const items = ids.map(id => ITEMS[id]);
  const steps = shuffle(items.flatMap(it => exercisesFor(it, 'review')));
  const small = items.filter(i => ['kana', 'word', 'kanji', 'verb'].includes(i.kind));
  if (small.length >= 4 && small.every(i => i.kind === small[0].kind)) steps.push(matchStep(small.slice(0, 5)));
  runSession({ title: free ? 'Práctica libre' : 'Repaso', steps, itemIds: ids, mode: free ? 'free' : 'review' });
}
function runSession(cfg) {
  SS = { cfg, queue: cfg.steps.slice(), total: cfg.steps.length, done: 0, combo: 0, maxCombo: 0, right: 0, tries: 0, wrong: new Set(), xp: 0, retried: 0, cat: {}, missed: [] };
  nextStep();
}
function quitSession() { SS = null; speechSynthesis && speechSynthesis.cancel(); go(tab); }
function nextStep() {
  if (!SS.queue.length) return finishSession();
  const step = SS.queue.shift();
  const body = h('div', { class: 'body' });
  const foot = h('div', { class: 'foot' });
  const pct = Math.round(SS.done / (SS.done + SS.queue.length + 1) * 100);
  const frame = h('div', { class: 'session' },
    h('div', { class: 'shead' },
      h('button', { class: 'x', 'aria-label': 'Salir', onclick: () => { if (SS.done < 3 || confirm('¿Salir ahora? No pasa nada, puedes volver cuando quieras.')) quitSession(); } }, '✕'),
      h('div', { class: 'pbar' }, h('i', { style: `width:${pct}%` })),
      h('div', { class: 'combo' + (SS.combo >= 3 ? ' hot' : '') }, SS.combo >= 2 ? `🔥 ×${SS.combo}` : '')),
    body, foot);
  show(frame, false);
  curKeys = null;
  if (step.type === 'intro') rIntro(step, body, foot);
  else if (step.type === 'note') rNote(step, body, foot);
  else if (step.type === 'match') rMatch(step, body, foot);
  else { const spec = step.make(); spec.itemId = step.itemId; spec.retry = !!step.retry; spec.src = step; spec.cat = step.cat; (spec.type === 'mcq' ? rMcq : rTiles)(spec, body, foot); if (SS.cfg.exam && spec.cat) body.prepend(h('div', { class: 'examcat' }, spec.cat + ' · ' + (SS.done + 1) + ' / ' + SS.total)); }
}
function advance(btnLabel = 'Continuar', fn) {
  return h('button', { class: 'btn primary', onclick: () => { sfx.tap(); (fn || (() => { SS.done++; nextStep(); }))(); } }, btnLabel);
}

// --- presentación ---
function rNote(step, body, foot) {
  body.append(h('div', { class: 'card note' }, h('h2', {}, '💡 ' + step.note.title), h('p', { html: md(step.note.body) })));
  foot.append(advance('Entendido', () => nextStep()));
}
function glossBlock(it) {
  const g = h('div', { class: 'gloss' }, '');
  const chips = h('div', { class: 'tokens' }, it.tokens.map(t => h('button', { class: 'tok', onclick: () => { sfx.tap(); g.textContent = `${t[0]} · ${t[1]} · ${t[2]}`; speak(t[3] || t[0]); } }, tokText(t))));
  return h('div', {}, chips, g);
}
// pieza de texto: con furigana (lectura en kana sobre el kanji) si está activado
const EXAM = () => !!(SS && SS.cfg && SS.cfg.exam);
const tokText = t => (S.settings.furigana && !EXAM() && t[3] && t[3] !== t[0]) ? h('ruby', {}, t[0], h('rt', {}, t[3])) : t[0];
// lectura al azar de la biblioteca
function randomReading() {
  const ls = Object.values(LESSON_BY_ID).filter(l => ITEMS[l.items[0]] && ITEMS[l.items[0]].kind === 'text');
  if (ls.length) startLesson(pick(ls));
}
// texto con piezas tocables (significado y audio) para lecturas
function passageEl(it, withTranslation) {
  const gloss = h('div', { class: 'gloss' }, '');
  const lines = it.lines.map(l => h('div', { class: 'pline' },
    l.who ? h('span', { class: 'who' }, l.who) : null,
    h('div', { class: 'tokens left' }, l.tokens.map(t => h('button', { class: 'tok sm', onclick: () => { sfx.tap(); if (!EXAM()) gloss.textContent = `${t[0]} · ${t[1]} · ${t[2]}`; speak(t[3] || t[0]); } }, tokText(t)))),
    (S.settings.romaji && !EXAM()) ? h('div', { class: 'prom' }, l.tokens.map(t => t[1]).join(' ')) : null,
    withTranslation ? h('div', { class: 'pes' }, l.es) : null));
  return h('div', { class: 'passage' }, lines, gloss);
}
function rIntro(step, body, foot) {
  const it = step.item;
  if (it.kind === 'text') {
    const card = h('div', { class: 'card intro text' }, h('div', { class: 'tag' }, 'Lectura'), h('h2', {}, it.title), passageEl(it, false),
      h('button', { class: 'speaker', onclick: () => speak(it.lines.map(l => l.tokens.map(t => t[3] || t[0]).join('')).join('。 ') + '。'), 'aria-label': 'Escuchar' }, '🔊'));
    const tr = h('button', { class: 'btn ghost', onclick: () => { card.replaceChild(passageEl(it, true), card.querySelector('.passage')); tr.remove(); } }, '👁 Ver traducción');
    card.append(tr, h('p', { class: 'muted' }, 'Toca cada pieza para ver qué significa. Léelo primero y luego contesta.'));
    body.append(card); foot.append(advance('Ya lo he leído', () => nextStep())); return;
  }
  const card = h('div', { class: 'card intro' },
    h('div', { class: 'tag' }, it.kind === 'kana' ? (it.script ? 'Nuevo katakana' : 'Nuevo hiragana') : it.kind === 'word' ? 'Nueva palabra' : it.kind === 'kanji' ? 'Nuevo kanji' : it.kind === 'verb' ? 'Nuevo verbo' : 'Nueva frase'),
    it.kind === 'phrase' ? glossBlock(it) : h('div', { class: 'big-jp' }, it.jp),
    it.kana ? h('div', { class: 'kana-line' }, it.kana) : null,
    it.kind === 'kanji' ? h('div', { class: 'readings' }, h('span', {}, 'On / Kun'), h('b', {}, it.read)) : null,
    it.kind === 'verb' ? (() => { const f = SS && SS.cfg && SS.cfg.focus, k = (f === 'nai' || f === 'ta') ? f : 'te'; return h('div', { class: 'readings' }, h('span', {}, 'Grupo ' + it.grp + ' · forma ' + { te: 'て', nai: 'ない', ta: 'た' }[k]), h('b', {}, it[k] + ' (' + it[k + 'Kana'] + ')')); })() : null,
    S.settings.romaji || it.kind === 'kana' ? h('div', { class: 'rom' }, it.rom) : null,
    it.kind === 'kana' ? null : h('div', { class: 'es' }, it.es),
    h('button', { class: 'speaker', onclick: () => speak(sayOf(it)), 'aria-label': 'Escuchar' }, '🔊'),
    it.note ? h('p', { class: 'mnemo' }, '💭 ' + it.note) : null,
    it.kind === 'phrase' ? h('p', { class: 'muted' }, 'Toca cada pieza para ver qué significa.') : null);
  body.append(card);
  setTimeout(() => speak(sayOf(it)), 150);
  foot.append(advance('¡Entendido!', () => { nextStep(); }));
}

// --- opción múltiple ---
const GOOD = ['¡Bien!', '¡Ippon!', '¡Eso es!', '¡Excelente!', '¡Perfecto!', '¡Muy bien!', '¡Que me elogies no me hace feliz, bobo! ♪', '¡Ippon! (¡no estoy contento, idiota!) ♪'];
function rMcq(spec, body, foot) {
  const q = h('div', { class: 'q' }, spec.question);
  let promptEl;
  if (spec.passageItem) { promptEl = h('div', { class: 'card passage-card' }, passageEl(spec.passageItem, false)); }
  else if (spec.listen) promptEl =h('button', { class: 'speaker huge', onclick: () => speak(spec.speak), 'aria-label': 'Escuchar' }, '🔊');
  else if (spec.phrase) promptEl = h('div', {}, glossBlock(spec.phrase), S.settings.romaji ? h('div', { class: 'rom' }, spec.phrase.rom) : null);
  else promptEl = h('div', { class: 'big-jp' + (spec.bigSmall ? ' sm' : '') }, spec.big, spec.sub ? h('div', { class: 'rom' }, spec.sub) : null);
  const opts = h('div', { class: 'opts' + (spec.options[0].jp ? ' jpopts' : '') });
  let locked = false;
  spec.options.forEach((o, i) => {
    const b = h('button', { class: 'opt' + (o.jp ? ' jp' : ''), 'data-i': i, onclick: () => choose(o, b) }, h('span', { class: 'num' }, i + 1), o.label);
    opts.append(b);
  });
  function choose(o, btn) {
    if (locked) return; locked = true;
    if (SS.cfg.exam) { opts.querySelectorAll('.opt').forEach(b => { b.disabled = true; }); btn.classList.add('picked'); grade(spec, o.correct); setTimeout(() => { SS.done++; nextStep(); }, 380); return; }
    opts.querySelectorAll('.opt').forEach((b, i) => { b.disabled = true; if (spec.options[i].correct) b.classList.add('right'); });
    if (!o.correct) btn.classList.add('wrong');
    grade(spec, o.correct);
    feedback(foot, o.correct, spec.answerText);
    if (o.correct && !spec.listen && !spec.phrase) { /* ya se oyó al mostrar */ }
    if (o.correct && spec.speakOnAnswer) speak(spec.speakOnAnswer);
  }
  body.append(q, promptEl, opts);
  body._keys = e => { const n = +e.key; if (n >= 1 && n <= spec.options.length && !locked) opts.children[n - 1].click(); };
  curKeys = body._keys;
  if (spec.speak && !spec.speakOnAnswer) setTimeout(() => speak(spec.speak), 200);
}

// --- ordenar piezas ---
function rTiles(spec, body, foot) {
  const ans = h('div', { class: 'answer' }), bank = h('div', { class: 'bank' });
  const chosen = [];
  const mk = t => {
    const b = h('button', { class: 'tile', onclick: () => {
      if (b.parentNode === bank) { ans.append(b); chosen.push(t[0]); } else { bank.append(b); chosen.splice(chosen.indexOf(t[0]), 1); }
      sfx.tap(); check.disabled = !chosen.length;
    } }, t[0], (S.settings.romaji && !EXAM()) ? h('small', {}, t[1]) : null);
    return b;
  };
  spec.tokens.forEach(t => bank.append(mk(t)));
  const check = h('button', { class: 'btn primary', disabled: '', onclick: () => {
    const ok = chosen.join('|') === spec.answer.join('|');
    ans.querySelectorAll('.tile').forEach(b => b.disabled = true); bank.querySelectorAll('.tile').forEach(b => b.disabled = true);
    if (SS.cfg.exam) { grade(spec, ok); ans.classList.add('picked'); setTimeout(() => { SS.done++; nextStep(); }, 380); return; }
    ans.classList.add(ok ? 'right' : 'wrong');
    grade(spec, ok); feedback(foot, ok, spec.answerText); speak(spec.speak);
  } }, 'Comprobar');
  body.append(h('div', { class: 'q' }, spec.question), h('div', { class: 'big-jp sm' }, spec.big), ans, bank);
  foot.append(check);
  curKeys = e => { if (e.key === 'Enter' && !check.disabled && !foot.classList.contains('fb')) check.click(); };
}

// --- emparejar ---
function rMatch(step, body, foot) {
  const L = shuffle(step.pairs), R = shuffle(step.pairs);
  let sel = null, left = step.pairs.length;
  const colL = h('div', { class: 'col' }), colR = h('div', { class: 'col' });
  const mk = (p, side, col) => {
    const b = h('button', { class: 'mt ' + (side === 'l' ? 'jp' : ''), onclick: () => {
      if (b.classList.contains('gone')) return;
      if (!sel) { sel = { p, side, b }; b.classList.add('sel'); sfx.tap(); return; }
      if (sel.side === side) { sel.b.classList.remove('sel'); sel = { p, side, b }; b.classList.add('sel'); sfx.tap(); return; }
      if (sel.p.id === p.id) {
        [sel.b, b].forEach(x => { x.classList.remove('sel'); x.classList.add('gone'); }); sfx.pair(); sel = null; left--;
        if (!left) { SS.xp += 10; setTimeout(() => { SS.done++; nextStep(); }, 450); }
      } else {
        SS.wrong.add(sel.p.id); SS.wrong.add(p.id); sfx.bad();
        const a = sel.b; a.classList.remove('sel'); a.classList.add('shake'); b.classList.add('shake');
        setTimeout(() => { a.classList.remove('shake'); b.classList.remove('shake'); }, 400); sel = null;
      }
    } }, side === 'l' ? p.l : p.r);
    col.append(b);
  };
  L.forEach(p => mk(p, 'l', colL)); R.forEach(p => mk(p, 'r', colR));
  body.append(h('div', { class: 'q' }, 'Une las parejas'), h('div', { class: 'matchgrid' }, colL, colR));
  curKeys = null;
}

// --- calificación ---
let curKeys = null;
function grade(spec, ok) {
  if (SS.cfg.exam) { const c = (SS.cat[spec.cat] = SS.cat[spec.cat] || { r: 0, t: 0 }); c.t++; SS.tries++; if (ok) { c.r++; SS.right++; } else { if (spec.itemId) SS.wrong.add(spec.itemId); SS.missed.push({ cat: spec.cat, id: spec.itemId, q: (spec.listen ? '🔊 ' : '') + (spec.big || spec.question), a: spec.answerText }); } return; }
  maybeCameo(ok);
  SS.tries++;
  if (ok) { SS.right++; SS.combo++; SS.maxCombo = Math.max(SS.maxCombo, SS.combo); SS.xp += spec.retry ? 4 : 10; sfx.ok(); }
  else {
    SS.combo = 0; sfx.bad();
    if (!spec.retry) { SS.wrong.add(spec.itemId); SS.queue.splice(Math.min(3, SS.queue.length), 0, { itemId: spec.itemId, make: spec.src.make, retry: true }); SS.retried++; }
  }
  const c = $('.combo'); if (c) { c.textContent = SS.combo >= 2 ? `🔥 ×${SS.combo}` : ''; c.classList.toggle('hot', SS.combo >= 3); if (ok) { c.classList.remove('pop'); void c.offsetWidth; c.classList.add('pop'); } }
}
function feedback(foot, ok, answerText) {
  foot.replaceChildren(); foot.className = 'foot fb ' + (ok ? 'ok' : 'bad');
  foot.append(h('div', { class: 'msg' }, ok ? h('b', {}, pick(GOOD)) : [h('b', {}, 'Casi. Se dice:'), h('div', { class: 'ans' }, answerText), h('small', {}, 'Volverá a salir enseguida.')]),
    advance('Continuar'));
  curKeys = e => { if (e.key === 'Enter') foot.querySelector('.btn').click(); };
}
document.addEventListener('keydown', e => { if (SS && curKeys) curKeys(e); });

// ===================== fin de sesión =====================
function finishSession() {
  if (SS.cfg.exam) return finishExam();
  const cfg = SS.cfg, before = rankIdx(S.xp);
  const perfect = SS.wrong.size === 0;
  const bonus = 20 + (perfect ? 10 : 0);
  const gain = SS.xp + bonus;
  if (cfg.mode !== 'free') cfg.itemIds.forEach(id => applyResult(id, !SS.wrong.has(id)));
  if (cfg.mode === 'free') cfg.itemIds.forEach(id => { /* la práctica libre no altera el calendario */ });
  S.xp += gain;
  const today = dayKey(Date.now()); if (!S.days.includes(today)) S.days.push(today);
  if (cfg.lessonId) S.done[cfg.lessonId] = (S.done[cfg.lessonId] || 0) + 1;
  save();
  const after = rankIdx(S.xp), up = after > before;
  const acc = SS.tries ? Math.round(SS.right / SS.tries * 100) : 100;
  const res = { gain, acc, maxCombo: SS.maxCombo, perfect, up, rank: RANKS[after], cfg, chest: cfg.mode !== 'free' };
  SS = null; sfx.win(); confetti(); renderResults(res);
}
function renderResults(r) {
  const wrap = h('div', { class: 'session results' },
    h('div', { class: 'body center' },
      mascot(8, 'bob', r.up ? 'dance' : 'cheer'),
      h('h1', {}, r.perfect ? '¡Ippon perfecto!' : '¡Lección completada!'),
      h('p', { class: 'muted' }, r.cfg.title),
      h('div', { class: 'stats' }, stat('⭐', '+' + r.gain, 'XP'), stat('🎯', r.acc + '%', 'precisión'), stat('🔥', '×' + r.maxCombo, 'mejor combo')),
      r.up ? h('div', { class: 'rankup' }, '🎌 ¡Nuevo rango! ', h('b', {}, `${r.rank.jp} · ${r.rank.name}`)) : null,
      r.chest ? chestEl() : null),
    h('div', { class: 'foot' }, h('button', { class: 'btn primary', onclick: () => go('home') }, 'Volver al camino')));
  show(wrap, false);
  if (r.up) setTimeout(() => confetti(60), 600);
}
function chestEl() {
  const box = h('div', { class: 'chestbox' });
  const btn = h('button', { class: 'chest', onclick: open }, '🎁', h('small', {}, 'Toca para abrir tu cofre'));
  function open() {
    btn.onclick = null; sfx.chest(); btn.classList.add('opening');
    const free = TREASURES.map((t, i) => i).filter(i => !S.collection.includes(i));
    setTimeout(() => {
      if (free.length) {
        const i = pick(free); S.collection.push(i); save();
        box.replaceChildren(h('div', { class: 'reward' }, h('span', { class: 'big-emoji pop' }, TREASURES[i][0]), h('b', {}, '¡Nuevo tesoro!'), h('small', {}, TREASURES[i][1])));
      } else { S.xp += 15; save(); box.replaceChildren(h('div', { class: 'reward' }, h('span', { class: 'big-emoji pop' }, '💰'), h('b', {}, '+15 XP extra'), h('small', {}, '¡Ya tienes toda la colección!'))); }
      confetti(24);
    }, 700);
  }
  box.append(btn); return box;
}

const NUM_GROUPS = ['N11', 'N12', 'H1', 'H2', 'H3', 'CT1', 'CT2', 'CT3', 'M1', 'M2', 'D1', 'D2', 'D3', 'n1', 'n2', 'n3'];
const EXAM_TIPS = {
  'Kana': 'Repasa los caracteres que has fallado, sobre todo los que se parecen (シ/ツ, ソ/ン, ぬ/め). La práctica corta y diaria funciona mejor que una sesión larga.',
  'Vocabulario': 'Tus palabras falladas ya están en tu Repaso. Léelas también en contexto con las lecturas de la biblioteca.',
  'Kanji': 'Fíjate en cada kanji dentro de palabras (no suelto) y repasa sus lecturas on / kun.',
  'Números y fechas': 'Números, horas y fechas tienen muchas irregularidades: repite esas lecciones y escucha bien el audio.',
  'Gramática': 'Repite las lecciones de partículas (は, が, を, に, で…) y relee las notas de gramática. Las lecturas ayudan mucho.',
  'Verbos': 'Practica la regla de cada grupo para las formas て, ない y た. Vuelve a las lecciones de «trampas».',
  'Lectura': 'Lee más textos de la biblioteca y toca las piezas para ver su significado antes de contestar.',
  'Escucha': 'Escucha el audio de frases y lecturas varias veces y repítelas en voz alta.'
};

// --- más tipos de pregunta para el examen ---
E.r2k = it => ({ itemId: it.id, make: () => ({ type: 'mcq', question: 'Elige el carácter que suena así', big: it.rom, bigSmall: true, options: mcqOptions(it, 'jp', true), answerText: it.jp, speakOnAnswer: it.jp }) });
E.group = it => ({ itemId: it.id, make: () => ({ type: 'mcq', question: '¿De qué grupo es este verbo?', big: it.jp, sub: it.es, speak: sayOf(it),
  options: [1, 2, 3].map(g => ({ key: 'g' + g, label: 'Grupo ' + g + (g === 1 ? ' (godan)' : g === 2 ? ' (ichidan)' : ' (irregular)'), correct: g === it.grp })), answerText: 'Grupo ' + it.grp + (it.grp === 1 ? ' (godan)' : it.grp === 2 ? ' (ichidan)' : ' (irregular)') }) });
// «¿Qué frase es correcta?»: una buena y tres con un error de partícula u orden
function fixVariants(t) {
  const v = new Set(), right = t.join(' ');
  for (let i = 1; i < t.length - 1; i++) { const c = t.slice(); [c[i], c[i + 1]] = [c[i + 1], c[i]]; v.add(c.join(' ')); }
  const REP = { 'は': ['を', 'に', 'の'], 'を': ['に', 'で', 'の'], 'に': ['を', 'の'], 'で': ['を', 'の'], 'の': ['を', 'で'], 'が': ['を', 'の'], 'も': ['を', 'の'] };
  t.forEach((x, i) => { (REP[x] || []).forEach(p => { const c = t.slice(); c[i] = p; v.add(c.join(' ')); });
    if (REP[x] && x !== 'は' && x !== 'も' && x !== 'が' && t.length > 3) { const c = t.slice(); c.splice(i, 1); v.add(c.join(' ')); } });
  v.delete(right); return [...v];
}
E.fix = it => {
  if (!it.tokens || it.tokens.length < 3) return null;
  const t = it.tokens.map(x => x[0]); if (fixVariants(t).length < 3) return null;
  return { itemId: it.id, make: () => {
    const right = t.join(' '), wrong = shuffle(fixVariants(t)).slice(0, 3);
    return { type: 'mcq', question: '¿Qué frase es correcta?', big: it.es, bigSmall: true,
      options: shuffle([right, ...wrong]).map((s, k) => ({ key: 'f' + k, label: s, correct: s === right })), answerText: right };
  } };
};

// ===================== examen de nivel =====================
function startExam(scope) {
  const pool = scope === 'learned' ? learnedIds().map(id => ITEMS[id]) : Object.values(ITEMS);
  const by = f => shuffle(pool.filter(f)), take = (a, n) => a.slice(0, n), steps = [];
  const add = (cat, items, mk) => items.forEach(it => { const ex = mk(it); if (ex) steps.push(Object.assign({}, ex, { cat })); });
  const isNum = i => NUM_GROUPS.includes(i.group);
  add('Kana', take(by(i => i.kind === 'kana'), 8), it => pick([E.k2r, E.listenKana, E.r2k])(it));
  add('Vocabulario', take(by(i => i.kind === 'word' && !i.kana && !isNum(i)), 9), it => pick([E.w2es, E.es2jp, E.listenWord])(it));
  add('Kanji', [...take(by(i => i.kind === 'kanji'), 4), ...take(by(i => i.kind === 'word' && i.kana && !isNum(i)), 4)],
    it => it.kind === 'kanji' ? pick([E.kmean, E.kfrom, E.kread])(it) : pick([E.reading, E.w2es])(it));
  add('Números y fechas', take(by(isNum), 5), it => pick([E.reading, E.listenWord, E.w2es])(it));
  const ph = by(i => i.kind === 'phrase' && i.tokens.length > 1);
  add('Gramática', take(ph, 5), E.gap);
  add('Gramática', take(ph.slice(5), 4), it => E.fix(it) || E.gap(it));
  add('Gramática', take(ph.slice(9), 2), E.tiles);
  let vi = 0; const vk = ['te', 'nai', 'group', 'ta', 'readNai', 'te', 'ta'];
  add('Verbos', take(by(i => i.kind === 'verb'), 7), it => { const k = vk[vi++ % vk.length];
    return k === 'te' ? E.conj(it) : k === 'group' ? E.group(it) : k === 'readNai' ? E.formRead(it, 'nai') : E.conjForm(it, k); });
  add('Lectura', take(by(i => i.kind === 'text'), 4), it => E.q(it, pick(it.qs)));
  add('Escucha', take(by(i => i.kind === 'phrase'), 3), E.listenPhrase);
  add('Escucha', take(by(i => i.kind === 'word' && i.kana), 2), E.listenWord);
  if (steps.length < 12) { alert('Aún no has estudiado lo suficiente para un examen con tu avance. Prueba «Todo el curso».'); return; }
  runSession({ title: scope === 'learned' ? 'Examen: lo que has estudiado' : 'Examen: todo el curso', steps, itemIds: [], mode: 'exam', exam: true, scope });
}
function finishExam() {
  const cfg = SS.cfg; let r = 0, t = 0;
  Object.values(SS.cat).forEach(c => { r += c.r; t += c.t; });
  const pct = t ? Math.round(r / t * 100) : 0, cats = Object.entries(SS.cat).map(([k, c]) => [k, Math.round(c.r / c.t * 100), c.r, c.t]);
  const missed = SS.missed.slice();
  SS.wrong.forEach(id => { if (S.srs[id]) applyResult(id, false); }); // lo fallado vuelve al repaso (solo si ya lo habías estudiado)
  const prev = (S.exams || []).filter(e => e.scope === cfg.scope).slice(-1)[0];
  S.exams = (S.exams || []).concat({ d: Date.now(), scope: cfg.scope, pct, cats: Object.fromEntries(cats.map(c => [c[0], c[1]])), missed: [...new Set(missed.map(m => m.id).filter(Boolean))].slice(0, 30) }).slice(-10);
  const gain = r * 2; S.xp += gain;
  const today = dayKey(Date.now()); if (!S.days.includes(today)) S.days.push(today);
  save(); SS = null; sfx.win(); confetti(40);
  renderExamResults({ pct, cats, r, t, gain, scope: cfg.scope, missed, prev: prev ? prev.pct : null });
}
function startFixes(ids) {
  const items = ids.filter(i => ITEMS[i]).slice(0, 12).map(i => ITEMS[i]);
  if (!items.length) return;
  runSession({ title: 'Repaso de tus errores', steps: shuffle(items.flatMap(it => exercisesFor(it, 'review'))), itemIds: items.map(i => i.id), mode: 'review' });
}
function renderExamResults(x) {
  const verdict = x.pct >= 85 ? '¡N5 casi dominado! Estás listo para empezar el N4.'
    : x.pct >= 65 ? 'A1 / N5 sólido: estás cerca de dominar este nivel.'
    : x.pct >= 40 ? 'A1 en marcha: vas bien. Refuerza tus puntos débiles.' : 'Estás construyendo la base: sigue con las lecciones y el repaso.';
  const weak = [...x.cats].sort((a, b) => a[1] - b[1]).filter(c => c[1] < 75).slice(0, 3);
  const ids = [...new Set(x.missed.map(m => m.id).filter(Boolean))];
  // lecciones donde aparecen tus errores, las más repetidas primero
  const cnt = {}; ids.forEach(id => { const l = Object.values(LESSON_BY_ID).find(l => l.items.includes(id)); if (l) cnt[l.id] = (cnt[l.id] || 0) + 1; });
  const lessons = Object.entries(cnt).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([id, n]) => [LESSON_BY_ID[id], n]);
  const byCat = {}; x.missed.forEach(m => { (byCat[m.cat] = byCat[m.cat] || []).push(m); });
  const delta = x.prev == null ? null : x.pct - x.prev;
  const wrap = h('div', { class: 'session results' },
    h('div', { class: 'body' },
      h('div', { class: 'center' }, mascot(6, 'bob', x.pct >= 65 ? 'dance' : 'cheer'), h('h1', {}, x.pct + ' %'),
        h('p', { class: 'muted' }, x.r + ' de ' + x.t + ' correctas · ' + (x.scope === 'learned' ? 'sobre lo que has estudiado' : 'sobre todo el curso')),
        delta == null ? null : h('p', { class: delta >= 0 ? 'delta up' : 'delta' }, (delta >= 0 ? '▲ +' : '▼ ') + delta + ' puntos respecto a tu último examen')),
      h('div', { class: 'card' }, h('b', {}, verdict), h('p', { class: 'muted' }, 'Es una orientación: el examen real (JLPT N5) incluye audio de personas y más vocabulario.')),
      h('div', { class: 'card examrows' }, x.cats.map(c => h('div', { class: 'examrow' + (c[1] < 60 ? ' low' : '') }, h('span', {}, c[0]), h('div', { class: 'xpbar' }, h('i', { style: 'width:' + c[1] + '%' })), h('b', {}, c[1] + ' %')))),
      weak.length ? h('div', { class: 'card' }, h('b', {}, '🎯 Qué repasar'), weak.map(c => h('p', {}, h('b', {}, c[0] + ' (' + c[1] + ' %). '), EXAM_TIPS[c[0]]))) : h('div', { class: 'card' }, h('b', {}, '🎯 Todo por encima del 75 %'), h('p', { class: 'muted' }, 'No hay ningún bloque flojo. Sigue con las lecciones nuevas y el repaso.')),
      lessons.length ? h('div', { class: 'card' }, h('b', {}, '📖 Lecciones para repasar'), h('p', { class: 'muted' }, 'Donde aparecen tus errores:'),
        lessons.map(([l, n]) => h('button', { class: 'btn ghost', onclick: () => startLesson(l) }, l.icon + '  ' + l.title + '  ·  ' + n + (n === 1 ? ' error' : ' errores')))) : null,
      Object.keys(byCat).length ? h('div', { class: 'card' }, h('b', {}, '❌ Lo que has fallado'),
        Object.entries(byCat).map(([cat, list]) => h('details', {}, h('summary', {}, cat + ' (' + list.length + ')'),
          list.map(m => h('div', { class: 'missrow' }, h('span', { class: 'mq' }, m.q), h('span', { class: 'ma' }, '→ ' + m.a)))))) : null,
      h('p', { class: 'muted center' }, '+' + x.gain + ' XP')),
    h('div', { class: 'foot' },
      ids.length ? h('button', { class: 'btn primary', onclick: () => startFixes(ids) }, 'Repasar mis errores ahora') : null,
      h('button', { class: 'btn ghost', onclick: () => go('dojo') }, 'Volver al Dōjō')));
  show(wrap, false);
}

// ===================== arranque =====================
go('home');
// accesos rápidos del icono (mantener pulsado en Android)
({ '#repaso': () => go('review'), '#dojo': () => go('dojo'), '#lectura': () => randomReading() })[location.hash]?.();
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
