// Contenido del curso. Todo en un sitio para poder ampliarlo fácilmente.
// kind: 'kana' | 'word' | 'phrase'
const ITEMS = {};
function addItem(it) { ITEMS[it.id] = it; return it.id; }

// ---------- HIRAGANA ----------
const KANA = {
  a: [
    ['あ','a','Parece una persona con los brazos abiertos gritando «¡Aaa!» en pleno combate de kendo.'],
    ['い','i','Dos palitos verticales, como dos personas de pie: «ii» (dos «i»).'],
    ['う','u','Una «u» con un sombrero encima: «uuu».'],
    ['え','e','Un pájaro exótico con las alas abiertas: e-xótico.'],
    ['お','o','Una cabeza redonda (una «o») a la izquierda con un cuerpo cruzado: «¡Oh!» de sorpresa.']
  ],
  ka: [
    ['か','ka','«Ka» de karate: un golpe seco con el brazo.'],
    ['き','ki','Es una llave, «key» en inglés: se lee «ki».'],
    ['く','ku','Es el pico abierto de un cuco: «ku-ku».'],
    ['け','ke','Se lee como «qué» en español: ¿ke? Parece una persona que pregunta.'],
    ['こ','ko','Dos líneas apiladas, como dos «co»ntenedores uno sobre otro.']
  ],
  sa: [
    ['さ','sa','«Sa» de sable: un sable con su guarda.'],
    ['し','shi','Un anzuelo de pesca. Se lee como el «¡shhh!» de silencio.'],
    ['す','su','«Su» de sushi: un rollo de sushi con un rabito.'],
    ['せ','se','Se lee «se» como en «sé». Una persona con un cinturón de kendo.'],
    ['そ','so','Una soga en zigzag: «so»ga.']
  ],
  ta: [
    ['た','ta','Parece las letras «t» y «a» pegadas: «ta».'],
    ['ち','chi','Un número 5 con cola. Se lee «chi» como en «chico».'],
    ['つ','tsu','Una ola que llega a la orilla: «tsu»nami.'],
    ['て','te','Un dedo señalando: «te» señalo a ti.'],
    ['と','to','Un dedo del pie (toe) con una espina clavada: «to».']
  ],
  na: [
    ['な','na','Una persona arrodillada en seiza (como en kendo) rezando por «na»da.'],
    ['に','ni','Una «l» con dos rayitas: «ni» de «ni»ño.'],
    ['ぬ','nu','Un lazo con un nudo atado: «nu»do.'],
    ['ね','ne','Un gato enroscado: «ne»ko = gato.'],
    ['の','no','Una espiral como una señal de prohibido: ¡«no»!'],
    ['ん','n','La «n» sola al final de sílaba. Parece una «h» inclinada.']
  ],
  ha: [
    ['は','ha','Una persona riéndose: «¡ja, ja!». Como partícula se lee «wa».'],
    ['ひ','hi','Una sonrisa de oreja a oreja: «hi, hi». Suena como una «j» suave + i.'],
    ['ふ','fu','El monte Fuji con una nube: «Fu»ji. Suena entre «fu» y «ju», soplando suave.'],
    ['へ','he','Una colina o monte: «¡hé, mira esa colina!». Como partícula se lee «e».'],
    ['ほ','ho','Papá Noel con su barriga: «¡ho, ho, ho!».']
  ],
  ma: [
    ['ま','ma','Una mamá abrazando a su hijo: «ma»má.'],
    ['み','mi','Parece el número 21, mi número de la suerte: «mi».'],
    ['む','mu','Una vaca con su cola enroscada: «muuu».'],
    ['め','me','Un ojo con pestañas (目 «me» significa ojo): «me» miro en el espejo.'],
    ['も','mo','Dos moscas en un anzuelo: «mo»scas.']
  ],
  ya: [
    ['や','ya','Un yak con cuernos y rabo: «ya»k.'],
    ['ゆ','yu','Un pez en un cuenco de agua caliente (湯 «yu» = agua caliente).'],
    ['よ','yo','Una persona que se señala con un palo: «¡yo!».']
  ],
  ra: [
    ['ら','ra','Una «ra»na saltando.'],
    ['り','ri','Dos líneas como las dos orillas de un «rí»o.'],
    ['る','ru','Una «ru»ta con una rotonda al final.'],
    ['れ','re','Una persona con las piernas dobladas, «re»lajada. Parece な y ね: ¡atento al giro!'],
    ['ろ','ro','Una «ro»sca (tornillo) que gira; un 3 con el trazo abierto.']
  ],
  wa: [
    ['わ','wa','Una persona con los brazos arriba: «¡wa, guau!». Parece れ pero sin el rizo final.'],
    ['を','o','Marca el objeto de la frase. Se escribe «wo» pero se pronuncia «o». Solo se usa como partícula.','k_wo']
  ],
  ga: [
    ['が','ga','か + ゛ = «ga» como «gato».'],
    ['ぎ','gi','き + ゛ = «gi» como «gi»gante (con g suave de «guitarra»).'],
    ['ぐ','gu','く + ゛ = «gu» como «gu»sano.'],
    ['げ','ge','け + ゛ = «ge» como «gue»rra.'],
    ['ご','go','こ + ゛ = «go» como «go»rro.']
  ],
  za: [
    ['ざ','za','さ + ゛ = «za» como «za»patilla (con z suave, casi «dza»).'],
    ['じ','ji','し + ゛ = «ji» como «yi» fuerte, casi «dyi».'],
    ['ず','zu','す + ゛ = «zu» como «zu»mo.'],
    ['ぜ','ze','せ + ゛ = «ze» como «ze»bra.'],
    ['ぞ','zo','そ + ゛ = «zo» como «zo»rro.']
  ],
  da: [
    ['だ','da','た + ゛ = «da» como «da»do.'],
    ['で','de','て + ゛ = «de» como «de»do.'],
    ['ど','do','と + ゛ = «do» como «do»nde.']
  ],
  ba: [
    ['ば','ba','は + ゛ = «ba» como «ba»lón.'],
    ['び','bi','ひ + ゛ = «bi» como «bi»cicleta.'],
    ['ぶ','bu','ふ + ゛ = «bu» como «bu»ho.'],
    ['べ','be','へ + ゛ = «be» como «be»bé.'],
    ['ぼ','bo','ほ + ゛ = «bo» como «bo»tella.']
  ],
  pa: [
    ['ぱ','pa','は + ゜ = «pa» como «pa»pá. El círculo (゜) es el handakuten.'],
    ['ぴ','pi','ひ + ゜ = «pi» como «pi»ña.'],
    ['ぷ','pu','ふ + ゜ = «pu» como «pu»erta.'],
    ['ぺ','pe','へ + ゜ = «pe» como «pe»lo.'],
    ['ぽ','po','ほ + ゜ = «po» como «po»llo.']
  ]
};
// Sonidos combinados: kana + ゃ/ゅ/ょ pequeño = UNA sílaba.
const COMBOS = [
  ['き','ky',['kya','kyu','kyo']], ['し','sh',['sha','shu','sho']], ['ち','ch',['cha','chu','cho']],
  ['に','ny',['nya','nyu','nyo']], ['ひ','hy',['hya','hyu','hyo']], ['み','my',['mya','myu','myo']],
  ['り','ry',['rya','ryu','ryo']], ['ぎ','gy',['gya','gyu','gyo']], ['じ','j',['ja','ju','jo']],
  ['び','by',['bya','byu','byo']], ['ぴ','py',['pya','pyu','pyo']]
];
COMBOS.forEach(([base, g, roms]) => ['ゃ','ゅ','ょ'].forEach((s, i) =>
  (KANA[g] = KANA[g] || []).push([base + s, roms[i], `${base} + ${s} = «${roms[i]}» en una sola sílaba.`])));
