// Cierre del N5: contadores, fechas, más kanji, vocabulario y verbos. Se carga después de data-a1.js.

// ---------- kanji ----------
K('J23', '個', 'pieza (contador)', 'こ', 'ko', ['コ'], [], 'Una persona (亻) con algo sólido (固): una pieza suelta. Cuenta objetos pequeños.');
K('J23', '枚', 'hoja / cosa plana (contador)', 'まい', 'mai', ['マイ'], [], 'Madera (木) golpeada hasta quedar plana: una hoja fina.');
K('J23', '歳', 'años de edad', 'さい', 'sai', ['サイ'], [], 'Una cosecha que se repite: los años de vida. Cuenta la edad.');
K('J23', '回', 'vez / vuelta', 'かい', 'kai', ['カイ'], ['まわ'], 'Un remolino cuadrado: una vuelta, una vez.');
K('J24', '兄', 'hermano mayor', 'あに', 'ani', ['ケイ', 'キョウ'], ['あに'], 'Una boca (口) sobre dos piernas: el hermano mayor que habla y manda.');
K('J24', '姉', 'hermana mayor', 'あね', 'ane', ['シ'], ['あね'], 'Una mujer (女) y un mercado (市): la hermana mayor.');
K('J24', '弟', 'hermano menor', 'おとうと', 'otōto', ['テイ', 'ダイ'], ['おとうと'], 'Lo que va después, en fila: el hermano pequeño.');
K('J24', '妹', 'hermana menor', 'いもうと', 'imōto', ['マイ'], ['いもうと'], 'Una mujer (女) y algo que aún no ha crecido (未): la hermana pequeña.');
K('J25', '東', 'este', 'ひがし', 'higashi', ['トウ'], ['ひがし'], 'El sol (日) saliendo detrás de un árbol (木): el este.');
K('J25', '西', 'oeste', 'にし', 'nishi', ['セイ', 'サイ'], ['にし'], 'Un pájaro en su nido al ponerse el sol: el oeste.');
K('J25', '南', 'sur', 'みなみ', 'minami', ['ナン'], ['みなみ'], 'Un árbol a cubierto del sol bajo un tejadillo: el sur.');
K('J25', '北', 'norte', 'きた', 'kita', ['ホク'], ['きた'], 'Dos personas espalda con espalda: el frío norte.');
K('J26', '高', 'alto / caro', 'たかい', 'takai', ['コウ'], ['たか'], 'Una torre alta con su tejado: alto, caro.');
K('J26', '長', 'largo', 'ながい', 'nagai', ['チョウ'], ['なが'], 'Una persona de pelo largo con bastón: largo.');
K('J26', '新', 'nuevo', 'あたらしい', 'atarashii', ['シン'], ['あたら', 'あら'], 'Cortar (斤) madera (木) fresca: lo nuevo.');
K('J26', '古', 'viejo (cosas)', 'ふるい', 'furui', ['コ'], ['ふる'], 'Diez (十) bocas (口) han contado esto: ya es antiguo.');
K('J27', '名', 'nombre', 'な', 'na', ['メイ', 'ミョウ'], ['な'], 'Una boca (口) bajo la luna de la tarde (夕) dice su nombre.');
K('J27', '間', 'intervalo / entre', 'あいだ', 'aida', ['カン', 'ケン'], ['あいだ', 'ま'], 'El sol (日) asomando entre las puertas (門): el espacio de en medio.');
K('J27', '電', 'electricidad', 'でん', 'den', ['デン'], [], 'La lluvia (雨) con un rayo: electricidad.');
K('J27', '車', 'coche / vehículo', 'くるま', 'kuruma', ['シャ'], ['くるま'], 'Un carro visto desde arriba, con sus ruedas.');

