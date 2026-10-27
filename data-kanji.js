// Kanji básicos (JLPT N5): kanji, palabras con kanji, frases y lecturas. Se carga después de data-kata.js.
// K(grupo, kanji, significado, lectura que se dice, romaji, lecturas on (katakana), lecturas kun (hiragana), mnemotecnia)
function K(g, jp, es, say, rom, on, kun, note) {
  const read = on.join('、') + (kun.length ? (on.length ? ' · ' : '') + kun.join('、') : '');
  addItem({ id: 'j_' + jp, kind: 'kanji', group: g, jp, es, say, rom, yomi: [...on, ...kun], read, note });
}
K('J1', '一', 'uno', 'いち', 'ichi', ['イチ'], ['ひと'], 'Una raya = uno.');
K('J1', '二', 'dos', 'に', 'ni', ['ニ'], ['ふた'], 'Dos rayas = dos.');
K('J1', '三', 'tres', 'さん', 'san', ['サン'], ['み'], 'Tres rayas = tres.');
K('J1', '四', 'cuatro', 'よん', 'yon', ['シ'], ['よん', 'よ'], 'Una ventana cuadrada con dos postigos abiertos.');
K('J1', '五', 'cinco', 'ご', 'go', ['ゴ'], ['いつ'], 'Un 5 con un tejadito encima.');
K('J2', '六', 'seis', 'ろく', 'roku', ['ロク'], ['む'], 'Una persona con sombrero y las piernas abiertas.');
K('J2', '七', 'siete', 'なな', 'nana', ['シチ'], ['なな'], 'Un 7 con un trazo que lo cruza.');
K('J2', '八', 'ocho', 'はち', 'hachi', ['ハチ'], ['や'], 'Dos trazos que se abren hacia abajo, como un 8 que se ensancha. Trae buena suerte.');
K('J2', '九', 'nueve', 'きゅう', 'kyū', ['キュウ', 'ク'], ['ここの'], 'Un 9 con un rabito.');
K('J2', '十', 'diez', 'じゅう', 'jū', ['ジュウ'], ['とお'], 'Una cruz: el diez romano (X).');
K('J3', '百', 'cien', 'ひゃく', 'hyaku', ['ヒャク'], [], 'Un 一 sobre 白 (blanco): cien velas blancas.');
K('J3', '千', 'mil', 'せん', 'sen', ['セン'], ['ち'], 'Un 十 con un trazo extra: mil.');
K('J3', '万', 'diez mil', 'まん', 'man', ['マン'], [], 'En japonés se cuenta de diez mil en diez mil: un «man».');
K('J3', '円', 'yen', 'えん', 'en', ['エン'], [], 'Una moneda redonda con su marco: el yen.');
K('J3', '年', 'año', 'ねん', 'nen', ['ネン'], ['とし'], 'Un campo y una cosecha: una al año.');
K('J4', '日', 'día / sol', 'ひ', 'hi', ['ニチ', 'ジツ'], ['ひ', 'か'], 'Un sol dentro de una ventana.');
K('J4', '月', 'luna / mes', 'つき', 'tsuki', ['ゲツ', 'ガツ'], ['つき'], 'Una luna creciente con dos rayas.');
K('J4', '火', 'fuego', 'ひ', 'hi', ['カ'], ['ひ'], 'Una hoguera con chispas saltando.');
K('J4', '水', 'agua', 'みず', 'mizu', ['スイ'], ['みず'], 'Un río con salpicaduras.');
K('J4', '木', 'árbol', 'き', 'ki', ['モク', 'ボク'], ['き'], 'Un árbol con ramas y raíces.');
K('J5', '金', 'oro / dinero', 'きん', 'kin', ['キン'], ['かね'], 'Dos pepitas de oro bajo un techo.');
K('J5', '土', 'tierra', 'つち', 'tsuchi', ['ド', 'ト'], ['つち'], 'Una planta brotando del suelo.');
K('J5', '山', 'montaña', 'やま', 'yama', ['サン'], ['やま'], 'Tres picos: ¡un monte!');
K('J5', '川', 'río', 'かわ', 'kawa', ['セン'], ['かわ'], 'Tres líneas de agua que fluyen.');
K('J5', '田', 'arrozal', 'た', 'ta', ['デン'], ['た'], 'Un campo de arroz cuadriculado.');
K('J6', '曜', 'día de la semana', 'よう', 'yō', ['ヨウ'], [], 'Un sol (日) y unas plumas (羽): los días van volando. Solo se usa en 月曜日, 火曜日…');
K('J7', '人', 'persona', 'ひと', 'hito', ['ジン', 'ニン'], ['ひと'], 'Una persona caminando con dos piernas.');
K('J7', '男', 'hombre', 'おとこ', 'otoko', ['ダン'], ['おとこ'], 'Fuerza (力) en el campo (田): el hombre trabaja.');
K('J7', '女', 'mujer', 'おんな', 'onna', ['ジョ'], ['おんな'], 'Una mujer sentada con las piernas cruzadas.');
K('J7', '子', 'niño/a', 'こ', 'ko', ['シ'], ['こ'], 'Un bebé con los brazos abiertos.');
K('J7', '友', 'amigo', 'とも', 'tomo', ['ユウ'], ['とも'], 'Dos manos que se dan la mano: amigos.');
K('J8', '父', 'padre', 'ちち', 'chichi', ['フ'], ['ちち'], 'Un padre con un hacha en la mano.');
K('J8', '母', 'madre', 'はは', 'haha', ['ボ'], ['はは'], 'Parece 女 con dos puntitos: una madre con sus hijos.');
K('J8', '先', 'antes / anterior', 'せん', 'sen', ['セン'], ['さき'], 'Un pie que va por delante: el que va antes.');
K('J8', '生', 'vida / nacer', 'せい', 'sei', ['セイ', 'ショウ'], ['い', 'う', 'なま'], 'Una planta que brota del suelo: vida.');
K('J8', '学', 'estudiar', 'がく', 'gaku', ['ガク'], ['まな'], 'Un niño (子) bajo el techo de la escuela.');
K('J9', '目', 'ojo', 'め', 'me', ['モク'], ['め'], 'Un ojo girado de lado, con su pupila.');
K('J9', '耳', 'oreja', 'みみ', 'mimi', ['ジ'], ['みみ'], 'Una oreja con su pabellón.');
K('J9', '口', 'boca', 'くち', 'kuchi', ['コウ', 'ク'], ['くち'], 'Una boca abierta, cuadrada.');
K('J9', '手', 'mano', 'て', 'te', ['シュ'], ['て'], 'Una mano con sus dedos.');
K('J9', '足', 'pie / pierna', 'あし', 'ashi', ['ソク'], ['あし'], 'Una boca (口) sobre un pie.');
K('J10', '大', 'grande', 'だい', 'dai', ['ダイ', 'タイ'], ['おお'], 'Una persona con los brazos abiertos: ¡grande!');
K('J10', '小', 'pequeño', 'しょう', 'shō', ['ショウ'], ['ちい', 'こ'], 'Una persona pequeña, con los brazos pegados.');
K('J10', '上', 'arriba', 'うえ', 'ue', ['ジョウ'], ['うえ'], 'Una línea con algo encima.');
K('J10', '下', 'abajo', 'した', 'shita', ['カ'], ['した'], 'Una línea con algo debajo.');
K('J10', '中', 'dentro / centro', 'なか', 'naka', ['チュウ'], ['なか'], 'Una flecha atravesando el centro de la diana.');
K('J11', '本', 'libro / origen', 'ほん', 'hon', ['ホン'], ['もと'], 'Un árbol (木) con una raya en la raíz: el origen. Y un libro también es «hon».');
K('J11', '国', 'país', 'くに', 'kuni', ['コク'], ['くに'], 'Una frontera (□) que guarda una joya (玉): un país.');
K('J11', '今', 'ahora', 'いま', 'ima', ['コン'], ['いま'], 'Un tejado con una punta: el instante de «ahora».');
K('J11', '何', 'qué', 'なに', 'nani', ['カ'], ['なに', 'なん'], 'Una persona (亻) que pregunta con 可: ¿qué?');
K('J11', '時', 'hora / tiempo', 'じ', 'ji', ['ジ'], ['とき'], 'Sol (日) y templo (寺): el reloj de sol del templo.');
K('J12', '雨', 'lluvia', 'あめ', 'ame', ['ウ'], ['あめ'], 'Gotas que caen de una nube bajo un techo.');
K('J12', '花', 'flor', 'はな', 'hana', ['カ'], ['はな'], 'Hierba (艹) que se transforma (化) en flor.');
K('J12', '空', 'cielo', 'そら', 'sora', ['クウ'], ['そら'], 'Un agujero (穴) y un trabajo (工): el cielo vacío.');
K('J12', '天', 'cielo (celestial)', 'てん', 'ten', ['テン'], [], 'Una persona (大) con una raya encima: lo que hay sobre nosotros.');
K('J12', '気', 'ánimo / energía', 'き', 'ki', ['キ', 'ケ'], [], 'El vapor que sube de un arroz cocido: energía, «ki».');
K('J13', '犬', 'perro', 'いぬ', 'inu', ['ケン'], ['いぬ'], 'Un perro con orejas y una cola (el puntito).');
K('J13', '猫', 'gato', 'ねこ', 'neko', ['ビョウ'], ['ねこ'], 'Una fiera (犭) entre las hierbas (苗): el gato.');
K('J13', '魚', 'pez', 'さかな', 'sakana', ['ギョ'], ['さかな'], 'Un pez con su cola y sus escamas.');
K('J13', '肉', 'carne', 'にく', 'niku', ['ニク'], [], 'Un trozo de carne con sus vetas.');
K('J13', '米', 'arroz', 'こめ', 'kome', ['ベイ', 'マイ'], ['こめ'], 'Granos de arroz que salen de una espiga.');