Object.entries(KANA).forEach(([g, list]) => list.forEach(([jp, rom, note, id]) =>
  addItem({ id: id || 'k_' + rom, kind: 'kana', group: g, jp, rom, es: rom.toUpperCase(), note })));

// ---------- PALABRAS ----------
function W(id, jp, rom, es, group) { addItem({ id: 'w_' + id, kind: 'word', group, jp, rom, es }); }
W('ai', 'あい', 'ai', 'amor', 'w1');
W('ie', 'いえ', 'ie', 'casa', 'w1');
W('ao', 'あお', 'ao', 'azul', 'w1');
W('aka', 'あか', 'aka', 'rojo', 'w1');
W('kao', 'かお', 'kao', 'cara', 'w1');
W('eki', 'えき', 'eki', 'estación', 'w1');

W('sushi', 'すし', 'sushi', 'sushi', 'w2');
W('sake', 'さけ', 'sake', 'sake (licor de arroz)', 'w2');
W('sakana', 'さかな', 'sakana', 'pescado', 'w2');
W('neko', 'ねこ', 'neko', 'gato', 'w2');
W('inu', 'いぬ', 'inu', 'perro', 'w2');
W('tsuki', 'つき', 'tsuki', 'luna', 'w2');

W('ohayou', 'おはよう', 'ohayō', 'buenos días', 'p1');
W('konnichiwa', 'こんにちは', 'konnichiwa', 'hola / buenas tardes', 'p1');
W('konbanwa', 'こんばんは', 'konbanwa', 'buenas noches (al llegar)', 'p1');
W('arigatou', 'ありがとう', 'arigatō', 'gracias', 'p1');
W('hai', 'はい', 'hai', 'sí', 'p1');
W('iie', 'いいえ', 'iie', 'no', 'p1');

W('hito', 'ひと', 'hito', 'persona', 'p2');
W('sensei', 'せんせい', 'sensei', 'profesor/a', 'p2');
W('gakusei', 'がくせい', 'gakusei', 'estudiante / alumno/a', 'p2');
W('isha', 'いしゃ', 'isha', 'médico/a', 'p2');
W('bengoshi', 'べんごし', 'bengoshi', 'abogado/a', 'p2');

W('watashi', 'わたし', 'watashi', 'yo', 'p3');
W('anata', 'あなた', 'anata', 'tú', 'p3');
W('yasashii', 'やさしい', 'yasashii', 'amable', 'p3');
W('kakkoii', 'かっこいい', 'kakkoii', 'guay', 'p3');

W('hana', 'はな', 'hana', 'flor', 'w3');
W('fune', 'ふね', 'fune', 'barco', 'w3');
W('ame', 'あめ', 'ame', 'lluvia', 'w3');
W('kuma', 'くま', 'kuma', 'oso', 'w3');
W('hoshi', 'ほし', 'hoshi', 'estrella', 'w3');
W('namae', 'なまえ', 'namae', 'nombre', 'w3');

W('yama', 'やま', 'yama', 'montaña', 'w4');
W('sakura', 'さくら', 'sakura', 'flor de cerezo', 'w4');
W('yuki', 'ゆき', 'yuki', 'nieve', 'w4');
W('sora', 'そら', 'sora', 'cielo', 'w4');
W('katana', 'かたな', 'katana', 'katana (espada japonesa)', 'w4');
W('samurai', 'さむらい', 'samurai', 'samurái', 'w4');

W('gohan', 'ごはん', 'gohan', 'arroz cocido / comida', 'w5');
W('tomodachi', 'ともだち', 'tomodachi', 'amigo/a', 'w5');
W('kazoku', 'かぞく', 'kazoku', 'familia', 'w5');
W('sugoi', 'すごい', 'sugoi', 'increíble / impresionante', 'w5');
W('ongaku', 'おんがく', 'ongaku', 'música', 'w5');
W('zannen', 'ざんねん', 'zannen', 'qué pena', 'w5');