// ---------- palabras con kanji ----------
V('hitori', '一人', 'ひとり', 'hitori', 'una persona', 'CT1'); V('futari', '二人', 'ふたり', 'futari', 'dos personas', 'CT1');
V('yonin', '四人', 'よにん', 'yonin', 'cuatro personas', 'CT1'); V('gonin', '五人', 'ごにん', 'gonin', 'cinco personas', 'CT1');
V('juunin', '十人', 'じゅうにん', 'jūnin', 'diez personas', 'CT1'); V('nannin', '何人', 'なんにん', 'nannin', '¿cuántas personas?', 'CT1');
V('ikko', '一個', 'いっこ', 'ikko', 'una pieza', 'CT2'); V('sanko', '三個', 'さんこ', 'sanko', 'tres piezas', 'CT2');
V('ichimai', '一枚', 'いちまい', 'ichimai', 'una hoja / cosa plana', 'CT2'); V('nimai', '二枚', 'にまい', 'nimai', 'dos hojas', 'CT2');
V('ippon1', '一本', 'いっぽん', 'ippon', 'una (cosa larga)', 'CT2'); V('sanbon', '三本', 'さんぼん', 'sanbon', 'tres (cosas largas)', 'CT2');
V('jussai', '十歳', 'じゅっさい', 'jussai', '10 años', 'CT3'); V('hatachi', '二十歳', 'はたち', 'hatachi', '20 años', 'CT3');
V('sanjussai', '三十歳', 'さんじゅっさい', 'sanjussai', '30 años', 'CT3'); V('nansai', '何歳', 'なんさい', 'nansai', '¿cuántos años?', 'CT3');
V('ikkai', '一回', 'いっかい', 'ikkai', 'una vez', 'CT3'); V('nankai', '何回', 'なんかい', 'nankai', '¿cuántas veces?', 'CT3');
V('ichigatsu', '一月', 'いちがつ', 'ichigatsu', 'enero', 'M1'); V('nigatsu', '二月', 'にがつ', 'nigatsu', 'febrero', 'M1');
V('sangatsu', '三月', 'さんがつ', 'sangatsu', 'marzo', 'M1'); V('shigatsu', '四月', 'しがつ', 'shigatsu', 'abril', 'M1');
V('gogatsu', '五月', 'ごがつ', 'gogatsu', 'mayo', 'M1'); V('rokugatsu', '六月', 'ろくがつ', 'rokugatsu', 'junio', 'M1');
V('shichigatsu', '七月', 'しちがつ', 'shichigatsu', 'julio', 'M2'); V('hachigatsu', '八月', 'はちがつ', 'hachigatsu', 'agosto', 'M2');
V('kugatsu', '九月', 'くがつ', 'kugatsu', 'septiembre', 'M2'); V('juugatsu', '十月', 'じゅうがつ', 'jūgatsu', 'octubre', 'M2');
V('juuichigatsu', '十一月', 'じゅういちがつ', 'jūichigatsu', 'noviembre', 'M2'); V('juunigatsu', '十二月', 'じゅうにがつ', 'jūnigatsu', 'diciembre', 'M2');
V('tsuitachi', '一日', 'ついたち', 'tsuitachi', 'día 1 del mes', 'D1'); V('futsuka', '二日', 'ふつか', 'futsuka', 'día 2 del mes', 'D1');
V('mikka', '三日', 'みっか', 'mikka', 'día 3 del mes', 'D1'); V('yokka', '四日', 'よっか', 'yokka', 'día 4 del mes', 'D1');
V('itsuka', '五日', 'いつか', 'itsuka', 'día 5 del mes', 'D1'); V('muika', '六日', 'むいか', 'muika', 'día 6 del mes', 'D1');
V('nanoka', '七日', 'なのか', 'nanoka', 'día 7 del mes', 'D2'); V('youka', '八日', 'ようか', 'yōka', 'día 8 del mes', 'D2');
V('kokonoka', '九日', 'ここのか', 'kokonoka', 'día 9 del mes', 'D2'); V('tooka', '十日', 'とおか', 'tōka', 'día 10 del mes', 'D2');
V('juuyokka', '十四日', 'じゅうよっか', 'jūyokka', 'día 14 del mes', 'D2'); V('hatsuka', '二十日', 'はつか', 'hatsuka', 'día 20 del mes', 'D2');
V('nangatsu', '何月', 'なんがつ', 'nangatsu', '¿qué mes?', 'D3'); V('nannichi', '何日', 'なんにち', 'nannichi', '¿qué día del mes?', 'D3');
V('kongetsu', '今月', 'こんげつ', 'kongetsu', 'este mes', 'D3'); V('raigetsu', '来月', 'らいげつ', 'raigetsu', 'el mes que viene', 'D3');
V('kotoshi', '今年', 'ことし', 'kotoshi', 'este año', 'D3'); V('rainen', '来年', 'らいねん', 'rainen', 'el año que viene', 'D3');
V('ani', '兄', 'あに', 'ani', 'mi hermano mayor', 'F1'); V('ane', '姉', 'あね', 'ane', 'mi hermana mayor', 'F1');
V('otouto', '弟', 'おとうと', 'otōto', 'mi hermano pequeño', 'F1'); V('imouto', '妹', 'いもうと', 'imōto', 'mi hermana pequeña', 'F1');
V('oniisan', 'お兄さん', 'おにいさん', 'onīsan', 'hermano mayor (de otro)', 'F1'); V('oneesan', 'お姉さん', 'おねえさん', 'onēsan', 'hermana mayor (de otro)', 'F1');
V('higashi', '東', 'ひがし', 'higashi', 'este', 'K1'); V('nishi', '西', 'にし', 'nishi', 'oeste', 'K1');
V('minami', '南', 'みなみ', 'minami', 'sur', 'K1'); V('kita', '北', 'きた', 'kita', 'norte', 'K1');
V('takai2', '高い', 'たかい', 'takai', 'alto / caro', 'K2'); V('nagai2', '長い', 'ながい', 'nagai', 'largo', 'K2');
V('atarashii2', '新しい', 'あたらしい', 'atarashii', 'nuevo', 'K2'); V('furui2', '古い', 'ふるい', 'furui', 'viejo', 'K2');
V('namae2', '名前', 'なまえ', 'namae', 'nombre', 'X1'); V('jikan', '時間', 'じかん', 'jikan', 'tiempo / duración', 'X1');
V('denwa2', '電話', 'でんわ', 'denwa', 'teléfono', 'X1'); V('denki', '電気', 'でんき', 'denki', 'electricidad / luz', 'X1');
V('densha', '電車', 'でんしゃ', 'densha', 'tren', 'X1'); V('kuruma2', '車', 'くるま', 'kuruma', 'coche', 'X1');

