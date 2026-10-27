// Verbos en forma ます, kanji de acciones, tiempo y lugares, partículas y lecturas. Se carga después de data-kanji.js.

// ---------- kanji nuevos ----------
K('J15', '食', 'comer', 'たべる', 'taberu', ['ショク'], ['た'], 'Una tapa sobre un cuenco de arroz: ¡a comer!');
K('J15', '飲', 'beber', 'のむ', 'nomu', ['イン'], ['の'], 'Comida (食) y un bostezo abierto (欠): beber.');
K('J15', '見', 'ver / mirar', 'みる', 'miru', ['ケン'], ['み'], 'Un ojo (目) con patas: se mueve para ver.');
K('J15', '行', 'ir', 'いく', 'iku', ['コウ', 'ギョウ'], ['い'], 'Un cruce de caminos: ir.');
K('J15', '来', 'venir', 'くる', 'kuru', ['ライ'], ['く', 'こ'], 'Una planta de trigo que llega con la cosecha: viene.');
K('J16', '聞', 'oír / preguntar', 'きく', 'kiku', ['ブン'], ['き'], 'Una oreja (耳) en la puerta (門): escuchando.');
K('J16', '読', 'leer', 'よむ', 'yomu', ['ドク'], ['よ'], 'Palabras (言) delante de ti: se leen.');
K('J16', '書', 'escribir', 'かく', 'kaku', ['ショ'], ['か'], 'Un pincel sobre un tarro de tinta: escribir.');
K('J16', '話', 'hablar', 'はなす', 'hanasu', ['ワ'], ['はな'], 'Palabras (言) y una lengua (舌): hablar.');
K('J16', '買', 'comprar', 'かう', 'kau', ['バイ'], ['か'], 'Una red y una concha (el dinero antiguo): comprar.');
K('J17', '休', 'descansar', 'やすむ', 'yasumu', ['キュウ'], ['やす'], 'Una persona (亻) apoyada en un árbol (木): descansa.');
K('J17', '会', 'encontrarse', 'あう', 'au', ['カイ'], ['あ'], 'Dos personas bajo un techo: se encuentran.');
K('J17', '出', 'salir', 'でる', 'deru', ['シュツ'], ['で', 'だ'], 'Una montaña sobre otra: salir de la cueva.');
K('J17', '入', 'entrar', 'はいる', 'hairu', ['ニュウ'], ['はい', 'い'], 'Una flecha que entra.');
K('J17', '言', 'decir', 'いう', 'iu', ['ゲン'], ['い'], 'Una boca con rayas: palabras que salen.');
K('J18', '朝', 'mañana (hora del día)', 'あさ', 'asa', ['チョウ'], ['あさ'], 'Sol (日) y luna (月) a la vez: amanece.');
K('J18', '夜', 'noche', 'よる', 'yoru', ['ヤ'], ['よる'], 'Una persona bajo la luna: la noche.');
K('J18', '毎', 'cada', 'まい', 'mai', ['マイ'], [], 'Una madre (母) con una peineta: cada día.');
K('J18', '明', 'claro / mañana', 'あかるい', 'akarui', ['メイ'], ['あか', 'あ'], 'Sol (日) y luna (月) juntos: todo está claro.');
K('J18', '昨', 'pasado / ayer', 'さく', 'saku', ['サク'], [], 'Un día (日) que ya pasó: ayer.');
K('J19', '家', 'casa', 'いえ', 'ie', ['カ'], ['いえ', 'うち'], 'Un techo con un cerdo debajo: la casa (antes convivían).');
K('J19', '駅', 'estación', 'えき', 'eki', ['エキ'], [], 'Un caballo (馬) en un lugar de paso: la estación.');
K('J19', '校', 'escuela', 'こう', 'kō', ['コウ'], [], 'Madera (木) y cruce (交): la escuela.');
K('J19', '店', 'tienda', 'みせ', 'mise', ['テン'], ['みせ'], 'Un techo con algo que se adivina: una tienda.');
K('J19', '語', 'idioma', 'ご', 'go', ['ゴ'], [], 'Palabras (言) de cinco (五) bocas (口): un idioma.');

