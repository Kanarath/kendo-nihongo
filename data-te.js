// Forma de diccionario, grupos de verbos, forma て y sus usos. Se carga después de data-reading.js.
// VB(id, diccionario, lectura, romaji, significado, grupo, forma て, lectura de て, grupo de distractores, nota)
function VB(id, jp, kana, rom, es, grp, te, teKana, note) {
  addItem({ id: 'd_' + id, kind: 'verb', group: 'D' + grp, jp, kana, rom, es, grp, te, teKana, say: kana, note });
}
// Grupo 2 (ichidan): se quita る y se añade て
VB('taberu', '食べる', 'たべる', 'taberu', 'comer', 2, '食べて', 'たべて', 'Grupo 2: termina en える. Se quita る → 食べ + ます / て.');
VB('miru', '見る', 'みる', 'miru', 'ver / mirar', 2, '見て', 'みて', 'Grupo 2: termina en いる/える (aquí el kanji lleva る).');
VB('deru', '出る', 'でる', 'deru', 'salir', 2, '出て', 'でて', 'Grupo 2.');
VB('okiru', 'おきる', 'おきる', 'okiru', 'levantarse', 2, 'おきて', 'おきて', 'Grupo 2: termina en いる.');
VB('neru', 'ねる', 'ねる', 'neru', 'dormir', 2, 'ねて', 'ねて', 'Grupo 2.');
VB('iru', 'いる', 'いる', 'iru', 'estar (seres vivos)', 2, 'いて', 'いて', 'Es el います de siempre en forma de diccionario.');
// Grupo 1 (godan): cambia la última sílaba
VB('nomu', '飲む', 'のむ', 'nomu', 'beber', 1, '飲んで', 'のんで', 'Grupo 1: む → んで.');
VB('yomu', '読む', 'よむ', 'yomu', 'leer', 1, '読んで', 'よんで', 'Grupo 1: む → んで.');
VB('kaku', '書く', 'かく', 'kaku', 'escribir', 1, '書いて', 'かいて', 'Grupo 1: く → いて.');
VB('kiku', '聞く', 'きく', 'kiku', 'escuchar / preguntar', 1, '聞いて', 'きいて', 'Grupo 1: く → いて.');
VB('hanasu', '話す', 'はなす', 'hanasu', 'hablar', 1, '話して', 'はなして', 'Grupo 1: す → して.');
VB('kau', '買う', 'かう', 'kau', 'comprar', 1, '買って', 'かって', 'Grupo 1: う → って.');
VB('au', '会う', 'あう', 'au', 'encontrarse', 1, '会って', 'あって', 'Grupo 1: う → って.');
VB('iu', '言う', 'いう', 'iu', 'decir', 1, '言って', 'いって', 'Grupo 1: う → って.');
VB('yasumu', '休む', 'やすむ', 'yasumu', 'descansar', 1, '休んで', 'やすんで', 'Grupo 1: む → んで.');
VB('asobu', 'あそぶ', 'あそぶ', 'asobu', 'jugar / divertirse', 1, 'あそんで', 'あそんで', 'Grupo 1: ぶ → んで.');
VB('hairu', '入る', 'はいる', 'hairu', 'entrar', 1, '入って', 'はいって', '¡Trampa! Termina en いる pero es Grupo 1: る → って.');
VB('kaeru', 'かえる', 'かえる', 'kaeru', 'volver (a casa)', 1, 'かえって', 'かえって', '¡Trampa! Termina en える pero es Grupo 1: る → って.');
VB('wakaru', 'わかる', 'わかる', 'wakaru', 'entender', 1, 'わかって', 'わかって', 'Grupo 1: る → って.');
VB('iku', '行く', 'いく', 'iku', 'ir', 1, '行って', 'いって', '¡Excepción! く normalmente da いて, pero 行く da 行って.');
VB('matsu', 'まつ', 'まつ', 'matsu', 'esperar', 1, 'まって', 'まって', 'Grupo 1: つ → って.');
VB('aru', 'ある', 'ある', 'aru', 'haber / tener (cosas)', 1, 'あって', 'あって', 'Grupo 1: る → って.');
VB('hataraku', 'はたらく', 'はたらく', 'hataraku', 'trabajar', 1, 'はたらいて', 'はたらいて', 'Grupo 1: く → いて.');
VB('nugu', 'ぬぐ', 'ぬぐ', 'nugu', 'quitarse (la ropa)', 1, 'ぬいで', 'ぬいで', 'Grupo 1: ぐ → いで (con dakuten).');
// Grupo 3: irregulares
VB('suru', 'する', 'する', 'suru', 'hacer', 3, 'して', 'して', 'Grupo 3, irregular: する → して.');
VB('kuru', '来る', 'くる', 'kuru', 'venir', 3, '来て', 'きて', 'Grupo 3, irregular: 来る (くる) → 来て (きて).');
VB('benkyou', 'べんきょうする', 'べんきょうする', 'benkyō suru', 'estudiar', 3, 'べんきょうして', 'べんきょうして', 'Cualquier palabra + する es Grupo 3.');