// ---------- palabras en kana ----------
WN('hikouki', 'ひこうき', 'hikōki', 'avión', 'T1'); WN('jitensha', 'じてんしゃ', 'jitensha', 'bicicleta', 'T1'); WN('kuukou', 'くうこう', 'kūkō', 'aeropuerto', 'T1');
WN('michi', 'みち', 'michi', 'camino / calle', 'T1'); WN('chikatetsu', 'ちかてつ', 'chikatetsu', 'metro', 'T1'); WN('kippu', 'きっぷ', 'kippu', 'billete', 'T1');
WN('kouen', 'こうえん', 'kōen', 'parque', 'T2'); WN('ginkou', 'ぎんこう', 'ginkō', 'banco', 'T2'); WN('suupaa', 'スーパー', 'sūpā', 'supermercado', 'T2');
WN('konbini', 'コンビニ', 'konbini', 'tienda de conveniencia', 'T2'); WN('resutoran', 'レストラン', 'resutoran', 'restaurante', 'T2'); WN('toire', 'トイレ', 'toire', 'baño / aseo', 'T2');
WN('ringo', 'りんご', 'ringo', 'manzana', 'T3'); WN('mikan', 'みかん', 'mikan', 'mandarina', 'T3'); WN('banana', 'バナナ', 'banana', 'plátano', 'T3');
WN('sarada', 'サラダ', 'sarada', 'ensalada', 'T3'); WN('gyuunyuu', 'ぎゅうにゅう', 'gyūnyū', 'leche', 'T3'); WN('obentou', 'おべんとう', 'obentō', 'fiambrera / comida para llevar', 'T3');
WN('boushi', 'ぼうし', 'bōshi', 'sombrero / gorra', 'T4'); WN('kutsu', 'くつ', 'kutsu', 'zapatos', 'T4'); WN('kasa', 'かさ', 'kasa', 'paraguas', 'T4');
WN('megane', 'めがね', 'megane', 'gafas', 'T4'); WN('tegami', 'てがみ', 'tegami', 'carta', 'T4'); WN('tokei', 'とけい', 'tokei', 'reloj', 'T4');
WN('atama', 'あたま', 'atama', 'cabeza', 'T5'); WN('onaka', 'おなか', 'onaka', 'barriga / estómago', 'T5'); WN('nodo', 'のど', 'nodo', 'garganta', 'T5');
WN('senaka', 'せなか', 'senaka', 'espalda', 'T5'); WN('yubi', 'ゆび', 'yubi', 'dedo', 'T5'); WN('kami', 'かみ', 'kami', 'pelo', 'T5');
WN('ototoi', 'おととい', 'ototoi', 'anteayer', 'T6'); WN('asatte', 'あさって', 'asatte', 'pasado mañana', 'T6'); WN('yuugata', 'ゆうがた', 'yūgata', 'atardecer', 'T6');
WN('kyonen', 'きょねん', 'kyonen', 'el año pasado', 'T6'); WN('tanjoubi', 'たんじょうび', 'tanjōbi', 'cumpleaños', 'T6'); WN('itsumo', 'いつも', 'itsumo', 'siempre', 'T6');
WN('tokidoki', 'ときどき', 'tokidoki', 'a veces', 'T6b', 'Los adverbios de frecuencia van antes del verbo.'); WN('amari', 'あまり', 'amari', 'no mucho (+ negativo)', 'T6b', 'Siempre con negativo: あまり 食べません = no como mucho.');
WN('zenzen', 'ぜんぜん', 'zenzen', 'nunca / nada (+ negativo)', 'T6b'); WN('yoku', 'よく', 'yoku', 'a menudo / bien', 'T6b');
WN('hare', 'はれ', 'hare', 'soleado', 'T7'); WN('kumori', 'くもり', 'kumori', 'nublado', 'T7'); WN('kaze', 'かぜ', 'kaze', 'viento / resfriado', 'T7');
WN('suzushii', 'すずしい', 'suzushii', 'fresco', 'T7'); WN('atatakai', 'あたたかい', 'atatakai', 'templado / cálido', 'T7');