// ---------- verbos en hiragana ----------
WN('shimasu', 'します', 'shimasu', 'hacer', 'vh1', 'Los verbos en forma **ます** son la forma educada y neutra: sirve para el presente y el futuro.');
WN('arimasu', 'あります', 'arimasu', 'haber / tener (cosas)', 'vh1', 'Para cosas que no se mueven: libros, mesas, dinero.');
WN('imasu', 'います', 'imasu', 'estar / haber (personas y animales)', 'vh1', 'Para seres vivos: personas, gatos, perros.');
WN('nemasu', 'ねます', 'nemasu', 'dormir', 'vh1');
WN('okimasu', 'おきます', 'okimasu', 'levantarse / despertarse', 'vh1');
WN('kaerimasu', 'かえります', 'kaerimasu', 'volver (a casa)', 'vh2');
WN('wakarimasu', 'わかります', 'wakarimasu', 'entender', 'vh2');
WN('asobimasu', 'あそびます', 'asobimasu', 'jugar / divertirse', 'vh2');
WN('hatarakimasu', 'はたらきます', 'hatarakimasu', 'trabajar', 'vh2');

// ---------- verbos con kanji ----------
V('tabemasu', '食べます', 'たべます', 'tabemasu', 'comer', 'V15');
V('nomimasu', '飲みます', 'のみます', 'nomimasu', 'beber', 'V15');
V('mimasu', '見ます', 'みます', 'mimasu', 'ver / mirar', 'V15');
V('ikimasu', '行きます', 'いきます', 'ikimasu', 'ir', 'V15');
V('kimasu', '来ます', 'きます', 'kimasu', 'venir', 'V15');
V('kikimasu', '聞きます', 'ききます', 'kikimasu', 'escuchar / preguntar', 'V16');
V('yomimasu', '読みます', 'よみます', 'yomimasu', 'leer', 'V16');
V('kakimasu', '書きます', 'かきます', 'kakimasu', 'escribir', 'V16');
V('hanashimasu', '話します', 'はなします', 'hanashimasu', 'hablar', 'V16');
V('kaimasu', '買います', 'かいます', 'kaimasu', 'comprar', 'V16');
V('yasumimasu', '休みます', 'やすみます', 'yasumimasu', 'descansar', 'V17');
V('aimasu', '会います', 'あいます', 'aimasu', 'encontrarse / ver a alguien', 'V17');
V('demasu', '出ます', 'でます', 'demasu', 'salir', 'V17');
V('hairimasu', '入ります', 'はいります', 'hairimasu', 'entrar', 'V17');
V('iimasu', '言います', 'いいます', 'iimasu', 'decir', 'V17');
// las cuatro formas
V('tabemasen', '食べません', 'たべません', 'tabemasen', 'no como (negativo)', 'VF1');
V('tabemashita', '食べました', 'たべました', 'tabemashita', 'comí (pasado)', 'VF1');
V('tabemasendeshita', '食べませんでした', 'たべませんでした', 'tabemasendeshita', 'no comí (negativo pasado)', 'VF1');
V('ikimasen', '行きません', 'いきません', 'ikimasen', 'no voy (negativo)', 'VF2');
V('ikimashita', '行きました', 'いきました', 'ikimashita', 'fui (pasado)', 'VF2');
V('ikimasendeshita', '行きませんでした', 'いきませんでした', 'ikimasendeshita', 'no fui (negativo pasado)', 'VF2');
// tiempo y lugares
V('asa', '朝', 'あさ', 'asa', 'mañana (parte del día)', 'V18'); V('yoru', '夜', 'よる', 'yoru', 'noche', 'V18');
V('mainichi', '毎日', 'まいにち', 'mainichi', 'todos los días', 'V18'); V('ashita', '明日', 'あした', 'ashita', 'mañana (día siguiente)', 'V18');
V('kinou', '昨日', 'きのう', 'kinō', 'ayer', 'V18'); V('maiasa', '毎朝', 'まいあさ', 'maiasa', 'cada mañana', 'V18');
V('ie', '家', 'いえ', 'ie', 'casa', 'V19'); V('eki', '駅', 'えき', 'eki', 'estación', 'V19'); V('gakkou', '学校', 'がっこう', 'gakkō', 'escuela', 'V19');
V('mise', '店', 'みせ', 'mise', 'tienda', 'V19'); V('nihongo', '日本語', 'にほんご', 'nihongo', 'japonés (idioma)', 'V19');
V('supeingo', 'スペイン語', 'スペインご', 'supeingo', 'español (idioma)', 'V19');

