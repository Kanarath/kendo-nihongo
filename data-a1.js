// Ampliación A1: ない y た, hora y números, adjetivos, lugar, preguntas y saludos. Se carga después de data-te.js.

// ---------- formas ない y た de todos los verbos ----------
const A_COL = { 'う': 'わ', 'く': 'か', 'ぐ': 'が', 'す': 'さ', 'つ': 'た', 'ぬ': 'な', 'ぶ': 'ば', 'む': 'ま', 'る': 'ら' };
function naiOf(s, grp, id) {
  if (id === 'd_aru') return 'ない';
  if (grp === 2) return s.slice(0, -1) + 'ない';
  if (grp === 3) return s === '来る' ? '来ない' : s === 'くる' ? 'こない' : s.slice(0, -2) + 'しない';
  return s.slice(0, -1) + A_COL[s.slice(-1)] + 'ない';
}
Object.values(ITEMS).filter(i => i.kind === 'verb').forEach(v => {
  v.nai = naiOf(v.jp, v.grp, v.id); v.naiKana = naiOf(v.kana, v.grp, v.id);
  v.ta = v.te.replace(/て$/, 'た').replace(/で$/, 'だ'); v.taKana = v.teKana.replace(/て$/, 'た').replace(/で$/, 'だ');
});

// ---------- diccionario ampliado y frases con diccionario ----------
function addDict(str) {
  str.split('\n').forEach(line => { const p = line.split('|'); if (p.length < 3) return; DICT[p[0]] = p[3] ? [p[0], p[1], p[2], p[3]] : [p[0], p[1], p[2]]; });
}
function PH(id, es, txt) {
  P(id, es, txt.split(/\s+/).filter(Boolean).map(k => { const e = DICT[k]; if (!e) throw new Error('Falta en el diccionario: «' + k + '» en la frase «' + es + '»'); return e; }));
}
addDict(`より|yori|que (comparación) / de parte de
な|na|(une el adjetivo con el sustantivo)
肉|niku|carne|にく
食べない|tabenai|no comer|たべない
行かない|ikanai|no ir|いかない
わからない|wakaranai|no entender
食べた|tabeta|comí|たべた
飲んだ|nonda|bebí|のんだ
行った|itta|fui|いった
会った|atta|vi a / me encontré|あった
見た|mita|vi|みた
おきた|okita|me levanté
かえった|kaetta|volví
ねた|neta|dormí
食べないで|tabenaide|no coma|たべないで
話さないで|hanasanaide|no hable|はなさないで
入らないで|hairanaide|no entre|はいらないで
ねないで|nenaide|no duerma
七時半|shichijihan|las siete y media|しちじはん
八時半|hachijihan|las ocho y media|はちじはん
六時半|rokujihan|las seis y media|ろくじはん
八時|hachiji|las ocho|はちじ
九時|kuji|las nueve|くじ
十時|jūji|las diez|じゅうじ
五時|goji|las cinco|ごじ
五分|gofun|cinco minutos|ごふん
十分|juppun|diez minutos|じゅっぷん
午前|gozen|por la mañana (a.m.)|ごぜん
午後|gogo|por la tarde (p.m.)|ごご
来週|raishū|la semana que viene|らいしゅう
先週|senshū|la semana pasada|せんしゅう
毎週|maishū|cada semana|まいしゅう
朝ごはん|asagohan|desayuno|あさごはん
月曜日|getsuyōbi|lunes|げつようび
水曜日|suiyōbi|miércoles|すいようび
金曜日|kinyōbi|viernes|きんようび
かえります|kaerimasu|volver (a casa)
はたらきます|hatarakimasu|trabajar
いそがしい|isogashii|ocupado
いそがしく|isogashiku|(ocupado, forma negativa)
おいしく|oishiku|(rico, forma negativa)
おいしかった|oishikatta|estaba rico
たのしかった|tanoshikatta|fue divertido
さむかった|samukatta|hacía frío
ながかった|nagakatta|era largo
たかかった|takakatta|era caro
大きく|ōkiku|(grande, forma negativa)|おおきく
大きかった|ōkikatta|era grande|おおきかった
小さい|chiisai|pequeño|ちいさい
小さかった|chiisakatta|era pequeño|ちいさかった
やさしかった|yasashikatta|era amable
たかく|takaku|(caro, forma negativa)
むずかしく|muzukashiku|(difícil, forma negativa)
ひろく|hiroku|(amplio, forma negativa)
たかい|takai|caro
あたらしい|atarashii|nuevo
ひろい|hiroi|amplio
えいが|eiga|película
まち|machi|ciudad / barrio
きれい|kirei|bonito / limpio
しずか|shizuka|tranquilo
にぎやか|nigiyaka|animado
じょうず|jōzu|hábil
へた|heta|torpe
きらい|kirai|no gustar / detestar
だいすき|daisuki|me encanta
きょうと|Kyōto|Kioto
白い|shiroi|blanco|しろい
黒い|kuroi|negro|くろい
赤い|akai|rojo|あかい
ベッド|beddo|cama
つくえ|tsukue|escritorio
いす|isu|silla
かばん|kaban|mochila
ねこ|neko|gato
ノート|nōto|cuaderno
上|ue|encima|うえ
下|shita|debajo|した
中|naka|dentro|なか
前|mae|delante|まえ
右|migi|derecha|みぎ
だれ|dare|¿quién?
どうして|dōshite|¿por qué?
どこ|doko|¿dónde?
いつ|itsu|¿cuándo?
ただいま|tadaima|ya estoy en casa
おかえりなさい|okaerinasai|bienvenido de vuelta
いただきます|itadakimasu|buen provecho
ごちそうさまでした|gochisōsama deshita|gracias por la comida
おやすみなさい|oyasuminasai|buenas noches (al dormir)
いってきます|ittekimasu|ya me voy
いってらっしゃい|itterasshai|que te vaya bien
はたらきます|hatarakimasu|trabajar
お母さん|okāsan|madre|おかあさん
お父さん|otōsan|padre|おとうさん
人|hito|persona|ひと
店|mise|tienda|みせ
やすい|yasui|barato
すし|sushi|sushi
へや|heya|habitación
さかな|sakana|pescado`);