W('pan', 'ぱん', 'pan', 'pan', 'w6');
W('buta', 'ぶた', 'buta', 'cerdo', 'w6');
W('enpitsu', 'えんぴつ', 'enpitsu', 'lápiz', 'w6');
W('boku', 'ぼく', 'boku', 'yo (lo dicen los chicos)', 'w6');
W('denwa', 'でんわ', 'denwa', 'teléfono', 'w6');
W('sekai', 'せかい', 'sekai', 'mundo', 'w6');

W('kyou', 'きょう', 'kyō', 'hoy', 'w7');
W('ocha', 'おちゃ', 'ocha', 'té', 'w7');
W('gakkou', 'がっこう', 'gakkō', 'escuela', 'w7');
W('shashin', 'しゃしん', 'shashin', 'foto', 'w7');
W('ryouri', 'りょうり', 'ryōri', 'cocina / plato', 'w7');
W('chotto', 'ちょっと', 'chotto', 'un poco', 'w7');

W('kendou', 'けんどう', 'kendō', 'kendo (el camino de la espada)', 'w8');
W('ippon', 'いっぽん', 'ippon', 'ippon (punto en kendo)', 'w8');
W('shumi', 'しゅみ', 'shumi', 'afición', 'w8');
W('byouin', 'びょういん', 'byōin', 'hospital', 'w8');
W('juu', 'じゅう', 'jū', 'diez', 'w8');
W('nihon', 'にほん', 'nihon', 'Japón', 'w8');

// ---------- NÚMEROS, COMIDA Y GRAMÁTICA (palabras) ----------
function WN(id, jp, rom, es, group, note) { addItem({ id: 'w_' + id, kind: 'word', group, jp, rom, es, note }); }
WN('ichi', 'いち', 'ichi', 'uno (1)', 'n1');
WN('ni', 'に', 'ni', 'dos (2)', 'n1');
WN('san', 'さん', 'san', 'tres (3)', 'n1');
WN('yon', 'よん', 'yon', 'cuatro (4)', 'n1', 'También se dice し (shi), pero suena a «muerte» (死), así que casi siempre se usa よん.');
WN('go', 'ご', 'go', 'cinco (5)', 'n1');
WN('roku', 'ろく', 'roku', 'seis (6)', 'n2');
WN('nana', 'なな', 'nana', 'siete (7)', 'n2', 'También se dice しち (shichi), pero se confunde con いち; por eso なな es lo más común.');
WN('hachi', 'はち', 'hachi', 'ocho (8)', 'n2');
WN('kyuu', 'きゅう', 'kyū', 'nueve (9)', 'n2');
ITEMS.w_juu.es = 'diez (10)'; ITEMS.w_juu.group = 'n2';
WN('hitotsu', 'ひとつ', 'hitotsu', 'uno (cosas)', 'n3', 'Para contar cosas sueltas: ひとつ, ふたつ, みっつ… (1, 2, 3).');
WN('futatsu', 'ふたつ', 'futatsu', 'dos (cosas)', 'n3');
WN('mittsu', 'みっつ', 'mittsu', 'tres (cosas)', 'n3', 'La っ pequeña dobla la «t»: mit-tsu.');
WN('ikutsu', 'いくつ', 'ikutsu', '¿cuántos?', 'n3');
WN('kudasai', 'ください', 'kudasai', 'por favor / deme', 'n3', 'Para pedir algo: «[cosa] を ください».');

WN('ramen', 'らーめん', 'rāmen', 'ramen', 'f1', 'La rayita ー alarga la vocal («raa»). Normalmente se escribe en katakana (ラーメン), que veremos más adelante.');
WN('onigiri', 'おにぎり', 'onigiri', 'onigiri (bola de arroz)', 'f1');
WN('tamago', 'たまご', 'tamago', 'huevo', 'f1');
WN('niku', 'にく', 'niku', 'carne', 'f1');
WN('yasai', 'やさい', 'yasai', 'verdura', 'f1');
WN('mizu', 'みず', 'mizu', 'agua', 'f1');
WN('oishii', 'おいしい', 'oishii', 'rico / delicioso', 'f2');
WN('karai', 'からい', 'karai', 'picante', 'f2');
WN('amai', 'あまい', 'amai', 'dulce', 'f2');
WN('atsui', 'あつい', 'atsui', 'caliente', 'f2');
WN('tsumetai', 'つめたい', 'tsumetai', 'frío', 'f2');
WN('suki', 'すき', 'suki', 'gustar / favorito', 'f2', 'すき です = «me gusta». Lo que te gusta va con が.');

WN('kore', 'これ', 'kore', 'esto (cerca de mí)', 'g1');
WN('sore', 'それ', 'sore', 'eso (cerca de ti)', 'g1');
WN('are', 'あれ', 'are', 'aquello (lejos)', 'g1');
WN('nan', 'なん', 'nan', 'qué', 'g1');
WN('hon', 'ほん', 'hon', 'libro', 'g1');
WN('kuruma', 'くるま', 'kuruma', 'coche', 'g1');
WN('ookii', 'おおきい', 'ōkii', 'grande', 'g2', 'Los adjetivos que acaban en い se llaman «adjetivos い».');
WN('chiisai', 'ちいさい', 'chiisai', 'pequeño', 'g2');
WN('atarashii', 'あたらしい', 'atarashii', 'nuevo', 'g2');
WN('furui', 'ふるい', 'furui', 'viejo (cosas)', 'g2');
WN('takai', 'たかい', 'takai', 'alto / caro', 'g2');
WN('yasui', 'やすい', 'yasui', 'barato', 'g2');