// ---------- frases ----------
const T_E = {
  asa: tv('朝', 'asa', 'por la mañana', 'あさ'), chotto: ['ちょっと', 'chotto', 'un momento'], matte: ['まって', 'matte', 'espere'], yukkuri: ['ゆっくり', 'yukkuri', 'despacio'],
  hanashite: tv('話して', 'hanashite', 'hable', 'はなして'), mou: ['もう', 'mō', 'otra vez'], ichido: ['いちど', 'ichido', 'una vez'],
  itte: tv('言って', 'itte', 'diga', 'いって'), koko: ['ここ', 'koko', 'aquí'], kaite: tv('書いて', 'kaite', 'escriba', 'かいて'), kono: ['この', 'kono', 'este'],
  yonde: tv('読んで', 'yonde', 'lea', 'よんで'), haitte: tv('入って', 'haitte', 'entre', 'はいって'), ima: tv('今', 'ima', 'ahora', 'いま'),
  tabete: tv('食べて', 'tabete', 'comiendo', 'たべて'), imasu: ['います', 'imasu', 'estar (seres vivos)'], mite: tv('見て', 'mite', 'viendo', 'みて'),
  sunde: ['すんで', 'sunde', 'viviendo'], shite: ['して', 'shite', 'haciendo'], benkyou: ['べんきょう', 'benkyō', 'estudio'], ii: ['いい', 'ii', 'bien'],
  okite: ['おきて', 'okite', 'me levanto y'], itte2: tv('行って', 'itte', 'voy y', 'いって'), katte: tv('買って', 'katte', 'compro y', 'かって'),
  yonde2: tv('読んで', 'yonde', 'leo y', 'よんで'), nemasu: ['ねます', 'nemasu', 'dormir'], tabetai: tv('食べたい', 'tabetai', 'quiero comer', 'たべたい'),
  ikitai: tv('行きたい', 'ikitai', 'quiero ir', 'いきたい'), mitai: tv('見たい', 'mitai', 'quiero ver', 'みたい'), nomitai: tv('飲みたい', 'nomitai', 'quiero beber', 'のみたい'),
  aitai: tv('会いたい', 'aitai', 'quiero ver a', 'あいたい'), iku: tv('行く', 'iku', 'ir', 'いく'), taberu: tv('食べる', 'taberu', 'comer', 'たべる'),
  yomu: tv('読む', 'yomu', 'leer', 'よむ'), miru: tv('見る', 'miru', 'ver', 'みる'), neru: ['ねる', 'neru', 'dormir'], iku2: tv('行く', 'iku', 'ir', 'いく')
};
// て ください
P('d_matte', 'Espere un momento, por favor.', [T_E.chotto, T_E.matte, T_KUDA]);
P('d_yukkuri', 'Hable despacio, por favor.', [T_E.yukkuri, T_E.hanashite, T_KUDA]);
P('d_mouichido', 'Dígalo otra vez, por favor.', [T_E.mou, T_E.ichido, T_E.itte, T_KUDA]);
P('d_kaite', 'Escriba aquí, por favor.', [T_E.koko, T_NI, T_E.kaite, T_KUDA]);
P('d_yonde', 'Lea este libro, por favor.', [T_E.kono, T_V.hon, T_WO, T_E.yonde, T_KUDA]);
P('d_haitte', 'Entre aquí, por favor.', [T_E.koko, T_NI, T_E.haitte, T_KUDA]);
// て います
P('d_tabete', 'Ahora estoy comiendo ramen.', [T_WATASHI, T_WA, T_E.ima, T_K.ramen, T_WO, T_E.tabete, T_E.imasu]);
P('d_yonde_imasu', 'Mi amigo está leyendo un libro.', [T_V.tomodachi, T_WA, T_V.hon, T_WO, T_E.yonde, T_E.imasu]);
P('d_hanashite', 'El profesor está hablando.', [T_V.sensei, T_WA, T_E.hanashite, T_E.imasu]);
P('d_mite', 'Ken está viendo la tele.', [['ケン', 'Ken', 'Ken'], T_WA, T_V.tv, T_WO, T_E.mite, T_E.imasu]);
P('d_sunde', 'Vivo en Japón.', [T_WATASHI, T_WA, ['日本', 'nihon', 'Japón', 'にほん'], T_NI, T_E.sunde, T_E.imasu]);
P('d_benkyou', 'Estoy estudiando japonés.', [T_WATASHI, T_WA, T_V.nihongo, T_WO, T_E.benkyou, T_E.shite, T_E.imasu]);
// て も いい です か
P('d_hairu_ii', '¿Puedo entrar?', [T_E.haitte, T_MO, T_E.ii, T_DESU, T_KA]);
P('d_taberu_ii', '¿Puedo comer este ramen?', [T_E.kono, T_K.ramen, T_WO, T_E.tabete, T_MO, T_E.ii, T_DESU, T_KA]);
P('d_miru_ii', 'Puedes ver la tele.', [T_V.tv, T_WO, T_E.mite, T_MO, T_E.ii, T_DESU]);
P('d_kaku_ii', '¿Puedo escribir aquí?', [T_E.koko, T_NI, T_E.kaite, T_MO, T_E.ii, T_DESU, T_KA]);
// secuencias con て
P('d_okite', 'Me levanto y bebo té.', [T_E.asa, T_E.okite, T_V.ocha, T_WO, T_V.nomu]);
P('d_itte', 'Voy a la estación y veo a mi amigo.', [T_V.eki, T_NI, T_E.itte2, T_V.tomodachi, T_NI, T_V.au]);
P('d_yonde_neru', 'Leo un libro y me duermo.', [T_V.hon, T_WO, T_E.yonde2, T_E.nemasu]);
P('d_katte', 'Compro pan y lo como.', [T_V.pan, T_WO, T_E.katte, T_V.taberu]);
// ～たい
P('d_ramen_tai', 'Quiero comer ramen.', [T_K.ramen, T_WO, T_E.tabetai, T_DESU]);
P('d_nihon_tai', 'Quiero ir a Japón.', [['日本', 'nihon', 'Japón', 'にほん'], T_NI, T_E.ikitai, T_DESU]);
P('d_wanpiisu_tai', 'Quiero ver One Piece.', [T_K.wan, T_WO, T_E.mitai, T_DESU]);
P('d_mizu_tai', 'Quiero beber agua.', [T_V.mizu, T_WO, T_E.nomitai, T_DESU]);
P('d_tomodachi_tai', 'Quiero ver a mi amigo.', [T_V.tomodachi, T_NI, T_E.aitai, T_DESU]);
// habla informal (forma de diccionario)
P('d_i_gakkou', 'Hoy voy a la escuela. (informal)', [T_V.kyou, T_V.gakkou, T_NI, T_E.iku]);
P('d_i_ramen', 'Como ramen cada día. (informal)', [T_V.mainichi, T_K.ramen, T_WO, T_E.taberu]);
P('d_i_hon', 'Leo un libro. (informal)', [T_V.hon, T_WO, T_E.yomu]);
P('d_i_tv', 'Veo la tele. (informal)', [T_V.tv, T_WO, T_E.miru]);