// ---------- kanji nuevos ----------
K('J20', '分', 'minuto / dividir', 'ふん', 'fun', ['ブン', 'フン'], ['わ'], 'Un cuchillo que divide algo en partes: dividir, minuto.');
K('J20', '半', 'mitad / y media', 'はん', 'han', ['ハン'], [], 'Un 八 que parte algo por la mitad.');
K('J20', '午', 'mediodía', 'ご', 'go', ['ゴ'], [], 'Un mortero con su mano: se muele el arroz a mediodía. 午前 = antes del mediodía, 午後 = después.');
K('J20', '前', 'antes / delante', 'まえ', 'mae', ['ゼン'], ['まえ'], 'Lo que va por delante, como una luna que se adelanta.');
K('J20', '後', 'después / detrás', 'あと', 'ato', ['ゴ', 'コウ'], ['あと', 'うし'], 'Pasos cortos dejados atrás: lo que viene después.');
K('J21', '週', 'semana', 'しゅう', 'shū', ['シュウ'], [], 'Un camino que da vueltas y vuelve: la semana se repite.');
K('J21', '右', 'derecha', 'みぎ', 'migi', ['ウ', 'ユウ'], ['みぎ'], 'Una mano (ナ) y una boca (口): se come con la derecha.');
K('J21', '左', 'izquierda', 'ひだり', 'hidari', ['サ'], ['ひだり'], 'Una mano (ナ) y una herramienta (工): la izquierda ayuda.');
K('J21', '外', 'fuera', 'そと', 'soto', ['ガイ'], ['そと'], 'Una tarde (夕) y un adivino (卜): se mira desde fuera.');
K('J22', '赤', 'rojo', 'あか', 'aka', ['セキ'], ['あか'], 'Tierra (土) sobre fuego (火): rojo ardiente.');
K('J22', '青', 'azul / verde', 'あお', 'ao', ['セイ'], ['あお'], 'Un brote verde bajo una luna: azul-verde.');
K('J22', '白', 'blanco', 'しろ', 'shiro', ['ハク'], ['しろ'], 'Un sol (日) con un rayo arriba: blanco, brillante.');
K('J22', '黒', 'negro', 'くろ', 'kuro', ['コク'], ['くろ'], 'Un horno con hollín: negro.');