// ---------- FRASES ----------
// tokens: [texto, romaji, significado]
function P(id, es, tokens, extra) {
  addItem({
    id: 'p_' + id, kind: 'phrase', group: 'p4', es,
    jp: tokens.map(t => t[0]).join('') + '。', say: tokens.map(t => t[3] || t[0]).join(''),
    rom: tokens.map(t => t[1]).join(' '),
    tokens, extra: extra || []
  });
}
const T_WATASHI = ['わたし', 'watashi', 'yo'], T_WA = ['は', 'wa', '(partícula del tema)'], T_DESU = ['です', 'desu', 'ser / soy / es'];
P('ken', 'Soy Ken.', [T_WATASHI, T_WA, ['けん', 'Ken', 'Ken'], T_DESU]);
P('sensei', 'Soy profesor.', [T_WATASHI, T_WA, ['せんせい', 'sensei', 'profesor/a'], T_DESU]);
P('gakusei', 'Soy alumno.', [T_WATASHI, T_WA, ['がくせい', 'gakusei', 'alumno/a'], T_DESU]);
P('isha', 'Soy médico.', [T_WATASHI, T_WA, ['いしゃ', 'isha', 'médico/a'], T_DESU]);
P('bengoshi', 'Soy abogado.', [T_WATASHI, T_WA, ['べんごし', 'bengoshi', 'abogado/a'], T_DESU]);
P('yasashii', 'Eres amable.', [['あなた', 'anata', 'tú'], T_WA, ['やさしい', 'yasashii', 'amable'], T_DESU]);

// --- frases de comida, preguntas y gramática ---
const T_WO = ['を', 'o', '(partícula: lo que pides / el objeto)'], T_GA = ['が', 'ga', '(partícula: lo que te gusta)'],
  T_MO = ['も', 'mo', 'también'], T_NO = ['の', 'no', 'de (posesión)'], T_KA = ['か', 'ka', '(convierte en pregunta)'],
  T_KUDA = ['ください', 'kudasai', 'por favor / deme'], T_JA = ['じゃ', 'ja', '(parte de «no es»)'], T_ARIMASEN = ['ありません', 'arimasen', 'no hay / no es'],
  T_KORE = ['これ', 'kore', 'esto'], T_SORE = ['それ', 'sore', 'eso'], T_ARE = ['あれ', 'are', 'aquello'], T_ANATA = ['あなた', 'anata', 'tú'],
  T_HON = ['ほん', 'hon', 'libro'], T_KURUMA = ['くるま', 'kuruma', 'coche'], T_RAMEN = ['らーめん', 'rāmen', 'ramen'], T_SUSHI = ['すし', 'sushi', 'sushi'],
  T_OCHA = ['おちゃ', 'ocha', 'té'], T_SUKI = ['すき', 'suki', 'gustar'];
P('mizu', 'Agua, por favor.', [['みず', 'mizu', 'agua'], T_WO, T_KUDA]);
P('ramen1', 'Un ramen, por favor.', [T_RAMEN, T_WO, ['ひとつ', 'hitotsu', 'uno'], T_KUDA]);
P('sushi2', 'Dos sushi, por favor.', [T_SUSHI, T_WO, ['ふたつ', 'futatsu', 'dos'], T_KUDA]);
P('ocha3', 'Tres tés, por favor.', [T_OCHA, T_WO, ['みっつ', 'mittsu', 'tres'], T_KUDA]);
P('onigiri1', 'Un onigiri, por favor.', [['おにぎり', 'onigiri', 'onigiri'], T_WO, ['ひとつ', 'hitotsu', 'uno'], T_KUDA]);
P('suki_ramen', 'Me gusta el ramen.', [T_WATASHI, T_WA, T_RAMEN, T_GA, T_SUKI, T_DESU]);
P('suki_sushi', 'Me gusta el sushi.', [T_WATASHI, T_WA, T_SUSHI, T_GA, T_SUKI, T_DESU]);
P('sushi_mo', 'El sushi también me gusta.', [T_SUSHI, T_MO, T_SUKI, T_DESU]);
P('ramen_oishii', 'El ramen está rico.', [T_RAMEN, T_WA, ['おいしい', 'oishii', 'rico'], T_DESU]);
P('ramen_karai', 'El ramen está picante.', [T_RAMEN, T_WA, ['からい', 'karai', 'picante'], T_DESU]);
P('ocha_tsumetai', 'El té está frío.', [T_OCHA, T_WA, ['つめたい', 'tsumetai', 'frío'], T_DESU]);

P('kore_hon_ka', '¿Esto es un libro?', [T_KORE, T_WA, T_HON, T_DESU, T_KA]);
P('kore_nan_ka', '¿Qué es esto?', [T_KORE, T_WA, ['なん', 'nan', 'qué'], T_DESU, T_KA]);
P('are_kuruma_ka', '¿Aquello es un coche?', [T_ARE, T_WA, T_KURUMA, T_DESU, T_KA]);
P('anata_gakusei_ka', '¿Eres estudiante?', [T_ANATA, T_WA, ['がくせい', 'gakusei', 'estudiante'], T_DESU, T_KA]);
P('sore_nan_ka', '¿Qué es eso?', [T_SORE, T_WA, ['なん', 'nan', 'qué'], T_DESU, T_KA]);
P('hai_hon', 'Sí, esto es un libro.', [['はい', 'hai', 'sí'], T_KORE, T_WA, T_HON, T_DESU]);
P('iie_hon', 'No, esto no es un libro.', [['いいえ', 'iie', 'no'], T_KORE, T_WA, T_HON, T_JA, T_ARIMASEN]);
P('sensei_nai', 'No soy profesor.', [T_WATASHI, T_WA, ['せんせい', 'sensei', 'profesor'], T_JA, T_ARIMASEN]);
P('bengoshi_nai', 'No soy abogado.', [T_WATASHI, T_WA, ['べんごし', 'bengoshi', 'abogado'], T_JA, T_ARIMASEN]);
P('sore_kuruma_nai', 'Eso no es un coche.', [T_SORE, T_WA, T_KURUMA, T_JA, T_ARIMASEN]);
P('kore_watashi_hon', 'Esto es mi libro.', [T_KORE, T_WA, T_WATASHI, T_NO, T_HON, T_DESU]);
P('sore_anata_kuruma', 'Eso es tu coche.', [T_SORE, T_WA, T_ANATA, T_NO, T_KURUMA, T_DESU]);
P('kore_ken_hon', 'Esto es el libro de Ken.', [T_KORE, T_WA, ['けん', 'Ken', 'Ken'], T_NO, T_HON, T_DESU]);
P('are_watashi_ie', 'Aquello es mi casa.', [T_ARE, T_WA, T_WATASHI, T_NO, ['いえ', 'ie', 'casa'], T_DESU]);
P('tomodachi_ken', 'Soy amigo de Ken.', [T_WATASHI, T_WA, ['けん', 'Ken', 'Ken'], T_NO, ['ともだち', 'tomodachi', 'amigo'], T_DESU]);
P('hon_furui', 'El libro es viejo.', [T_HON, T_WA, ['ふるい', 'furui', 'viejo'], T_DESU]);
P('kuruma_atarashii', 'El coche es nuevo.', [T_KURUMA, T_WA, ['あたらしい', 'atarashii', 'nuevo'], T_DESU]);
P('kore_ookii', 'Esto es grande.', [T_KORE, T_WA, ['おおきい', 'ōkii', 'grande'], T_DESU]);
P('are_chiisai', 'Aquello es pequeño.', [T_ARE, T_WA, ['ちいさい', 'chiisai', 'pequeño'], T_DESU]);
P('ramen_yasui', 'El ramen es barato.', [T_RAMEN, T_WA, ['やすい', 'yasui', 'barato'], T_DESU]);
P('sushi_takai', 'El sushi es caro.', [T_SUSHI, T_WA, ['たかい', 'takai', 'caro'], T_DESU]);