// ---------- verbos nuevos ----------
VB('noru', 'のる', 'のる', 'noru', 'subir (a un transporte)', 1, 'のって', 'のって', 'Grupo 1: る → って. Se usa con に: 電車 に のります.');
VB('oriru', 'おりる', 'おりる', 'oriru', 'bajar (de un transporte)', 2, 'おりて', 'おりて', 'Grupo 2.');
VB('tsukau', 'つかう', 'つかう', 'tsukau', 'usar', 1, 'つかって', 'つかって', 'Grupo 1: う → って.');
VB('tsukuru', 'つくる', 'つくる', 'tsukuru', 'hacer / preparar', 1, 'つくって', 'つくって', 'Grupo 1: る → って.');
VB('oshieru', 'おしえる', 'おしえる', 'oshieru', 'enseñar', 2, 'おしえて', 'おしえて', 'Grupo 2.');
VB('narau', 'ならう', 'ならう', 'narau', 'aprender (de alguien)', 1, 'ならって', 'ならって', 'Grupo 1: う → って.');
VB('motsu', 'もつ', 'もつ', 'motsu', 'llevar / tener en la mano', 1, 'もって', 'もって', 'Grupo 1: つ → って.');
VB('hashiru', 'はしる', 'はしる', 'hashiru', 'correr', 1, 'はしって', 'はしって', 'Grupo 1: る → って.');
VB('oyogu', 'およぐ', 'およぐ', 'oyogu', 'nadar', 1, 'およいで', 'およいで', 'Grupo 1: ぐ → いで.');
VB('utau', 'うたう', 'うたう', 'utau', 'cantar', 1, 'うたって', 'うたって', 'Grupo 1: う → って.');
VB('sumu', 'すむ', 'すむ', 'sumu', 'vivir (residir)', 1, 'すんで', 'すんで', 'Grupo 1: む → んで. わたし は 日本 に すんで います.');
VB('shiru', 'しる', 'しる', 'shiru', 'saber / conocer', 1, 'しって', 'しって', 'Grupo 1: る → って.');
['noru', 'oriru', 'tsukau', 'tsukuru', 'oshieru', 'narau', 'motsu', 'hashiru', 'oyogu', 'utau', 'sumu', 'shiru'].forEach(k => {
  const v = ITEMS['d_' + k];
  v.nai = naiOf(v.jp, v.grp, v.id); v.naiKana = naiOf(v.kana, v.grp, v.id);
  v.ta = v.te.replace(/て$/, 'た').replace(/で$/, 'だ'); v.taKana = v.teKana.replace(/て$/, 'た').replace(/で$/, 'だ');
});

// ---------- diccionario ----------
addDict(`三人|sannin|tres personas|さんにん
四人|yonin|cuatro personas|よにん
五人|gonin|cinco personas|ごにん
一枚|ichimai|una hoja|いちまい
二本|nihon|dos (cosas largas)|にほん
三本|sanbon|tres (cosas largas)|さんぼん
二十歳|hatachi|veinte años|はたち
二十五歳|nijūgosai|25 años|にじゅうごさい
十歳|jussai|diez años|じゅっさい
何歳|nansai|¿cuántos años?|なんさい
何人|nannin|¿cuántas personas?|なんにん
一回|ikkai|una vez|いっかい
十月|jūgatsu|octubre|じゅうがつ
三月|sangatsu|marzo|さんがつ
五日|itsuka|día 5|いつか
二十三日|nijūsannichi|día 23|にじゅうさんにち
何月|nangatsu|¿qué mes?|なんがつ
何日|nannichi|¿qué día del mes?|なんにち
今月|kongetsu|este mes|こんげつ
来月|raigetsu|el mes que viene|らいげつ
今年|kotoshi|este año|ことし
来年|rainen|el año que viene|らいねん
きょねん|kyonen|el año pasado
たんじょうび|tanjōbi|cumpleaños
かぞく|kazoku|familia
みんな|minna|todos
ペン|pen|bolígrafo
ビール|bīru|cerveza
ピザ|piza|pizza
アイス|aisu|helado
ケーキ|kēki|pastel
電車|densha|tren|でんしゃ
じてんしゃ|jitensha|bicicleta
こうえん|kōen|parque
となり|tonari|al lado
いつも|itsumo|siempre
ときどき|tokidoki|a veces
ぜんぜん|zenzen|nunca / nada
見ません|mimasen|no ver|みません
はれ|hare|soleado
くもり|kumori|nublado
とうきょう|Tōkyō|Tokio
すんで|sunde|viviendo
います|imasu|estar
うたって|utatte|cantando
車|kuruma|coche|くるま
名前|namae|nombre|なまえ
兄|ani|hermano mayor|あに
姉|ane|hermana mayor|あね
妹|imōto|hermana pequeña|いもうと
弟|otōto|hermano pequeño|おとうと
高い|takai|alto / caro|たかい
新しい|atarashii|nuevo|あたらしい
二時間|nijikan|dos horas|にじかん
一時間|ichijikan|una hora|いちじかん
二個|niko|dos piezas|にこ
きょうと|Kyōto|Kioto
のります|norimasu|subir (a un transporte)
およぎます|oyogimasu|nadar
ひるごはん|hirugohan|comida del mediodía
花火|hanabi|fuegos artificiales|はなび
うみ|umi|mar
あつい|atsui|caluroso
かわいい|kawaii|adorable
だいすき|daisuki|me encanta
ともだち|tomodachi|amigo/a
いしゃ|isha|médico/a
はたらいて|hataraite|trabajando
はたらいて います|x|x
ありがとう|arigatō|gracias
の 五日|x|x`);