// ---------- palabras ----------
V('juuichi', '十一', 'じゅういち', 'jūichi', 'once (11)', 'N11'); V('juuni', '十二', 'じゅうに', 'jūni', 'doce (12)', 'N11');
V('nijuu', '二十', 'にじゅう', 'nijū', 'veinte (20)', 'N11'); V('sanjuu', '三十', 'さんじゅう', 'sanjū', 'treinta (30)', 'N11');
V('gojuu', '五十', 'ごじゅう', 'gojū', 'cincuenta (50)', 'N11'); V('kyuujuukyuu', '九十九', 'きゅうじゅうきゅう', 'kyūjūkyū', 'noventa y nueve (99)', 'N11');
V('sanbyaku', '三百', 'さんびゃく', 'sanbyaku', '300', 'N12'); V('roppyaku', '六百', 'ろっぴゃく', 'roppyaku', '600', 'N12');
V('happyaku', '八百', 'はっぴゃく', 'happyaku', '800', 'N12'); V('sanzen', '三千', 'さんぜん', 'sanzen', '3.000', 'N12');
V('hassen', '八千', 'はっせん', 'hassen', '8.000', 'N12'); V('goman_en', '五万円', 'ごまんえん', 'goman\'en', '50.000 yenes', 'N12');
V('ichiji', '一時', 'いちじ', 'ichiji', 'la una', 'H1'); V('niji', '二時', 'にじ', 'niji', 'las dos', 'H1'); V('yoji', '四時', 'よじ', 'yoji', 'las cuatro', 'H1');
V('shichiji', '七時', 'しちじ', 'shichiji', 'las siete', 'H1'); V('kuji', '九時', 'くじ', 'kuji', 'las nueve', 'H1'); V('juuniji', '十二時', 'じゅうにじ', 'jūniji', 'las doce', 'H1');
V('ippun', '一分', 'いっぷん', 'ippun', '1 minuto', 'H2'); V('gofun', '五分', 'ごふん', 'gofun', '5 minutos', 'H2'); V('juppun', '十分', 'じゅっぷん', 'juppun', '10 minutos', 'H2');
V('sanjihan', '三時半', 'さんじはん', 'sanjihan', 'las tres y media', 'H2'); V('gozen', '午前', 'ごぜん', 'gozen', 'por la mañana (a.m.)', 'H2'); V('gogo', '午後', 'ごご', 'gogo', 'por la tarde (p.m.)', 'H2');
V('konshuu', '今週', 'こんしゅう', 'konshū', 'esta semana', 'H3'); V('raishuu', '来週', 'らいしゅう', 'raishū', 'la semana que viene', 'H3');
V('senshuu', '先週', 'せんしゅう', 'senshū', 'la semana pasada', 'H3'); V('maishuu', '毎週', 'まいしゅう', 'maishū', 'cada semana', 'H3');
WN('itsu', 'いつ', 'itsu', '¿cuándo?', 'H3');
V('akai', '赤い', 'あかい', 'akai', 'rojo', 'C1'); V('aoi', '青い', 'あおい', 'aoi', 'azul', 'C1'); V('shiroi', '白い', 'しろい', 'shiroi', 'blanco', 'C1'); V('kuroi', '黒い', 'くろい', 'kuroi', 'negro', 'C1');
WN('midori', 'みどり', 'midori', 'verde', 'C1');
WN('hiroi', 'ひろい', 'hiroi', 'amplio / espacioso', 'A1'); WN('semai', 'せまい', 'semai', 'estrecho', 'A1'); WN('nagai', 'ながい', 'nagai', 'largo', 'A1');
WN('isogashii', 'いそがしい', 'isogashii', 'ocupado', 'A1'); WN('muzukashii', 'むずかしい', 'muzukashii', 'difícil', 'A1'); WN('tanoshii', 'たのしい', 'tanoshii', 'divertido', 'A1');
WN('kirei', 'きれい', 'kirei', 'bonito / limpio', 'A2', 'Es un adjetivo な: se une al sustantivo con な (きれい**な** 花).');
WN('shizuka', 'しずか', 'shizuka', 'tranquilo / silencioso', 'A2'); WN('nigiyaka', 'にぎやか', 'nigiyaka', 'animado / bullicioso', 'A2');
WN('yuumei', 'ゆうめい', 'yūmei', 'famoso', 'A2'); WN('genki', 'げんき', 'genki', 'con energía / bien', 'A2');
WN('kirai', 'きらい', 'kirai', 'no gustar / detestar', 'A3'); WN('daisuki', 'だいすき', 'daisuki', 'me encanta', 'A3');
WN('jouzu', 'じょうず', 'jōzu', 'hábil / bueno en algo', 'A3', 'Se usa con が: 日本語**が** じょうず です.'); WN('heta', 'へた', 'heta', 'torpe / flojo en algo', 'A3');
WN('tsukue', 'つくえ', 'tsukue', 'escritorio', 'L1'); WN('isu', 'いす', 'isu', 'silla', 'L1'); WN('kaban', 'かばん', 'kaban', 'mochila / bolso', 'L1');
WN('heya', 'へや', 'heya', 'habitación', 'L1'); WN('teeburu', 'テーブル', 'tēburu', 'mesa', 'L1'); WN('beddo', 'ベッド', 'beddo', 'cama', 'L1');
V('mae', '前', 'まえ', 'mae', 'delante / antes', 'L2'); WN('ushiro', 'うしろ', 'ushiro', 'detrás', 'L2'); V('migi', '右', 'みぎ', 'migi', 'derecha', 'L2');
V('hidari', '左', 'ひだり', 'hidari', 'izquierda', 'L2'); V('soto', '外', 'そと', 'soto', 'fuera', 'L2'); WN('tonari', 'となり', 'tonari', 'al lado', 'L2');
WN('dare', 'だれ', 'dare', '¿quién?', 'Q1'); WN('dore', 'どれ', 'dore', '¿cuál? (de varios)', 'Q1'); WN('doushite', 'どうして', 'dōshite', '¿por qué?', 'Q1');
WN('dou', 'どう', 'dō', '¿cómo?', 'Q1'); WN('dono', 'どの', 'dono', '¿qué / cuál? (+ nombre)', 'Q1');
WN('itadakimasu', 'いただきます', 'itadakimasu', 'buen provecho (antes de comer)', 'S1'); WN('gochisousama', 'ごちそうさまでした', 'gochisōsama deshita', 'gracias por la comida (al terminar)', 'S1');
WN('ittekimasu', 'いってきます', 'ittekimasu', 'ya me voy (al salir de casa)', 'S1'); WN('itterasshai', 'いってらっしゃい', 'itterasshai', 'que te vaya bien (respuesta)', 'S1');
WN('tadaima', 'ただいま', 'tadaima', 'ya estoy en casa (al llegar)', 'S1'); WN('okaerinasai', 'おかえりなさい', 'okaerinasai', 'bienvenido de vuelta (respuesta)', 'S1');
WN('oyasumi', 'おやすみなさい', 'oyasuminasai', 'buenas noches (al dormir)', 'S2'); WN('ohayougozaimasu', 'おはようございます', 'ohayō gozaimasu', 'buenos días (educado)', 'S2');
WN('gomennasai', 'ごめんなさい', 'gomennasai', 'lo siento', 'S2'); WN('sayounara', 'さようなら', 'sayōnara', 'adiós', 'S2');
WN('jaamata', 'じゃあまた', 'jā mata', 'hasta luego', 'S2'); WN('ogenki', 'おげんきですか', 'ogenki desu ka', '¿cómo está usted?', 'S2');