// --- textos para leer: líneas de tokens + traducción + preguntas ---
// lines: [quién (opcional), tokens, traducción]; qs: [pregunta, opciones, índice correcto]
function TX(id, title, lines, qs) {
  addItem({ id: 't_' + id, kind: 'text', group: 'tx', title, lines: lines.map(l => ({ who: l[0], tokens: l[1], es: l[2] })), qs,
    jp: lines.map(l => l[1].map(t => t[0]).join('') + '。').join(''), rom: title, es: title });
}
const tk = (jp, rom, es) => [jp, rom, es];
TX('ken_gustos', 'Los gustos de Ken', [
  ['', [T_WATASHI, T_WA, tk('けん', 'Ken', 'Ken'), T_DESU], 'Soy Ken.'],
  ['', [T_WATASHI, T_WA, T_RAMEN, T_GA, T_SUKI, T_DESU], 'Me gusta el ramen.'],
  ['', [T_SUSHI, T_MO, T_SUKI, T_DESU], 'El sushi también me gusta.'],
  ['', [tk('なっとう', 'nattō', 'natto'), T_WA, T_SUKI, T_JA, T_ARIMASEN], 'El natto no me gusta.']
], [
  ['¿Qué le gusta a Ken?', ['El ramen', 'El natto', 'Ninguna cosa', 'El agua'], 0],
  ['¿Qué NO le gusta a Ken?', ['El ramen', 'El natto', 'El sushi', 'El té'], 1],
  ['¿Cómo se llama el que habla?', ['Ken', 'Sakura', 'Yuki', 'No lo dice'], 0]
]);
TX('restaurante', 'En el restaurante', [
  ['Camarero', [tk('いらっしゃいませ', 'irasshaimase', '¡bienvenido!')], '¡Bienvenido!'],
  ['Cliente', [T_RAMEN, T_WO, tk('ひとつ', 'hitotsu', 'uno'), T_KUDA], 'Un ramen, por favor.'],
  ['Camarero', [tk('はい', 'hai', 'sí')], 'Sí.'],
  ['Camarero', [T_OCHA, T_WA, tk('いかが', 'ikaga', '¿qué tal? / ¿quiere?'), T_DESU, T_KA], '¿Quiere té?'],
  ['Cliente', [tk('はい', 'hai', 'sí'), T_OCHA, T_MO, T_KUDA], 'Sí, té también, por favor.'],
  ['Camarero', [tk('ありがとう', 'arigatō', 'gracias'), tk('ございます', 'gozaimasu', '(forma educada)')], 'Muchas gracias.']
], [
  ['¿Qué pide el cliente primero?', ['Un ramen', 'Un sushi', 'Agua', 'Un onigiri'], 0],
  ['¿Qué le ofrece el camarero?', ['Té', 'Sake', 'Una cuenta', 'Postre'], 0],
  ['¿Qué responde el cliente a la oferta?', ['Que sí', 'Que no', 'Que se va', 'Nada'], 0]
]);
TX('mis_cosas', 'Mis cosas', [
  ['', [T_KORE, T_WA, T_WATASHI, T_NO, T_HON, T_DESU], 'Esto es mi libro.'],
  ['', [T_HON, T_WA, tk('ふるい', 'furui', 'viejo'), T_DESU], 'El libro es viejo.'],
  ['', [T_ARE, T_WA, T_KURUMA, T_DESU], 'Aquello es un coche.'],
  ['', [T_KURUMA, T_WA, tk('あたらしい', 'atarashii', 'nuevo'), T_DESU], 'El coche es nuevo.'],
  ['', [T_WATASHI, T_NO, T_KURUMA, T_JA, T_ARIMASEN], 'No es mi coche.']
], [
  ['¿Cómo es el libro?', ['Viejo', 'Nuevo', 'Grande', 'Caro'], 0],
  ['¿Cómo es el coche?', ['Nuevo', 'Viejo', 'Pequeño', 'Barato'], 0],
  ['¿El coche es de quien habla?', ['No', 'Sí', 'No lo dice', 'Es de Ken'], 0]
]);