// ---------- frases ----------
const tv = (jp, rom, es, kana) => [jp, rom, es, kana];
const T_DE = ['で', 'de', '(partícula: lugar donde haces algo)'], T_NI = ['に', 'ni', '(partícula: destino / persona)'], T_HE = ['へ', 'e', '(partícula: hacia)'];
const T_V = {
  mizu: tv('水', 'mizu', 'agua', 'みず'), nomu: tv('飲みます', 'nomimasu', 'beber', 'のみます'), taberu: tv('食べます', 'tabemasu', 'comer', 'たべます'),
  mainichi: tv('毎日', 'mainichi', 'todos los días', 'まいにち'), hon: tv('本', 'hon', 'libro', 'ほん'), yomu: tv('読みます', 'yomimasu', 'leer', 'よみます'),
  miru: tv('見ます', 'mimasu', 'ver', 'みます'), kau: tv('買います', 'kaimasu', 'comprar', 'かいます'), nihongo: tv('日本語', 'nihongo', 'japonés', 'にほんご'),
  hanasu: tv('話します', 'hanashimasu', 'hablar', 'はなします'), gakkou: tv('学校', 'gakkō', 'escuela', 'がっこう'), iku: tv('行きます', 'ikimasu', 'ir', 'いきます'),
  eki: tv('駅', 'eki', 'estación', 'えき'), ie: tv('家', 'ie', 'casa', 'いえ'), kuru: tv('来ます', 'kimasu', 'venir', 'きます'),
  tomodachi: tv('友だち', 'tomodachi', 'amigo/a', 'ともだち'), au: tv('会います', 'aimasu', 'ver a / encontrarse con', 'あいます'), kyou: tv('今日', 'kyō', 'hoy', 'きょう'),
  yasumu: tv('休みます', 'yasumimasu', 'descansar', 'やすみます'), ashita: tv('明日', 'ashita', 'mañana', 'あした'), maiasa: tv('毎朝', 'maiasa', 'cada mañana', 'まいあさ'),
  yoru: tv('夜', 'yoru', 'por la noche', 'よる'), kinou: tv('昨日', 'kinō', 'ayer', 'きのう'), ikimasen: tv('行きません', 'ikimasen', 'no ir', 'いきません'),
  nomimasen: tv('飲みません', 'nomimasen', 'no beber', 'のみません'), nomimasendeshita: tv('飲みませんでした', 'nomimasendeshita', 'no bebí', 'のみませんでした'),
  tabemashita: tv('食べました', 'tabemashita', 'comí', 'たべました'), tabemasenka: tv('食べませんか', 'tabemasen ka', '¿comemos?', 'たべませんか'),
  ikimasenka: tv('行きませんか', 'ikimasen ka', '¿vamos?', 'いきませんか'), tabemashou: tv('食べましょう', 'tabemashō', 'comamos', 'たべましょう'),
  ikimashou: tv('行きましょう', 'ikimashō', 'vayamos', 'いきましょう'), issho: ['いっしょ', 'issho', 'juntos'], hima: ['ひま', 'hima', 'libre (de tiempo)'],
  doko: ['どこ', 'doko', '¿dónde?'], ne: ['ね', 'ne', '(¿verdad?)'], tv: ['テレビ', 'terebi', 'televisión'], pan: ['パン', 'pan', 'pan'], biiru: ['ビール', 'bīru', 'cerveza'],
  ocha: ['おちゃ', 'ocha', 'té'], ramen: T_K.ramen, nihonjin: tv('日本人', 'nihonjin', 'japonés/a', 'にほんじん'), sensei: tv('先生', 'sensei', 'profesor/a', 'せんせい'),
  gakusei: tv('学生', 'gakusei', 'estudiante', 'がくせい'), nichiyoubi: tv('日曜日', 'nichiyōbi', 'domingo', 'にちようび'), doyoubi: tv('土曜日', 'doyōbi', 'sábado', 'どようび'),
  wanpiisu: T_K.wan, kendou: ['けんどう', 'kendō', 'kendo']
};
P('v_mizu', 'Bebo agua.', [T_WATASHI, T_WA, T_V.mizu, T_WO, T_V.nomu]);
P('v_ramen', 'Como ramen todos los días.', [T_WATASHI, T_WA, T_V.mainichi, T_V.ramen, T_WO, T_V.taberu]);
P('v_hon', 'Leo un libro.', [T_WATASHI, T_WA, T_V.hon, T_WO, T_V.yomu]);
P('v_tv', 'Veo la televisión.', [T_WATASHI, T_WA, T_V.tv, T_WO, T_V.miru]);
P('v_pan', 'Compro pan.', [T_WATASHI, T_WA, T_V.pan, T_WO, T_V.kau]);
P('v_nihongo', 'Hablo japonés.', [T_WATASHI, T_WA, T_V.nihongo, T_WO, T_V.hanasu]);
P('v_gakkou', 'Voy a la escuela.', [T_WATASHI, T_WA, T_V.gakkou, T_NI, T_V.iku]);
P('v_eki', 'Voy a la estación.', [T_WATASHI, T_WA, T_V.eki, T_HE, T_V.iku]);
P('v_ie_kuru', 'Mi amigo viene a mi casa.', [T_V.tomodachi, T_WA, T_WATASHI, T_NO, T_V.ie, T_NI, T_V.kuru]);
P('v_ashita_au', 'Mañana veo a mi amigo.', [T_V.ashita, T_V.tomodachi, T_NI, T_V.au]);
P('v_eki_de', 'Veo a mi amigo en la estación.', [T_WATASHI, T_WA, T_V.eki, T_DE, T_V.tomodachi, T_NI, T_V.au]);
P('v_ie_de', 'Hoy descanso en casa.', [T_V.kyou, T_WA, T_V.ie, T_DE, T_V.yasumu]);
P('v_asa', 'Cada mañana bebo té.', [T_V.maiasa, T_V.ocha, T_WO, T_V.nomu]);
P('v_yoru', 'Por la noche leo un libro.', [T_V.yoru, T_V.hon, T_WO, T_V.yomu]);
P('v_nomimasen', 'No bebo cerveza.', [T_WATASHI, T_WA, T_V.biiru, T_WO, T_V.nomimasen]);
P('v_ikimasen', 'Hoy no voy a la escuela.', [T_V.kyou, T_WA, T_V.gakkou, T_NI, T_V.ikimasen]);
P('v_kinou', 'Ayer comí ramen.', [T_V.kinou, T_WA, T_V.ramen, T_WO, T_V.tabemashita]);
P('v_kinou_nomanai', 'Ayer no bebí cerveza.', [T_V.kinou, T_WA, T_V.biiru, T_WO, T_V.nomimasendeshita]);
P('v_issho_ramen', '¿Comemos ramen juntos?', [T_V.issho, T_NI, T_V.ramen, T_WO, T_V.tabemasenka]);
P('v_issho_eki', '¿Vamos juntos a la estación?', [T_V.issho, T_NI, T_V.eki, T_HE, T_V.ikimasenka]);
P('v_mashou_ramen', 'Vamos a comer ramen.', [T_V.ramen, T_WO, T_V.tabemashou]);
P('v_mashou_gakkou', 'Vamos a la escuela.', [T_V.gakkou, T_HE, T_V.ikimashou]);

