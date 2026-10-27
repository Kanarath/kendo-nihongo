// Biblioteca de lecturas largas con todo lo aprendido. Se carga después de data-verbs.js.
// Diccionario: 'texto|romaji|significado|lectura en kana (solo si lleva kanji)'
const DICT = {};
`は|wa|(partícula del tema)
が|ga|(partícula: sujeto / lo que gusta)
を|o|(partícula: objeto)
の|no|de
も|mo|también
か|ka|(pregunta)
に|ni|(a / en / hora / persona)
へ|e|(hacia)
で|de|(lugar de la acción / con qué)
と|to|y / con
から|kara|desde
まで|made|hasta
です|desu|ser / es
でした|deshita|era / fue
じゃ|ja|(parte de «no es»)
ありません|arimasen|no hay / no es
ね|ne|(¿verdad?)
わたし|watashi|yo
あなた|anata|tú
ケン|Ken|Ken
さん|san|(señor/a)
みなさん|minasan|todos / todas
先生|sensei|profesor/a|せんせい
学生|gakusei|estudiante|がくせい
友だち|tomodachi|amigo/a|ともだち
ともだち|tomodachi|amigo/a
日本人|nihonjin|japonés/a|にほんじん
スペイン人|supeinjin|español/a|スペインじん
店の人|mise no hito|persona de la tienda|みせのひと
ふたり|futari|dos personas
七人|nananin|siete personas|ななにん
何人|nannin|¿cuántas personas?|なんにん
家|ie|casa|いえ
駅|eki|estación|えき
学校|gakkō|escuela|がっこう
店|mise|tienda|みせ
ホテル|hoteru|hotel
ここ|koko|aquí
あそこ|asoko|allí
どこ|doko|¿dónde?
この|kono|este
あの|ano|aquel
あれ|are|aquello
これ|kore|esto
日本|nihon|Japón|にほん
日本語|nihongo|japonés (idioma)|にほんご
今日|kyō|hoy|きょう
明日|ashita|mañana|あした
昨日|kinō|ayer|きのう
毎日|mainichi|todos los días|まいにち
毎朝|maiasa|cada mañana|まいあさ
朝|asa|mañana (parte del día)|あさ
ひる|hiru|mediodía
夜|yoru|noche|よる
日|hi|día|ひ
今|ima|ahora|いま
六時|rokuji|las seis|ろくじ
七時|shichiji|las siete|しちじ
三時|sanji|las tres|さんじ
何時|nanji|¿qué hora?|なんじ
日曜日|nichiyōbi|domingo|にちようび
土曜日|doyōbi|sábado|どようび
ひとつ|hitotsu|uno (cosas)
ふたつ|futatsu|dos (cosas)
三つ|mittsu|tres (cosas)|みっつ
千円|sen'en|1.000 yenes|せんえん
百円|hyakuen|100 yenes|ひゃくえん
二千円|nisen'en|2.000 yenes|にせんえん
三百円|sanbyakuen|300 yenes|さんびゃくえん
ラーメン|rāmen|ramen
らーめん|rāmen|ramen
すし|sushi|sushi
おにぎり|onigiri|onigiri
ごはん|gohan|comida / arroz cocido
パン|pan|pan
たまご|tamago|huevo
ケーキ|kēki|pastel
コーヒー|kōhī|café
おちゃ|ocha|té
カレー|karē|curry
テレビ|terebi|televisión
ゲーム|gēmu|videojuego
アニメ|anime|anime
ワンピース|wanpīsu|One Piece
ルフィ|Rufi|Luffy
ゾロ|Zoro|Zoro
サンジ|Sanji|Sanji
チョッパー|Choppā|Chopper
けんどう|kendō|kendo
めん|men|men (golpe a la cabeza)
れんしゅう|renshū|práctica
いっぽん|ippon|ippon (punto)
りょうり|ryōri|cocina / plato
いしゃ|isha|médico/a
本|hon|libro|ほん
いちばん|ichiban|el más / lo que más
おいしい|oishii|rico
すき|suki|gustar
やすい|yasui|barato
かわいい|kawaii|adorable
つよい|tsuyoi|fuerte
かっこいい|kakkoii|guay
いい|ii|bueno / bien
たのしい|tanoshii|divertido
おもしろい|omoshiroi|interesante
むずかしい|muzukashii|difícil
とおい|tōi|lejos
ちかい|chikai|cerca
あつい|atsui|caliente / de calor
さむい|samui|frío (clima)
きれい|kirei|bonito / limpio
とても|totemo|muy
まだ|mada|todavía
そして|soshite|y además
それから|sorekara|después
でも|demo|pero
また|mata|otra vez
ゆっくり|yukkuri|despacio
いっしょ|issho|juntos
はる|haru|primavera
なつ|natsu|verano
あき|aki|otoño
ふゆ|fuyu|invierno
ゆき|yuki|nieve
うみ|umi|mar
やま|yama|montaña
さくら|sakura|flor de cerezo
花|hana|flor|はな
天気|tenki|tiempo (clima)|てんき
きせつ|kisetsu|estación del año
げんき|genki|con energía / bien
食べます|tabemasu|comer|たべます
食べました|tabemashita|comí|たべました
飲みます|nomimasu|beber|のみます
飲みました|nomimashita|bebí|のみました
見ます|mimasu|ver|みます
行きます|ikimasu|ir|いきます
行きません|ikimasen|no ir|いきません
行きました|ikimashita|fui|いきました
来ます|kimasu|venir|きます
来ました|kimashita|vine|きました
読みます|yomimasu|leer|よみます
読みました|yomimashita|leí|よみました
話します|hanashimasu|hablar|はなします
買います|kaimasu|comprar|かいます
買いました|kaimashita|compré|かいました
会います|aimasu|ver a / encontrarse|あいます
会いました|aimashita|vi a / me encontré|あいました
会いましょう|aimashō|veámonos|あいましょう
休みます|yasumimasu|descansar|やすみます
出ます|demasu|salir|でます
します|shimasu|hacer
しましょう|shimashō|hagamos
ねます|nemasu|dormir
おきます|okimasu|levantarse
あそびます|asobimasu|jugar / divertirse
べんきょう|benkyō|estudio
あります|arimasu|haber / tener
います|imasu|estar
食べましょう|tabemashō|comamos|たべましょう
来ません|kimasen|no venir|きません
来ませんか|kimasen ka|¿quieres venir?|きませんか
行きましょう|ikimashō|vayamos|いきましょう
すみません|sumimasen|disculpe
ありがとう|arigatō|gracias
ございます|gozaimasu|(forma educada)
ございました|gozaimashita|(forma educada, pasado)
どういたしまして|dō itashimashite|de nada
はじめまして|hajimemashite|mucho gusto
どうぞ|dōzo|adelante / por favor
よろしく|yoroshiku|encantado/a
おねがいします|onegai shimasu|por favor / se lo ruego
いらっしゃいませ|irasshaimase|bienvenido/a
こんばんは|konbanwa|buenas noches
はい|hai|sí
いいえ|iie|no
そう|sō|así
ください|kudasai|por favor / deme
いかが|ikaga|¿qué tal? / ¿quiere?
いくら|ikura|¿cuánto?
どう|dō|¿cómo?
なに|nani|¿qué?
じゃあ|jā|bueno entonces
よく|yoku|bien / mucho
できました|dekimashita|lo lograste / lo hiciste
がんばって|ganbatte|¡ánimo!
より|yori|de parte de
ひま|hima|libre (de tiempo)
`.split('\n').forEach(line => {
  const p = line.split('|'); if (p.length < 3 || p[1] === 'x') return;
  DICT[p[0]] = p[3] ? [p[0], p[1], p[2], p[3]] : [p[0], p[1], p[2]];
});
// 何 (なに) por si se usa suelto
DICT['何'] = ['何', 'nani', '¿qué?', 'なに'];