// ---------- frases ----------
PH('n_c1', 'Somos tres.', '三人 です');
PH('n_c2', 'Una hoja, por favor.', '一枚 ください');
PH('n_c3', 'Dos bolígrafos, por favor.', 'ペン を 二本 ください');
PH('n_c4', 'Tengo veinte años.', 'わたし は 二十歳 です');
PH('n_c5', '¿Cuántos años tienes?', '何歳 です か');
PH('n_c6', 'He ido a Japón una vez.', '日本 に 一回 行きました');
PH('n_c7', 'Tres cervezas, por favor.', 'ビール を 三本 ください');
PH('n_c8', '¿Cuántas personas son?', '何人 です か');
PH('n_d1', 'Hoy es 23 de octubre.', '今日 は 十月 二十三日 です');
PH('n_d2', 'Mi cumpleaños es el 5 de marzo.', 'わたし の たんじょうび は 三月 五日 です');
PH('n_d3', '¿Qué fecha es hoy?', '今日 は 何月 何日 です か');
PH('n_d4', 'El mes que viene voy a Japón.', '来月 日本 に 行きます');
PH('n_d5', 'El año pasado fui a Japón.', 'きょねん 日本 に 行きました');
PH('n_d6', 'El año que viene quiero ir a Japón.', '来年 日本 に 行きたい です');
PH('n_m1', 'Voy a la escuela en tren.', '電車 で 学校 に 行きます');
PH('n_m2', 'Voy a la estación en bicicleta.', 'じてんしゃ で 駅 に 行きます');
PH('n_m3', 'El parque está al lado de la estación.', 'こうえん は 駅 の となり に あります');
PH('n_m4', 'Siempre bebo té.', 'いつも おちゃ を 飲みます');
PH('n_m5', 'A veces como pizza.', 'ときどき ピザ を 食べます');
PH('n_m6', 'Nunca veo la tele.', 'ぜんぜん テレビ を 見ません');
PH('n_m7', 'Hoy hace sol.', '今日 は はれ です');
PH('n_m8', 'Mañana estará nublado.', '明日 は くもり です');
PH('n_m9', 'Mi hermano mayor es alto.', 'わたし の 兄 は 高い です');
PH('n_m10', 'Mi hermana pequeña tiene diez años.', 'わたし の 妹 は 十歳 です');
PH('n_m11', 'Mi nombre es Ken.', 'わたし の 名前 は ケン です');
PH('n_m12', 'Vivo en Tokio.', 'わたし は とうきょう に すんで います');
PH('n_m13', 'El coche de mi padre es nuevo.', 'お父さん の 車 は 新しい です');
PH('n_m14', 'Estoy cantando.', 'うたって います');