// ---------- lecturas ----------
TX('v_dia', 'Mi día', [
  ['', [T_V.maiasa, T_V.ocha, T_WO, T_V.nomu], 'Cada mañana bebo té.'],
  ['', [T_V.gakkou, T_NI, T_V.iku], 'Voy a la escuela.'],
  ['', [T_V.gakkou, T_DE, T_V.tomodachi, T_NI, T_V.au], 'En la escuela veo a mi amigo.'],
  ['', [T_V.yoru, T_WA, T_V.ie, T_DE, T_V.hon, T_WO, T_V.yomu], 'Por la noche leo un libro en casa.']
], [
  ['¿Qué bebe por la mañana?', ['Té', 'Café', 'Cerveza', 'Agua'], 0],
  ['¿Dónde ve a su amigo?', ['En la escuela', 'En la estación', 'En casa', 'En la tienda'], 0],
  ['¿Qué hace por la noche?', ['Lee un libro en casa', 'Va a la escuela', 'Ve la televisión', 'Compra pan'], 0]
]);
TX('v_ayer', 'Ayer, hoy y mañana', [
  ['', [T_V.kinou, T_WA, T_V.ramen, T_WO, T_V.tabemashita], 'Ayer comí ramen.'],
  ['', [T_V.biiru, T_WA, T_V.nomimasendeshita], 'No bebí cerveza.'],
  ['', [T_V.kyou, T_WA, T_V.ie, T_DE, T_V.yasumu], 'Hoy descanso en casa.'],
  ['', [T_V.ashita, T_WA, T_V.eki, T_DE, T_V.tomodachi, T_NI, T_V.au], 'Mañana veo a mi amigo en la estación.']
], [
  ['¿Qué comió ayer?', ['Ramen', 'Pan', 'Sushi', 'Nada'], 0],
  ['¿Bebió cerveza ayer?', ['No', 'Sí', 'Un poco', 'No lo dice'], 0],
  ['¿Dónde descansa hoy?', ['En casa', 'En la escuela', 'En la estación', 'En la tienda'], 0],
  ['¿Qué hace mañana?', ['Ver a un amigo en la estación', 'Descansar en casa', 'Ir a la escuela', 'Comer ramen'], 0]
]);
TX('v_invita', 'Una invitación', [
  ['Ken', [T_V.nichiyoubi, T_WA, T_V.hima, T_DESU, T_KA], '¿Estás libre el domingo?'],
  ['Amigo', [tk('はい', 'hai', 'sí'), T_V.hima, T_DESU], 'Sí, estoy libre.'],
  ['Ken', [T_V.issho, T_NI, T_V.ramen, T_WO, T_V.tabemasenka], '¿Comemos ramen juntos?'],
  ['Amigo', [tk('いい', 'ii', 'bien'), T_DESU, T_V.ne, T_V.doko, T_DE, T_V.taberu, T_KA], 'Qué bien. ¿Dónde comemos?'],
  ['Ken', [T_V.eki, T_DE, T_V.tabemashou], 'Comamos en la estación.'],
  ['Amigo', [tk('はい', 'hai', 'sí'), T_V.tabemashou], 'Sí, comamos.']
], [
  ['¿Qué día quedan?', ['El domingo', 'El sábado', 'El lunes', 'Hoy'], 0],
  ['¿Qué invita a comer Ken?', ['Ramen', 'Sushi', 'Pan', 'Pizza'], 0],
  ['¿Dónde comen?', ['En la estación', 'En casa', 'En la escuela', 'No lo dicen'], 0]
]);
TX('v_finde', 'Mi fin de semana', [
  ['', [T_V.doyoubi, T_WA, T_V.kendou, T_NO, T_V.gakkou, T_NI, T_V.iku], 'El sábado voy a la escuela de kendo.'],
  ['', [T_V.sensei, T_WA, T_V.nihonjin, T_DESU], 'El profesor es japonés.'],
  ['', [T_V.sensei, T_NI, T_V.au], 'Veo al profesor.'],
  ['', [T_V.nichiyoubi, T_WA, T_V.ie, T_DE, T_V.yasumu], 'El domingo descanso en casa.'],
  ['', [T_V.wanpiisu, T_WO, T_V.miru], 'Veo One Piece.']
], [
  ['¿Adónde va el sábado?', ['A la escuela de kendo', 'A la estación', 'A la tienda', 'A casa'], 0],
  ['¿Quién es japonés?', ['El profesor', 'Los alumnos', 'El amigo', 'Nadie'], 0],
  ['¿Qué ve el domingo?', ['One Piece', 'Naruto', 'Un partido', 'Nada'], 0]
]);