function TXL(id, title, lines, qs) {
  TX(id, title, lines.map(([who, txt, es]) => [who, txt.split(/[\s。、]+/).filter(Boolean).map(k => {
    const e = DICT[k]; if (!e) throw new Error('Falta en el diccionario: «' + k + '» en «' + title + '»'); return e;
  }), es]), qs);
}

TXL('r_manana', 'Una mañana normal', [
  ['', '毎朝 六時 に おきます', 'Cada mañana me levanto a las seis.'],
  ['', 'おちゃ を 飲みます', 'Bebo té.'],
  ['', 'パン と たまご を 食べます', 'Como pan y huevo.'],
  ['', '七時 に 家 を 出ます', 'A las siete salgo de casa.'],
  ['', '駅 で 友だち に 会います', 'En la estación veo a mi amigo.'],
  ['', 'いっしょ に 学校 へ 行きます', 'Vamos juntos a la escuela.'],
  ['', '学校 で 日本語 を 話します', 'En la escuela hablo japonés.'],
  ['', '日本語 は とても おもしろい です', 'El japonés es muy interesante.']
], [
  ['¿A qué hora se levanta?', ['A las seis', 'A las siete', 'A las tres', 'A las ocho'], 0],
  ['¿Qué come por la mañana?', ['Pan y huevo', 'Ramen', 'Arroz', 'Nada'], 0],
  ['¿Dónde ve a su amigo?', ['En la estación', 'En la escuela', 'En casa', 'En la tienda'], 0],
  ['¿Qué opina del japonés?', ['Es muy interesante', 'Es difícil', 'Es caro', 'No le gusta'], 0]
]);
TXL('r_estacion', '¿Dónde está la estación?', [
  ['Turista', 'すみません', 'Disculpe.'],
  ['Turista', '駅 は どこ です か', '¿Dónde está la estación?'],
  ['Hombre', '駅 です か。 あそこ です', '¿La estación? Está allí.'],
  ['Turista', 'あそこ です か。 ありがとう ございます', '¿Allí? Muchas gracias.'],
  ['Hombre', 'どういたしまして', 'De nada.'],
  ['Turista', 'ここ から 駅 まで とおい です か', '¿Está lejos de aquí a la estación?'],
  ['Hombre', 'いいえ、 ちかい です', 'No, está cerca.'],
  ['Turista', '駅 で 友だち に 会います', 'En la estación voy a ver a un amigo.'],
  ['Hombre', 'そう です か。 いい 天気 です ね', '¿Ah, sí? Hace buen tiempo, ¿verdad?'],
  ['Turista', 'はい、 いい 天気 です ね', 'Sí, hace buen tiempo.']
], [
  ['¿Qué busca el turista?', ['La estación', 'Una tienda', 'La escuela', 'Un hotel'], 0],
  ['¿Está lejos?', ['No, está cerca', 'Sí, muy lejos', 'No lo sabe', 'Está cerrada'], 0],
  ['¿Qué hará en la estación?', ['Ver a un amigo', 'Comprar pan', 'Comer ramen', 'Dormir'], 0],
  ['¿Cómo está el tiempo?', ['Bueno', 'Lluvioso', 'Frío', 'Nevando'], 0]
]);
TXL('r_presentacion', 'Mucho gusto', [
  ['', 'はじめまして', 'Mucho gusto.'],
  ['', 'わたし は ケン です', 'Soy Ken.'],
  ['', 'スペイン人 です', 'Soy español.'],
  ['', '日本語 を べんきょう します', 'Estudio japonés.'],
  ['', '日本 の アニメ が すき です', 'Me gusta el anime japonés.'],
  ['', 'ワンピース を 見ます', 'Veo One Piece.'],
  ['', 'チョッパー は かわいい です', 'Chopper es adorable.'],
  ['', 'どうぞ よろしく おねがいします', 'Encantado de conocerte.']
], [
  ['¿Cómo se llama?', ['Ken', 'Ryu', 'Yuki', 'No lo dice'], 0],
  ['¿De dónde es?', ['De España', 'De Japón', 'De China', 'No lo dice'], 0],
  ['¿Qué estudia?', ['Japonés', 'Español', 'Inglés', 'Kendo'], 0],
  ['¿Quién es adorable?', ['Chopper', 'Luffy', 'Zoro', 'Ken'], 0]
]);
TXL('r_restaurante', 'En el restaurante', [
  ['Camarero', 'いらっしゃいませ', '¡Bienvenidos!'],
  ['Ken', 'ふたり です', 'Somos dos.'],
  ['Camarero', 'どうぞ。 ここ です', 'Pasen. Es aquí.'],
  ['Camarero', 'なに を 食べます か', '¿Qué van a comer?'],
  ['Ken', 'ラーメン を ふたつ ください', 'Dos ramen, por favor.'],
  ['Amigo', 'わたし は すし も 食べます', 'Yo también como sushi.'],
  ['Ken', 'すし を ひとつ ください', 'Un sushi, por favor.'],
  ['Camarero', 'はい。 おちゃ は いかが です か', 'Sí. ¿Quieren té?'],
  ['Amigo', 'おちゃ を ふたつ ください', 'Dos tés, por favor.'],
  ['Ken', 'この ラーメン は おいしい です ね', 'Este ramen está rico, ¿verdad?'],
  ['Amigo', 'はい、 とても おいしい です', 'Sí, está muy rico.'],
  ['Ken', 'すみません、 いくら です か', 'Disculpe, ¿cuánto es?'],
  ['Camarero', '二千円 です', 'Son 2.000 yenes.']
], [
  ['¿Cuántas personas son?', ['Dos', 'Una', 'Tres', 'Cuatro'], 0],
  ['¿Qué piden de comer?', ['Dos ramen y un sushi', 'Dos sushi', 'Un ramen', 'Pan'], 0],
  ['¿Qué beben?', ['Té', 'Cerveza', 'Café', 'Agua'], 0],
  ['¿Cuánto pagan?', ['2.000 yenes', '1.000 yenes', '200 yenes', '20.000 yenes'], 0]
]);
TXL('r_finde', 'Mi fin de semana', [
  ['', '土曜日 は 学校 に 行きません', 'El sábado no voy a la escuela.'],
  ['', '朝 は ゆっくり ねます', 'Por la mañana duermo despacio.'],
  ['', 'ひる ごはん は ラーメン を 食べます', 'Al mediodía como ramen.'],
  ['', 'それから 友だち に 会います', 'Después veo a mis amigos.'],
  ['', 'いっしょ に ゲーム を します', 'Jugamos juntos a videojuegos.'],
  ['', '夜 は 家 で テレビ を 見ます', 'Por la noche veo la tele en casa.'],
  ['', '日曜日 は けんどう の 学校 に 行きます', 'El domingo voy a la escuela de kendo.'],
  ['', '先生 は とても つよい です', 'El profesor es muy fuerte.'],
  ['', 'わたし は まだ 学生 です', 'Yo todavía soy estudiante.'],
  ['', 'けんどう は とても たのしい です', 'El kendo es muy divertido.']
], [
  ['¿Va a la escuela el sábado?', ['No', 'Sí', 'A veces', 'No lo dice'], 0],
  ['¿Qué come al mediodía?', ['Ramen', 'Sushi', 'Pan', 'Curry'], 0],
  ['¿Qué hace por la noche?', ['Ve la tele en casa', 'Va al kendo', 'Lee un libro', 'Duerme'], 0],
  ['¿Adónde va el domingo?', ['A la escuela de kendo', 'A la estación', 'A casa de un amigo', 'A ninguna parte'], 0],
  ['¿Cómo es el profesor?', ['Muy fuerte', 'Muy joven', 'Adorable', 'Difícil'], 0]
]);
TXL('r_carta', 'Una carta a un amigo', [
  ['', '友だち へ', 'Para mi amigo:'],
  ['', 'げんき です か', '¿Estás bien?'],
  ['', 'わたし は げんき です', 'Yo estoy bien.'],
  ['', '今日 は 日曜日 です。 天気 は いい です', 'Hoy es domingo. Hace buen tiempo.'],
  ['', '朝 に おちゃ を 飲みました', 'Por la mañana bebí té.'],
  ['', 'そして 本 を 読みました', 'Y además leí un libro.'],
  ['', '昨日 は 友だち に 会いました', 'Ayer vi a un amigo.'],
  ['', 'いっしょ に カレー を 食べました', 'Comimos curry juntos.'],
  ['', 'カレー は とても おいしい です', 'El curry está muy rico.'],
  ['', 'また 会いましょう', 'Veámonos otra vez.'],
  ['', 'ケン より', 'De parte de Ken.']
], [
  ['¿Qué día es hoy?', ['Domingo', 'Sábado', 'Lunes', 'Viernes'], 0],
  ['¿Cómo está el tiempo?', ['Bueno', 'Lluvioso', 'Frío', 'No lo dice'], 0],
  ['¿Qué leyó?', ['Un libro', 'Una carta', 'Una revista', 'Nada'], 0],
  ['¿Qué comieron ayer?', ['Curry', 'Ramen', 'Sushi', 'Pizza'], 0],
  ['¿Cómo termina la carta?', ['Proponiendo verse otra vez', 'Despidiéndose para siempre', 'Pidiendo dinero', 'Con un enfado'], 0]
]);
TXL('r_dojo', 'En el dōjō', [
  ['Profesor', 'みなさん、 こんばんは', 'Buenas noches a todos.'],
  ['Alumnos', 'こんばんは。 おねがいします', 'Buenas noches. Por favor, enséñenos.'],
  ['Profesor', '今日 は 何人 です か', '¿Cuántos somos hoy?'],
  ['Alumno', '七人 です', 'Somos siete.'],
  ['Profesor', 'ケン さん も 来ました か', '¿Ken también ha venido?'],
  ['Ken', 'はい、 来ました', 'Sí, he venido.'],
  ['Profesor', '今日 は めん の れんしゅう です', 'Hoy es práctica de men.'],
  ['Ken', 'むずかしい です ね', 'Es difícil, ¿verdad?'],
  ['Profesor', 'ゆっくり しましょう', 'Hagámoslo despacio.'],
  ['Profesor', 'いっぽん', '¡Ippon!'],
  ['Profesor', 'よく できました', '¡Lo hicisteis muy bien!'],
  ['Alumnos', 'ありがとう ございました', 'Muchas gracias por la clase.']
], [
  ['¿Cuántas personas hay?', ['Siete', 'Tres', 'Diez', 'Dos'], 0],
  ['¿Qué practican hoy?', ['Men', 'Kote', 'Correr', 'Nada'], 0],
  ['¿Qué opina Ken?', ['Que es difícil', 'Que es fácil', 'Que es aburrido', 'Que le gusta'], 0],
  ['¿Cómo hay que practicar?', ['Despacio', 'Rápido', 'Sin parar', 'Descansando'], 0],
  ['¿Cómo termina la clase?', ['Dando las gracias', 'Con un combate', 'Sin saludar', 'Con una discusión'], 0]
]);
TXL('r_estaciones', 'Las cuatro estaciones', [
  ['', 'はる は さくら の 花 を 見ます', 'En primavera veo las flores de cerezo.'],
  ['', 'なつ は あつい です。 うみ に 行きます', 'El verano es caluroso. Voy al mar.'],
  ['', 'あき は 天気 が いい です。 やま に 行きます', 'En otoño hace buen tiempo. Voy a la montaña.'],
  ['', 'ふゆ は さむい です。 ゆき を 見ます', 'El invierno es frío. Veo la nieve.'],
  ['', 'わたし は ふゆ が すき です', 'A mí me gusta el invierno.'],
  ['', 'ゆき の 日 は ラーメン が おいしい です', 'En los días de nieve, el ramen está rico.'],
  ['', '日本 の きせつ は とても きれい です', 'Las estaciones de Japón son muy bonitas.']
], [
  ['¿Qué hace en primavera?', ['Ver flores de cerezo', 'Ir al mar', 'Ir a la montaña', 'Ver la nieve'], 0],
  ['¿Adónde va en verano?', ['Al mar', 'A la montaña', 'A la escuela', 'A casa'], 0],
  ['¿Cuál es su estación favorita?', ['El invierno', 'El verano', 'La primavera', 'El otoño'], 0],
  ['¿Qué está rico en días de nieve?', ['El ramen', 'El helado', 'El sushi', 'El pan'], 0]
]);
TXL('r_libreria', 'En la librería', [
  ['Ken', 'すみません。 この 本 は いくら です か', 'Disculpe, ¿cuánto cuesta este libro?'],
  ['Dependiente', '千円 です', 'Mil yenes.'],
  ['Ken', 'あの 本 は', '¿Y aquel libro?'],
  ['Dependiente', 'あれ は 三百円 です', 'Aquel cuesta 300 yenes.'],
  ['Ken', 'やすい です ね。 あれ を ください', 'Es barato. Deme aquel, por favor.'],
  ['Dependiente', 'ありがとう ございます', 'Muchas gracias.'],
  ['Dependiente', '日本語 の 本 です か', '¿Es un libro de japonés?'],
  ['Ken', 'はい。 日本語 を べんきょう します', 'Sí. Estudio japonés.'],
  ['Dependiente', 'いい です ね。 がんばって ください', 'Qué bien. ¡Ánimo!'],
  ['Ken', 'ありがとう ございます', 'Muchas gracias.']
], [
  ['¿Cuánto cuesta el primer libro?', ['1.000 yenes', '300 yenes', '100 yenes', '3.000 yenes'], 0],
  ['¿Cuál compra Ken?', ['El de 300 yenes', 'El de 1.000 yenes', 'Los dos', 'Ninguno'], 0],
  ['¿Qué tipo de libro es?', ['De japonés', 'De cocina', 'De kendo', 'De anime'], 0],
  ['¿Qué le dice el dependiente al final?', ['Que se esfuerce', 'Que vuelva mañana', 'Que pague más', 'Nada'], 0]
]);
TXL('r_invitacion', 'Una invitación a casa', [
  ['Amigo', '明日 は ひま です か', '¿Estás libre mañana?'],
  ['Ken', 'はい、 ひま です', 'Sí, estoy libre.'],
  ['Amigo', 'じゃあ、 わたし の 家 に 来ません か', 'Entonces, ¿quieres venir a mi casa?'],
  ['Ken', 'いい です ね。 何時 に 行きます か', 'Qué bien. ¿A qué hora voy?'],
  ['Amigo', '三時 は どう です か', '¿Qué tal a las tres?'],
  ['Ken', 'はい、 三時 に 行きます', 'Sí, voy a las tres.'],
  ['Amigo', '家 で カレー を 食べましょう', 'Comamos curry en casa.'],
  ['Ken', 'カレー は すき です。 ありがとう', 'Me gusta el curry. Gracias.'],
  ['Amigo', '駅 で 会いましょう', 'Veámonos en la estación.'],
  ['Ken', 'はい、 駅 で 会いましょう', 'Sí, veámonos en la estación.']
], [
  ['¿Cuándo quedan?', ['Mañana', 'Hoy', 'El sábado', 'Ayer'], 0],
  ['¿A qué hora?', ['A las tres', 'A las seis', 'A las siete', 'A las diez'], 0],
  ['¿Qué comerán?', ['Curry', 'Ramen', 'Sushi', 'Pizza'], 0],
  ['¿Dónde se ven primero?', ['En la estación', 'En la escuela', 'En el hotel', 'En el dōjō'], 0]
]);
TXL('r_anime', 'Mi anime favorito', [
  ['', 'わたし は アニメ が すき です', 'Me gusta el anime.'],
  ['', 'わたし は ワンピース が いちばん すき です', 'Lo que más me gusta es One Piece.'],
  ['', 'ルフィ は つよい です', 'Luffy es fuerte.'],
  ['', 'ゾロ は かっこいい です', 'Zoro es guay.'],
  ['', 'サンジ は りょうり を します', 'Sanji cocina.'],
  ['', 'チョッパー は いしゃ です', 'Chopper es médico.'],
  ['', 'チョッパー は かわいい です', 'Chopper es adorable.'],
  ['', '毎日 ワンピース を 見ます', 'Veo One Piece todos los días.'],
  ['', '日曜日 は ともだち と いっしょ に 見ます', 'El domingo lo veo con amigos.']
], [
  ['¿Cuál es su anime favorito?', ['One Piece', 'Naruto', 'Bleach', 'Dragon Ball'], 0],
  ['¿Quién cocina?', ['Sanji', 'Zoro', 'Luffy', 'Chopper'], 0],
  ['¿Quién es médico?', ['Chopper', 'Sanji', 'Zoro', 'Luffy'], 0],
  ['¿Quién es guay?', ['Zoro', 'Chopper', 'Sanji', 'Ken'], 0],
  ['¿Con quién lo ve el domingo?', ['Con amigos', 'Solo', 'Con su madre', 'Con el profesor'], 0]
]);
TXL('r_japon', 'Un día en Japón', [
  ['', '今日 は 日本 に 来ました', 'Hoy he venido a Japón.'],
  ['', '朝 は ホテル で パン を 食べました', 'Por la mañana comí pan en el hotel.'],
  ['', 'コーヒー を 飲みました', 'Bebí café.'],
  ['', 'そして 駅 に 行きました', 'Y luego fui a la estación.'],
  ['', '駅 で 日本人 の 友だち に 会いました', 'En la estación vi a un amigo japonés.'],
  ['', 'いっしょ に 店 に 行きました', 'Fuimos juntos a una tienda.'],
  ['', 'おにぎり を 三つ 買いました', 'Compré tres onigiri.'],
  ['', 'おにぎり は 百円 でした', 'Los onigiri costaron 100 yenes.'],
  ['', 'とても やすい です ね', 'Son muy baratos, ¿verdad?'],
  ['', '夜 は ラーメン を 食べました', 'Por la noche comí ramen.'],
  ['', 'ラーメン は とても おいしい です', 'El ramen está muy rico.'],
  ['', '今日 は たのしい 日 でした', 'Hoy fue un día divertido.'],
  ['', '明日 も 日本 で あそびます', 'Mañana también me divertiré en Japón.']
], [
  ['¿Dónde desayuna?', ['En el hotel', 'En la estación', 'En una tienda', 'En casa'], 0],
  ['¿Con quién va a la tienda?', ['Con un amigo japonés', 'Solo', 'Con su familia', 'Con el profesor'], 0],
  ['¿Cuánto cuesta un onigiri?', ['100 yenes', '1.000 yenes', '300 yenes', '10 yenes'], 0],
  ['¿Cuántos onigiri compra?', ['Tres', 'Uno', 'Dos', 'Diez'], 0],
  ['¿Qué cena?', ['Ramen', 'Sushi', 'Curry', 'Pan'], 0],
  ['¿Cómo fue el día?', ['Divertido', 'Aburrido', 'Triste', 'Cansado'], 0]
]);