// ---------- lecturas ----------
TXL('n_cumple', 'Mi cumpleaños', [
  ['', 'わたし の たんじょうび は 三月 五日 です', 'Mi cumpleaños es el 5 de marzo.'],
  ['', '今年 わたし は 二十歳 です', 'Este año cumplo veinte años.'],
  ['', 'かぞく は 四人 です', 'Somos cuatro en mi familia.'],
  ['', 'お父さん と お母さん と 兄 と わたし です', 'Mi padre, mi madre, mi hermano mayor y yo.'],
  ['', '兄 は 二十五歳 です', 'Mi hermano tiene veinticinco años.'],
  ['', 'たんじょうび に 友だち と ラーメン を 食べます', 'En mi cumpleaños como ramen con amigos.'],
  ['', 'ケーキ も 二個 食べます', 'Y también como dos pasteles.'],
  ['', 'とても たのしい 日 です', 'Es un día muy divertido.']
], [
  ['¿Cuándo es su cumpleaños?', ['El 5 de marzo', 'El 5 de mayo', 'El 3 de mayo', 'El 15 de marzo'], 0],
  ['¿Cuántos años cumple?', ['Veinte', 'Diez', 'Treinta', 'Veinticinco'], 0],
  ['¿Cuántos son en su familia?', ['Cuatro', 'Tres', 'Cinco', 'Seis'], 0],
  ['¿Cuántos años tiene su hermano?', ['Veinticinco', 'Veinte', 'Treinta', 'Diez'], 0],
  ['¿Cuántos pasteles come?', ['Dos', 'Uno', 'Tres', 'Ninguno'], 0]
]);
TXL('n_familia', 'Mi familia', [
  ['', 'わたし の かぞく は 五人 です', 'Mi familia es de cinco personas.'],
  ['', 'お父さん は 先生 です', 'Mi padre es profesor.'],
  ['', 'お母さん は いしゃ です', 'Mi madre es médico.'],
  ['', '兄 は 学生 です', 'Mi hermano mayor es estudiante.'],
  ['', '姉 は はたらいて います', 'Mi hermana mayor trabaja.'],
  ['', '妹 は 十歳 です。 とても かわいい です', 'Mi hermana pequeña tiene diez años. Es muy adorable.'],
  ['', 'みんな ラーメン が だいすき です', 'A todos nos encanta el ramen.']
], [
  ['¿Cuántos son en la familia?', ['Cinco', 'Cuatro', 'Seis', 'Tres'], 0],
  ['¿Qué hace su madre?', ['Es médico', 'Es profesora', 'Es abogada', 'Es estudiante'], 0],
  ['¿Qué hace su hermano mayor?', ['Es estudiante', 'Trabaja', 'Es profesor', 'Es médico'], 0],
  ['¿Cuántos años tiene la hermana pequeña?', ['Diez', 'Veinte', 'Cinco', 'Trece'], 0],
  ['¿Qué les encanta a todos?', ['El ramen', 'El sushi', 'El pan', 'El café'], 0]
]);
TXL('n_tren', 'Un viaje en tren', [
  ['', '来月 の 五日 に きょうと に 行きます', 'El 5 del mes que viene voy a Kioto.'],
  ['', '朝 七時 に 駅 に 行きます', 'A las siete de la mañana voy a la estación.'],
  ['', '電車 に のります', 'Subo al tren.'],
  ['', 'きょうと まで 二時間 です', 'Hasta Kioto son dos horas.'],
  ['', '駅 の 前 で 友だち に 会います', 'Delante de la estación veo a un amigo.'],
  ['', 'いっしょ に ひるごはん を 食べます', 'Comemos juntos al mediodía.'],
  ['', '夜 に 電車 で かえります', 'Por la noche vuelvo en tren.']
], [
  ['¿Cuándo viaja a Kioto?', ['El 5 del mes que viene', 'Mañana', 'El 5 de este mes', 'El año que viene'], 0],
  ['¿Cómo viaja?', ['En tren', 'En avión', 'En bicicleta', 'En autobús'], 0],
  ['¿Cuánto dura el viaje?', ['Dos horas', 'Una hora', 'Tres horas', 'Veinte minutos'], 0],
  ['¿Con quién come?', ['Con un amigo', 'Solo', 'Con su madre', 'Con el profesor'], 0]
]);
TXL('n_verano', 'Un día de verano', [
  ['', '今日 は はれ です。 とても あつい です', 'Hoy hace sol. Hace mucho calor.'],
  ['', 'わたし は 友だち と うみ に 行きます', 'Voy al mar con mis amigos.'],
  ['', '電車 で 一時間 です', 'En tren es una hora.'],
  ['', 'うみ で およぎます', 'Nadamos en el mar.'],
  ['', 'それから アイス を 食べます', 'Después tomamos helado.'],
  ['', '夜 は 花火 を 見ます', 'Por la noche vemos fuegos artificiales.'],
  ['', 'とても たのしい 日 でした', 'Fue un día muy divertido.']
], [
  ['¿Qué tiempo hace?', ['Sol y calor', 'Lluvia', 'Frío', 'Nublado'], 0],
  ['¿Cuánto tarda en tren?', ['Una hora', 'Dos horas', 'Diez minutos', 'Tres horas'], 0],
  ['¿Qué hacen en el mar?', ['Nadan', 'Corren', 'Cantan', 'Duermen'], 0],
  ['¿Qué ven por la noche?', ['Fuegos artificiales', 'La tele', 'El mar', 'Una película'], 0]
]);