// ---------- LECCIONES ----------
const UNITS = [
  { id: 'u1', title: 'Hiragana', sub: 'Tu primer alfabeto', lessons: [
    { id: 'l_a',  title: 'あ行', sub: 'Las vocales', icon: 'あ', items: ['k_a','k_i','k_u','k_e','k_o'] },
    { id: 'l_ka', title: 'か行', sub: 'Ka, ki, ku, ke, ko', icon: 'か', items: ['k_ka','k_ki','k_ku','k_ke','k_ko'] },
    { id: 'l_w1', title: 'Primeras palabras', sub: '¡Ya sabes leer!', icon: '読', items: ['w_ai','w_ie','w_ao','w_aka','w_kao','w_eki'] },
    { id: 'l_sa', title: 'さ行', sub: 'Sa, shi, su, se, so', icon: 'さ', items: ['k_sa','k_shi','k_su','k_se','k_so'] },
    { id: 'l_ta', title: 'た行', sub: 'Ta, chi, tsu, te, to', icon: 'た', items: ['k_ta','k_chi','k_tsu','k_te','k_to'] },
    { id: 'l_na', title: 'な行 + ん', sub: 'Na, ni, nu, ne, no, n', icon: 'な', items: ['k_na','k_ni','k_nu','k_ne','k_no','k_n'] },
    { id: 'l_w2', title: 'Sushi, sake y gatos', sub: 'Palabras con lo aprendido', icon: '🍣', items: ['w_sushi','w_sake','w_sakana','w_neko','w_inu','w_tsuki'] }
  ]},
  { id: 'u2', title: 'Presentaciones', sub: 'Saluda y preséntate', lessons: [
    { id: 'l_p1', title: 'Saludos', sub: 'Hola, gracias, sí, no', icon: '👋', items: ['w_ohayou','w_konnichiwa','w_konbanwa','w_arigatou','w_hai','w_iie'] },
    { id: 'l_p2', title: 'Personas y oficios', sub: 'Profesor, médico, abogado…', icon: '人', items: ['w_hito','w_sensei','w_gakusei','w_isha','w_bengoshi'] },
    { id: 'l_p3', title: 'Yo, tú y cómo eres', sub: 'Amable, guay…', icon: '私', items: ['w_watashi','w_anata','w_yasashii','w_kakkoii'] },
    { id: 'l_p4', title: 'Frases: «Soy…»', sub: 'Tu primera gramática', icon: '文', items: ['p_ken','p_sensei','p_gakusei','p_isha','p_bengoshi','p_yasashii'],
      note: {
        title: 'Cómo se construye',
        body: 'En japonés el verbo va al final y no se dice «ser» como en español.\n\n**わたし は けん です** = «Yo — (tema) — Ken — soy».\n\n• **は** se escribe «ha», pero cuando es partícula se lee **wa**.\n• **です** (desu) cierra la frase con educación.\n• Se escribe sin espacios; aquí los dejamos para que veas las piezas.'
      } }
  ]},
  { id: 'u3', title: 'Hiragana II', sub: 'Las filas que faltan', lessons: [
    { id: 'l_ha', title: 'は行', sub: 'Ha, hi, fu, he, ho', icon: 'は', items: ['k_ha','k_hi','k_fu','k_he','k_ho'] },
    { id: 'l_ma', title: 'ま行', sub: 'Ma, mi, mu, me, mo', icon: 'ま', items: ['k_ma','k_mi','k_mu','k_me','k_mo'] },
    { id: 'l_w3', title: 'Flores, osos y estrellas', sub: 'Más palabras para leer', icon: '🌸', items: ['w_hana','w_fune','w_ame','w_kuma','w_hoshi','w_namae'] },
    { id: 'l_ya', title: 'や行', sub: 'Ya, yu, yo', icon: 'や', items: ['k_ya','k_yu','k_yo'] },
    { id: 'l_ra', title: 'ら行', sub: 'Ra, ri, ru, re, ro', icon: 'ら', items: ['k_ra','k_ri','k_ru','k_re','k_ro'],
      note: { title: 'La «r» japonesa', body: 'La **r** japonesa está entre la «r» suave de «pero» y una «l» muy rápida. No la vibres como la «rr» española: toca el paladar una sola vez, ligero.' } },
    { id: 'l_wa', title: 'わ行 y partículas', sub: 'Wa y wo', icon: 'わ', items: ['k_wa','k_wo'],
      note: { title: 'Tres kana con doble vida', body: 'Estos kana cambian de sonido cuando son **partículas** (palabras pequeñas que marcan la función):\n\n• **は** se lee **wa** → わたし**は** (marca el tema)\n• **へ** se lee **e** → (marca dirección)\n• **を** se lee **o** → (marca el objeto directo)\n\nSolo cambian cuando funcionan como partícula; dentro de una palabra suenan «ha», «he».' } },
    { id: 'l_w4', title: 'Katana y samuráis', sub: 'Con todo el hiragana básico', icon: '⚔️', items: ['w_yama','w_sakura','w_yuki','w_sora','w_katana','w_samurai'] }
  ]},
  { id: 'u4', title: 'Dakuten', sub: 'Sonidos con «comillas»', lessons: [
    { id: 'l_ga', title: 'が行', sub: 'Ga, gi, gu, ge, go', icon: 'が', items: ['k_ga','k_gi','k_gu','k_ge','k_go'],
      note: { title: 'Las dos rayitas (゛)', body: 'Dos rayitas arriba de un kana lo hacen **sonoro**: la voz vibra.\n\nか **ka** → が **ga**, さ sa → ざ za, た ta → だ da, は ha → ば ba.\n\nTruco: ponte la mano en la garganta. En «ka» no vibra; en «ga» sí.' } },
    { id: 'l_za', title: 'ざ行', sub: 'Za, ji, zu, ze, zo', icon: 'ざ', items: ['k_za','k_ji','k_zu','k_ze','k_zo'],
      note: { title: 'ぢ y づ', body: 'Existen **ぢ** (ji) y **づ** (zu), pero suenan igual que じ y ず y casi nunca se usan. Por ahora, olvídalos.' } },
    { id: 'l_da', title: 'だ行', sub: 'Da, de, do', icon: 'だ', items: ['k_da','k_de','k_do'] },
    { id: 'l_w5', title: 'Comida, amigos y música', sub: 'Palabras con dakuten', icon: '🍙', items: ['w_gohan','w_tomodachi','w_kazoku','w_sugoi','w_ongaku','w_zannen'] },
    { id: 'l_ba', title: 'ば行', sub: 'Ba, bi, bu, be, bo', icon: 'ば', items: ['k_ba','k_bi','k_bu','k_be','k_bo'] },
    { id: 'l_pa', title: 'ぱ行', sub: 'Pa, pi, pu, pe, po', icon: 'ぱ', items: ['k_pa','k_pi','k_pu','k_pe','k_po'],
      note: { title: 'El círculo (゜)', body: 'El **círculo pequeño** solo se pone en la fila は y la convierte en la fila **p**: は ha → ぱ **pa**.' } },
    { id: 'l_w6', title: 'Pan, cerdos y teléfonos', sub: 'Palabras con ば y ぱ', icon: '🐷', items: ['w_pan','w_buta','w_enpitsu','w_boku','w_denwa','w_sekai'] }
  ]},
  { id: 'u5', title: 'Sonidos combinados', sub: 'Ya casi completas el hiragana', lessons: [
    { id: 'l_ky', title: 'きゃ きゅ きょ · しゃ しゅ しょ', sub: 'Kya, kyu, kyo, sha, shu, sho', icon: 'きゃ', items: ['k_kya','k_kyu','k_kyo','k_sha','k_shu','k_sho'],
      note: { title: 'Kana pequeños: ゃ ゅ ょ', body: 'Un **ゃ ゅ ょ** pequeño se pega al kana anterior y forman **una sola sílaba**:\n\nき + ゃ = きゃ **kya** (no «ki-ya»).\n\nFíjate en que son más pequeños y van un poco abajo a la derecha.' } },
    { id: 'l_ch', title: 'ちゃ ちゅ ちょ · にゃ にゅ にょ', sub: 'Cha, chu, cho, nya, nyu, nyo', icon: 'ちゃ', items: ['k_cha','k_chu','k_cho','k_nya','k_nyu','k_nyo'] },
    { id: 'l_hy', title: 'ひゃ ひゅ ひょ · みゃ みゅ みょ', sub: 'Hya, hyu, hyo, mya, myu, myo', icon: 'ひゃ', items: ['k_hya','k_hyu','k_hyo','k_mya','k_myu','k_myo'] },
    { id: 'l_ry', title: 'りゃ りゅ りょ · ぎゃ ぎゅ ぎょ', sub: 'Rya, ryu, ryo, gya, gyu, gyo', icon: 'りゃ', items: ['k_rya','k_ryu','k_ryo','k_gya','k_gyu','k_gyo'] },
    { id: 'l_j', title: 'じゃ じゅ じょ · びゃ びゅ びょ', sub: 'Ja, ju, jo, bya, byu, byo', icon: 'じゃ', items: ['k_ja','k_ju','k_jo','k_bya','k_byu','k_byo'] },
    { id: 'l_py', title: 'ぴゃ ぴゅ ぴょ', sub: 'Pya, pyu, pyo', icon: 'ぴゃ', items: ['k_pya','k_pyu','k_pyo'] },
    { id: 'l_w7', title: 'Té, escuela y fotos', sub: 'Palabras con っ y sonidos largos', icon: '🍵', items: ['w_kyou','w_ocha','w_gakkou','w_shashin','w_ryouri','w_chotto'],
      note: { title: 'La っ pequeña y las vocales largas', body: '**っ pequeña** = una pequeña pausa que dobla la consonante siguiente: が**っ**こう **gak-kō**, い**っ**ぽん **ip-pon**.\n\n**Vocales largas**: se alargan al doble de tiempo. おう suena «ōo» (きょう **kyō**), えい suena «ee» y うう «uu». En romaji se marcan con una raya (ō).' } },
    { id: 'l_w8', title: 'Kendo, ippon y Japón', sub: '¡Palabras de tu mundo!', icon: '🥋', items: ['w_kendou','w_ippon','w_shumi','w_byouin','w_juu','w_nihon'] }
  ]},
  { id: 'u6', title: 'Números', sub: 'Contar y pedir', lessons: [
    { id: 'l_n1', title: '1 a 5', sub: 'Ichi, ni, san, yon, go', icon: '一', items: ['w_ichi','w_ni','w_san','w_yon','w_go'] },
    { id: 'l_n2', title: '6 a 10', sub: 'Roku, nana, hachi, kyū, jū', icon: '六', items: ['w_roku','w_nana','w_hachi','w_kyuu','w_juu'] },
    { id: 'l_n3', title: 'Contar cosas', sub: 'Hitotsu, futatsu, mittsu…', icon: '🍡', items: ['w_hitotsu','w_futatsu','w_mittsu','w_ikutsu','w_kudasai'] }
  ]},
  { id: 'u7', title: 'Comida y restaurante', sub: 'Ramen, sushi y pedir', lessons: [
    { id: 'l_f1', title: 'Comida', sub: 'Ramen, onigiri, huevo…', icon: '🍜', items: ['w_ramen','w_onigiri','w_tamago','w_niku','w_yasai','w_mizu'] },
    { id: 'l_f2', title: 'Sabores y gustos', sub: 'Rico, picante, frío…', icon: '🌶️', items: ['w_oishii','w_karai','w_amai','w_atsui','w_tsumetai','w_suki'] },
    { id: 'l_f3', title: 'Pedir en el restaurante', sub: '«…を ください»', icon: '🙋', items: ['p_mizu','p_ramen1','p_sushi2','p_ocha3','p_onigiri1'],
      note: { title: 'Cómo pedir', body: '**[cosa] を [cantidad] ください** = «[cosa], [cantidad], por favor».\n\n• **を** marca lo que pides.\n• **ひとつ, ふたつ, みっつ** = 1, 2, 3 cosas.\n• **ください** = «deme / por favor».\n\nらーめん を ひとつ ください → «Un ramen, por favor».' } },
    { id: 'l_f4', title: 'Me gusta…', sub: 'Gustos y opiniones', icon: '😋', items: ['p_suki_ramen','p_suki_sushi','p_sushi_mo','p_ramen_oishii','p_ramen_karai','p_ocha_tsumetai'],
      note: { title: 'Gustos con が y も', body: '**わたし は [cosa] が すき です** = «Me gusta [cosa]».\n\n• Lo que te gusta lleva **が**.\n• **も** significa «también» y reemplaza a は / が: すし **も** すき です = «El sushi también me gusta».\n• Opinar: [cosa] は おいしい です = «está rico».' } },
    { id: 'l_t1', title: 'Lectura: Los gustos de Ken', sub: 'Lee y contesta', icon: '📖', items: ['t_ken_gustos'] },
    { id: 'l_t2', title: 'Lectura: En el restaurante', sub: 'Un diálogo real', icon: '📖', items: ['t_restaurante'] }
  ]},
  { id: 'u8', title: 'Gramática básica', sub: 'Preguntar, negar y describir', lessons: [
    { id: 'l_g1', title: 'Esto, eso, aquello', sub: 'Kore, sore, are…', icon: '👉', items: ['w_kore','w_sore','w_are','w_nan','w_hon','w_kuruma'],
      note: { title: 'Cerca, medio y lejos', body: '• **これ** = esto (cerca de mí)\n• **それ** = eso (cerca de ti)\n• **あれ** = aquello (lejos de los dos)' } },
    { id: 'l_g2', title: 'Preguntar con か', sub: '¿Es…? ¿Qué es…?', icon: '❓', items: ['p_kore_hon_ka','p_kore_nan_ka','p_are_kuruma_ka','p_anata_gakusei_ka','p_sore_nan_ka'],
      note: { title: 'La partícula か', body: 'Para hacer una pregunta, pon **か** al final. Nada más: el orden no cambia.\n\nこれ は ほん です → «Esto es un libro».\nこれ は ほん です **か** → «¿Esto es un libro?».\n\nNo hace falta el signo ？ (aunque se usa a veces).' } },
    { id: 'l_g3', title: 'Responder y negar', sub: 'Sí, no y «no es»', icon: '🙅', items: ['p_hai_hon','p_iie_hon','p_sensei_nai','p_bengoshi_nai','p_sore_kuruma_nai'],
      note: { title: 'Negar: じゃ ありません', body: 'Lo contrario de **です** (es) es **じゃ ありません** (no es).\n\nわたし は せんせい です → Soy profesor.\nわたし は せんせい **じゃ ありません** → **No** soy profesor.' } },
    { id: 'l_g4', title: 'Mi libro, tu coche', sub: 'La partícula の', icon: '📕', items: ['p_kore_watashi_hon','p_sore_anata_kuruma','p_kore_ken_hon','p_are_watashi_ie','p_tomodachi_ken'],
      note: { title: 'La partícula の', body: '**の** une dos cosas y significa «de»: **わたし の ほん** = «mi libro» (literalmente «libro de mí»).\n\nけん の ほん = el libro de Ken.' } },
    { id: 'l_g5', title: 'Adjetivos い', sub: 'Grande, nuevo, barato…', icon: '📏', items: ['w_ookii','w_chiisai','w_atarashii','w_furui','w_takai','w_yasui'] },
    { id: 'l_g6', title: 'Describir cosas', sub: 'Esto es grande, el libro es viejo', icon: '🖼️', items: ['p_hon_furui','p_kuruma_atarashii','p_kore_ookii','p_are_chiisai','p_ramen_yasui','p_sushi_takai'] },
    { id: 'l_t3', title: 'Lectura: Mis cosas', sub: 'Un texto corto', icon: '📖', items: ['t_mis_cosas'] }
  ]}
];

