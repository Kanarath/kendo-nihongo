// Katakana: caracteres, palabras, frases, lecturas y unidades. Se carga después de data.js.
const KATA = {
  a: [
    ['ア','a','Un hacha clavada en un tronco: «a»(h)cha.'],
    ['イ','i','Una «i» inclinada con un trazo: la «i»glesia con el tejado torcido.'],
    ['ウ','u','Como う pero con un palito arriba: una «u»ña con esmalte.'],
    ['エ','e','Una viga de obra: «e»dificio.'],
    ['オ','o','Una cruz con una cola: un «o»bispo con su báculo.']
  ],
  ka: [
    ['カ','ka','Parece el kanji 力 (fuerza): «ka»rate = fuerza.'],
    ['キ','ki','Una llave de tres dientes (key): «ki».'],
    ['ク','ku','Un «cu»chillo: «ku».'],
    ['ケ','ke','Un trozo de «que»so: «ke».'],
    ['コ','ko','Una esquina (corner): «ko».']
  ],
  sa: [
    ['サ','sa','Una valla con tres postes: «sa»fari.'],
    ['シ','shi','Dos puntos y un trazo hacia arriba, casi horizontales: ¡«shi»!'],
    ['ス','su','Un tobogán suave: «su».'],
    ['セ','se','Un «se»rrucho tumbado: «se».'],
    ['ソ','so','Dos trazos cayendo casi verticales: una «so»ga cortada.']
  ],
  ta: [
    ['タ','ta','Una «ta»pa con un rabito: «ta».'],
    ['チ','chi','Un «chi»co con los brazos abiertos: «chi».'],
    ['ツ','tsu','Tres gotas cayendo casi verticales: «tsu»nami.'],
    ['テ','te','Un «te»levisor con su antena: «te».'],
    ['ト','to','Un «to»tem clavado en el suelo: «to».']
  ],
  na: [
    ['ナ','na','Una «na»vaja abierta: «na».'],
    ['ニ','ni','Dos rayas: en japonés «ni» es dos (二).'],
    ['ヌ','nu','Un lazo con un «nu»do: «nu».'],
    ['ネ','ne','Un gato (ネコ = «ne»ko) con la cola levantada: «ne».'],
    ['ノ','no','Una barra inclinada como una «no»ta: «no».'],
    ['ン','n','Parecida a ソ pero más tumbada: las gotas caen de lado. Es la «n» final.']
  ],
  ha: [
    ['ハ','ha','Un tejado a dos aguas: «ha».'],
    ['ヒ','hi','Un «hi»lo colgando de un clavo: «hi».'],
    ['フ','fu','Una «fu»nda doblada como un 7: «fu».'],
    ['ヘ','he','Casi igual que へ: una colina, «he».'],
    ['ホ','ho','Una cruz con dos velas: «ho»nra.']
  ],
  ma: [
    ['マ','ma','Un «ma»letín de lado: «ma».'],
    ['ミ','mi','Tres arañazos de gato: «mi»au.'],
    ['ム','mu','La cara de una vaca: «mu»uu.'],
    ['メ','me','Una X marca la «me»ta: «me».'],
    ['モ','mo','Una «mo»chila con tres tiras: «mo».']
  ],
  ya: [
    ['ヤ','ya','Un «ya»k con un solo cuerno: «ya».'],
    ['ユ','yu','Un «yu»nque: «yu».'],
    ['ヨ','yo','Un 3 cuadrado, como un «yo»yó: «yo».']
  ],
  ra: [
    ['ラ','ra','Una «ra»dio con antena: «ra».'],
    ['リ','ri','Dos trazos como un «rí»o: «ri».'],
    ['ル','ru','Dos piernas caminando por la «ru»ta: «ru».'],
    ['レ','re','Un «re»mo curvo: «re».'],
    ['ロ','ro','Una boca cuadrada: «ro».']
  ],
  wa: [
    ['ワ','wa','Una taza ancha de «wa»ter: «wa».'],
    ['ヲ','o','Casi no se usa. Se pronuncia «o» y solo marca el objeto en frases muy concretas.','c_wo']
  ],
  ga: [
    ['ガ','ga','カ + ゛ = «ga».'], ['ギ','gi','キ + ゛ = «gi».'], ['グ','gu','ク + ゛ = «gu».'],
    ['ゲ','ge','ケ + ゛ = «ge».'], ['ゴ','go','コ + ゛ = «go».']
  ],
  za: [
    ['ザ','za','サ + ゛ = «za».'], ['ジ','ji','シ + ゛ = «ji».'], ['ズ','zu','ス + ゛ = «zu».'],
    ['ゼ','ze','セ + ゛ = «ze».'], ['ゾ','zo','ソ + ゛ = «zo».']
  ],
  da: [
    ['ダ','da','タ + ゛ = «da».'], ['デ','de','テ + ゛ = «de».'], ['ド','do','ト + ゛ = «do».']
  ],
  ba: [
    ['バ','ba','ハ + ゛ = «ba».'], ['ビ','bi','ヒ + ゛ = «bi».'], ['ブ','bu','フ + ゛ = «bu».'],
    ['ベ','be','ヘ + ゛ = «be».'], ['ボ','bo','ホ + ゛ = «bo».']
  ],
  pa: [
    ['パ','pa','ハ + ゜ = «pa».'], ['ピ','pi','ヒ + ゜ = «pi».'], ['プ','pu','フ + ゜ = «pu».'],
    ['ペ','pe','ヘ + ゜ = «pe».'], ['ポ','po','ホ + ゜ = «po».']
  ]
};
const KCOMBOS = [
  ['キ','ky',['kya','kyu','kyo']], ['シ','sh',['sha','shu','sho']], ['チ','ch',['cha','chu','cho']],
  ['ニ','ny',['nya','nyu','nyo']], ['ヒ','hy',['hya','hyu','hyo']], ['ミ','my',['mya','myu','myo']],
  ['リ','ry',['rya','ryu','ryo']], ['ギ','gy',['gya','gyu','gyo']], ['ジ','j',['ja','ju','jo']],
  ['ビ','by',['bya','byu','byo']], ['ピ','py',['pya','pyu','pyo']]
];
KCOMBOS.forEach(([base, g, roms]) => ['ャ','ュ','ョ'].forEach((s, i) =>
  (KATA[g] = KATA[g] || []).push([base + s, roms[i], `${base} + ${s} = «${roms[i]}» en una sola sílaba.`])));