// ---------- lecturas ----------
`ちょっと|chotto|un poco / un momento
もう|mō|otra vez
いちど|ichido|una vez
こう|kō|así
わかりました|wakarimashita|entendí
だいじょうぶ|daijōbu|no pasa nada / está bien
だから|dakara|por eso
あとで|ato de|luego
もしもし|moshi moshi|¿diga? (al teléfono)
ああ|ā|ah
よ|yo|(te lo aseguro)
ノート|nōto|cuaderno
見て|mite|mire / viendo|みて
来て|kite|venga|きて
入って|haitte|entre|はいって
読んで|yonde|lea / leyendo|よんで
話して|hanashite|hable / hablando|はなして
言って|itte|diga|いって
食べて|tabete|comiendo|たべて
書きます|kakimasu|escribir|かきます
書いて|kaite|escriba|かいて
おきて|okite|me levanto y
かえって|kaette|vuelvo y
行って|itte|voy y|いって
まって|matte|espere
して|shite|haciendo / hacer
すんで|sunde|viviendo
いません|imasen|no estar
います|imasu|estar
読みましょう|yomimashō|leamos|よみましょう
食べたい|tabetai|quiero comer|たべたい
見たい|mitai|quiero ver|みたい
行きたい|ikitai|quiero ir|いきたい
会いたい|aitai|quiero ver a|あいたい
話したい|hanashitai|quiero hablar|はなしたい
食べません|tabemasen|no comer|たべません
わたし の|x|x`.split('\n').forEach(line => {
  const p = line.split('|'); if (p.length < 3 || p[1] === 'x') return;
  DICT[p[0]] = p[3] ? [p[0], p[1], p[2], p[3]] : [p[0], p[1], p[2]];
});