// ---------- palabras con kanji: V(id, kanji, lectura en kana, romaji, significado, grupo) ----------
function V(id, jp, kana, rom, es, group) { addItem({ id: 'v_' + id, kind: 'word', group, jp, kana, rom, es, say: kana }); }
V('hitotsu', '一つ', 'ひとつ', 'hitotsu', 'uno (cosas)', 'V1'); V('futatsu', '二つ', 'ふたつ', 'futatsu', 'dos (cosas)', 'V1');
V('mittsu', '三つ', 'みっつ', 'mittsu', 'tres (cosas)', 'V1'); V('yottsu', '四つ', 'よっつ', 'yottsu', 'cuatro (cosas)', 'V1');
V('itsutsu', '五つ', 'いつつ', 'itsutsu', 'cinco (cosas)', 'V1');
V('muttsu', '六つ', 'むっつ', 'muttsu', 'seis (cosas)', 'V2'); V('nanatsu', '七つ', 'ななつ', 'nanatsu', 'siete (cosas)', 'V2');
V('yattsu', '八つ', 'やっつ', 'yattsu', 'ocho (cosas)', 'V2'); V('kokonotsu', '九つ', 'ここのつ', 'kokonotsu', 'nueve (cosas)', 'V2');
V('juu', '十', 'じゅう', 'jū', 'diez', 'V2');
V('hyaku', '百', 'ひゃく', 'hyaku', 'cien', 'V3'); V('sen', '千', 'せん', 'sen', 'mil', 'V3');
V('ichiman', '一万', 'いちまん', 'ichiman', 'diez mil', 'V3'); V('hyakuen', '百円', 'ひゃくえん', 'hyakuen', '100 yenes', 'V3');
V('sen_en', '千円', 'せんえん', 'sen\'en', '1.000 yenes', 'V3'); V('sannen', '三年', 'さんねん', 'sannen', 'tres años', 'V3');
V('tsuki', '月', 'つき', 'tsuki', 'luna', 'V4'); V('hi_fire', '火', 'ひ', 'hi', 'fuego', 'V4');
V('mizu', '水', 'みず', 'mizu', 'agua', 'V4'); V('ki', '木', 'き', 'ki', 'árbol', 'V4'); V('hi_sun', '日', 'ひ', 'hi', 'sol / día', 'V4');
V('yama', '山', 'やま', 'yama', 'montaña', 'V5'); V('kawa', '川', 'かわ', 'kawa', 'río', 'V5'); V('tanbo', '田んぼ', 'たんぼ', 'tanbo', 'arrozal', 'V5');
V('kazan', '火山', 'かざん', 'kazan', 'volcán', 'V5'); V('tsuchi', '土', 'つち', 'tsuchi', 'tierra', 'V5'); V('okane', 'お金', 'おかね', 'okane', 'dinero', 'V5');
V('getsu', '月曜日', 'げつようび', 'getsuyōbi', 'lunes', 'V6'); V('ka', '火曜日', 'かようび', 'kayōbi', 'martes', 'V6');
V('sui', '水曜日', 'すいようび', 'suiyōbi', 'miércoles', 'V6'); V('moku', '木曜日', 'もくようび', 'mokuyōbi', 'jueves', 'V6');
V('kin', '金曜日', 'きんようび', 'kinyōbi', 'viernes', 'V7'); V('do', '土曜日', 'どようび', 'doyōbi', 'sábado', 'V7'); V('nichi', '日曜日', 'にちようび', 'nichiyōbi', 'domingo', 'V7');
V('hito', '人', 'ひと', 'hito', 'persona', 'V8'); V('otoko', '男の人', 'おとこのひと', 'otoko no hito', 'hombre', 'V8');
V('onna', '女の人', 'おんなのひと', 'onna no hito', 'mujer', 'V8'); V('kodomo', '子ども', 'こども', 'kodomo', 'niño/a', 'V8');
V('tomodachi', '友だち', 'ともだち', 'tomodachi', 'amigo/a', 'V8'); V('sannin', '三人', 'さんにん', 'sannin', 'tres personas', 'V8');
V('otousan', 'お父さん', 'おとうさん', 'otōsan', 'padre (el tuyo o el de otro)', 'V9'); V('okaasan', 'お母さん', 'おかあさん', 'okāsan', 'madre (la tuya o la de otro)', 'V9');
V('sensei', '先生', 'せんせい', 'sensei', 'profesor/a', 'V9'); V('gakusei', '学生', 'がくせい', 'gakusei', 'estudiante', 'V9');
V('ichinensei', '一年生', 'いちねんせい', 'ichinensei', 'alumno de primer curso', 'V9'); V('sengetsu', '先月', 'せんげつ', 'sengetsu', 'el mes pasado', 'V9');
V('me', '目', 'め', 'me', 'ojo', 'V10'); V('mimi', '耳', 'みみ', 'mimi', 'oreja', 'V10'); V('kuchi', '口', 'くち', 'kuchi', 'boca', 'V10');
V('te', '手', 'て', 'te', 'mano', 'V10'); V('ashi', '足', 'あし', 'ashi', 'pie / pierna', 'V10'); V('jinkou', '人口', 'じんこう', 'jinkō', 'población', 'V10');
V('ookii', '大きい', 'おおきい', 'ōkii', 'grande', 'V11'); V('chiisai', '小さい', 'ちいさい', 'chiisai', 'pequeño', 'V11');
V('ue', '上', 'うえ', 'ue', 'arriba', 'V11'); V('shita', '下', 'した', 'shita', 'abajo', 'V11'); V('naka', '中', 'なか', 'naka', 'dentro', 'V11');
V('otona', '大人', 'おとな', 'otona', 'adulto', 'V11');
V('nihon', '日本', 'にほん', 'nihon', 'Japón', 'V12'); V('nihonjin', '日本人', 'にほんじん', 'nihonjin', 'japonés/a', 'V12');
V('hon', '本', 'ほん', 'hon', 'libro', 'V12'); V('kyou', '今日', 'きょう', 'kyō', 'hoy', 'V12');
V('nanji', '何時', 'なんじ', 'nanji', '¿qué hora?', 'V12'); V('chuugoku', '中国', 'ちゅうごく', 'chūgoku', 'China', 'V12');
V('ame', '雨', 'あめ', 'ame', 'lluvia', 'V13'); V('hana', '花', 'はな', 'hana', 'flor', 'V13'); V('sora', '空', 'そら', 'sora', 'cielo', 'V13');
V('tenki', '天気', 'てんき', 'tenki', 'tiempo (clima)', 'V13'); V('ooame', '大雨', 'おおあめ', 'ōame', 'lluvia fuerte', 'V13'); V('hanabi', '花火', 'はなび', 'hanabi', 'fuegos artificiales', 'V13');
V('inu', '犬', 'いぬ', 'inu', 'perro', 'V14'); V('neko', '猫', 'ねこ', 'neko', 'gato', 'V14'); V('sakana', '魚', 'さかな', 'sakana', 'pescado', 'V14');
V('niku', '肉', 'にく', 'niku', 'carne', 'V14'); V('kome', '米', 'こめ', 'kome', 'arroz (crudo)', 'V14'); V('koinu', '子犬', 'こいぬ', 'koinu', 'cachorro', 'V14');