// Sonidos para palabras extranjeras (no existen en el japonés tradicional)
KATA.fo1 = [['ファ','fa','フ + ァ = «fa».'], ['フィ','fi','フ + ィ = «fi».'], ['フェ','fe','フ + ェ = «fe».'], ['フォ','fo','フ + ォ = «fo».'], ['ティ','ti','テ + ィ = «ti» (como en «party»).'], ['ディ','di','デ + ィ = «di».']];
KATA.fo2 = [['シェ','she','シ + ェ = «she».'], ['ジェ','je','ジ + ェ = «je».'], ['チェ','che','チ + ェ = «che».'], ['ウィ','wi','ウ + ィ = «wi».'], ['ウェ','we','ウ + ェ = «we».']];
Object.entries(KATA).forEach(([g, list]) => list.forEach(([jp, rom, note, id]) =>
  addItem({ id: id || 'c_' + rom, kind: 'kana', script: 'kata', group: 'K' + g, jp, rom, es: rom.toUpperCase(), note })));

// ---------- palabras ----------
WN('ika', 'イカ', 'ika', 'calamar', 'c1');
WN('kiui', 'キウイ', 'kiui', 'kiwi', 'c1');
WN('kokoa', 'ココア', 'kokoa', 'cacao', 'c1');
WN('keeki', 'ケーキ', 'kēki', 'pastel / tarta', 'c1', 'La rayita ー alarga la vocal anterior: ケーキ = «keeki».');
WN('ookee', 'オーケー', 'ōkē', 'OK', 'c1');
WN('eko', 'エコ', 'eko', 'eco / ecológico', 'c1');
WN('suika', 'スイカ', 'suika', 'sandía', 'c2');
WN('sakkaa', 'サッカー', 'sakkā', 'fútbol', 'c2', 'ッ pequeña = pausa que dobla la consonante: sak-kā.');
WN('takushii', 'タクシー', 'takushī', 'taxi', 'c2');
WN('tenisu', 'テニス', 'tenisu', 'tenis', 'c2');
WN('nekutai', 'ネクタイ', 'nekutai', 'corbata', 'c2');
WN('seetaa', 'セーター', 'sētā', 'suéter', 'c2');
WN('koohii', 'コーヒー', 'kōhī', 'café', 'c3');
WN('raamenK', 'ラーメン', 'rāmen', 'ramen', 'c3', '¡Así se escribe de verdad! Antes lo viste como らーめん.');
WN('karee', 'カレー', 'karē', 'curry', 'c3');
WN('hoteru', 'ホテル', 'hoteru', 'hotel', 'c3');
WN('miruku', 'ミルク', 'miruku', 'leche', 'c3');
WN('meron', 'メロン', 'meron', 'melón', 'c3');
WN('geemu', 'ゲーム', 'gēmu', 'videojuego', 'c4');
WN('dansu', 'ダンス', 'dansu', 'baile', 'c4');
WN('doa', 'ドア', 'doa', 'puerta', 'c4');
WN('basu', 'バス', 'basu', 'autobús', 'c4');
WN('biiru', 'ビール', 'bīru', 'cerveza', 'c4');
WN('piza', 'ピザ', 'piza', 'pizza', 'c4');
WN('hanbaagaa', 'ハンバーガー', 'hanbāgā', 'hamburguesa', 'c5');
WN('pasokon', 'パソコン', 'pasokon', 'ordenador', 'c5', 'Abreviatura de «personal computer».');
WN('pen', 'ペン', 'pen', 'bolígrafo', 'c5');
WN('posuto', 'ポスト', 'posuto', 'buzón', 'c5');
WN('gorufu', 'ゴルフ', 'gorufu', 'golf', 'c5');
WN('dezaato', 'デザート', 'dezāto', 'postre', 'c5');
WN('juusu', 'ジュース', 'jūsu', 'zumo', 'c6');
WN('shatsu', 'シャツ', 'shatsu', 'camisa', 'c6');
WN('choko', 'チョコ', 'choko', 'chocolate', 'c6');
WN('kyanpu', 'キャンプ', 'kyanpu', 'camping', 'c6');
WN('shawaa', 'シャワー', 'shawā', 'ducha', 'c6');
WN('jazu', 'ジャズ', 'jazu', 'jazz', 'c6');
WN('fan', 'ファン', 'fan', 'fan / aficionado', 'c7');
WN('fooku', 'フォーク', 'fōku', 'tenedor', 'c7');
WN('paatii', 'パーティー', 'pātī', 'fiesta', 'c7');
WN('webu', 'ウェブ', 'webu', 'web', 'c7');
WN('chekku', 'チェック', 'chekku', 'revisar / check', 'c7');
WN('shefu', 'シェフ', 'shefu', 'chef', 'c7');
WN('wanpiisu', 'ワンピース', 'wanpīsu', 'One Piece', 'c8', 'Los nombres de personajes y las palabras extranjeras se escriben en katakana.');
WN('rufi', 'ルフィ', 'rufi', 'Luffy', 'c8');
WN('choppaa', 'チョッパー', 'choppā', 'Chopper', 'c8');
WN('zoro', 'ゾロ', 'zoro', 'Zoro', 'c8');
WN('sanji', 'サンジ', 'sanji', 'Sanji', 'c8');
WN('ken', 'ケン', 'ken', 'Ken (tu nombre)', 'c8', 'Tu nombre en katakana, porque es un nombre extranjero para el japonés.');