TXL('d_estudio', 'Un día de estudio', [
  ['', '毎朝 おきて おちゃ を 飲みます', 'Cada mañana me levanto y bebo té.'],
  ['', '学校 に 行って 日本語 を べんきょう して います', 'Voy a la escuela y estudio japonés.'],
  ['', '先生 は ゆっくり 話して います', 'El profesor habla despacio.'],
  ['', 'わたし は 本 を 読んで ノート に 書きます', 'Leo un libro y escribo en el cuaderno.'],
  ['', 'ひる ごはん は 友だち と ラーメン を 食べて います', 'A mediodía como ramen con un amigo.'],
  ['', '夜 は 家 に かえって テレビ を 見て ねます', 'Por la noche vuelvo a casa, veo la tele y duermo.'],
  ['', '日本語 は むずかしい です。 でも たのしい です', 'El japonés es difícil. Pero es divertido.']
], [
  ['¿Qué hace en la escuela?', ['Estudia japonés', 'Juega al kendo', 'Cocina', 'Duerme'], 0],
  ['¿Con quién come al mediodía?', ['Con un amigo', 'Con el profesor', 'Solo', 'Con su madre'], 0],
  ['¿Qué hace por la noche?', ['Vuelve a casa, ve la tele y duerme', 'Va al kendo', 'Estudia', 'Sale de fiesta'], 0],
  ['¿Qué opina del japonés?', ['Difícil pero divertido', 'Fácil y aburrido', 'Caro', 'No lo dice'], 0]
]);
TXL('d_instrucciones', 'Instrucciones en el dōjō', [
  ['Profesor', 'みなさん、 ここ に 来て ください', 'Todos, vengan aquí, por favor.'],
  ['Alumnos', 'はい', 'Sí.'],
  ['Profesor', 'めん を 見て ください', 'Miren el men, por favor.'],
  ['Profesor', 'ゆっくり 見て ください', 'Miren despacio.'],
  ['Ken', 'すみません。 もう いちど 言って ください', 'Disculpe. Dígalo otra vez, por favor.'],
  ['Profesor', 'はい。 見て ください。 こう です', 'Sí. Miren. Es así.'],
  ['Ken', 'はい、 わかりました', 'Sí, entendido.'],
  ['Profesor', 'じゃあ、 しましょう', 'Bien, hagámoslo.'],
  ['Profesor', 'よく できました', '¡Muy bien!'],
  ['Ken', 'ありがとう ございました', 'Muchas gracias.']
], [
  ['¿Qué pide primero el profesor?', ['Que vengan aquí', 'Que se vayan', 'Que descansen', 'Que escriban'], 0],
  ['¿Qué les pide que miren?', ['El men', 'El kote', 'El libro', 'La tele'], 0],
  ['¿Qué pide Ken?', ['Que lo repita', 'Que hable más rápido', 'Que se calle', 'Nada'], 0],
  ['¿Cómo termina?', ['Con un elogio y un agradecimiento', 'Con una discusión', 'Sin decir nada', 'Con una pregunta'], 0]
]);
TXL('d_telefono', 'Por teléfono', [
  ['Ken', 'もしもし、 ケン です', '¿Diga? Soy Ken.'],
  ['Amigo', 'ああ、 ケン。 げんき です か', 'Ah, Ken. ¿Cómo estás?'],
  ['Ken', 'はい、 げんき です。 今 どこ です か', 'Bien. ¿Dónde estás ahora?'],
  ['Amigo', '今 駅 に います', 'Estoy en la estación.'],
  ['Ken', 'わたし は 家 に います', 'Yo estoy en casa.'],
  ['Ken', 'いっしょ に ラーメン を 食べません か', '¿Comemos ramen juntos?'],
  ['Amigo', 'いい です ね。 ちょっと まって ください', 'Qué bien. Espera un momento.'],
  ['Amigo', '三時 に 家 に 行って も いい です か', '¿Puedo ir a tu casa a las tres?'],
  ['Ken', 'はい、 いい です よ', 'Sí, claro.'],
  ['Amigo', 'ありがとう。 じゃあ、 あとで', 'Gracias. Entonces, hasta luego.']
], [
  ['¿Dónde está el amigo?', ['En la estación', 'En casa', 'En la escuela', 'En el hotel'], 0],
  ['¿Dónde está Ken?', ['En casa', 'En la estación', 'En el dōjō', 'En la tienda'], 0],
  ['¿Qué propone Ken?', ['Comer ramen', 'Ver la tele', 'Ir a la escuela', 'Comprar pan'], 0],
  ['¿A qué hora va el amigo?', ['A las tres', 'A las seis', 'A las siete', 'A las diez'], 0]
]);
TXL('d_viaje', 'Mi viaje a Japón', [
  ['', 'わたし は 日本 に 行きたい です', 'Quiero ir a Japón.'],
  ['', '日本 で ラーメン を 食べたい です', 'En Japón quiero comer ramen.'],
  ['', 'すし も 食べたい です', 'También quiero comer sushi.'],
  ['', 'それから やま を 見たい です', 'Después quiero ver las montañas.'],
  ['', 'さくら の 花 も 見たい です', 'También quiero ver las flores de cerezo.'],
  ['', 'けんどう の 学校 に 行って 先生 に 会いたい です', 'Quiero ir a una escuela de kendo y ver al profesor.'],
  ['', '日本語 を 話したい です', 'Quiero hablar japonés.'],
  ['', 'だから 毎日 日本語 を べんきょう して います', 'Por eso estudio japonés todos los días.']
], [
  ['¿Qué quiere comer?', ['Ramen y sushi', 'Pan y té', 'Curry', 'Pizza'], 0],
  ['¿Qué quiere ver?', ['Montañas y flores de cerezo', 'El mar', 'La tele', 'Nada'], 0],
  ['¿A quién quiere ver en la escuela de kendo?', ['Al profesor', 'A un amigo', 'A su madre', 'A nadie'], 0],
  ['¿Qué hace cada día para prepararse?', ['Estudia japonés', 'Hace kendo', 'Cocina ramen', 'Duerme'], 0]
]);
TXL('d_clase', 'La clase de japonés', [
  ['Profesor', 'みなさん、 本 を 読んで ください', 'Todos, lean el libro, por favor.'],
  ['Ken', 'すみません。 ゆっくり 話して ください', 'Disculpe. Hable despacio, por favor.'],
  ['Profesor', 'はい、 ゆっくり 読みましょう', 'Sí, leamos despacio.'],
  ['Profesor', 'ケン さん、 ここ を 読んで ください', 'Ken, lea aquí, por favor.'],
  ['Ken', 'わたし は 日本語 が むずかしい です', 'Para mí el japonés es difícil.'],
  ['Profesor', 'だいじょうぶ です よ', 'No pasa nada.'],
  ['Profesor', 'ゆっくり 読んで ください', 'Lea despacio.'],
  ['Ken', 'わたし は ケン です。 学生 です', 'Soy Ken. Soy estudiante.'],
  ['Profesor', 'よく できました', '¡Muy bien!']
], [
  ['¿Qué pide el profesor primero?', ['Que lean el libro', 'Que escriban', 'Que hablen', 'Que descansen'], 0],
  ['¿Qué pide Ken?', ['Que hable despacio', 'Que hable más rápido', 'Que cierre el libro', 'Nada'], 0],
  ['¿Qué dice el profesor sobre su dificultad?', ['Que no pasa nada', 'Que es un error', 'Que se vaya', 'Nada'], 0],
  ['¿Cómo acaba la clase?', ['Con un elogio', 'Con un examen', 'Con una queja', 'Sin nada'], 0]
]);