// ---------- frases ----------
// token con kanji: [texto, romaji, significado, lectura en kana]
const T_J = {
  kyou: ['今日', 'kyō', 'hoy', 'きょう'], getsu: ['月曜日', 'getsuyōbi', 'lunes', 'げつようび'], sui: ['水曜日', 'suiyōbi', 'miércoles', 'すいようび'],
  nichi: ['日曜日', 'nichiyōbi', 'domingo', 'にちようび'], nanyou: ['何曜日', 'naniyōbi', '¿qué día de la semana?', 'なんようび'],
  sen: ['千円', 'sen\'en', 'mil yenes', 'せんえん'], hyaku: ['百円', 'hyakuen', 'cien yenes', 'ひゃくえん'], nihyaku: ['二百円', 'nihyakuen', 'doscientos yenes', 'にひゃくえん'],
  nihonjin: ['日本人', 'nihonjin', 'japonés/a', 'にほんじん'], sensei: ['先生', 'sensei', 'profesor/a', 'せんせい'], otousan: ['お父さん', 'otōsan', 'padre', 'おとうさん'],
  okaasan: ['お母さん', 'okāsan', 'madre', 'おかあさん'], tomodachi: ['友だち', 'tomodachi', 'amigo/a', 'ともだち'], tenki: ['天気', 'tenki', 'tiempo (clima)', 'てんき'],
  ame: ['雨', 'ame', 'lluvia', 'あめ'], ookii: ['大きい', 'ōkii', 'grande', 'おおきい'], me: ['目', 'me', 'ojo', 'め'], te: ['手', 'te', 'mano', 'て'],
  nanji: ['何時', 'nanji', '¿qué hora?', 'なんじ'], ima: ['今', 'ima', 'ahora', 'いま'], sanji: ['三時', 'sanji', 'las tres', 'さんじ'],
  gakusei: ['学生', 'gakusei', 'estudiante', 'がくせい'], sannin: ['三人', 'sannin', 'tres personas', 'さんにん']
};
const T_ISHA = ['いしゃ', 'isha', 'médico/a'], T_II = ['いい', 'ii', 'bueno'], T_ONIGIRI = ['おにぎり', 'onigiri', 'onigiri'];
P('j_kyou_getsu', 'Hoy es lunes.', [T_J.kyou, T_WA, T_J.getsu, T_DESU]);
P('j_nanyoubi', '¿Qué día es hoy?', [T_J.kyou, T_WA, T_J.nanyou, T_DESU, T_KA]);
P('j_ramen_sen', 'El ramen cuesta mil yenes.', [T_K.ramen, T_WA, T_J.sen, T_DESU]);
P('j_sanji', 'Son las tres.', [T_J.sanji, T_DESU]);
P('j_nanji', '¿Qué hora es?', [T_J.ima, T_J.nanji, T_DESU, T_KA]);
P('j_nihonjin', 'No soy japonés.', [T_WATASHI, T_WA, T_J.nihonjin, T_JA, T_ARIMASEN]);
P('j_otousan', 'Mi padre es profesor.', [T_WATASHI, T_NO, T_J.otousan, T_WA, T_J.sensei, T_DESU]);
P('j_okaasan', 'Mi madre es médico.', [T_WATASHI, T_NO, T_J.okaasan, T_WA, T_ISHA, T_DESU]);