// ---------- frases ----------
const T_K = {
  koohii: ['コーヒー', 'kōhī', 'café'], keeki: ['ケーキ', 'kēki', 'pastel'], piza: ['ピザ', 'piza', 'pizza'],
  choppa: ['チョッパー', 'choppā', 'Chopper'], rufi: ['ルフィ', 'rufi', 'Luffy'], zoro: ['ゾロ', 'zoro', 'Zoro'],
  wan: ['ワンピース', 'wanpīsu', 'One Piece'], ramen: ['ラーメン', 'rāmen', 'ramen'], suposu: ['スポーツ', 'supōtsu', 'deporte'],
  sakkaa: ['サッカー', 'sakkā', 'fútbol'], tenisu: ['テニス', 'tenisu', 'tenis']
};
const T_KAWAII = ['かわいい', 'kawaii', 'adorable'], T_TSUYOI = ['つよい', 'tsuyoi', 'fuerte'], T_FUTATSU = ['ふたつ', 'futatsu', 'dos'], T_HITOTSU = ['ひとつ', 'hitotsu', 'uno'];
P('k_koohii', 'Un café, por favor.', [T_K.koohii, T_WO, T_HITOTSU, T_KUDA]);
P('k_karee', 'Me gusta el curry.', [T_WATASHI, T_WA, ['カレー', 'karē', 'curry'], T_GA, T_SUKI, T_DESU]);
P('k_keeki', 'El pastel está rico.', [T_K.keeki, T_WA, ['おいしい', 'oishii', 'rico'], T_DESU]);
P('k_piza', 'Dos pizzas, por favor.', [T_K.piza, T_WO, T_FUTATSU, T_KUDA]);
P('k_choppaa', 'Chopper es adorable.', [T_K.choppa, T_WA, T_KAWAII, T_DESU]);
P('k_rufi', 'Luffy es fuerte.', [T_K.rufi, T_WA, T_TSUYOI, T_DESU]);