// ---------- unidades ----------
UNITS.push(
  { id: 'u23', title: 'Biblioteca I · Cada día', sub: 'Textos y diálogos de 8 a 13 líneas', lessons: [
    J('l_r1', 'Una mañana normal', 'Rutina con verbos', '🌅', ['t_r_manana']),
    J('l_r2', '¿Dónde está la estación?', 'Un diálogo para preguntar', '🚉', ['t_r_estacion']),
    J('l_r3', 'Mucho gusto', 'Presentarte', '🤝', ['t_r_presentacion']),
    J('l_r4', 'En el restaurante', 'Pedir y pagar', '🍜', ['t_r_restaurante']),
    J('l_r5', 'Mi fin de semana', 'Kendo, ramen y tele', '🥋', ['t_r_finde']),
    J('l_r6', 'Una carta a un amigo', 'Pasado y presente', '✉️', ['t_r_carta'])
  ]},
  { id: 'u24', title: 'Biblioteca II · Retos', sub: 'Más largo, con más vocabulario', lessons: [
    J('l_r7', 'En el dōjō', 'Una clase de kendo', '⚔️', ['t_r_dojo']),
    J('l_r8', 'Las cuatro estaciones', 'Naturaleza de Japón', '🌸', ['t_r_estaciones']),
    J('l_r9', 'En la librería', 'Precios y compras', '📚', ['t_r_libreria']),
    J('l_r10', 'Una invitación a casa', 'Quedar con un amigo', '🏠', ['t_r_invitacion']),
    J('l_r11', 'Mi anime favorito', 'One Piece y Chopper', '🏴‍☠️', ['t_r_anime']),
    J('l_r12', 'Un día en Japón', 'El reto final: 13 líneas', '🗾', ['t_r_japon'])
  ]}
);
UNITS.slice(-2).forEach(u => u.lessons.forEach(l => { l.unit = u.id; LESSON_BY_ID[l.id] = l; }));