// ---------- frases ----------
PH('a_n_niku', 'No como carne. (informal)', '肉 を 食べない');
PH('a_n_gakkou', 'Hoy no voy a la escuela. (informal)', '今日 学校 に 行かない');
PH('a_n_wakaranai', 'No entiendo. (informal)', 'わからない');
PH('a_n_tabeta', 'Ayer comí ramen. (informal)', '昨日 ラーメン を 食べた');
PH('a_n_nonda', 'Ayer bebí té. (informal)', '昨日 おちゃ を 飲んだ');
PH('a_n_itta', 'Fui a la escuela. (informal)', '学校 に 行った');
PH('a_n_koko', 'No coma aquí, por favor.', 'ここ で 食べないで ください');
PH('a_n_hanasu', 'No hable, por favor.', '話さないで ください');
PH('a_n_hairu', 'No entre, por favor.', '入らないで ください');
PH('a_n_neru', 'No se duerma, por favor.', 'ねないで ください');
PH('a_h_1', 'Son las siete y media.', '七時半 です');
PH('a_h_2', 'Son las diez y cinco.', '十時 五分 です');
PH('a_h_3', 'A las nueve voy a la escuela.', '九時 に 学校 に 行きます');
PH('a_h_4', 'A las tres de la tarde veo a un amigo.', '午後 三時 に 友だち に 会います');
PH('a_h_5', 'La semana que viene voy a Japón.', '来週 日本 に 行きます');
PH('a_h_6', 'La semana pasada comí ramen.', '先週 ラーメン を 食べました');
PH('a_h_7', 'Cada domingo hago kendo.', '毎週 日曜日 に けんどう を します');
PH('a_h_8', 'Me levanto a las ocho y media.', '八時半 に おきます');
PH('a_a_1', 'El ramen no está rico.', 'ラーメン は おいしく ありません');
PH('a_a_2', 'El libro no es caro.', '本 は たかく ありません');
PH('a_a_3', 'Esta habitación no es grande.', 'この へや は 大きく ありません');
PH('a_a_4', 'Hoy no estoy ocupado.', '今日 は いそがしく ありません');
PH('a_a_5', 'El japonés no es difícil.', '日本語 は むずかしく ありません');
PH('a_p_1', 'El ramen estaba rico.', 'ラーメン は おいしかった です');
PH('a_p_2', 'El kendo fue divertido.', 'けんどう は たのしかった です');
PH('a_p_3', 'Ayer hacía frío.', '昨日 は さむかった です');
PH('a_p_4', 'La película era larga.', 'えいが は ながかった です');
PH('a_p_5', 'La tienda era cara.', '店 は たかかった です');
PH('a_na_1', 'Esta flor es bonita.', 'この 花 は きれい です');
PH('a_na_2', 'Aquí es tranquilo.', 'ここ は しずか です');
PH('a_na_3', 'Es una flor bonita.', 'きれい な 花 です');
PH('a_na_4', 'Soy bueno en japonés.', 'わたし は 日本語 が じょうず です');
PH('a_na_5', 'Soy torpe con el kendo.', 'わたし は けんどう が へた です');
PH('a_na_6', 'La ciudad está animada.', 'まち は にぎやか です');
PH('a_nn_1', 'Aquí no es tranquilo.', 'ここ は しずか じゃ ありません');
PH('a_nn_2', 'Ayer estaba tranquilo.', '昨日 は しずか でした');
PH('a_nn_3', 'El pescado me desagrada.', 'さかな は きらい です');
PH('a_nn_4', 'Me encanta el ramen.', 'ラーメン が だいすき です');
PH('a_l_1', 'Hay un libro sobre el escritorio.', 'つくえ の 上 に 本 が あります');
PH('a_l_2', 'El gato está debajo de la silla.', 'ねこ は いす の 下 に います');
PH('a_l_3', 'Hay un cuaderno dentro de la mochila.', 'かばん の 中 に ノート が あります');
PH('a_l_4', 'Hay una tienda delante de la estación.', '駅 の 前 に 店 が あります');
PH('a_l_5', 'El profesor está dentro de la escuela.', '先生 は 学校 の 中 に います');
PH('a_l_6', 'Mi amigo está a mi derecha.', '友だち は わたし の 右 に います');
PH('a_q_1', '¿De quién es aquel libro?', 'あれ は だれ の 本 です か');
PH('a_q_2', '¿Cuándo vas a Japón?', 'いつ 日本 に 行きます か');
PH('a_q_3', '¿Dónde está la estación?', '駅 は どこ に あります か');
PH('a_q_4', '¿Dónde está el profesor?', '先生 は どこ に います か');
PH('a_q_5', '¿Por qué estudias japonés?', 'どうして 日本語 を べんきょう します か');
PH('a_t_1', 'Trabajo de nueve a cinco.', '九時 から 五時 まで はたらきます');
PH('a_t_2', 'De la estación a la escuela son diez minutos.', '駅 から 学校 まで 十分 です');
PH('a_t_3', 'Como ramen con un amigo.', '友だち と ラーメン を 食べます');
PH('a_t_4', 'El ramen es más caro que el sushi.', 'ラーメン は すし より たかい です');
PH('a_t_5', 'Voy a la escuela con mi madre.', 'お母さん と 学校 に 行きます');