// ---------- lecturas ----------
TX('k_cafe', 'En la cafetería', [
  ['Cliente', [T_K.koohii, T_WO, T_HITOTSU, T_KUDA], 'Un café, por favor.'],
  ['Camarero', [tk('はい', 'hai', 'sí')], 'Sí.'],
  ['Camarero', [T_K.keeki, T_MO, tk('いかが', 'ikaga', '¿quiere?'), T_DESU, T_KA], '¿Quiere pastel también?'],
  ['Cliente', [tk('はい', 'hai', 'sí'), T_K.keeki, T_MO, T_KUDA], 'Sí, pastel también, por favor.'],
  ['Camarero', [tk('ありがとう', 'arigatō', 'gracias'), tk('ございます', 'gozaimasu', '(forma educada)')], 'Muchas gracias.']
], [
  ['¿Qué pide el cliente primero?', ['Un café', 'Un té', 'Una cerveza', 'Un zumo'], 0],
  ['¿Qué le ofrece el camarero además?', ['Pastel', 'Pizza', 'Ramen', 'Nada'], 0],
  ['¿Acepta el cliente?', ['Sí', 'No', 'No lo dice', 'Se va'], 0]
]);
TX('k_anime', 'Mi anime favorito', [
  ['', [T_WATASHI, T_WA, T_K.wan, T_GA, T_SUKI, T_DESU], 'Me gusta One Piece.'],
  ['', [T_K.choppa, T_WA, T_KAWAII, T_DESU], 'Chopper es adorable.'],
  ['', [T_K.rufi, T_WA, T_TSUYOI, T_DESU], 'Luffy es fuerte.'],
  ['', [T_K.zoro, T_WA, tk('かっこいい', 'kakkoii', 'guay'), T_DESU], 'Zoro es guay.']
], [
  ['¿Qué anime le gusta a quien escribe?', ['One Piece', 'Naruto', 'Bleach', 'Ninguno'], 0],
  ['¿Quién es adorable?', ['Chopper', 'Luffy', 'Zoro', 'Nadie'], 0],
  ['¿Quién es fuerte?', ['Luffy', 'Chopper', 'Zoro', 'Sanji'], 0],
  ['¿Quién es guay?', ['Zoro', 'Chopper', 'Luffy', 'Nadie'], 0]
]);
TX('k_deporte', 'Mis deportes', [
  ['', [T_WATASHI, T_WA, T_K.suposu, T_GA, T_SUKI, T_DESU], 'Me gustan los deportes.'],
  ['', [tk('けんどう', 'kendō', 'kendo'), T_WA, tk('かっこいい', 'kakkoii', 'guay'), T_DESU], 'El kendo es guay.'],
  ['', [T_K.sakkaa, T_MO, T_SUKI, T_DESU], 'El fútbol también me gusta.'],
  ['', [T_K.tenisu, T_WA, T_SUKI, T_JA, T_ARIMASEN], 'El tenis no me gusta.']
], [
  ['¿Qué deporte es guay?', ['El kendo', 'El tenis', 'El fútbol', 'El golf'], 0],
  ['¿Qué deporte NO le gusta?', ['El tenis', 'El fútbol', 'El kendo', 'Ninguno'], 0],
  ['¿Qué deporte también le gusta?', ['El fútbol', 'El tenis', 'El golf', 'La natación'], 0]
]);