// ---------- lecturas ----------
TX('j_familia', 'Mi familia', [
  ['', [T_WATASHI, T_WA, ['ケン', 'Ken', 'Ken'], T_DESU], 'Soy Ken.'],
  ['', [T_J.otousan, T_WA, T_J.sensei, T_DESU], 'Mi padre es profesor.'],
  ['', [T_J.okaasan, T_MO, T_J.sensei, T_DESU], 'Mi madre también es profesora.'],
  ['', [T_J.tomodachi, T_WA, T_J.nihonjin, T_DESU], 'Mi amigo es japonés.'],
  ['', [T_J.tomodachi, T_NO, T_J.me, T_WA, T_J.ookii, T_DESU], 'Los ojos de mi amigo son grandes.']
], [
  ['¿Quién es profesor/a?', ['Su padre y su madre', 'Solo su padre', 'Su amigo', 'Nadie'], 0],
  ['¿De dónde es el amigo?', ['De Japón', 'De China', 'De España', 'No lo dice'], 0],
  ['¿Cómo son los ojos del amigo?', ['Grandes', 'Pequeños', 'Azules', 'No lo dice'], 0]
]);
TX('j_hoy', 'Hoy y el tiempo', [
  ['', [T_J.kyou, T_WA, T_J.getsu, T_DESU], 'Hoy es lunes.'],
  ['', [T_J.tenki, T_WA, T_II, T_DESU], 'Hace buen tiempo.'],
  ['', [T_J.sui, T_WA, T_J.ame, T_DESU], 'El miércoles llueve.'],
  ['', [T_J.ame, T_WA, T_SUKI, T_JA, T_ARIMASEN], 'No me gusta la lluvia.']
], [
  ['¿Qué día es hoy?', ['Lunes', 'Miércoles', 'Domingo', 'Viernes'], 0],
  ['¿Cómo está el tiempo hoy?', ['Bueno', 'Lluvioso', 'Frío', 'No lo dice'], 0],
  ['¿Qué día llueve?', ['El miércoles', 'El lunes', 'El domingo', 'Ninguno'], 0],
  ['¿Le gusta la lluvia?', ['No', 'Sí', 'Mucho', 'No lo dice'], 0]
]);
TX('j_tienda', 'En la tienda', [
  ['Cliente', [['すみません', 'sumimasen', 'disculpe'], T_K.ramen, T_WA, ['いくら', 'ikura', '¿cuánto?'], T_DESU, T_KA], 'Disculpe, ¿cuánto cuesta el ramen?'],
  ['Tienda', [T_J.sen, T_DESU], 'Son mil yenes.'],
  ['Cliente', [T_ONIGIRI, T_WA, ['いくら', 'ikura', '¿cuánto?'], T_DESU, T_KA], '¿Y el onigiri?'],
  ['Tienda', [T_J.hyaku, T_DESU], 'Son cien yenes.'],
  ['Cliente', [T_ONIGIRI, T_WO, ['ふたつ', 'futatsu', 'dos'], T_KUDA], 'Dos onigiri, por favor.'],
  ['Tienda', [T_J.nihyaku, T_DESU], 'Son doscientos yenes.']
], [
  ['¿Cuánto cuesta el ramen?', ['1.000 yenes', '100 yenes', '200 yenes', '10.000 yenes'], 0],
  ['¿Cuánto cuesta un onigiri?', ['100 yenes', '1.000 yenes', '200 yenes', '10 yenes'], 0],
  ['¿Cuánto pagan por dos onigiri?', ['200 yenes', '100 yenes', '1.000 yenes', '2.000 yenes'], 0]
]);
TX('j_dojo', 'En el dōjō', [
  ['', [T_J.sensei, T_WA, T_J.nihonjin, T_DESU], 'El profesor es japonés.'],
  ['', [T_J.sensei, T_NO, T_J.te, T_WA, T_J.ookii, T_DESU], 'Las manos del profesor son grandes.'],
  ['', [T_J.gakusei, T_WA, T_J.sannin, T_DESU], 'Los estudiantes son tres.'],
  ['', [T_WATASHI, T_MO, T_J.gakusei, T_DESU], 'Yo también soy estudiante.']
], [
  ['¿Quién es japonés?', ['El profesor', 'Los estudiantes', 'Nadie', 'Todos'], 0],
  ['¿Cuántos estudiantes hay?', ['Tres', 'Dos', 'Cinco', 'Diez'], 0],
  ['¿Cómo son las manos del profesor?', ['Grandes', 'Pequeñas', 'Frías', 'No lo dice'], 0]
]);