// ---------- lecturas ----------
TXL('a_reglas', 'Reglas del dōjō', [
  ['Profesor', 'みなさん、 ここ で 食べないで ください', 'Todos, no coman aquí, por favor.'],
  ['Profesor', '話さないで ください', 'No hablen, por favor.'],
  ['Alumno', 'すみません。 わからない です', 'Disculpe. No entiendo.'],
  ['Profesor', 'だいじょうぶ です。 見て ください', 'No pasa nada. Miren.'],
  ['Profesor', '学校 の 中 で ねないで ください', 'No duerman dentro de la escuela.'],
  ['Alumno', 'はい、 わかりました', 'Sí, entendido.']
], [
  ['¿Qué no se puede hacer en el dōjō?', ['Comer, hablar y dormir', 'Entrar', 'Mirar', 'Leer'], 0],
  ['¿Qué dice el alumno?', ['Que no entiende', 'Que tiene hambre', 'Que se va', 'Nada'], 0],
  ['¿Cómo termina?', ['El alumno entiende', 'Se enfada', 'Se va', 'Sin respuesta'], 0]
]);
TXL('a_diario', 'Mi diario', [
  ['', '今日 は 朝 おきた', 'Hoy me levanté por la mañana.'],
  ['', 'おちゃ を 飲んだ', 'Bebí té.'],
  ['', '学校 に 行った', 'Fui a la escuela.'],
  ['', '友だち に 会った', 'Vi a mi amigo.'],
  ['', 'ラーメン を 食べた', 'Comí ramen.'],
  ['', '家 に かえった', 'Volví a casa.'],
  ['', 'テレビ を 見た。 そして ねた', 'Vi la tele. Y luego dormí.'],
  ['', 'とても たのしい 日 でした', 'Fue un día muy divertido.']
], [
  ['¿Qué bebe por la mañana?', ['Té', 'Café', 'Zumo', 'Agua'], 0],
  ['¿Qué come?', ['Ramen', 'Sushi', 'Pan', 'Curry'], 0],
  ['¿Qué hace antes de dormir?', ['Ve la tele', 'Lee', 'Estudia', 'Cocina'], 0],
  ['¿Cómo fue el día?', ['Muy divertido', 'Aburrido', 'Triste', 'Cansado'], 0]
]);
TXL('a_horario', 'Mi horario', [
  ['', '毎朝 六時半 に おきます', 'Cada mañana me levanto a las seis y media.'],
  ['', '七時 に 朝ごはん を 食べます', 'A las siete desayuno.'],
  ['', '八時 に 家 を 出ます', 'A las ocho salgo de casa.'],
  ['', '九時 から 午後 五時 まで 学校 に います', 'Estoy en la escuela de nueve a cinco de la tarde.'],
  ['', '午後 六時 に 家 に かえります', 'A las seis de la tarde vuelvo a casa.'],
  ['', '七時 に ごはん を 食べます', 'A las siete ceno.'],
  ['', '十時 に ねます', 'A las diez me duermo.']
], [
  ['¿A qué hora se levanta?', ['A las 6:30', 'A las 7:00', 'A las 8:00', 'A las 9:00'], 0],
  ['¿Hasta qué hora está en la escuela?', ['Hasta las 5 de la tarde', 'Hasta las 9', 'Hasta las 6', 'Hasta las 10'], 0],
  ['¿A qué hora sale de casa?', ['A las 8', 'A las 7', 'A las 9', 'A las 6'], 0],
  ['¿A qué hora se duerme?', ['A las 10', 'A las 9', 'A las 11', 'A las 8'], 0]
]);
TXL('a_semana', 'La semana que viene', [
  ['', '来週 は いそがしい です', 'La semana que viene estoy ocupado.'],
  ['', '月曜日 は 学校 に 行きます', 'El lunes voy a la escuela.'],
  ['', '水曜日 の 午後 は けんどう の れんしゅう です', 'El miércoles por la tarde es la práctica de kendo.'],
  ['', '金曜日 は 友だち に 会います', 'El viernes veo a mis amigos.'],
  ['', '土曜日 は 家 で 休みます', 'El sábado descanso en casa.'],
  ['', '日曜日 は ラーメン を 食べます', 'El domingo como ramen.']
], [
  ['¿Cómo está la semana que viene?', ['Ocupada', 'Tranquila', 'Aburrida', 'No lo dice'], 0],
  ['¿Qué hace el miércoles por la tarde?', ['Práctica de kendo', 'Ir a la escuela', 'Ver a amigos', 'Descansar'], 0],
  ['¿Qué día ve a sus amigos?', ['El viernes', 'El lunes', 'El sábado', 'El domingo'], 0],
  ['¿Qué día descansa en casa?', ['El sábado', 'El viernes', 'El lunes', 'El domingo'], 0]
]);
TXL('a_heya', 'Mi habitación nueva', [
  ['', 'これ は わたし の へや です', 'Esta es mi habitación.'],
  ['', 'へや は あたらしい です', 'La habitación es nueva.'],
  ['', 'へや は ひろく ありません。 でも きれい です', 'No es amplia. Pero es bonita.'],
  ['', 'ベッド は 白い です', 'La cama es blanca.'],
  ['', 'つくえ は 黒い です', 'El escritorio es negro.'],
  ['', 'かばん は 赤い です', 'La mochila es roja.'],
  ['', 'へや は とても しずか です', 'La habitación es muy tranquila.'],
  ['', 'わたし は この へや が だいすき です', 'Me encanta esta habitación.']
], [
  ['¿Cómo es la habitación?', ['Nueva, no amplia, bonita', 'Grande y vieja', 'Pequeña y fea', 'Ruidosa'], 0],
  ['¿De qué color es la cama?', ['Blanca', 'Negra', 'Roja', 'Azul'], 0],
  ['¿De qué color es la mochila?', ['Roja', 'Blanca', 'Negra', 'Verde'], 0],
  ['¿Qué opina de su habitación?', ['Le encanta', 'No le gusta', 'Es indiferente', 'No lo dice'], 0]
]);
TXL('a_kioto', 'Un viaje a Kioto', [
  ['', '先週 日本 に 行きました', 'La semana pasada fui a Japón.'],
  ['', 'きょうと は とても きれい でした', 'Kioto era muy bonito.'],
  ['', 'ホテル は 小さかった です。 でも きれい でした', 'El hotel era pequeño. Pero bonito.'],
  ['', 'ラーメン は おいしかった です', 'El ramen estaba rico.'],
  ['', 'でも すし は たかかった です', 'Pero el sushi era caro.'],
  ['', '人 は とても やさしかった です', 'La gente era muy amable.'],
  ['', 'また 行きたい です', 'Quiero volver a ir.']
], [
  ['¿Cuándo fue a Japón?', ['La semana pasada', 'Ayer', 'El año pasado', 'Mañana'], 0],
  ['¿Cómo era el hotel?', ['Pequeño pero bonito', 'Grande y caro', 'Feo', 'Ruidoso'], 0],
  ['¿Qué estaba rico?', ['El ramen', 'El sushi', 'El pan', 'El curry'], 0],
  ['¿Cómo era la gente?', ['Muy amable', 'Fría', 'Ruidosa', 'No lo dice'], 0]
]);
TXL('a_casa', 'En mi casa', [
  ['Ken', 'ただいま', '¡Ya estoy en casa!'],
  ['Madre', 'おかえりなさい', 'Bienvenido.'],
  ['Madre', 'ごはん は つくえ の 上 に あります', 'La comida está sobre la mesa.'],
  ['Ken', 'いただきます', '¡Buen provecho!'],
  ['Ken', 'ねこ は どこ に います か', '¿Dónde está el gato?'],
  ['Madre', 'いす の 下 に います よ', 'Está debajo de la silla.'],
  ['Ken', 'ごちそうさまでした', 'Gracias por la comida.'],
  ['Ken', 'おやすみなさい', 'Buenas noches.']
], [
  ['¿Qué dice Ken al llegar?', ['Ya estoy en casa', 'Buenos días', 'Adiós', 'Me voy'], 0],
  ['¿Dónde está la comida?', ['Sobre la mesa', 'En la nevera', 'En la mochila', 'Fuera'], 0],
  ['¿Dónde está el gato?', ['Debajo de la silla', 'Sobre la cama', 'Fuera', 'Dentro de la mochila'], 0],
  ['¿Qué dice al terminar de comer?', ['Gracias por la comida', 'Buen provecho', 'Adiós', 'Buenos días'], 0]
]);
TXL('a_ciudad', 'Mi ciudad', [
  ['', 'わたし の まち は 小さい です', 'Mi ciudad es pequeña.'],
  ['', 'でも にぎやか です', 'Pero es animada.'],
  ['', '駅 の 前 に 店 が あります', 'Delante de la estación hay tiendas.'],
  ['', '駅 から 家 まで 十分 です', 'De la estación a mi casa son diez minutos.'],
  ['', '友だち と ラーメン を 食べます', 'Como ramen con mis amigos.'],
  ['', 'ラーメン は すし より やすい です', 'El ramen es más barato que el sushi.']
], [
  ['¿Cómo es la ciudad?', ['Pequeña y animada', 'Grande y tranquila', 'Fea', 'Fría'], 0],
  ['¿Cuánto tarda de la estación a casa?', ['10 minutos', '5 minutos', '1 hora', '20 minutos'], 0],
  ['¿Con quién come ramen?', ['Con amigos', 'Solo', 'Con su madre', 'Con el profesor'], 0],
  ['¿Qué es más barato?', ['El ramen', 'El sushi', 'Los dos igual', 'Ninguno'], 0]
]);