// ---------- unidades ----------
UNITS.push(
  { id: 'u32', title: 'Contadores', sub: 'Personas, cosas, edad y veces', lessons: [
    J('l_c1', '個 枚 歳 回', 'Pieza, hoja, años, vez', '個', ['j_個','j_枚','j_歳','j_回'],
      { title: 'Los contadores', body: 'En japonés, al contar se añade un **contador** según lo que cuentes:\n\n• **〜人** (にん) personas\n• **〜個** (こ) piezas pequeñas\n• **〜枚** (まい) hojas, entradas, cosas planas\n• **〜本** (ほん) cosas largas (bolígrafos, botellas)\n• **〜歳** (さい) años de edad\n• **〜回** (かい) veces\n\nYa conoces ひとつ, ふたつ… que sirve para casi todo cuando no sabes el contador.' }),
    J('l_c2', 'Contar personas', '一人, 二人, 四人…', '👥', ['v_hitori','v_futari','v_yonin','v_gonin','v_juunin','v_nannin'],
      { title: 'Personas', body: '**ひとり** (1) y **ふたり** (2) son irregulares. Desde el 3 es regular: 三**人** さんにん, 五**人** ごにん.\n\n¡Cuidado!: 4 personas = **よにん** (no よんにん).' }),
    J('l_c3', 'Contar cosas', '一個, 一枚, 一本…', '📦', ['v_ikko','v_sanko','v_ichimai','v_nimai','v_ippon1','v_sanbon'],
      { title: 'Piezas, hojas y cosas largas', body: 'El contador **本** cambia de sonido:\n\n• 1 = **いっぽん**, 2 = **にほん**, 3 = **さんぼん**\n\nSe usa para bolígrafos, botellas, paraguas… (cosas largas).' }),
    J('l_c4', 'Edad y veces', '二十歳, 何歳, 一回…', '🎂', ['v_jussai','v_hatachi','v_sanjussai','v_nansai','v_ikkai','v_nankai'],
      { title: 'La edad', body: 'La edad se dice con **歳 (さい)**: 十歳 = 10 años.\n\nPero **20 años** es especial: **はたち**.\n\nPara preguntar: **何歳 (なんさい)**.' }),
    J('l_c5', 'Frases con contadores (1)', 'Pedir y contar', '💬', ['p_n_c1','p_n_c2','p_n_c3','p_n_c4']),
    J('l_c6', 'Frases con contadores (2)', 'Preguntar cantidades', '❓', ['p_n_c5','p_n_c6','p_n_c7','p_n_c8'])
  ]},
  { id: 'u33', title: 'Fechas', sub: 'Meses, días del mes, hoy y mañana', lessons: [
    J('l_d1', 'Los meses (1)', 'Enero a junio', '📅', ['v_ichigatsu','v_nigatsu','v_sangatsu','v_shigatsu','v_gogatsu','v_rokugatsu'],
      { title: 'Los meses', body: 'Fáciles: **número + 月 (がつ)**.\n\n一月 いちがつ = enero, 二月 にがつ = febrero…\n\nTres son irregulares: **四月 しがつ**, **七月 しちがつ**, **九月 くがつ**.' }),
    J('l_d2', 'Los meses (2)', 'Julio a diciembre', '📅', ['v_shichigatsu','v_hachigatsu','v_kugatsu','v_juugatsu','v_juuichigatsu','v_juunigatsu']),
    J('l_d3', 'Los días del mes (1)', 'Del 1 al 6', '🗓️', ['v_tsuitachi','v_futsuka','v_mikka','v_yokka','v_itsuka','v_muika'],
      { title: 'Los días del mes', body: 'Los diez primeros días tienen lecturas propias (hay que aprenderlas):\n\n1 ついたち, 2 ふつか, 3 みっか, 4 よっか, 5 いつか, 6 むいか, 7 なのか, 8 ようか, 9 ここのか, 10 とおか.\n\nDesde el 11 se dice número + **日 (にち)**: 十一日 じゅういちにち. Excepciones: 14 **じゅうよっか**, 20 **はつか**, 24 にじゅうよっか.' }),
    J('l_d4', 'Los días del mes (2)', 'Del 7 al 10, el 14 y el 20', '🗓️', ['v_nanoka','v_youka','v_kokonoka','v_tooka','v_juuyokka','v_hatsuka']),
    J('l_d5', 'Preguntar y situar fechas', 'Qué mes, este mes, el año que viene', '❓', ['v_nangatsu','v_nannichi','v_kongetsu','v_raigetsu','v_kotoshi','v_rainen']),
    J('l_d6', 'Frases con fechas (1)', 'Hoy y cumpleaños', '🎉', ['p_n_d1','p_n_d2','p_n_d3']),
    J('l_d7', 'Frases con fechas (2)', 'El mes y el año que viene', '✈️', ['p_n_d4','p_n_d5','p_n_d6'])
  ]},
  { id: 'u34', title: 'Kanji del N5 (final)', sub: 'Familia, direcciones, adjetivos y coches', lessons: [
    J('l_k1', '兄 姉 弟 妹', 'Hermanos', '兄', ['j_兄','j_姉','j_弟','j_妹']),
    J('l_kw1', 'Mi hermano, tu hermana', 'Palabras de familia', '👨‍👩‍👧', ['v_ani','v_ane','v_otouto','v_imouto','v_oniisan','v_oneesan'],
      { title: 'Mi familia y la de otros', body: 'Para **tu propia** familia usas una palabra (兄 あに, 姉 あね); para la **de otra persona**, o para dirigirte a ellos, usas **お〜さん** (お兄さん, お姉さん).\n\nEs educación japonesa: se humilla lo propio y se respeta lo ajeno.' }),
    J('l_k2', '東 西 南 北', 'Este, oeste, sur, norte', '北', ['j_東','j_西','j_南','j_北']),
    J('l_kw2', 'Los puntos cardinales', 'Palabras con kanji', '🧭', ['v_higashi','v_nishi','v_minami','v_kita']),
    J('l_k3', '高 長 新 古', 'Alto, largo, nuevo, viejo', '高', ['j_高','j_長','j_新','j_古']),
    J('l_kw3', 'Adjetivos con kanji', 'Los mismos que ya conocías', '📐', ['v_takai2','v_nagai2','v_atarashii2','v_furui2']),
    J('l_k4', '名 間 電 車', 'Nombre, intervalo, electricidad, coche', '車', ['j_名','j_間','j_電','j_車']),
    J('l_kw4', 'Nombre, tiempo y trenes', 'Palabras con kanji', '🚆', ['v_namae2','v_jikan','v_denwa2','v_denki','v_densha','v_kuruma2']),
    J('l_kt1', 'Lectura: Mi familia', 'Con los nuevos kanji', '📖', ['t_n_familia']),
    J('l_dt1', 'Lectura: Mi cumpleaños', 'Fechas, edad y familia', '📖', ['t_n_cumple'])
  ]},
  { id: 'u35', title: 'Vocabulario del N5', sub: 'Lugares, comida, cuerpo, tiempo y más', lessons: [
    J('l_t1', 'Transporte', 'Avión, bici, metro…', '✈️', ['w_hikouki','w_jitensha','w_kuukou','w_michi','w_chikatetsu','w_kippu']),
    J('l_t2', 'Lugares de la ciudad', 'Parque, banco, supermercado…', '🏙️', ['w_kouen','w_ginkou','w_suupaa','w_konbini','w_resutoran','w_toire']),
    J('l_t3', 'Fruta y comida', 'Manzana, plátano, ensalada…', '🍎', ['w_ringo','w_mikan','w_banana','w_sarada','w_gyuunyuu','w_obentou']),
    J('l_t4', 'Objetos del día a día', 'Gorra, zapatos, paraguas…', '☂️', ['w_boushi','w_kutsu','w_kasa','w_megane','w_tegami','w_tokei']),
    J('l_t5', 'El cuerpo', 'Cabeza, barriga, garganta…', '🧍', ['w_atama','w_onaka','w_nodo','w_senaka','w_yubi','w_kami']),
    J('l_t6', 'Cuándo', 'Anteayer, atardecer, cumpleaños…', '⏳', ['w_ototoi','w_asatte','w_yuugata','w_kyonen','w_tanjoubi','w_itsumo']),
    J('l_t7', 'Con qué frecuencia', 'A veces, nunca, mucho', '🔁', ['w_tokidoki','w_amari','w_zenzen','w_yoku']),
    J('l_t8', 'El tiempo', 'Soleado, nublado, viento…', '⛅', ['w_hare','w_kumori','w_kaze','w_suzushii','w_atatakai']),
    J('l_t9', 'Doce verbos más (1)', 'Subir, bajar, usar, hacer, enseñar…', '🚶', ['d_noru','d_oriru','d_tsukau','d_tsukuru','d_oshieru','d_narau']),
    J('l_t10', 'Doce verbos más (2)', 'Llevar, correr, nadar, cantar…', '🏊', ['d_motsu','d_hashiru','d_oyogu','d_utau','d_sumu','d_shiru']),
    J('l_t11', 'Frases: moverse y vivir', 'En tren, en bici, en Tokio', '🚉', ['p_n_m1','p_n_m2','p_n_m3','p_n_m12','p_n_m14']),
    J('l_t12', 'Frases: frecuencia y tiempo', 'Siempre, a veces, nunca', '🌤️', ['p_n_m4','p_n_m5','p_n_m6','p_n_m7','p_n_m8']),
    J('l_t13', 'Frases: familia y nombre', 'Hermanos, padre, nombre', '👪', ['p_n_m9','p_n_m10','p_n_m11','p_n_m13']),
    J('l_tt1', 'Lectura: Un viaje en tren', 'Con fechas y transporte', '📖', ['t_n_tren']),
    J('l_tt2', 'Lectura: Un día de verano', 'Tiempo y actividades', '📖', ['t_n_verano'])
  ]}
);
UNITS.slice(-4).forEach(u => u.lessons.forEach(l => { l.unit = u.id; LESSON_BY_ID[l.id] = l; }));