// ---------- unidades ----------
UNITS.push(
  { id: 'u20', title: 'Verbos I · Acciones', sub: 'Comer, beber, ver, ir, venir…', lessons: [
    J('l_v0', 'Verbos en ます', 'Hacer, haber, dormir…', '🏃', ['w_shimasu','w_arimasu','w_imasu','w_nemasu','w_okimasu'],
      { title: 'La forma ます', body: 'Los verbos japoneses terminan en **ます** en su forma educada y neutra. Sirve para el presente y el futuro:\n\n食べ**ます** = como / comeré\n\nLos verbos van **al final** de la frase. El resto de la frase lleva **partículas**:\n\nわたし **は** ラーメン **を** 食べます。 = «Yo — ramen — como».\n\nCon ま**す** hablas educadamente con cualquiera: es la forma más segura.' }),
    J('l_j15', '食 飲 見 行 来', 'Comer, beber, ver, ir, venir', '食', ['j_食','j_飲','j_見','j_行','j_来']),
    J('l_vw15', 'Comer, beber, ver, ir, venir', 'Cinco verbos con kanji', '🍜', ['v_tabemasu','v_nomimasu','v_mimasu','v_ikimasu','v_kimasu'],
      { title: 'Kanji + okurigana', body: 'En los verbos el kanji da el **significado** y el hiragana que sigue (**okurigana**) la **conjugación**:\n\n食**べます**, 飲**みます**, 見**ます**, 行**きます**, 来**ます**.' }),
    J('l_j16', '聞 読 書 話 買', 'Oír, leer, escribir, hablar, comprar', '読', ['j_聞','j_読','j_書','j_話','j_買']),
    J('l_vw16', 'Oír, leer, escribir…', 'Cinco verbos más', '📚', ['v_kikimasu','v_yomimasu','v_kakimasu','v_hanashimasu','v_kaimasu']),
    J('l_j17', '休 会 出 入 言', 'Descansar, encontrarse, salir, entrar, decir', '休', ['j_休','j_会','j_出','j_入','j_言']),
    J('l_vw17', 'Descansar, salir, entrar…', 'Cinco verbos más', '🚪', ['v_yasumimasu','v_aimasu','v_demasu','v_hairimasu','v_iimasu']),
    J('l_vh2', 'Más verbos en hiragana', 'Volver, entender, jugar, trabajar', '🎮', ['w_kaerimasu','w_wakarimasu','w_asobimasu','w_hatarakimasu'])
  ]},
  { id: 'u21', title: 'Tiempo y lugares', sub: 'Mañana, ayer, casa, escuela', lessons: [
    J('l_j18', '朝 夜 毎 明 昨', 'Mañana, noche, cada, claro, ayer', '朝', ['j_朝','j_夜','j_毎','j_明','j_昨']),
    J('l_vw18', 'Cuándo', 'Palabras de tiempo', '🌅', ['v_asa','v_yoru','v_mainichi','v_ashita','v_kinou','v_maiasa'],
      { title: 'Lecturas especiales', body: '明日 (**あした**) y 昨日 (**きのう**) tienen lecturas especiales: no se deducen de los kanji sueltos. Son palabras para aprender enteras.' }),
    J('l_j19', '家 駅 校 店 語', 'Casa, estación, escuela, tienda, idioma', '家', ['j_家','j_駅','j_校','j_店','j_語']),
    J('l_vw19', 'Dónde', 'Lugares e idiomas', '🏠', ['v_ie','v_eki','v_gakkou','v_mise','v_nihongo','v_supeingo'])
  ]},
  { id: 'u22', title: 'Verbos II · Formas y frases', sub: 'Partículas, pasado y negativo', lessons: [
    J('l_vf1', 'Cuatro formas de 食べる', 'Como, no como, comí, no comí', '🔄', ['v_tabemasu','v_tabemasen','v_tabemashita','v_tabemasendeshita'],
      { title: 'Las cuatro formas', body: 'Todos los verbos en ます se conjugan igual:\n\n• **〜ます** → presente (como)\n• **〜ません** → negativo (no como)\n• **〜ました** → pasado (comí)\n• **〜ませんでした** → negativo pasado (no comí)\n\nAprende este patrón una vez y vale para todos los verbos.' }),
    J('l_vf2', 'Cuatro formas de 行く', 'Voy, no voy, fui, no fui', '🔄', ['v_ikimasu','v_ikimasen','v_ikimashita','v_ikimasendeshita']),
    J('l_vp1', 'Frases con を', 'Comer, beber, leer, ver', '🍵', ['p_v_mizu','p_v_ramen','p_v_hon','p_v_tv','p_v_pan','p_v_nihongo'],
      { title: 'La partícula を con verbos', body: '**を** marca lo que recibe la acción del verbo:\n\n水 **を** 飲みます = bebo agua.\n本 **を** 読みます = leo un libro.\n\nEl orden es siempre: **quién は — qué を — verbo**.' }),
    J('l_vp2', 'Ir y venir: に y へ', 'Destino y persona', '🚶', ['p_v_gakkou','p_v_eki','p_v_ie_kuru','p_v_ashita_au'],
      { title: 'に y へ', body: '• **に** marca el **destino** (学校**に** 行きます) o la **persona** a la que ves (友だち**に** 会います).\n• **へ** (se lee **e**) también indica «hacia» un lugar, y se puede usar en lugar de に al ir o venir.' }),
    J('l_vp3', 'El lugar de la acción: で', 'Dónde haces algo', '📍', ['p_v_eki_de','p_v_ie_de','p_v_asa','p_v_yoru'],
      { title: 'La partícula で', body: '**で** marca **el lugar donde ocurre** la acción:\n\n駅**で** 友だちに 会います = en la estación veo a mi amigo.\n家**で** 休みます = descanso en casa.\n\nCon verbos de movimiento (行く, 来る) se usa に o へ para el destino; con otras acciones, で para el lugar.' }),
    J('l_vp4', 'No y ayer', 'Negativo y pasado', '⏪', ['p_v_nomimasen','p_v_ikimasen','p_v_kinou','p_v_kinou_nomanai']),
    J('l_vp5', '¿Vamos? ¡Vamos!', 'Invitar y proponer', '🤝', ['p_v_issho_ramen','p_v_issho_eki','p_v_mashou_ramen','p_v_mashou_gakkou'],
      { title: 'Invitar con ません か y ましょう', body: '• **〜ませんか** = «¿quieres…?», una invitación amable (en forma negativa de cortesía):\n  いっしょに 食べ**ませんか** = ¿comemos juntos?\n\n• **〜ましょう** = «¡hagamos…!», una propuesta:\n  食べ**ましょう** = comamos.\n\n**いっしょに** = «juntos».' }),
    J('l_vt1', 'Lectura: Mi día', 'Rutina con verbos', '📖', ['t_v_dia']),
    J('l_vt2', 'Lectura: Ayer, hoy y mañana', 'Pasado, presente y futuro', '📖', ['t_v_ayer']),
    J('l_vt3', 'Lectura: Una invitación', 'Un diálogo', '📖', ['t_v_invita']),
    J('l_vt4', 'Lectura: Mi fin de semana', 'Con kendo y One Piece', '📖', ['t_v_finde'])
  ]}
);
UNITS.slice(-3).forEach(u => u.lessons.forEach(l => { l.unit = u.id; LESSON_BY_ID[l.id] = l; }));