// ---------- unidades ----------
const L = (id, title, sub, icon, items, note) => ({ id, title, sub, icon, items, note });
UNITS.push(
  { id: 'u9', title: 'Katakana I', sub: 'El alfabeto de las palabras extranjeras', lessons: [
    L('l_c_a', 'ア行', 'Las vocales', 'ア', ['c_a','c_i','c_u','c_e','c_o'],
      { title: 'Katakana: el segundo alfabeto', body: 'El **katakana** suena igual que el hiragana, pero tiene otras formas, más rectas y angulosas.\n\nSe usa para **palabras extranjeras** (コーヒー café), **nombres** (ケン Ken) y muchos **nombres de comida** (ラーメン).\n\nTe reconocerás enseguida: ya sabes los sonidos, solo cambia la forma.' }),
    L('l_c_ka', 'カ行', 'Ka, ki, ku, ke, ko', 'カ', ['c_ka','c_ki','c_ku','c_ke','c_ko']),
    L('l_c_w1', 'Primeras palabras', 'Ya puedes leer katakana', '読', ['w_ika','w_kiui','w_kokoa','w_keeki','w_ookee','w_eko'],
      { title: 'La rayita larga ー', body: 'En katakana, la **rayita ー** alarga la vocal anterior:\n\nケーキ = ke**e**ki, オーケー = o**o**ke**e**.\n\nEn vertical la rayita se dibuja de arriba abajo (|).' }),
    L('l_c_sa', 'サ行', 'Sa, shi, su, se, so', 'サ', ['c_sa','c_shi','c_su','c_se','c_so']),
    L('l_c_ta', 'タ行', 'Ta, chi, tsu, te, to', 'タ', ['c_ta','c_chi','c_tsu','c_te','c_to'],
      { title: 'シ y ツ se parecen', body: 'Dos trampas clásicas:\n\n• **シ** (shi): los dos puntos y el trazo van **casi horizontales**.\n• **ツ** (tsu): los tres trazos caen **casi verticales**.\n\nUn truco: シ mira «de lado» como si sonriera; ツ «cae» como gotas.' }),
    L('l_c_na', 'ナ行 + ン', 'Na, ni, nu, ne, no, n', 'ナ', ['c_na','c_ni','c_nu','c_ne','c_no','c_n'],
      { title: 'ソ y ン se parecen', body: '• **ソ** (so): los trazos son **más verticales**.\n• **ン** (n): los trazos son **más tumbados**, como una ola.\n\nTrae la práctica: los verás mucho juntos en palabras como ラーメン.' }),
    L('l_c_w2', 'Fútbol, taxis y tenis', 'Palabras con ッ', '⚽', ['w_suika','w_sakkaa','w_takushii','w_tenisu','w_nekutai','w_seetaa'],
      { title: 'ッ pequeña en katakana', body: 'Igual que en hiragana: la **ッ pequeña** es una pausa que dobla la consonante siguiente.\n\nサッカー = sak-kā, ソックス = sok-ku-su.' })
  ]},
  { id: 'u10', title: 'Katakana II', sub: 'Las filas que faltan', lessons: [
    L('l_c_ha', 'ハ行', 'Ha, hi, fu, he, ho', 'ハ', ['c_ha','c_hi','c_fu','c_he','c_ho']),
    L('l_c_ma', 'マ行', 'Ma, mi, mu, me, mo', 'マ', ['c_ma','c_mi','c_mu','c_me','c_mo']),
    L('l_c_ya', 'ヤ行', 'Ya, yu, yo', 'ヤ', ['c_ya','c_yu','c_yo']),
    L('l_c_ra', 'ラ行', 'Ra, ri, ru, re, ro', 'ラ', ['c_ra','c_ri','c_ru','c_re','c_ro']),
    L('l_c_wa', 'ワ行', 'Wa y o', 'ワ', ['c_wa','c_wo']),
    L('l_c_w3', 'Café, ramen y curry', '¡Ya puedes leer un menú!', '☕', ['w_koohii','w_raamenK','w_karee','w_hoteru','w_miruku','w_meron'])
  ]},
  { id: 'u11', title: 'Dakuten en katakana', sub: 'Las mismas «comillas»', lessons: [
    L('l_c_ga', 'ガ行', 'Ga, gi, gu, ge, go', 'ガ', ['c_ga','c_gi','c_gu','c_ge','c_go'],
      { title: 'Igual que en hiragana', body: 'Las **dos rayitas ゛** y el **círculo ゜** funcionan igual que en hiragana: カ **ka** → ガ **ga**, ハ ha → バ **ba** → パ **pa**.' }),
    L('l_c_za', 'ザ行', 'Za, ji, zu, ze, zo', 'ザ', ['c_za','c_ji','c_zu','c_ze','c_zo']),
    L('l_c_da', 'ダ行', 'Da, de, do', 'ダ', ['c_da','c_de','c_do']),
    L('l_c_ba', 'バ行', 'Ba, bi, bu, be, bo', 'バ', ['c_ba','c_bi','c_bu','c_be','c_bo']),
    L('l_c_pa', 'パ行', 'Pa, pi, pu, pe, po', 'パ', ['c_pa','c_pi','c_pu','c_pe','c_po']),
    L('l_c_w4', 'Juegos, bailes y pizza', 'Palabras con dakuten', '🍕', ['w_geemu','w_dansu','w_doa','w_basu','w_biiru','w_piza']),
    L('l_c_w5', 'Hamburguesas y ordenadores', 'Más palabras del día a día', '🍔', ['w_hanbaagaa','w_pasokon','w_pen','w_posuto','w_gorufu','w_dezaato'])
  ]},
  { id: 'u12', title: 'Combinados y extranjeros', sub: 'Lo último del katakana', lessons: [
    L('l_c_ky', 'キャ キュ キョ · シャ シュ ショ', 'Kya… sho', 'キャ', ['c_kya','c_kyu','c_kyo','c_sha','c_shu','c_sho']),
    L('l_c_ch', 'チャ チュ チョ · ニャ ニュ ニョ', 'Cha… nyo', 'チャ', ['c_cha','c_chu','c_cho','c_nya','c_nyu','c_nyo']),
    L('l_c_hy', 'ヒャ ヒュ ヒョ · ミャ ミュ ミョ', 'Hya… myo', 'ヒャ', ['c_hya','c_hyu','c_hyo','c_mya','c_myu','c_myo']),
    L('l_c_ry', 'リャ リュ リョ · ギャ ギュ ギョ', 'Rya… gyo', 'リャ', ['c_rya','c_ryu','c_ryo','c_gya','c_gyu','c_gyo']),
    L('l_c_j', 'ジャ ジュ ジョ · ビャ ビュ ビョ', 'Ja… byo', 'ジャ', ['c_ja','c_ju','c_jo','c_bya','c_byu','c_byo']),
    L('l_c_py', 'ピャ ピュ ピョ', 'Pya, pyu, pyo', 'ピャ', ['c_pya','c_pyu','c_pyo']),
    L('l_c_w6', 'Zumo, camisas y jazz', 'Palabras con sonidos combinados', '🧃', ['w_juusu','w_shatsu','w_choko','w_kyanpu','w_shawaa','w_jazu']),
    L('l_c_f1', 'ファ フィ フェ フォ · ティ ディ', 'Sonidos de otros idiomas', 'ファ', ['c_fa','c_fi','c_fe','c_fo','c_ti','c_di'],
      { title: 'Sonidos nuevos', body: 'El japonés tradicional no tiene «fa», «ti» o «we». Para palabras extranjeras se **inventaron** combinando un kana grande con otro **pequeño** (ァ ィ ェ ォ).\n\nファ = fa, ティ = ti (como en «party»), ウェ = we (como en «web»).' }),
    L('l_c_f2', 'シェ ジェ チェ ウィ ウェ', 'Más sonidos extranjeros', 'シェ', ['c_she','c_je','c_che','c_wi','c_we']),
    L('l_c_w7', 'Fiestas, tenedores y webs', 'Palabras con sonidos extranjeros', '🎉', ['w_fan','w_fooku','w_paatii','w_webu','w_chekku','w_shefu'])
  ]},
  { id: 'u13', title: 'Tu mundo en katakana', sub: 'One Piece, café y deporte', lessons: [
    L('l_c_w8', 'Nombres de One Piece', 'Y tu nombre en katakana', '🏴‍☠️', ['w_wanpiisu','w_rufi','w_choppaa','w_zoro','w_sanji','w_ken']),
    L('l_c_p1', 'Frases con katakana', 'Pedir, opinar, describir', '💬', ['p_k_koohii','p_k_karee','p_k_keeki','p_k_piza','p_k_choppaa','p_k_rufi']),
    L('l_c_t1', 'Lectura: En la cafetería', 'Un diálogo en katakana', '📖', ['t_k_cafe']),
    L('l_c_t2', 'Lectura: Mi anime favorito', '¡Chopper y compañía!', '📖', ['t_k_anime']),
    L('l_c_t3', 'Lectura: Mis deportes', 'Con kendo incluido', '📖', ['t_k_deporte'])
  ]}
);
UNITS.slice(-5).forEach(u => u.lessons.forEach(l => { l.unit = u.id; LESSON_BY_ID[l.id] = l; }));