// ---------- unidades ----------
const J = (id, title, sub, icon, items, note) => ({ id, title, sub, icon, items, note });
UNITS.push(
  { id: 'u14', title: 'Kanji I · Números', sub: 'Del 1 al 10.000 y el yen', lessons: [
    J('l_j1', '一 二 三 四 五', '1 a 5', '一', ['j_一','j_二','j_三','j_四','j_五'],
      { title: 'Los kanji', body: 'Los **kanji** son caracteres chinos que se usan en japonés. Cada uno tiene un **significado** y normalmente **dos tipos de lectura**:\n\n• **On** (de origen chino, en katakana): イチ\n• **Kun** (japonesa, en hiragana): ひと\n\nNo te agobies: no hay que memorizarlas por separado. Aprenderás cada kanji **dentro de palabras**, y la lectura viene sola.' }),
    J('l_jw1', 'Contar con kanji', '一つ, 二つ, 三つ…', '🍡', ['v_hitotsu','v_futatsu','v_mittsu','v_yottsu','v_itsutsu'],
      { title: 'Las mismas palabras, con kanji', body: 'Ya conoces ひとつ, ふたつ, みっつ. Ahora las ves con kanji: 一**つ**, 二**つ**, 三**つ**.\n\nLas letras en hiragana que van detrás del kanji (つ) se llaman **okurigana**: sirven para saber la lectura.' }),
    J('l_j2', '六 七 八 九 十', '6 a 10', '六', ['j_六','j_七','j_八','j_九','j_十']),
    J('l_jw2', 'Seis, siete, ocho…', 'Más contar', '🔟', ['v_muttsu','v_nanatsu','v_yattsu','v_kokonotsu','v_juu']),
    J('l_j3', '百 千 万 円 年', 'Cien, mil, diez mil, yen, año', '円', ['j_百','j_千','j_万','j_円','j_年']),
    J('l_jw3', 'Precios y años', '¡Ya puedes leer una etiqueta!', '💴', ['v_hyaku','v_sen','v_ichiman','v_hyakuen','v_sen_en','v_sannen'])
  ]},
  { id: 'u15', title: 'Kanji II · Naturaleza y días', sub: 'Sol, luna, fuego, agua y árbol', lessons: [
    J('l_j4', '日 月 火 水 木', 'Sol, luna, fuego, agua, árbol', '日', ['j_日','j_月','j_火','j_水','j_木']),
    J('l_jw4', 'Elementos', 'Palabras con kanji', '🔥', ['v_tsuki','v_hi_fire','v_mizu','v_ki','v_hi_sun']),
    J('l_j5', '金 土 山 川 田', 'Oro, tierra, monte, río, arrozal', '山', ['j_金','j_土','j_山','j_川','j_田']),
    J('l_jw5', 'Monte, río y volcán', 'Más palabras', '🌋', ['v_yama','v_kawa','v_tanbo','v_kazan','v_tsuchi','v_okane']),
    J('l_j6', 'Días de la semana (1)', '曜 + lunes a jueves', '曜', ['j_曜','v_getsu','v_ka','v_sui','v_moku'],
      { title: 'Los días de la semana', body: 'Los días llevan un **elemento** + **曜日** (yōbi):\n\n月 (luna) → **lunes**\n火 (fuego) → **martes**\n水 (agua) → **miércoles**\n木 (árbol) → **jueves**\n金 (oro) → **viernes**\n土 (tierra) → **sábado**\n日 (sol) → **domingo**\n\nEs el mismo orden de los planetas que usaba la astrología.' }),
    J('l_j7', 'Días de la semana (2)', 'Viernes a domingo', '日', ['v_kin','v_do','v_nichi'])
  ]},
  { id: 'u16', title: 'Kanji III · Personas', sub: 'Familia y escuela', lessons: [
    J('l_j8', '人 男 女 子 友', 'Persona, hombre, mujer, niño, amigo', '人', ['j_人','j_男','j_女','j_子','j_友']),
    J('l_jw8', 'Personas', 'Palabras con kanji', '👥', ['v_hito','v_otoko','v_onna','v_kodomo','v_tomodachi','v_sannin']),
    J('l_j9', '父 母 先 生 学', 'Padre, madre, antes, vida, estudiar', '学', ['j_父','j_母','j_先','j_生','j_学']),
    J('l_jw9', 'Familia y escuela', 'Palabras con kanji', '🏫', ['v_otousan','v_okaasan','v_sensei','v_gakusei','v_ichinensei','v_sengetsu'])
  ]},
  { id: 'u17', title: 'Kanji IV · Cuerpo y tamaños', sub: 'Ojo, mano, grande, pequeño', lessons: [
    J('l_j10', '目 耳 口 手 足', 'Ojo, oreja, boca, mano, pie', '目', ['j_目','j_耳','j_口','j_手','j_足']),
    J('l_jw10', 'El cuerpo', 'Palabras con kanji', '🖐️', ['v_me','v_mimi','v_kuchi','v_te','v_ashi','v_jinkou']),
    J('l_j11', '大 小 上 下 中', 'Grande, pequeño, arriba, abajo, dentro', '大', ['j_大','j_小','j_上','j_下','j_中']),
    J('l_jw11', 'Tamaños y lugares', 'Palabras con kanji', '📐', ['v_ookii','v_chiisai','v_ue','v_shita','v_naka','v_otona'])
  ]},
  { id: 'u18', title: 'Kanji V · Mi mundo', sub: 'País, hora, clima y animales', lessons: [
    J('l_j12', '本 国 今 何 時', 'Libro, país, ahora, qué, hora', '本', ['j_本','j_国','j_今','j_何','j_時']),
    J('l_jw12', 'Japón y la hora', 'Palabras con kanji', '🗾', ['v_nihon','v_nihonjin','v_hon','v_kyou','v_nanji','v_chuugoku']),
    J('l_j13', '雨 花 空 天 気', 'Lluvia, flor, cielo, cielo, energía', '雨', ['j_雨','j_花','j_空','j_天','j_気']),
    J('l_jw13', 'El tiempo', 'Palabras con kanji', '🎆', ['v_ame','v_hana','v_sora','v_tenki','v_ooame','v_hanabi']),
    J('l_j14', '犬 猫 魚 肉 米', 'Perro, gato, pez, carne, arroz', '犬', ['j_犬','j_猫','j_魚','j_肉','j_米']),
    J('l_jw14', 'Animales y comida', 'Palabras con kanji', '🐱', ['v_inu','v_neko','v_sakana','v_niku','v_kome','v_koinu'])
  ]},
  { id: 'u19', title: 'Lecturas con kanji', sub: 'Ahora lees de verdad', lessons: [
    J('l_jp1', 'Frases con kanji (1)', 'Días, precios y horas', '💬', ['p_j_kyou_getsu','p_j_nanyoubi','p_j_ramen_sen','p_j_sanji','p_j_nanji'],
      { title: 'Preguntar la hora y el día', body: '• **何** significa «qué» y se usa en 何曜日 (¿qué día de la semana?) y 何時 (¿qué hora?).\n• **時** se usa para las horas: 三**時** = las tres.\n• Para el precio: **千円**, **百円**…' }),
    J('l_jp2', 'Frases con kanji (2)', 'Familia y nacionalidad', '👨‍👩‍👦', ['p_j_nihonjin','p_j_otousan','p_j_okaasan']),
    J('l_jt1', 'Lectura: Mi familia', 'Con kanji', '📖', ['t_j_familia']),
    J('l_jt2', 'Lectura: Hoy y el tiempo', 'Días y clima', '📖', ['t_j_hoy']),
    J('l_jt3', 'Lectura: En la tienda', '¡Precios en yenes!', '📖', ['t_j_tienda']),
    J('l_jt4', 'Lectura: En el dōjō', 'Con kanji de personas', '📖', ['t_j_dojo'])
  ]}
);
UNITS.slice(-6).forEach(u => u.lessons.forEach(l => { l.unit = u.id; LESSON_BY_ID[l.id] = l; }));