// ---------- unidades ----------
const JF = (id, title, sub, icon, items, note, focus) => Object.assign(J(id, title, sub, icon, items, note), { focus });
UNITS.push(
  { id: 'u25', title: 'Verbos III · Forma de diccionario', sub: 'Los tres grupos de verbos', lessons: [
    JF('l_d1', 'Grupo 2: 食べる, 見る…', 'Seis verbos «ichidan»', '🔑', ['d_taberu','d_miru','d_deru','d_okiru','d_neru','d_iru'],
      { title: 'Los tres grupos de verbos', body: 'La **forma de diccionario** (la que aparece en los diccionarios) termina siempre en **-u**: 食べ**る**, 飲**む**, 行**く**.\n\nTodos los verbos japoneses caen en **3 grupos**:\n\n• **Grupo 1** (godan): terminan en う, く, ぐ, す, つ, ぬ, ぶ, む, る → 飲む, 書く, 話す…\n• **Grupo 2** (ichidan): terminan en **いる / える** → 食べる, 見る, おきる…\n• **Grupo 3**: solo dos irregulares: **する** y **来る** (くる).\n\nEste primer grupo es el más fácil: se quita る y listo (食べ**ます**, 食べ**て**).\n\n⚠️ Ojo: unos pocos verbos que terminan en いる/える son del Grupo 1 (入る, かえる). Los verás enseguida.' }),
    JF('l_d2', 'Grupo 1 (1)', 'Beber, leer, escribir, oír, hablar', '🔓', ['d_nomu','d_yomu','d_kaku','d_kiku','d_hanasu']),
    JF('l_d3', 'Grupo 1 (2)', 'Comprar, ver a, decir, descansar, jugar', '🔓', ['d_kau','d_au','d_iu','d_yasumu','d_asobu']),
    JF('l_d4', 'Grupo 1: ¡con trampas!', 'Entrar, volver, entender, ir…', '⚠️', ['d_hairu','d_kaeru','d_wakaru','d_iku','d_matsu','d_aru'],
      { title: 'Verbos que engañan', body: '• **入る** (はいる) y **かえる** terminan en いる/える, pero son del **Grupo 1**.\n• **行く** (いく) es del Grupo 1 pero tiene una excepción en la forma て: 行**って**.\n\nCuando dudes, usa el diccionario: casi siempre indica el grupo.' }),
    JF('l_d5', 'Más Grupo 1 e irregulares', 'Trabajar, quitarse, hacer, venir, estudiar', '🧩', ['d_hataraku','d_nugu','d_suru','d_kuru','d_benkyou']),
    J('l_d6', 'Habla informal', 'Entre amigos se usa la forma de diccionario', '💬', ['p_d_i_gakkou','p_d_i_ramen','p_d_i_hon','p_d_i_tv'],
      { title: 'Estilo informal', body: 'Entre amigos y familia se usa la **forma de diccionario** en lugar de ます:\n\n• 食べ**ます** (formal) → 食べ**る** (informal)\n• 行き**ます** → 行**く**\n\nTambién en diarios, notas y textos escritos para ti. Con desconocidos y profesores, usa ます.' })
  ]},
  { id: 'u26', title: 'Forma て', sub: 'La conjugación más útil', lessons: [
    JF('l_te1', 'Grupo 2 → て', '食べる → 食べて', '1️⃣', ['d_taberu','d_miru','d_deru','d_okiru','d_neru','d_iru'],
      { title: 'La forma て', body: 'La **forma て** sirve para pedir cosas, hablar de lo que estás haciendo y encadenar acciones.\n\n**Grupo 2**: quita る y añade て.\n\n食べる → 食べ**て**\n見る → 見**て**\nおきる → おき**て**', }, 'te'),
    JF('l_te2', 'う, つ, る → って', '買う → 買って', '2️⃣', ['d_kau','d_au','d_iu','d_matsu','d_hairu','d_kaeru'],
      { title: 'う・つ・る → って', body: 'En el **Grupo 1** depende de la última sílaba:\n\n• **う, つ, る → って**\n  買う → 買**って**, まつ → ま**って**, 入る → 入**って**\n\nTruco: en estos casos la sílaba final «se aprieta» (っ).' }, 'te'),
    JF('l_te3', 'む, ぶ → んで', '飲む → 飲んで', '3️⃣', ['d_nomu','d_yomu','d_yasumu','d_asobu'],
      { title: 'む・ぶ・ぬ → んで', body: '• **む, ぶ, ぬ → んで**\n  飲む → 飲**んで**, あそぶ → あそ**んで**\n\nTruco: el sonido «m/b/n» se vuelve una **ん** nasal.' }, 'te'),
    JF('l_te4', 'く, ぐ, す', '書く → 書いて · 話す → 話して', '4️⃣', ['d_kaku','d_kiku','d_hataraku','d_nugu','d_hanasu','d_iku'],
      { title: 'く・ぐ・す', body: '• **く → いて**: 書く → 書**いて**\n• **ぐ → いで**: ぬぐ → ぬ**いで**\n• **す → して**: 話す → 話**して**\n\n⚠️ Excepción: **行く → 行って** (no 行いて).' }, 'te'),
    JF('l_te5', 'Irregulares y repaso', 'する, 来る…', '5️⃣', ['d_suru','d_kuru','d_benkyou','d_wakaru','d_aru'],
      { title: 'Los irregulares', body: '• **する → して**\n• **来る (くる) → 来て (きて)**\n• Palabra + する: **べんきょうする → べんきょうして**\n\nSon pocos y muy usados: apréndelos de memoria.' }, 'te')
  ]},
  { id: 'u27', title: 'Usos de la forma て', sub: 'Pedir, describir, preguntar y encadenar', lessons: [
    J('l_tu1', '〜て ください', 'Pedir cosas por favor', '🙏', ['p_d_matte','p_d_yukkuri','p_d_mouichido','p_d_kaite','p_d_yonde','p_d_haitte'],
      { title: '〜て ください', body: '**Verbo en て + ください** = «por favor, haz…».\n\nゆっくり 話**して ください** = Hable despacio, por favor.\nちょっと まって **ください** = Espere un momento.' }),
    J('l_tu2', '〜て います', 'Lo que está pasando ahora', '▶️', ['p_d_tabete','p_d_yonde_imasu','p_d_hanashite','p_d_mite','p_d_sunde','p_d_benkyou'],
      { title: '〜て います', body: '**て + います** tiene dos usos:\n\n• Acción en curso: 食べ**て います** = estoy comiendo.\n• Estado continuo: 日本 に すん**で います** = vivo en Japón.' }),
    J('l_tu3', '〜て も いい です か', 'Pedir permiso', '✋', ['p_d_hairu_ii','p_d_taberu_ii','p_d_miru_ii','p_d_kaku_ii'],
      { title: '〜て も いい です か', body: '**て + も いい です か** = «¿puedo…?».\n\n入って も いい です か。 = ¿Puedo entrar?\n\nSin か, es dar permiso: 見て も いい です = puedes ver.' }),
    J('l_tu4', '〜て, 〜て…', 'Encadenar acciones', '🔗', ['p_d_okite','p_d_itte','p_d_yonde_neru','p_d_katte'],
      { title: 'Encadenar con て', body: 'La forma **て** une acciones en orden, como «y luego»:\n\n朝 おき**て**、 おちゃ を 飲みます = Me levanto **y** bebo té.\n\nSolo el **último** verbo lleva el tiempo (ます, ました…).' }),
    J('l_tu5', '〜たい', 'Decir lo que quieres hacer', '⭐', ['p_d_ramen_tai','p_d_nihon_tai','p_d_wanpiisu_tai','p_d_mizu_tai','p_d_tomodachi_tai'],
      { title: '〜たい (quiero…)', body: 'Quita **ます** y añade **たい**:\n\n食べ**ます** → 食べ**たい** = quiero comer\n行き**ます** → 行き**たい** = quiero ir\n\nFrase: [cosa] を 食べたい です. (A veces が en lugar de を.)' }),
    J('l_tt1', 'Lectura: Un día de estudio', 'て para encadenar', '📖', ['t_d_estudio']),
    J('l_tt2', 'Lectura: Instrucciones en el dōjō', 'て ください', '📖', ['t_d_instrucciones']),
    J('l_tt3', 'Lectura: Por teléfono', 'Un diálogo con permiso', '📖', ['t_d_telefono']),
    J('l_tt4', 'Lectura: Mi viaje a Japón', '〜たい', '📖', ['t_d_viaje']),
    J('l_tt5', 'Lectura: La clase de japonés', 'Con todo lo nuevo', '📖', ['t_d_clase'])
  ]}
);
UNITS.slice(-3).forEach(u => u.lessons.forEach(l => { l.unit = u.id; LESSON_BY_ID[l.id] = l; }));
