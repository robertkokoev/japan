import { HistoryAbstractService } from "./history-abstract.service";
import { Observable } from 'rxjs';
import { HistoryInfo } from './history-info';

export class MockHistoryService extends HistoryAbstractService {

  _info: HistoryInfo[] = [
    { 
      era: "Доисторическая и древняя Япония",
      paragraphsList: [
        {
          paragraph: "Япония на заре истории",
          subparagraphsList: [
            {
              subparagraph: "Первые японцы",
              text: "В палеолите Земля была скована ледниками, и уровень воды был на 100 м ниже современного. Япония ещё не представляла собой архипелаг, а соединялась суходольными перешейками с материком. Внутреннее Японское море было просторной долиной. Ледники не достигали Восточной Азии, но их влияние ощущалось на климате. Япония входила в азиатскую степную экозону, богатую различными травами. Здесь водились мамонты, слоны Науманна, большерогие олени и другие животные, которые прибывали сюда из Сибири[1] Первые признаки заселения Японского архипелага появились около 40 тысячелетия до н. э. с началом японского палеолита, который продолжался по 12-е тысячелетие до н. э.[2] Население древней Японии занималось охотой и собирательством, изготавливало первые каменные орудия труда грубой обработки. В этом периоде отсутствуют керамические изделия, поэтому период также носит название периода докерамической культуры[3]. Каменные орудия, с позднеплейстоценовой стоянки Ками-Сиратаки 2 (Kamishirataki 2) на острове Хоккайдо имеют сходство с находками с верхнепалеолитической (15,28—16,56 тыс. лет назад) стоянки Куперс-Ферри (Cooper’s Ferry) на реке Салмон (бассейн Колумбии, штат Айдахо, США), что свидетельствует о первоначальном заселении Америки вдоль тихоокеанского побережья[4]. Памятники с керамикой Фукуи (12 700 ± 500 л. н.) и Камикуроива (12 165 ± 600 л. н.) находятся в Южной Японии[5].",
            },
            {
              subparagraph: "Период Дзёмон",
              text: "Около 10 тысяч лет до н. э. завершилась эпоха ледников, с таянием которых поднялся уровень мирового океана. Благодаря этому образовался Японский архипелаг. В результате потепления и изменения движения морских течений японские степи времён палеолита заросли густым лесом. Примерно в это же время на Японские острова переселилась новая группа людей из Юго-Восточной Азии. Представители этой группы хорошо разбирались в судостроении и морской навигации. Вероятно, их каноэподобные лодки-долблёнки были принесены к японским берегам тёплым океанским течением Куросио. Новоприбывшие юго-восточные азиаты смешались с потомками палеолитической популяции Японского архипелага[6]. Благодаря изменению климата японская флора и фауна кардинально изменились. Северо-восточная часть архипелага была покрыта дубовыми и хвойными лесами, а юго-западная — буковыми и субтропическими. В них жили большие кабаны, олени, дикие утки, фазаны. В морях и океане водились бониты, красные пагры, морские судаки. Побережья Хоккайдо и региона Тохоку были богаты лососем и форелью. Благодаря таким природным богатствам жители Японских островов не нуждались в крупномасштабном сельском хозяйстве или скотоводстве, оставаясь примитивным обществом охотников-собирателей[7].Около 10 тысяч лет назад древние японцы начали изготавливать керамические изделия, которые считаются одними из старейших в мире. Среди керамики того времени преобладала кухонная посуда в виде глубокодонных кувшинов для хранения продуктов, жарки и варки пищи. Характерной особенностью этих изделий был «шнурковый орнамент», который по-японски называется дзёмон. Подобный орнамент наблюдался на островной посуде до середины II века до н. э., что позволило археологам называть японскую культуру времен неолита «культурой Дзёмон», а время её доминирования на Японском архипелаге — периодом Дзёмон[7]. В неолите древние японцы перешли к оседлому образу жизни, формируя небольшие поселения в 20—30 человек на невысоких холмах. Типичным жильём были землянки и полуземлянки. Вокруг поселения находились мусорные кучи, которые одновременно служили местом захоронения умерших. Среди поселений той эпохи выделяется стоянка Саннай-Маруяма в современной префектуре Аомори, датируемая V веком до н. э. и содержащая остатки большого посёлка на 100—200 человек. Основой хозяйства жителей были охота и собирание плодов растений. Существовало половое и возрастное разделение труда. Наряду с промыслами древние обитатели архипелага занимались примитивным разведением каштанов, бобовых, гречихи, а также культивацией устриц. Около IV—III века до н. э. они освоили примитивное суходольное рисоводство. Религиозным представлениям были присущи анимизм и тотемизм. Также они изготавливали из глины женские фигурки догу и поклонялись силам Земли, символам рождения и жизни[7].",
              images:
              [
                {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Uenohara_Jomon_No_Mori.jpg/800px-Uenohara_Jomon_No_Mori.jpg",
                description: "Реконструкция стоянки Ёсиногари (пос. Йосиногари, преф. Сага)"
                },
                {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Oukangatadoki.jpg/800px-Oukangatadoki.jpg",
                description: "Реконструкция стоянки Ёсиногари (пос. Йосиногари, преф. Сага)"
                }
              ]
            },
            {
              subparagraph: "Период Яёй",
              text: "Хотя рисоводство было известно в Японии ещё в эпоху Дзёмон, крупномасштабное заливное рисоводство с использованием ирригации появилось на островах в 1 тысячелетии до н. э., путём заимствования с континента. Местом нововведений был север острова Кюсю, откуда эта культура распространилась в другие районы архипелага. С приходом заливного рисоводства люди, проживавшие до этого на небольших холмах, переселились на равнины и долины рек. Были созданы первые сельские общины мура, члены которых занимались созданием и поддержкой заливных полей. Появились новые орудия труда, такие как каменный нож-серп, а также новые типы зданий для хранения зерна — амбары на подпорках. Члены общины начали проводить праздники и молебны за богатый урожай. Сформировался новый сельскохозяйственный ритуал и календарь[8]. Вместе с рисоводством в Японию с материка попала культура обработки металлов — меди, бронзы и железа. До I века до н. э. японцы импортировали готовые товары, но впоследствии наладили своё металлургическое производство. Среди основных бронзовых изделий были мечи, копья и гэ, а также зеркала и колокола дотаку. С распространением железных орудий во II веке н. э., бронзовое оружие превратилось в предметы культа[9].Также в начале 1 тысячелетия до н. э. на Японском архипелаге начали изготавливать керамические изделия нового стиля, который походил на континентальный. Их особенностью был красноватый цвет, отсутствие узора и богатство видов посуды. Вероятно, реформа керамики была связана с распространением рисоводства. Такая посуда впервые была найдена в посёлке Яёй, по имени которого новая керамическая культура получила название «культуры Яёй». Время господства этой культуры на Японских островах с 1 тысячелетия до н. э. по III век н. э. называется периодом Яёй[9]. Благодаря рисоводству население Японии возросло. Это способствовало налаживанию отношений между общинами, однако нередко провоцировало конфликты, особенно за контроль над ресурсами — землёй и водой. Со II века до н. э. большинство поселений были уже окружены рвами и деревянным частоколом. Среди населения выделялись вожди, которые сосредоточили в своих руках религиозную и военную власть. Селения нередко объединялись в союзы — первые японские прото-государственные образования. Одним из самых укреплённых поселений-общин периода Яёй была стоянка Ёсиногари в префектуре Сага, которая свидетельствует о высоком уровне организации древних японцев[9].",
              images: 
              [
                {
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Yoshinogari_Ancient_Ruins_2008.jpg/380px-Yoshinogari_Ancient_Ruins_2008.jpg",
                  description: "Реконструкция стоянки Ёсиногари (пос. Йосиногари, преф. Сага)"
                }
              ]
            }
          ]
        },
        {
          paragraph: "Формирование японского государства",
          subparagraphsList: [
            {
              subparagraph: "Япония в китайских хрониках",
              text: "Первые письменные упоминания о древней Японии содержатся в исторических хрониках I века н. э. китайской империи Хань. В них указывается, что древние японцы вадзин проживали на островах в Восточном море, имели 100 малых стран, к 108 году до н. э. около 30 из них наладили контакт с китайцами, и иногда присылали дань Китаю. В «Книге Поздней Хань» сохранилось сообщение о посольстве японского вана (между 26 и 56 годом н. э.) страны На, который в 57 году получил от китайского императора золотую печать. В 107 году н. э. японцы привезли в Китай 160 подданных китайского императора, которые ранее были захвачены разбойниками и проданы в Японию. Между 147 и 190 годами в Японии были внутренние смуты и кризис верховной власти."
            },
            {
              subparagraph: "Химико",
              text: "В своде III века китайской империи Вэй, «Предание о людях ва», упоминается 30 японских стран, среди которых самым мощным является Яматай. Сообщается, что её правительница ван-женщина Химико держалась у власти, используя «чары для одурманивания населения». У неё было 1000 служанок, но немногие видели Химико, которая жила в строго охраняемом дворце. Один мужчина приносил ей еду и одежду и выслушивал приказы. Законы в государстве были строги. В 239 году правительница отправила в Вэй посольство с данью и получила от китайского императора в подарок титул «вана японцев, вторая Вэй» и 100 бронзовых зеркал. Из-за ряда неточностей в рассказе о Яматай историки и археологи до сих пор не могут согласовать местоположение этого государственного образования: одни утверждают, что оно находилось в регионе Кинки, а другие — на севере острова Кюсю. Китайцы упоминали, что не все японцы были подданными Химико, например в 1000 ли «по морю» на восток от царства Химико находилось царство Цзюну (拘奴)."
            },
            {
              subparagraph: "Управление",
              text: "Имели (в V—VI веке) чиновников с рангами: ичжима (伊支馬), мимахачжи (彌馬獲支), нуванди (奴往鞮). Имеют дома, но нет городов со стенами. Дворец царя украшен золотом, серебром и жемчугом. Вокруг вырыт ров в 3,33 метра шириной, заполнен ртутью, во время дождя вода не попадает в ров, а стекает по ртути."
            },
            {
              subparagraph: "Хозяйство",
              text: "Тёплый климат. Выращивание зерновых[11], риса, рами[12], коноплю, занимаются шелководством и изготовлением тканей из щёлка. Также выращивают: имбирь, корицу, мандарин[13], перец, перилла[14]. Водится чёрный фазан. Добывают жемчуг и лазурит[15]. Китайцы сравнивали дары, привозимые из Японии, с данью от племён Даньэр и Чжуя (южан). Вещи в изобилии и дёшевы, путешественники запасаются хлебом. На рынке можно купить жемчуг и драгоценные камни."
            },
            {
              subparagraph: "Животные",
              text: "Чёрные фазаны. Есть зверь похожий на быка, называемый «шань-шу»(山鼠) и великий змей (大蛇), который его поедает. Кожа у этого змея тверда, её не разрубить. Сверху у него есть отверстие, которое он открывает и закрывает. Иногда он светится. Но если попасть в него из лука — то умрёт[10]. На юге от Японии также были населённые острова, но китайцы не имели о них достоверных сведений. Сообщали о стране малорослых (朱儒) людей в 3—4 чи в 4000 ли южнее Японии. Далее на юго-восток земли нагих и чернозубых людей. Очень далеко на юго-западе живут островитяне с чёрным телом и белыми глазами, нагие и уродливые, мясо их приятно, путешественники иногда стреляют и едят их. Есть остров Дунти (東鯷), разделённый на 20 княжеств. Острова Ичжоу и Чаньчжоу заселены китайцами, потомками спутников алхимика Сюй Фу (en:Xu Fu), которого Цинь Ши-хуанди отправил искать остров бессмертных Пэнлай. Изредка они приплывали для торговли в нынешнюю Цзянсу. Китайцы говорили, что до этих островов очень трудно доплыть, но иногда суда относит туда ветром. В 7000 ли на северо-запад от Японии лежит земля татуированных людей. Там жители разрисовывают тело узорами как у зверей. Делаю три полосы на голове, длинные линии в почёте, короткие не ценят. От этой земли на восток свыше 5000 ли царство Дахань (大漢). Там нет войн и оружия, обычаи как у татуированных людей, но язык различен."
            },
            {
              subparagraph: "Яматай",
              text: "Появившись на международной арене, государство Яматай было вынуждено стать частью китаецентричной системы межгосударственных отношений в Восточной Азии. По этой системе, которая сформировалась во времена правления династии Хань, Китай начинал диалог с иностранными правителями лишь в случае признания ими верховенства китайского императора и уплаты ему дани. Со своей стороны китайский император предоставлял иностранному правителю политическую поддержку и разрешение торговать с Китаем."
            },
            {
              subparagraph: "Хозяйство и общество",
              text: "Китайцы упоминали, что в I−II веке н. э. японцы (то есть, ва) выращивали рис, просо, коноплю. Производят холсты и шелка. Добывают жемчуг и ляпис-лазурь (или сапфиры, на китайском одинаково 青玉), в горах добывают киноварь. Зимы тёплые, по мнению китайцев, пригодны для выращивания овощей. Из оружия японцы предпочитают копья, стрелы с костяными наконечниками, используют щиты. У мужчин татуировки на теле и лице, по ним определяют социальный статус[17].Обносят частоколом города и дома. В домах имеются отдельные комнаты для мужчин и женщин, старших и младших, и общая комната для всей семьи. Посуда есть, но нет столовых приборов. Довольно много употребляют алкоголя. Обувью не пользуются. В знак уважения садятся на корточки. Много долгожителей, некоторые живут свыше 100 лет. Женщин много, богачи берут по 4−5 жён, у многих по 2−3. Жёны воздержанного поведения и не ревнивы. Одежда мужчин делается из горизонтальных полос ткани. Женщины обматывают голову собственными волосами, киноварь используют как косметику. Воровство редко, поэтому мало судебных тяжб. Преступника продают в рабство вместе с семьёй, за значительные преступления уничтожают всю семью. Покойника не хоронят 10 дней, оплакивают его, постятся. Гадают, бросая кости в огонь. Перед плаваньем по морю один из команды корабля также постится, не моется, не расчёсывает голову, не общается с женщинами. Если плаванье оказывается неудачным, то этого человека казнят, потому что, якобы, он плохо соблюдал пост[17]."
            },
            {
              subparagraph: "Ямато и период Кофун",
              text: "В IV веке письменные уведомления о Японии исчезают. Китай погрузился в междоусобицы, повлёкшие ослабление его международного авторитета. Одновременно на Корейском полуострове возникли три государства — Когурё, Силла и Пэкче, которые начали борьбу за объединение Кореи. На этом фоне в Японии также усилились объединительные тенденции. Их выразителем стало государство Ямато, расположенное в одноимённом регионе современной префектуры Нара. Письменные свидетельства о начальной истории этого государства отсутствуют, однако археологи связывают его усиление с распространением культуры курганов-кофунов в центральной Японии. Обычай хоронить состоятельных лиц в земляных курганах возник на Японском архипелаге в III веке и сохранялся до середины VI века. Этот временной промежуток называют периодом Кофун, а культуру этого периода — «культурой Кофун». Японские курганы имели различные формы, однако самая распространённая из них напоминала с воздуха замочную скважину. Наибольшее количество подобных могил находилось в Ямато и Кавати, на территории современных префектур Нара и Осака, что говорит о возможном союзе знати этих двух регионов. Самой южной точкой распространения культуры курганов считается префектура Кагосима, а самой северной — префектура Иватэ. Большинство историков и археологов ассоциируют распространение этой культуры с постепенным овладеванием государством Ямато землями Японского архипелага. Предполагают, что Ямато была федерацией. Её возглавлял вождь окими, который сосредоточивал в своих руках всю религиозную и военную власть в государстве. Ему повиновалась региональная знать, которая объединялась в крупные роды удзи. Согласно статусу рода, вождь придавал его главам титулы кабанэ, которые определяли место рода в правительственной иерархии. Эта система государственной организации называлась родово-титулярной.",
              images:
              [
                {
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NintokuTomb.jpg/200px-NintokuTomb.jpg",
                  description: "Курган Дайсэн (г. Сакаи, преф. Осака)"
                },
                {
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/KofunCuirass.jpg/132px-KofunCuirass.jpg",
                  description: "Железный доспех (пос. Эйхэйдзи, преф. Фукуи)"
                },
                {
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Takamat1.jpg/150px-Takamat1.jpg",
                  description: "Фрески в кургане Такамацудзука (с. Асука, преф. Нара)"
                }
              ]
            },
            {
              subparagraph: "Внешняя политика Ямато",
              text: "Ямато было активным членом восточноазиатского международного сообщества и часто вмешивалось в дела Корейского полуострова на стороне южнокорейского государства Пэкче. В IV веке Ямато помогало последнему сдерживать натиск северокорейского государства Когурё, за что получило южные земли Мимана́. Об этом упоминает текст стелы, которая была возведена в память о правителе Когурё по имени Квангэтхо. В V веке вожди Ямато пытались закрепить военные успехи на полуострове дипломатически, обращаясь за помощью к Китаю. Так, в документации южной китайской династии Сун упоминаются «пять японских ванов», которые в течение 413—478 лет присылали к китайскому императору 10 посольств и просили признать их правителями юга Кореи. В правление Цзиньского Ань-ди (396—418) были установлены дипломатические отношения с Ямато. Лю Сун У-ди в 421 году издал указ, гласящий: японский Цзань (贊, Император Нинтоку) далёк, но верен, достоин, образован, можно дать ему титул. В 425 году Цзань прислал к императору Лю Сун Вэнь-ди Сыма Цаода (司馬曹達) с докладом и дарами. Цзаню наследовал младший брат Чжэнь (珍, Император Хандзэй). Он прислал посольство и объявил, что является военным правителем (都督) шести царств: Японии, Пэкче, Силла, Кая, Чинхана, Махана, великим главнокомандущим умиротворителем востока (安東大將軍) и просил признать за ним такой титул. Китайцы признали его царём Японии и главнокомандующим умиротворителем востока, в признании его господства на Корейскими царствами отказали. Ещё 13 знатным японцам дали титулы. В 443 году царь Цзи (濟, Император Ингё) прислал посольство с дарами и просил подтвердить его титулы. В 451 китайцы признали за Цзи господство над Корейскими царствами, кроме Пэкче, ещё 23 японца получили титулы. Следующий правитель Син (Император Анко) возобновил посольства, он не был признан правителем Кореи. Царь У (Император Юряку) сам объявил себя правителем Японии и корейских царств. Хотя Ямато принимало верховенство Китая, оно заручилось его военно-политической поддержкой для противостояния натиску Когурё. При Лю Сун Шунь-ди, в 478 году Юряку написал китайскому императору: «С давних пор мои предки в броне и шлеме пересекали горы и реки не зная сна и отдыха. На востоке покорили 52 царства волосатых людей (毛人), на западе 66 царств восточных варваров (восточных относительно Китая), уничтожил 95 царств у северного моря.[…] Не упускал года без отправления дани. Мимо Пэкчэ веду корабли. Но Когурё беспощадно, желает всё поглотить. Чтобы продолжить дело покойного отца и старшего брата, завершить их подвиг, соберу войско, возьму титул Кайфу Итун Сансы (開府儀同三司, чиновник высшего ранга). Остальные титулы раздам другим для их поощрения». Впрочем вскоре Лю Сун была уничтожена. Лян У-ди восстановил дипломатические контакты с Японией. В VI веке Пэкче и Ямато совместно сопротивлялись агрессии другого корейского государства — Силла. Однако война с ней была безуспешной и закончилась аннексией Миманы силланцами в 562 году. Благодаря тому, что двор Ямато проводил активную внешнюю политику, в Японию было импортировано немало достижений материковой цивилизации. Китайские и корейские эмигранты селились на Японских островах и распространяли новые знания — способы изготовления прочной керамики, ювелирную обработку металлов, инженерное дело, медицину и иероглифическую письменность[18]. В VI веке, при содействии вана (правителя) Пэкче, двору Ямато были переданы буддистские образы и сутры. Так в Японию попал буддизм. Однако вокруг новой веры возникли споры знати, которые переросли в религиозную войну. Мощный род Сога требовал принятия государством буддизма по образцу соседних государств, а старинный род Мононобэ защищал традиционные верования. Заручившись поддержкой эмигрантских родов, Сога разбили Мононобэ в 587 году и установили свою диктатуру в стране."
            }
          ]
        },
        {
          paragraph: "Развитие «правового государства",
          subparagraphsList:
          [
            {
              subparagraph: "Период Хэйан и правление Фудзивара",
              text: "В VIII веке борьба за контроль над центральным правительством между аристократией и буддистскими монахами обострилась. Роль монаршего дома постепенно приходила в упадок. В связи с этим, стремясь избавиться от влияния буддистов столичного района Нара, император Камму в 794 году перенёс столицу страны в город Хэйан — «столицу мира и спокойствия», которая со временем стала называться Киото. Период с начала основания этого города и до образования первого сёгуната именуют периодом Хэйан (794—1185). В новой столице император начал реформы, направленные на обновление «правового государства» и подавление аристократического произвола в регионах. Был установлен жестокий надзор центра за соблюдением «Закона о выдаче земельных наделов» в провинциях. Крестьяне были освобождены от военной службы, а вместо них защиту провинциальной администрации должна была выполнять местная знать, которая формировала отряды так называемых кондэй. Кроме того, была санкционирована серия военных походов против автохтонов юга Кюсю и севера Хонсю, с целью расширить границы японского государства. После переноса столицы и налаживания исполнительной вертикали власть императора окрепла, и потребность в его непосредственном вмешательстве во все дела отпала. Однако одновременно возросла роль императорских советников, должности которых узурпировали представители рода Фудзивара. Они отстранили от большой политики прочие аристократические роды и стали поставщиками главных жён Императору, превратившись таким образом в родственников японских монархов. Главы рода Фудзивара выполняли функции сэссё — регентов малолетнего императора, и кампаку — советников взрослого императора. Фактически они переняли всю полноту власти в стране и начали правление регентов и советников в лице монарха. Апогеем Фудзивара считается XI век, эпоха председательства Фудзивары-но Ёримити, сына Фудзивары но Митинага, при которой этот род владел огромным количеством частных имений (сёэн) и занимал все ведущие посты в правительстве. С началом X века начала проявляться нехватка земель государственного фонда, из-за чего исполнение «Закона о выдаче земельных наделов» затормозилось. Императорский двор изменил курс и перевёл сбор налогов на плечи провинциалов кокуси. Последние получили источник обогащения и назначили своих управляющих в регионах. Вместе с тем, зажиточные крестьяне стали покидать государственные наделы и поднимать целинные земли, чтобы превратить их в частные имения. Государство брало высокий налог с таких имений, поэтому их владельцы дарили свою собственность влиятельным аристократам и монастырям, чтобы платить меньше. В обмен за это новые хозяева назначали дарителей управителями в своих владениях. Таким образом формировался слой новой региональной знати из крестьян."
            },
            {
              subparagraph: "Появление самураев и института инсэй",
              text: "В период Хэйан, из-за отсутствия внутренней или внешней угрозы для центрального правительства, Япония не имела регулярной армии. В целом уровень безопасности в стране, особенно в отдалённых регионах, был невысок. В целях защиты своих земель от грабителей местная знать начала формировать вооружённые отряды из «служилых людей» — самураев. Лидерами таких отрядов становились преимущественно столичные аристократы, которые находились с подчинёнными воинами в отношениях господина и слуги. Самыми известными среди отрядов были выходцы из родов Тайра и Минамото. Между тем, в середине XI века на трон взошёл император Го-Сандзё, который не был родственником аристократов Фудзивара и поэтому повёл курс на восстановление абсолютной власти монарха. Его реформы были поддержаны следующим императором Сиракава. Он ограничил влияние регентов и советников Фудзивара на монарха тем, что в 1086 году досрочно ушёл в отставку, передав трон своему сыну, а сам стал его опекуном и советником. Таким образом было положено начало так называемому «правлению экс-императоров», институту инсэй, который был призван оберегать династию от чрезмерного вмешательства аристократов. Благодаря успешной реализации такого правления, род Фудзивара, который на протяжении 200 лет использовал родственные связи с императорским домом для узурпации власти, утратил свои позиции в правительстве. Наряду с аристократами на воинские должности императорского двора стали принимать знатных самураев. Постепенно их стали признавать как отдельное сословие. К середине X века региональные самураи имели такую силу, что поднимали восстания против центрального правительства — в регионе Канто во главе с Тайра-но Масакадо и вблизи Внутреннего Японского моря под руководством Фудзивара-но Сумитомо[22]. Поскольку государство не имело регулярной армии, оно подавило выступления силами других самураев, тем самым способствуя росту их авторитета. Во второй половине XI века на северо-востоке страны дважды вспыхивали бунты (смута Хогэн и смута Хэйдзи), которые были разбиты силами самураев из Канто. Их командир Минамото-но Ёсииэ снискал себе славу самого успешного полководца во всей Восточной Японии."
            },
            {
              subparagraph: "Культура периода Хэйан",
              text: "К началу IX века много молодых монахов были недовольны огосударствлением и политизацией буддизма. В поисках истинного учения двое монахов — Сайтё и Кукай — отправились в китайскую империю Тан и прошли там обучение. После возвращения первый построил храм Энряку-дзи на горе Хиэй, ставший оплотом секты Тэндай, а второй основал храм Конгобу-дзи на горах Коя-сан, ставший центром секты сингон. Принесённый этими монахами новый эзотерический буддизм призывал к спасению через уединение в горах, изучение канона и молитвы для прозрения мира. В 894 году из-за ослабления связей с Тан и позицией императорского советника Сугавара но Митидзанэ, Япония прекратила высылать посольства в Китай. Это прервало традицию импорта континентальных нововведений и стимулировало японцев разрабатывать свои собственные культурные формы. Появилась новая оригинальная аристократическая культура Кокуфу, которая расцвела во времена правления рода Фудзивара. Появился новый светский архитектурный стиль дворцов-усадеб с галереями и садами. Одежда знати и горожан приобрела оригинальные японские формы. В изобразительном искусстве возник новый жанр «японских картин» ямато-э, основными темами которого стали повседневная жизнь вельмож и местные пейзажи. Одновременно получила распространение японская азбука кана, на которой в первый раз начали составлять литературные произведения. Среди них особо выделяют «Повесть о старике Такэтори», «Записки у изголовья» Сэй-Сёнагон, «Повесть о Гэндзи» Мурасаки Сикибу, «Собрание старых и новых песен Японии» и «Дневник путешествия из Тоса в столицу» Ки-но Цураюки. Большинство книг сопровождались рисунками и были особенно популярны в среде аристократов."
            }
          ]
        }
      ]
    },
    {
      era: "Средневековая Япония",
      paragraphsList: [
        {
          paragraph: "Начало самурайского правления",
          subparagraphsList: [
            {
              subparagraph: "Диктатура Тайра",
              text: "В 1156 году между императором Го-Сиракава и экс-императором Сутоку возникло острое противостояние, что разделило род Фудзивара на два враждующих лагеря. Разгорелся вооружённый конфликт, ареной которого стала столица. В обоих лагерях все большую политическую силу начали приобретать профессиональные военные — самураи. По свидетельству монаха Дзиэна, очевидца событий и автора хроники «Записки дурака», в стране наступила «эпоха воинов»[23]. В 1159 году вспыхнула новая война за лидерство в столице между самурайскими родами Тайра и Минамото, в которой Тайра-но Киёмори разбил силы Минамото-но Ёситомо. Укрепив союз с Императорским двором, Киёмори стал первым самураем, занявшим высшую правительственную должность Министра высшей политики. Он вытеснил аристократов из окружения императора, заставив того жениться на своей дочери. Благодаря этому члены рода Тайра заняли высшие посты при дворе и получили много новых поместий. Они также сосредоточили в своих руках огромные богатства благодаря торговле с китайской империей Сун во Внутреннем Японском море. Тайра процветали и презирали других настолько, что возникло даже выражение: «Кто не из рода Тайра, тот — не человек»[23]. В конце концов против Тайра сформировалась мощная оппозиция. После того как Киёмори силой заставил посадить на Императорский трон своего годовалого внука, дядя малолетнего мальчика, принц Мотихито, призвал всех самураев Японии свергнуть диктатуру ненавистного родственника. Среди оппозиционеров наиболее влиятельным был Минамото-но Ёритомо, который после войны 1159 года был сослан родом Тайра в провинцию Идзу региона Канто. Заложив в городе Камакура свою ставку и подчинив себе самураев региона, он отправил против врага армию во главе со своим младшим братом Ёсицунэ. Началась новая война Минамото и Тайра, которая закончилась уничтожением рода диктаторов в 1185 году в битве при Данноура[23]."
            },
            {
              subparagraph: "Сёгунат и период Камакура",
              text: "После ликвидации Тайра Минамото-но Ёритомо получил от императорского двора право назначать во все провинции страны своих военных губернаторов сюго и земельных голов дзито, которые выполняли функции надзирателей над частными и государственными землями. Истребив могучий род Фудзивара и покорив регион Тохоку, он стал полноправным лидером самураев Японии. В 1192 году Ёритомо был назначен на должность «Великого сёгуна — покорителя варваров» и основал первое самурайское правительство, сёгунат Камакура. Таким образом, в стране начало действовать две системы власти — монарше-аристократическая в Киото и военная в Камакуре. Последняя базировалась на отношениях господина-слуги между сёгуном и самурайскими землевладельцами гокэнин. Сёгун гарантировал землевладельцам неприкосновенность старых земель и предоставлял новые за преданную службу; в ответ те присягали на верность ему и служили в правительстве и армии. Время функционирования этого сёгуната называется периодом Камакура (1185—1333). После смерти Ёритомо его вассалы из рода Ходзё уничтожили ряд влиятельных самурайских властителей и захватили реальную власть в правительстве. Они убили третьего сёгуна из рода Минамото и превратили эту должность в номинальную. Приглашая на пост главы Камакурского правительства аристократов и представителей Императорской семьи, Ходзё руководили от их имени как советники сиккэн. В 1221 году экс-император Го-Тоба, планируя возродить централизованное государство и ликвидировать двоевластие, поднял в Киото восстание против сёгуната. Однако это выступление закончилось поражением, в результате которого самурайское правительство подчинило себе столицу, двор и западные регионы страны. Чтобы закрепить успех, в 1232 году Ходзё Ясутоки установил первый самурайский свод законов, «Список наказаний», который стал образцом для подражания для законодателей последующих эпох. В середине XIII века в Азии возникла могущественная Монгольская империя, посольства которой неоднократно прибывали в Японию с требованием признать верховенство Великого хана. Императорский двор и сёгунат были единодушны относительно сохранения независимости страны, поэтому всех послов казнили. В ответ, в 1274 и 1281 годах монголы дважды вторгались на Японский архипелаг, но были разгромлены самурайскими войсками и тайфунами камикадзе, которые уничтожили флот нападавших. Несмотря на победу, сёгунат не раздал наград подчинённым, чем поколебал доверие к себе. Монгольское вторжение в Японию, описанное Марко Поло в тот период, одно из первых упоминаний Японии в Европейской литературе[24]. В конце XIII века из-за раздробления, выдачи под залог и продажи своих земельных участков, многие из самураев потеряли средства к существованию. Для их спасения сёгунат издал в 1297 году «Декрет благодатного правления», которым отменял долги и заставлял ростовщиков вернуть должникам всё имущество без возмещения. Однако такой шаг не решил проблему малоземелья военной элиты, а лишь усугубил её, ибо отныне самураям никто не давал в долг. Поэтому авторитет Камакурского правительства окончательно обветшал."
            }
          ]
        },
        {
          paragraph: "Развитие правления самураев",
          subparagraphsList:
          [
            {
              subparagraph: "Реставрация Кэмму и война двух династий",
              text: "В XIV веке, с упадком сёгуната, род Ходзё взял курс на централизацию управления, что вызвало недовольство самурайства в регионах. Этим воспользовался император Го-Дайго, сторонник сильного монархического государства, который поднял восстание против камакурского правительства, но потерпел поражение и был сослан на острова Оки. Его сын принц Мориёси продолжил борьбу и при поддержке провинциальных самураев во главе с Кусуноки Масасигэ длительное время противостоял армиям Ходзё. Когда в 1333 году Император Го-Дайго сбежал из ссылки, на его сторону перешла региональная знать. Один из её лидеров, Асикага Такаудзи, ликвидировал органы власти сёгуната в Киото, а другой, Нитта Ёсисада, атаковал Камакуру и уничтожил сам сёгунат вместе с родом Ходзё.После возвращения императора Го-Дайго в столицу была начата так называемая реставрация Кэмму, в ходе которой планировалось возродить древние монархические порядки и сформировать новое правительство из придворных аристократов и военной знати. Однако на практике императорские реформы улучшали жизнь только придворных и оставляли нерешёнными проблемы самурайства. Из-за этого бывший соратник императора, Асикага Такаудзи, возглавил недовольных самураев и восстал против правительства «реставраторов». В 1336 году он захватил Киото, посадил в нём нового императора и издал «Список Кэмму», в котором провозгласил основание собственного сёгуната в столице. Между тем, предыдущий император Го-Дайго сбежал на юг, в район Ёсино, где провозгласил повстанцев «врагами трона» и создал своё отдельное императорское правительство. Таким образом, оформился раскол императорского двора, и в стране началась гражданская война, период двух династий: северной в Киото и южной в Ёсино."
            },
            {
              subparagraph: "Второй сёгунат и период Муромати",
              text: "В 1338 году Асикага Такаудзи был назначен северной династией на должность сёгуна. Появилось второе самурайское правительство, получившее название сёгунат Муромати, по имени одноимённого района столицы, где находилась резиденция сёгуна. Время существования этого правительства называется периодом Муромати (1338—1573). В отличие от предыдущих режимов новый сёгунат повёл курс на децентрализацию. Он предоставил военным губернаторам сюго в провинциях право присваивать половину налогов из региона, заставив их собственноручно поддерживать местных малоземельных самураев. Эти начальные реформы способствовали привлечению японской знати на сторону правительства в войне двух династий, но превратили военных губернаторов в мощных провинциальных властителей, которые часто пренебрегали приказами центра. В 1392 году при правлении 3-го сёгуна Асикага Ёсимицу произошло объединение двух ветвей императорского дома в одну, что ознаменовало конец войны. С помощью сёгунских советников канрэев удалось поставить под жесточайший контроль военных губернаторов. Сёгунат взял на себя ряд политических функций императорского двора и стал единственным общеяпонским правительством. Для эффективного управления восточными землями Ёсимицу выделил камакурскую администрацию, а для активизации экономики страны начал торговлю с китайской династией Мин и корейской династией Чосон. Он также вёл борьбу с контрабандистами и японскими пиратами. После смерти Ёсимицу сёгунат начал постепенно терять контроль над регионами. Реальную власть в стране захватили сёгунские советники и военные губернаторы из провинций. В 1467 году из-за противостояния советников Хосокавы и Яманы о назначении следующего правителя сёгуната вспыхнула война, получившая название смуты Онин. Она дала начало длительным междоусобицам самурайства в столице и регионах, так называемому периоду Сэнгоку, «Эпохе воюющих провинций» (1467—1615). Сёгун окончательно утратил свою роль всеяпонского лидера и гаранта стабильности. Для Японии нормой стали социальные катаклизмы: мятежи и восстания низов против верхов. Так, в 1486 году в провинции Ямасиро местные самураи выгнали всех чиновников и 8 лет самостоятельно управляли регионом, а в 1488 году последователи секты дзёдо-синсю захватили власть в провинции Кага и удерживать её около века. С начала XVI века новыми лидерами в регионах постепенно стали главы местных самурайских родов, которые сбросили своих вчерашних хозяев — военных губернаторов. Эти главы, которые назывались даймё, порвали с центральной властью и начали формирование собственных родовых «государств». Они конфисковывали частные и государственные земли в свою пользу, переставали перечислять налоги в столицу и организовывали крупные родовые армии из местной знати. Резиденции землевладельцев находились в горных замках, у подножия которых закладывались призамковые торгово-ремесленные поселения. В ряде таких родовых «государств» были установлены оригинальные удельные законы, которые выполняли функции земельного и уголовного кодексов. В то время как центральную Японию охватили междоусобицы, на юге острова Рюкю объединились под руководством династии Сё, основавшая королевство Рюкю. Это государство заключило договоры с Японией и китайской Мин, и играла важную роль посредника в азиатской торговле XV — первой половины XVI века."
            }
          ]
        }
      ]
    }
  ]

  getHistory(era: string): Observable<HistoryInfo> {
    
    return new Observable<HistoryInfo> (observer => {
      observer.next(
        this._info.find(i => {
          if (i.era == era) {
            return i;
          }
        })
      )
    })
  }
}