// ---------- unidades ----------
UNITS.push(
  { id: 'u28', title: 'Verbos IV · ない y た', sub: 'No y pasado de los verbos', lessons: [
    JF('l_n1', 'Grupo 2 y 3 → ない', '食べる → 食べない', '🚫', ['d_taberu','d_miru','d_deru','d_neru','d_suru','d_kuru'],
      { title: 'La forma ない (negativo informal)', body: 'La forma **ない** niega el verbo. Es la versión informal de 〜ません.\n\n• **Grupo 2**: quita る y añade ない → 食べる → 食べ**ない**\n• **Grupo 3**: する → **しない**; 来る (くる) → **来ない (こない)**\n\nEn el siguiente grupo, la regla es distinta.' }, 'nai'),
    JF('l_n2', 'Grupo 1 → ない (1)', '飲む → 飲まない', '🚫', ['d_nomu','d_yomu','d_kaku','d_kiku','d_hanasu'],
      { title: 'Grupo 1: la última sílaba pasa a あ', body: 'En el Grupo 1, la última sílaba cambia a su versión de la fila **あ** y se añade **ない**:\n\nむ → **ま**: 飲む → 飲**まない**\nく → **か**: 書く → 書**かない**\nす → **さ**: 話す → 話**さない**\nる → **ら**, ぶ → **ば**, ぬ → **な**, ぐ → **が**, つ → **た**' }, 'nai'),
    JF('l_n3', 'Grupo 1 → ない (2)', '買う → 買わない', '🚫', ['d_kau','d_au','d_iu','d_yasumu','d_asobu'],
      { title: 'う → わ', body: 'Los verbos en **う** usan **わ**, no あ:\n\n買**う** → 買**わない**\n会**う** → 会**わない**\n言**う** → 言**わない**' }, 'nai'),
    JF('l_n4', 'ない con trampas', 'ある → ない, 入る → 入らない', '⚠️', ['d_aru','d_hairu','d_iku','d_matsu','d_kaeru','d_wakaru'],
      { title: 'Casos especiales', body: '• **ある** (haber) → **ない** (no hay). Es una excepción total.\n• **入る / かえる / わかる** → る → **ら**: 入**らない**.\n• **まつ** → つ → **た**: ま**たない**.' }, 'nai'),
    JF('l_n5', 'Pasado た (1)', '食べる → 食べた', '⏪', ['d_taberu','d_miru','d_deru','d_neru','d_suru','d_kuru'],
      { title: 'La forma た (pasado informal)', body: 'La forma **た** es igual que la forma **て** pero acabada en **た / だ**:\n\n食べ**て** → 食べ**た**\n飲ん**で** → 飲ん**だ**\n書い**て** → 書い**た**\n行っ**て** → 行っ**た**\nし**て** → し**た**\n\nEs el pasado informal de 〜ました.' }, 'ta'),
    JF('l_n6', 'Pasado た (2)', '飲む → 飲んだ', '⏪', ['d_nomu','d_yomu','d_kaku','d_hanasu','d_kau','d_iku'], null, 'ta'),
    J('l_n7', 'Informal: no y ayer', 'ない y た en frases', '💬', ['p_a_n_niku','p_a_n_gakkou','p_a_n_wakaranai','p_a_n_tabeta','p_a_n_nonda','p_a_n_itta']),
    J('l_n8', 'No hagas… (〜ないで ください)', 'Pedir que no se haga algo', '✋', ['p_a_n_koko','p_a_n_hanasu','p_a_n_hairu','p_a_n_neru'],
      { title: '〜ないで ください', body: '**Forma ない + で + ください** = «por favor, no…»\n\n食べない**で ください** = No coma, por favor.\n入らない**で ください** = No entre, por favor.' }),
    J('l_nt1', 'Lectura: Reglas del dōjō', 'Con ないで ください', '📖', ['t_a_reglas']),
    J('l_nt2', 'Lectura: Mi diario', 'Con el pasado た', '📖', ['t_a_diario'])
  ]},
  { id: 'u29', title: 'Números, hora y semana', sub: 'Del 11 en adelante y las horas', lessons: [
    J('l_h1', '分 半 午 前 後', 'Minuto, mitad, mediodía, antes, después', '分', ['j_分','j_半','j_午','j_前','j_後']),
    J('l_h2', 'Del 11 al 99', 'Se construyen con 十', '🔢', ['v_juuichi','v_juuni','v_nijuu','v_sanjuu','v_gojuu','v_kyuujuukyuu'],
      { title: 'Números del 11 al 99', body: 'Es muy regular, se «suma»:\n\n• 11 = 十 + 一 = **じゅういち**\n• 20 = 二 + 十 = **にじゅう** (2 × 10)\n• 35 = 三十五 = **さんじゅうご** (3 × 10 + 5)\n• 99 = 九十九 = **きゅうじゅうきゅう**\n\n¡Mucho más fácil que en otros idiomas!' }),
    J('l_h3', 'Centenas y millares', '三百, 六百, 八千…', '💯', ['v_sanbyaku','v_roppyaku','v_happyaku','v_sanzen','v_hassen','v_goman_en'],
      { title: 'Algunos números cambian', body: 'Con 百 y 千 hay lecturas irregulares:\n\n• 300 = **さんびゃく**, 600 = **ろっぴゃく**, 800 = **はっぴゃく**\n• 3.000 = **さんぜん**, 8.000 = **はっせん**\n\nLos demás son regulares: 二百 にひゃく, 五百 ごひゃく, 二千 にせん.' }),
    J('l_h4', 'Las horas', '一時, 二時, 四時, 七時, 九時…', '🕒', ['v_ichiji','v_niji','v_yoji','v_shichiji','v_kuji','v_juuniji'],
      { title: 'Las horas con 時', body: 'Número + **時 (じ)** = hora.\n\nTres horas irregulares:\n• 4 → **よじ** (no よんじ)\n• 7 → **しちじ**\n• 9 → **くじ** (no きゅうじ)' }),
    J('l_h5', 'Minutos y mañana/tarde', '一分, 十分, 午前, 午後', '⏱️', ['v_ippun','v_gofun','v_juppun','v_sanjihan','v_gozen','v_gogo'],
      { title: 'Minutos y «y media»', body: 'Número + **分 (ふん / ぷん)** = minutos.\n\n• 1 → **いっぷん**, 5 → **ごふん**, 10 → **じゅっぷん**\n• **半 (はん)** = y media: 三時**半** = las tres y media.\n• **午前** = a.m., **午後** = p.m.' }),
    J('l_h6', '週 右 左 外', 'Semana, derecha, izquierda, fuera', '週', ['j_週','j_右','j_左','j_外']),
    J('l_h7', 'La semana', 'Esta, la que viene, la pasada', '📅', ['v_konshuu','v_raishuu','v_senshuu','v_maishuu','w_itsu']),
    J('l_h8', 'Hora y horario', 'Decir cuándo ocurre algo', '⏰', ['p_a_h_1','p_a_h_2','p_a_h_3','p_a_h_4'],
      { title: 'La partícula に con horas', body: 'Con horas y momentos precisos se usa **に**:\n\n九時**に** 学校に 行きます = a las nueve voy a la escuela.\n\nCon 今日, 明日, 昨日, 毎日… no se usa に.' }),
    J('l_h9', 'La semana', 'Pasado, presente y futuro', '🗓️', ['p_a_h_5','p_a_h_6','p_a_h_7','p_a_h_8']),
    J('l_ht1', 'Lectura: Mi horario', 'Horas y rutina', '📖', ['t_a_horario']),
    J('l_ht2', 'Lectura: La semana que viene', 'Días y planes', '📖', ['t_a_semana'])
  ]},
  { id: 'u30', title: 'Adjetivos y colores', sub: 'い, な, negativo y pasado', lessons: [
    J('l_a1', '赤 青 白 黒', 'Rojo, azul, blanco, negro', '赤', ['j_赤','j_青','j_白','j_黒']),
    J('l_a2', 'Colores', 'Palabras con kanji', '🎨', ['v_akai','v_aoi','v_shiroi','v_kuroi','w_midori']),
    J('l_a3', 'Más adjetivos い', 'Amplio, estrecho, largo, ocupado…', '📏', ['w_hiroi','w_semai','w_nagai','w_isogashii','w_muzukashii','w_tanoshii']),
    J('l_a4', 'Adjetivos な', 'Bonito, tranquilo, animado…', '🌸', ['w_kirei','w_shizuka','w_nigiyaka','w_yuumei','w_genki'],
      { title: 'Adjetivos い y adjetivos な', body: 'Hay **dos tipos** de adjetivos:\n\n• **い**: terminan en い y se usan directamente: おいしい ラーメン.\n• **な**: no terminan en い (きれい, しずか, げんき) y se unen al sustantivo con **な**: きれい**な** 花.\n\nCon です funcionan igual: この 花 は きれい です.' }),
    J('l_a5', 'Gustos y habilidades', 'Odiar, encantar, hábil, torpe', '❤️', ['w_kirai','w_daisuki','w_jouzu','w_heta'],
      { title: 'Con が', body: 'Gustos y habilidades llevan **が**:\n\nわたし は ラーメン **が** だいすき です.\nわたし は 日本語 **が** じょうず です.' }),
    J('l_a6', 'Adjetivo い en negativo', 'おいしくありません', '❌', ['p_a_a_1','p_a_a_2','p_a_a_3','p_a_a_4','p_a_a_5'],
      { title: 'Negativo de adjetivos い', body: 'Cambia **い → く** y añade **ありません**:\n\nおいし**い** → おいし**く ありません** (no está rico)\nたか**い** → たか**く ありません** (no es caro)\n\nExcepción: いい → よく ありません.' }),
    J('l_a7', 'Adjetivo い en pasado', 'おいしかったです', '⏪', ['p_a_p_1','p_a_p_2','p_a_p_3','p_a_p_4','p_a_p_5'],
      { title: 'Pasado de adjetivos い', body: 'Cambia **い → かった** y añade **です**:\n\nおいし**い** → おいし**かった です** (estaba rico)\nたのし**い** → たのし**かった です** (fue divertido)' }),
    J('l_a8', 'Frases con adjetivos な', 'Bonito, tranquilo, hábil…', '🌷', ['p_a_na_1','p_a_na_2','p_a_na_3','p_a_na_4','p_a_na_5','p_a_na_6']),
    J('l_a9', 'な: negativo y pasado', 'じゃありません, でした', '🔁', ['p_a_nn_1','p_a_nn_2','p_a_nn_3','p_a_nn_4'],
      { title: 'Adjetivos な en negativo y pasado', body: 'Se comportan como sustantivos:\n\nしずか **です** → しずか **じゃ ありません** (no es tranquilo)\nしずか **でした** (era tranquilo)' }),
    J('l_at1', 'Lectura: Mi habitación nueva', 'Adjetivos y colores', '📖', ['t_a_heya']),
    J('l_at2', 'Lectura: Un viaje a Kioto', 'Pasado con adjetivos', '📖', ['t_a_kioto'])
  ]},
  { id: 'u31', title: 'Lugar, preguntas y saludos', sub: 'Dónde está, quién, cuándo, por qué', lessons: [
    J('l_p1', 'En la habitación', 'Mesa, silla, mochila, cama…', '🛏️', ['w_tsukue','w_isu','w_kaban','w_heya','w_teeburu','w_beddo']),
    J('l_p2', 'Posiciones', 'Delante, detrás, derecha, izquierda…', '🧭', ['v_mae','w_ushiro','v_migi','v_hidari','v_soto','w_tonari']),
    J('l_p3', 'Hay… / Está…', 'あります y います con lugar', '📍', ['p_a_l_1','p_a_l_2','p_a_l_3','p_a_l_4','p_a_l_5','p_a_l_6'],
      { title: 'あります y います con lugar', body: '**[lugar] に [cosa] が あります** = hay [cosa] en [lugar]\n**[ser vivo] は [lugar] に います** = [ser vivo] está en [lugar]\n\nPara la posición: **[objeto] の 上 / 下 / 中 / 前 に** = encima / debajo / dentro / delante de [objeto].\n\nつくえ **の 上 に** 本 が あります = hay un libro encima del escritorio.' }),
    J('l_p4', 'Preguntar', 'Quién, cuál, por qué, cómo', '❓', ['w_dare','w_dore','w_doushite','w_dou','w_dono']),
    J('l_p5', 'Frases con preguntas', 'Quién, cuándo, dónde, por qué', '🙋', ['p_a_q_1','p_a_q_2','p_a_q_3','p_a_q_4','p_a_q_5']),
    J('l_p6', 'Saludos de casa', 'Itadakimasu, tadaima…', '🏠', ['w_itadakimasu','w_gochisousama','w_ittekimasu','w_itterasshai','w_tadaima','w_okaerinasai'],
      { title: 'Frases hechas del día a día', body: 'En Japón hay frases que se dicen **siempre** en situaciones concretas:\n\n• **いただきます** antes de comer, **ごちそうさまでした** al terminar.\n• **いってきます** al salir de casa, **いってらっしゃい** de respuesta.\n• **ただいま** al llegar, **おかえりなさい** de respuesta.' }),
    J('l_p7', 'Más saludos', 'Buenas noches, adiós, perdón…', '👋', ['w_oyasumi','w_ohayougozaimasu','w_gomennasai','w_sayounara','w_jaamata','w_ogenki']),
    J('l_p8', 'から, まで, と, より', 'Desde, hasta, con, que', '🔗', ['p_a_t_1','p_a_t_2','p_a_t_3','p_a_t_4','p_a_t_5'],
      { title: 'Cuatro partículas útiles', body: '• **から** = desde / **まで** = hasta: 九時 から 五時 まで\n• **と** = con / y: 友だち と ラーメン を 食べます\n• **より** = que (comparar): ラーメン は すし より たかい です' }),
    J('l_pt1', 'Lectura: En mi casa', 'Saludos y lugares', '📖', ['t_a_casa']),
    J('l_pt2', 'Lectura: Mi ciudad', 'Partículas y comparaciones', '📖', ['t_a_ciudad'])
  ]}
);
UNITS.slice(-4).forEach(u => u.lessons.forEach(l => { l.unit = u.id; LESSON_BY_ID[l.id] = l; }));