const LESSON_BY_ID = {};
UNITS.forEach(u => u.lessons.forEach(l => { l.unit = u.id; LESSON_BY_ID[l.id] = l; }));

// ---------- RANGOS (kendo) ----------
const RANKS = [
  { xp: 0,    name: '6 kyū',  jp: '六級', title: 'Aprendiz' },
  { xp: 100,  name: '5 kyū',  jp: '五級', title: 'Aprendiz' },
  { xp: 250,  name: '4 kyū',  jp: '四級', title: 'Practicante' },
  { xp: 500,  name: '3 kyū',  jp: '三級', title: 'Practicante' },
  { xp: 900,  name: '2 kyū',  jp: '二級', title: 'Espadachín' },
  { xp: 1500, name: '1 kyū',  jp: '一級', title: 'Espadachín' },
  { xp: 2500, name: 'Shodan', jp: '初段', title: 'Primer dan' },
  { xp: 4000, name: 'Nidan',  jp: '二段', title: 'Segundo dan' },
  { xp: 6000, name: 'Sandan', jp: '三段', title: 'Tercer dan' }
];

// ---------- COLECCIÓN ----------
const TREASURES = [
  ['🍜','Ramen de cerdo'], ['🍣','Sushi de atún'], ['⚔️','Katana'], ['🥋','Keikogi'],
  ['🏯','Castillo de Himeji'], ['🌸','Sakura'], ['🍙','Onigiri'], ['🍡','Dango'],
  ['⛩️','Torii'], ['🏮','Farol rojo'], ['🎌','Bandera'], ['🐉','Dragón'],
  ['👹','Máscara oni'], ['🪭','Abanico'], ['🍵','Té verde'], ['🎍','Kadomatsu'],
  ['🗻','Monte Fuji'], ['🎩','Sombrero de Chopper'], ['🍭','Algodón de azúcar'], ['🦌','Reno'], ['🩺','Botiquín del doctor']
];
