export type ShopId = "silta" | "ziburys" | "ramu";

export type Supplier = {
  name: string;
  url: string;
  unit: string;
  warehouse: string;
  notes: string;
};

export type Product = {
  slug: string;
  name: string;
  short: string;
  price: number;
  compareAt: number;
  image: string;
  gallery: string[];
  badge?: string;
  colors?: string[];
  sizes?: string[];
  weight: string;
  power: string;
  features: string[];
  includes?: string[];
  description: string;
  story: string;
  faq: { q: string; a: string }[];
  cogs: number;
  shippingDays: string;
  suppliers: Supplier[];
  adPriority: number;
};

export const FREE_SHIP = 39;
export const LOCKER_FEE = 2.9;
export const COURIER_FEE = 4.9;
export const WRAP_FEE = 2.49;

export const products: Product[] = [
  {
    slug: "sildanti-salike",
    name: "Šildanti USB šalikė",
    short: "Kaklas šiltas per kelias sekundes. Telpa į kišenę.",
    price: 34.9,
    compareAt: 49.9,
    image: "/images/product-scarf.jpg",
    gallery: ["/images/product-scarf.jpg", "/images/product-scarf-2.jpg"],
    badge: "Perkamausia",
    colors: ["Anglies juoda", "Pelenų pilka", "Bordo"],
    weight: "200 g",
    power: "USB 5V · 3 temperatūros (42 / 48 / 55 °C)",
    features: [
      "Grafeno juosta kaklo zonoje — šiluma jaučiama per 8–15 sekundžių",
      "Trys lygiai: 42 °C, 48 °C ir 55 °C, LED parodo režimą",
      "Sveria ~200 g, telpa į palto kišenę, vienas dydis su užsegimu",
      "USB 5V — jūsų powerbankas kišenėje, siuntinyje baterijos nėra",
      "Skalbiama ištraukus laidą: rankomis arba 30 °C švelniu režimu",
      "Tinka po striuke, ant paltuko apykaklės, biure prie šalto lango",
    ],
    includes: ["Šildanti šalikė", "USB laidas", "Lietuviška naudojimo kortelė"],
    description:
      "Kaklas atiduoda šilumą pirmas — stotelėje, prie atviro sandėlio vartų, vedant šunį 7 ryto. Ši šalikė šildo ne vilna, o plona grafeno juosta, kuri įkaista nuo paprasto USB 5V powerbanko kišenėje.\n\nTrys temperatūros: žemiausia visai dienai, vidurinė žvarbiam vėjui, aukščiausia pirmoms minutėms, kol sušylat. 200 gramų — mažiau nei šalikas, kurį jau turite, bet šiluma ten, kur jos reikia, ne visame bute.\n\nDovana, kurią žmogus užsideda kiekvieną rytą iki kovo. Ne žvakė. Ne kojinės, kurių spinta jau pilna.",
    story:
      "Radiatorius šildo orą. Ši — jus. Be pūkinės ant galvos ir be 1500 W sąskaitos. Stotelė, dviratis, šuo, sandėlio kiemas.",
    faq: [
      {
        q: "Ar reikia atskiros baterijos?",
        a: "Ne. Jungiate į bet kokį USB powerbanką (rekomenduojame 5V/2A, nuo 10 000 mAh visai dienai). Powerbanko siuntinyje nėra — dauguma jau turi.",
      },
      {
        q: "Ar galima skalbti?",
        a: "Taip, ištraukus USB laidą. Rankinis skalbimas arba 30 °C švelnus režimas. Be džiovyklės ir be karšto lygintuvo ant laidų zonos.",
      },
      {
        q: "Ar tai medicinos prietaisas?",
        a: "Ne. Tai šildantis aksesuaras žiemai. Negydo ligų, neskirtas skausmo terapijai ir nenaudojamas miegant.",
      },
      {
        q: "Ar šils per paltą?",
        a: "Šiluma jaučiama prie odos arba per ploną megztinį. Po stora pūkine efektas silpnesnis — dėvėkite arčiau kaklo.",
      },
      {
        q: "Koks dydis?",
        a: "Vienas, su užsegimu. Tinka daugumai kaklų. Jei labai siauras kaklas — užsegate laisviau.",
      },
    ],
    cogs: 10,
    shippingDays: "1–4 d.d. iš ES sandėlio",
    suppliers: [
      {
        name: "CJ — USB heated scarf",
        url: "https://cjdropshipping.com/product/heating-scarf-usb-electric-heated-neck-wrap-heating-pad-pain-relief-three-gear-temperature-control-neck-warmer-for-women-men-p-2410090540211619700.html",
        unit: "~4,53 $ (CN) · tikrinti EU WH",
        warehouse: "CJ CN / pre-stock DE/PL",
        notes: "SKU CJYD215515201AZ. 200 g. Pirmiausia užsakyti 3 pavyzdžius, tada 30–50 vnt. į PL/DE.",
      },
      {
        name: "Sheerfond OEM (logo)",
        url: "https://www.heated-cloth.com/sale-37806802-smart-women-usb-electric-heating-scarf-winter-rechargeable-graphene-customized-logo.html",
        unit: "~10 $ nuo 2 vnt.",
        warehouse: "Dongguan, CN",
        notes: "MOQ 2. Tinka privačiam prekės ženklui, kai hero SKU jau parduoda.",
      },
    ],
    adPriority: 1,
  },
  {
    slug: "ranku-sildytuvai",
    name: "Rankų šildytuvai · 2 vnt.",
    short: "Magnetiniai, įkraunami. Vienas sau, vienas dovanai.",
    price: 27.9,
    compareAt: 39.9,
    image: "/images/product-warmers.jpg",
    gallery: ["/images/product-warmers.jpg", "/images/product-warmers-2.jpg", "/images/product-warmers-rgb.jpg"],
    badge: "Impulsas",
    colors: ["Matinė juoda", "Šalavijų", "Rožinė"],
    weight: "2 × ~90 g",
    power: "USB-C · iki ~8 val. šilumos · powerbank funkcija",
    features: [
      "Du šildytuvai — vienas kiekvienai kišenei, magnetai sulipdo į bloką",
      "USB-C įkrovimas; žemiausias režimas iki ~8 val., aukščiausias 2–3 val.",
      "Gali pakrauti telefoną pakeliui — šiluma ir powerbankas viename",
      "Metalinis / aliuminio korpusas, telpa į delną ir pirštinę",
      "Ekranas arba LED rodo lygį — nespėliojate, kiek liko",
      "Siunčiame į LP Express ir Omniva, be skysčių ir be „kibirėlio“ vienkartinių",
    ],
    includes: ["2 šildytuvai", "USB-C laidas", "Lietuviška kortelė"],
    description:
      "Mažiausia žiemos dovana, kurią vis tiek atsimena. Du įkraunami šildytuvai, kuriuos sukabinate magnetu — vienas blokas stalčiuje, du delnai stotelėje.\n\nRytinis automobilis, kol variklis dar šaltas. Stadionas. Žvejyba. Šuo. Kišenėje šiluma, ne vienkartinis gelis, kuris atšąla po valandos ir keliauja į šiukšliadėžę.\n\nĮkraunate per USB-C vakare. Rytą kišate į pirštines. Jei telefonas sėdi — tas pats daiktas duoda ir porą procentų pakeliui.",
    story:
      "Vokietijoje panašūs rinkiniai ~35 €. Lietuvoje vis dar dovanoja žvakes. Šitie telpa į kišenę ir dirba iki kovo.",
    faq: [
      {
        q: "Kiek laiko laiko šilumą?",
        a: "Žemiausias režimas — iki ~8 val., vidurinis ~4–5 val., aukščiausias 2–3 val. Šaltyje žemiau −10 °C laikas trumpėja.",
      },
      {
        q: "Ar tinka vaikams?",
        a: "Nuo 8 metų, prižiūrint. Korpusas įkaista — nelaikyti prie odos visą naktį ir neimti į lovą.",
      },
      {
        q: "Ar galima lėktuve?",
        a: "Powerbanko taisyklės: rankiniame bagaže, paprastai iki 100 Wh. Šitie maži — tinka. Nelaikykite įjungtų kišenėje visą skrydį.",
      },
      {
        q: "Ar tikrai du vienetai?",
        a: "Taip, pora. Magnetai sucikina į vieną bloką, kad nedingtų stalčiuje.",
      },
    ],
    cogs: 9,
    shippingDays: "1–4 d.d. iš ES · lithium, ne oru su paprastu laišku",
    suppliers: [
      {
        name: "AliExpress — magnetic 2-pack hand warmer",
        url: "https://www.aliexpress.com/w/wholesale-rechargeable-hand-warmer.html",
        unit: "~16–18 $ pora, gamykla ~6–9 $",
        warehouse: "Filtruoti ES / Choice",
        notes: "UN38.3 baterijos. Imti CE dokumentus. Palyginti DE D2C kainą ~34,99 €.",
      },
    ],
    adPriority: 2,
  },
  {
    slug: "sildancios-kojines",
    name: "Šildančios kojinės",
    short: "Pirmą kartą žiemą kojos šiltos visą kelią iki darbo.",
    price: 36.9,
    compareAt: 49.9,
    image: "/images/product-socks.jpg",
    gallery: ["/images/product-socks.jpg", "/images/product-socks-2.jpg"],
    colors: ["Tamsiai pilka"],
    sizes: ["S/M (36–40)", "L/XL (41–46)"],
    weight: "~280 g pora",
    power: "Išimami akumuliatoriai · 3 lygiai",
    features: [
      "Šiluma ties padu ir pirštais — ten, kur batai šąla pirmiausia",
      "Išimami akumuliatoriai: 3 lygiai, žemiausias visam keliui į darbą",
      "Tinka batai, guminiai, žygio aulai — ne tik slidėms",
      "Baterijos kišenėje prie blauzdos, ne po padu",
      "Skalbiama išėmus paketus — 30 °C, be džiovyklės",
      "Dovana tam, kam visada šąla kojos ir kas sako, kad „nieko nereikia“",
    ],
    includes: ["Kojinių pora", "2 išimami akumuliatoriai", "USB kroviklis", "Lietuviška kortelė"],
    description:
      "Ne slidinėjimo kurortui. Šlapiems Lietuvos šaligatviams, sandėliui, stotelei, stadionui. Vilnonės kojinės laiko šilumą. Šitos ją gamina — padukas ir pirštai, trys lygiai, baterijos išsiima prieš skalbimą.\n\nPigūs USB padukai šildo tik prie rozetės. Čia belaidžiai: užsidedate, išeinate, kojos nebėra pirmas dalykas, kuris prašo namo.\n\nDydžiai S/M ir L/XL. Kinų lentelė siauresnė — jei abejojate, imkite didesnį. Grąžinimas 14 dienų.",
    story:
      "Kojos šąla pirmos. Šitos kojinės — visam keliui, ne tik sofai prie radiatoriaus.",
    faq: [
      {
        q: "Ar skalbiama?",
        a: "Taip, išėmus baterijas. 30 °C švelnus režimas. Negalima džiovyklės ir karšto lygintuvo ant laidų zonos.",
      },
      {
        q: "Ar baterijos įeina?",
        a: "Taip: pora išimamų akumuliatorių ir USB kroviklis. Pilnas įkrovimas ~3–4 val.",
      },
      {
        q: "Ar tilps į batus?",
        a: "Į žygio ir žieminius — taip. Į labai siaurus miesto batus gali būti ankšta. Tada imkite plonesnę vidpadį porą arba rašykite mums.",
      },
      {
        q: "Kiek laiko šildo?",
        a: "Žemiausias lygis — darbo kelionei ir pietums, aukščiausias — 2–3 val. Lauke −15 °C trumpiau.",
      },
    ],
    cogs: 13,
    shippingDays: "2–5 d.d. geriau iš PL sandėlio",
    suppliers: [
      {
        name: "AliExpress — rechargeable heated socks",
        url: "https://www.aliexpress.com/w/wholesale-rechargeable-heated-socks.html",
        unit: "~12–16 $",
        warehouse: "CN; ieškoti PL/ES Choice",
        notes: "Aukšta grąžinimų rizika. Prieš reklamą — 2 dydžių pavyzdžiai ir skalbimo testas.",
      },
    ],
    adPriority: 4,
  },
  {
    slug: "usb-sildoma-liemene",
    name: "USB šildoma liemenė",
    short: "Šilta kaip pūkinė. Sveria kaip džemperis.",
    price: 59.9,
    compareAt: 79.9,
    image: "/images/product-vest.jpg",
    gallery: ["/images/product-vest.jpg"],
    badge: "Aukščiausias krepšelis",
    colors: ["Juoda"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    weight: "~330–520 g be powerbanko",
    power: "USB 5V/2A · 3–9 zonos · powerbankas NEįeina",
    features: [
      "Krūtinė, nugara, apykaklė — zonos įkaista per 2–4 minutes",
      "Dėvima po striuke arba vietoj antro sluoksnio — sveria kaip džemperis",
      "USB 5V/2A į jūsų powerbanką kišenėje; powerbanko nesiunčiame",
      "Uniseks kirpimas, dydžiai S–XXL — kinų dydžiai maži, imkite +1",
      "Skalbiama ištraukus laidą, 30 °C, be džiovyklės",
      "Sandėliui, stadionui, šuniui 06:40, medžioklei, dviračiui žiemą",
    ],
    includes: ["Šildoma liemenė", "USB laidas", "Dydžių lentelė", "Lietuviška kortelė"],
    description:
      "Sandėlio pamaina, stadionas, šuo 06:40. Liemenė šildo ten, kur striukė tik užstoja vėją: krūtinė, nugara, apykaklė. USB įkišate į powerbanką, kurį jau turite — siuntinys lengvesnis, be papildomos baterijos rizikos.\n\nSveria kaip džemperis, šildo kaip plonas pūkinių sluoksnis. Po striuke neapkrauna pečių. Vietoj antro megztinio biure, kai radiatorius dar neįjungtas.\n\nDydžiai S–XXL. Kinų S ≈ EU M. Jei abejojate — +1 dydis. Lentelė prie užsakymo. Grąžinimas 14 dienų, Kalėdoms — iki sausio 15.",
    story:
      "Pūkinė šildo, kai jau apsirengę. Šita — kai dar tik išeinate. Powerbankas jūsų, šiluma mūsų.",
    faq: [
      {
        q: "Kodėl nėra baterijos?",
        a: "Kad siuntinys būtų lengvesnis ir paprasčiau keliautų. Tinka bet kuris 10 000 mAh 5V/2A powerbankas kišenėje.",
      },
      {
        q: "Kaip pasirinkti dydį?",
        a: "Imkite +1 dydį nei įprastai. Kinų S ≈ EU M. Jei nešiosite ant storos palaidinės — dar laisviau. Grąžinimas 14 dienų.",
      },
      {
        q: "Ar skalbiama?",
        a: "Ištraukus USB. 30 °C, be džiovyklės. Laidų zonos nelyginti.",
      },
      {
        q: "Ar tinka moterims?",
        a: "Kirpimas uniseks. Moterys dažnai ima savo dydį arba −1 nuo vyriško palyginimo. Rašykite, parinksime.",
      },
    ],
    cogs: 22,
    shippingDays: "2–5 d.d. iš Lenkijos",
    suppliers: [
      {
        name: "Adamanta PL — USB Heating Vest SKU 2079",
        url: "https://trade.adamanta.eu/product/usb-charging-heating-vest-differents-sizes-sku-2079/",
        unit: "B2B kaina po prisijungimo · 332 g",
        warehouse: "Liublinas, PL · 24 val. išsiuntimas",
        notes: "Geriausias Q4 kelias. 1 vnt. MOQ. Pirmiausia M ir L pavyzdžiai.",
      },
      {
        name: "AliEurope — 11-zone USB vest",
        url: "https://alieurope.eu/index.php/product/new-mens-warm-vest-usb-charging-electric-heated-vest-11-zone-double-control-for-men-vests-winter-clothing/",
        unit: "~21,29 €",
        warehouse: "Tikrinti, ar tikrai ES, ne CN",
        notes: "Kainos lubos LT rinkoje: inSPORTline WARMhim ~84 €.",
      },
    ],
    adPriority: 3,
  },
  {
    slug: "sildancios-pirstines",
    name: "Šildančios liečiamos pirštinės",
    short: "Rašote žinutę. Pirštai vis dar šilti.",
    price: 39.9,
    compareAt: 54.9,
    image: "/images/product-gloves.jpg",
    gallery: ["/images/product-gloves.jpg", "/images/product-gloves-2.jpg", "/images/product-gloves-3.jpg"],
    colors: ["Juoda"],
    sizes: ["S/M", "L/XL"],
    weight: "~180 g",
    power: "USB 5V arba išimami akumuliatoriai",
    features: [
      "Touchscreen nykštys ir smilius — žinutė be plikų pirštų −10 °C",
      "Trys šilumos lygiai, šiluma delne ir pirštų galiukuose",
      "Vidinis flisas, išorė laiko vėjo gūsį",
      "Dviračiui, sandėliui, šuniui, stotelei, vairo ratui",
      "USB arba išimami akumuliatoriai — nurodysime partijoje",
      "Dydžiai S/M ir L/XL — jei tarp — imkite didesnį",
    ],
    includes: ["Pirštinių pora", "USB laidas / kroviklis", "Lietuviška kortelė"],
    description:
      "Ne slidinėjimo pirštinė už 90 €. Kasdienė pora: atrakinate telefoną, laikote vairą, nešate maišus — ir vis dar šilta.\n\nVilnonės nešildo ant vairo. Šitos šildo ir vis tiek liečia ekraną. Nykštys ir smilius su laidžiu siūlu. Storą dėklą kartais tenka paliesti kitu pirštu — taip ir rašome, be magijos.\n\nDvi dydžių juostos. Jei delnas platus — L/XL.",
    story: "Pigios vilnonės miršta ant vairo. Šitos šildo ir vis tiek atrauna telefoną.",
    faq: [
      {
        q: "Ar tikrai veikia liečiamas ekranas?",
        a: "Nykštys ir smilius turi laidų siūlą. Storas dėklas kartais trukdo — tada naudokite kitą pirštą arba nusiimkite nykščio gaubtą, jei modelis su atverčiamu.",
      },
      {
        q: "Ar skalbiama?",
        a: "Išėmus baterijas / atjungus USB. Rankomis, džiovinti ore.",
      },
      {
        q: "Ar tinka vairuoti?",
        a: "Taip, kasdieniam vairui. Motociklui žiemą reikia storesnės poros — rašykite, jei reikia kitos.",
      },
    ],
    cogs: 15,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "AliExpress / Alibaba USB heated gloves",
        url: "https://www.aliexpress.com/w/wholesale-usb-heated-gloves.html",
        unit: "USB ~6–8 $ · su baterija ~26–30 $",
        warehouse: "CN / ES filtras",
        notes: "Parduoti baterijų modelį. USB-only versija reikalauja laido į kišenę — prastesnė patirtis.",
      },
    ],
    adPriority: 5,
  },
  {
    slug: "stiklo-uzdangalas",
    name: "Magnetinis stiklo uždangalas",
    short: "Vakar uždėjai. Ryte jokių grandiklių.",
    price: 19.9,
    compareAt: 29.9,
    image: "/images/product-cover.jpg",
    gallery: ["/images/product-cover.jpg", "/images/product-cover-2.jpg"],
    badge: "Žiemos rytas",
    sizes: ["Universalus 175×90 / magnetai + durų kišenės"],
    weight: "~300 g",
    power: "Be elektros",
    features: [
      "Magnetai + kišenės durų rėme — laiko vėją ir šerkšną",
      "Ryte nuplėšiate kartu su ledu — jokių grandiklių 7:15",
      "Universalus 175×90 lengviesiems; didesniems visureigiams rašykite",
      "Jokių baterijų, jokio USB, jokio CE galvos skausmo",
      "Sulankstomas, telpa į bagažinę visą žiemą",
      "Iš Rygos / Lenkijos sandėlio — 1–3 dienos, ne Kinija gruodį",
    ],
    includes: ["Uždangalas 175×90 cm", "Magnetai ir durų kišenės", "Lietuviška kortelė"],
    description:
      "Kiekvienas Baltijos vairuotojas lapkritį–kovą kovoja su stiklu. Tai ne gadgetas. Tai 20 €, kurie grąžina 10 minučių kiekvieną rytą.\n\nVakare uždėjote, kišenes uždarėte durelėmis. Ryte nuplėšiate — šerkšnas eina su uždangalu, ne su grandikliu ant pirštų.\n\nUniversalus lengviesiems. Labai dideliems visureigiams gali trūkti pločio — tada rašykite prieš pirkdami, parinksime 260 cm variantą.",
    story:
      "Prieš/po kadrai 6 ryto. Jokių baterijų. Didžiausia marža kataloge ir paprasčiausias daiktas, kurį supranta visos tetos.",
    faq: [
      {
        q: "Ar tiks mano mašinai?",
        a: "Universalus lengviesiems ~175×90. Labai dideliems visureigiams gali trūkti — rašykite modelį, pasakysime.",
      },
      {
        q: "Ar neišneš vėjas?",
        a: "Durų kišenės svarbiau už magnetus. Uždenkite vakare, kišenes uždarykite durelėmis. Audroje papildomai prispauskite valytuvais.",
      },
      {
        q: "Ar šlapia nesulimpa?",
        a: "Nukratykite sniegą prieš dėdami į bagažinę. Džiovinkite išskleidę, ne gumulėliu.",
      },
    ],
    cogs: 4,
    shippingDays: "1–3 d.d. iš Rygos arba Lenkijos",
    suppliers: [
      {
        name: "Bottari Baltic — SIBERIAN 175×90",
        url: "https://www.bottaribaltic.com/en/magnetic-windshield-cover-175-90cm/341/2/p",
        unit: "3,36 € su PVM",
        warehouse: "Ryga · Omniva / Venipak / DPD",
        notes: "PIRKTĮ 30–50 vnt. dabar. Geriausias Q4 SKU be lithium. Nesiųsti AliExpress pigių magnetų — silpni.",
      },
      {
        name: "Ikonka PL — magnetic anti-frost KX3355",
        url: "https://www.ikonka.eu/en/windscreen-cover-magnetic-anti-frost",
        unit: "B2B po login",
        warehouse: "Lenkija, 24 val.",
        notes: "EAN 5903039757882. Durų kišenės + 6 magnetai. 260×112 cm variantas didesniems auto.",
      },
    ],
    adPriority: 6,
  },
  {
    slug: "akiu-masazuoklis",
    name: "Šildantis akių masažuoklis",
    short: "15 minučių tylos po darbo. Kalėdinė dovana, kurią naudos.",
    price: 49.9,
    compareAt: 69.9,
    image: "/images/product-mask.jpg",
    gallery: ["/images/product-mask.jpg", "/images/product-mask-2.jpg"],
    badge: "Dovanai",
    colors: ["Pilka"],
    weight: "~250 g",
    power: "Įkraunamas · šiluma + vibracija · ne medicinos prietaisas",
    features: [
      "Šiluma aplink akis ir smilkinius, ne „gydo migreną“",
      "Vibracija ir oro pagalvėlės — 15 min. sesija, tada išsijungia",
      "Bluetooth muzika nebūtina — galima tyliai",
      "Įkraunamas, be vienkartinių baterijų kiekvieną vakarą",
      "Dovana mamai, partneriui, sau — ritualas, ne klinika",
      "Akiniai ir lęšiai nusiimami prieš sesiją",
    ],
    includes: ["Masažuoklis", "USB laidas", "Lietuviška kortelė"],
    description:
      "Ne TENS ir ne „gydo migreną“. Tai 15 minučių tylos po darbo tamsiame lapkričio bute. Šiluma, lengva vibracija, automatinis išsijungimas.\n\nReklamuojame kaip dovaną ir ritualą, ne kaip gydymą. Akiniai nusiimami. Lęšius geriau išimti. Jei skauda — pas gydytoją, ne į krepšelį.\n\nKalėdoms tinka tam, kas sako, kad jam nieko nereikia, bet vakare vis tiek sėdi prie ekrano.",
    story: "Estijos Kalėdų recenzijose masažuokliai kyla. Lietuvoje laimi lietuviškas tekstas ir paštomatas, ne angliškas „OMG“.",
    faq: [
      {
        q: "Ar tinka su akiniais?",
        a: "Akiniai nusiimami. Lęšius irgi geriau išimti.",
      },
      {
        q: "Ar tai medicinos priemonė?",
        a: "Ne. Relaksacijai. Negydo ligų, nemažina kraujospūdžio, nediagnozuoja.",
      },
      {
        q: "Ar garsiai vibruoja?",
        a: "Vidutiniškai. Yra ramus režimas. Bluetooth muzikos naudoti nebūtina.",
      },
      {
        q: "Kiek laiko sesija?",
        a: "Paprastai 15 minučių, tada išsijungia. Nenaudoti miegant visą naktį.",
      },
    ],
    cogs: 16,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "CJ / AliExpress heated eye massager",
        url: "https://www.aliexpress.com/w/wholesale-heated-eye-massager.html",
        unit: "~14–20 € landed",
        warehouse: "ES WH jei yra, kitaip pre-stock",
        notes: "Jokių medicininių claim'ų reklamose. GPSR failas prieš paleidimą.",
      },
    ],
    adPriority: 7,
  },
  {
    slug: "puodelio-sildytuvas",
    name: "USB puodelio šildytuvas",
    short: "Kava lieka 55 °C, kol atsakote į laiškus.",
    price: 14.9,
    compareAt: 22.9,
    image: "/images/product-mug.jpg",
    gallery: ["/images/product-mug.jpg", "/images/product-mug-2.jpg", "/images/product-mug-3.jpg"],
    colors: ["Juoda"],
    weight: "< 300 g",
    power: "USB 5V · be baterijos · ~55 °C",
    features: [
      "Padas, ne belaidis puodelis — nėra lithium",
      "Laiko gėrimą ~55 °C, kol atsakote į laiškus",
      "Tinka keramikai ir metalui, ne plastikiniam plonam",
      "USB 5V nuo kompiuterio, rozetės adapterio arba powerbanko",
      "Kalėdų kojinėms, kolegai, krepšelio priedui prie šalikės",
      "Auto-off modeliai — neišdegins stalo, jei pamiršite",
    ],
    includes: ["Šildantis padas", "USB laidas", "Lietuviška kortelė"],
    description:
      "Kava atvėsta, kol atidarote trečią laišką. Šitas padas laiko ~55 °C — ne verdantį, o geriamą. Puodelio nesiunčiame: turite savo.\n\nPigiausias katalogo daiktas. Vienas pats reklamose silpnas. Su šalike ar kaip 15 € dovana kolegai — veikia. Be baterijos, be CE galvos skausmo, į paštomatą.\n\nNelaikykite tuščio puodelio visą naktį. Plastikinių plonų nenaudokite.",
    story: "Centai elektros. Šilta rankena. Dovana tam, kas visada palieka puodelį ant stalo.",
    faq: [
      {
        q: "Ar puodelis įeina?",
        a: "Ne. Tik šildantis padas. Tinka jūsų keramikai ar metalui.",
      },
      {
        q: "Ar labai karšta?",
        a: "Apie 55 °C gėrimui, ne lygintuvas. Nelieskite pado apačios ilgai.",
      },
      {
        q: "Ar tinka stiklui?",
        a: "Storas stiklas taip. Labai plonas gali įkaisti netolygiai — geriau keramika.",
      },
    ],
    cogs: 5,
    shippingDays: "1–4 d.d.",
    suppliers: [
      {
        name: "AliExpress USB mug warmer",
        url: "https://www.aliexpress.com/w/wholesale-mug-heating-pad.html",
        unit: "4,39–5,97 $",
        warehouse: "CN Choice / ES",
        notes: "Imti 30 vnt. kaip upsell. Auto-off modeliai geresni.",
      },
    ],
    adPriority: 8,
  },
  {
    slug: "sniego-projektorius",
    name: "LED sniego projektorius",
    short: "Visas fasadas per 10 sekundžių. Kaimynai galvos, kad samdei dekoratorių.",
    price: 32.9,
    compareAt: 49.9,
    image: "/images/product-snow-projector.jpg",
    gallery: ["/images/product-snow-projector.jpg"],
    badge: "Kalėdos",
    colors: ["Juoda · EU kištukas"],
    weight: "~400 g",
    power: "220V EU · IP65 laukui",
    features: [
      "Snaigės ant sienos, sniego ir fasado — 10 sekundžių ir kaimynai mato",
      "Lauko IP65 korpusas, EU kištukas 220V",
      "Lango ir sodo režimas — nukreipkite nuo miegamojo",
      "Lengvas, telpa į paštomatą, sezonas spalis–gruodžio 20",
      "Ne kino projektorius — tai šventės šviesa, taip ir rašome",
      "Tik iš ES sandėlio — Kinija gruodį nespėja",
    ],
    includes: ["Projektorius", "EU kištukas / laikiklis", "Lietuviška kortelė"],
    description:
      "Butui be eglės ir namui su sodu. 10 sekundžių ir fasadas šviečia. Reklama — prieš/po naktinis kadras, ne „8K cinema“.\n\nIP65 korpusas lietui. Kištuką laikykite sausai. Nukreipkite nuo kaimyno lango, jei nenorite skundų.\n\nSezonas miršta gruodžio 26. Užsakykite kol ES sandėlis dar turi. Į paštomatą.",
    story: "Kaimynai galvos, kad samdėte dekoratorių. Jūs įjungėte vieną kištuką.",
    faq: [
      {
        q: "Ar tinka lietui?",
        a: "IP65 korpusas. Kištuką laikykite sausai. Nukreipkite nuo kaimyno miegamojo lango.",
      },
      {
        q: "Ar matysis šviesioje gatvėje?",
        a: "Geriausiai tamsoje. Vilniaus centre silpniau nei sodyboje. Langą uždenkite iš vidaus, jei norite filmo efekto.",
      },
      {
        q: "Ar tai kino projektorius?",
        a: "Ne. Tai LED snaigių šviesa. Filmų nerodo.",
      },
    ],
    cogs: 12,
    shippingDays: "3–7 d.d. tik iš ES sandėlio",
    suppliers: [
      {
        name: "AliExpress Christmas LED snowflake projector",
        url: "https://www.aliexpress.com/w/wholesale-christmas-light-projector.html",
        unit: "~25 $ · filtruoti EU WH / EU plug",
        warehouse: "CN arba ES. Q4 — tik ES.",
        notes: "Tikrinti ES sandėlį prieš Kalėdų ads. Neimti 15–35 d. siuntimo iš Kinijos.",
      },
    ],
    adPriority: 1,
  },
  {
    slug: "galaxy-projektorius",
    name: "Galaxy nakties projektorius",
    short: "Lubos tampa dangumi. Dovana iki 30 €.",
    price: 29.9,
    compareAt: 44.9,
    image: "/images/product-galaxy.jpg",
    gallery: ["/images/product-galaxy.jpg"],
    colors: ["Juoda"],
    weight: "~350 g",
    power: "USB · be „8K cinema“ apgaulės",
    features: [
      "Žvaigždės ir nebula ant lubų — nakties lempa, ne kinas",
      "Laikmatis: išsijungia, kol vaikas užmiega",
      "USB, be „8K cinema“ ir be 650 ANSI melo",
      "Vaikų kambariui ir dovanai iki 30 €",
      "Sukamas kampas, keli režimai",
      "Veikia visus metus, ne tik Advento savaitę",
    ],
    includes: ["Projektorius", "USB laidas", "Lietuviška kortelė"],
    description:
      "Lubos tampa dangumi. Tai lempa. Filmų nerodo. 8K nepažadame.\n\nVaikui, kuris jau turi viską, ir suaugusiam, kuris nori užmigti be telefono. Laikmatis naktiai. USB. Į paštomatą.\n\nSaturuota kategorija. Laimi lietuviškas checkout ir sąžiningas aprašas.",
    story: "Dovana iki 30 €, kurią filmuoja patys. Be medicinos ir be kino teatro apgaulės.",
    faq: [
      {
        q: "Ar tai kino projektorius?",
        a: "Ne. Tai nakties lempa. Filmų nerodo.",
      },
      {
        q: "Ar tinka kūdikio kambariui?",
        a: "Kaip nakties šviesa — taip. Nelaikykite prie lovelės krašto, kur pasiekiama. Prižiūrint.",
      },
      {
        q: "Ar garsiai sukasi?",
        a: "Tylus varikliukas. Jei labai jautru — statinis režimas, jei yra.",
      },
    ],
    cogs: 9,
    shippingDays: "3–7 d.d. ES / Choice",
    suppliers: [
      {
        name: "AliExpress galaxy projector USB",
        url: "https://www.aliexpress.com/w/wholesale-galaxy-projector.html",
        unit: "~15–21 $",
        warehouse: "ES / CN Choice",
        notes: "Jokių 8K / 650 ANSI teiginių.",
      },
    ],
    adPriority: 2,
  },
  {
    slug: "lango-projektorius",
    name: "Lango filmų projektorius",
    short: "12 motyvų lange. Be eglės ginčo su vaikais.",
    price: 36.9,
    compareAt: 54.9,
    image: "/images/product-window-projector.jpg",
    gallery: ["/images/product-window-projector.jpg", "/images/product-window-movies.jpg"],
    weight: "~450 g",
    power: "220V EU",
    features: [
      "Keičiami motyvai: snaigės, Kalėdos, Helovinas — 12 filmų",
      "Lipdoma / statoma prie stiklo — butui, kai kiemo nėra",
      "Matosi iš lauko, jei kambarys tamsesnis už gatvę",
      "EU 220V, ne JAV kištukas",
      "Vilniaus ir Kauno butams svarbiau nei lauko prožektorius",
      "Užuolaidas pritraukite — tada „filmas“ lange ryškesnis",
    ],
    includes: ["Projektorius", "Motyvų diskai / režimai", "EU maitinimas", "Lietuviška kortelė"],
    description:
      "Langas vietoj fasado. Vilniaus ir Kauno butams tai svarbiau nei lauko prožektorius. 12 motyvų, be eglės ginčo su vaikais.\n\nStatote prie stiklo. Užuolaidas pritraukiate. Iš lauko matosi, jei gatvė tamsesnė už kambarį — senamiestyje silpniau nei miegamajame rajone.\n\nTik EU kištukas. JAV sandėlio nesiunčiame.",
    story: "Eglė maža. Langas vis tiek šventė.",
    faq: [
      {
        q: "Ar matysis iš lauko?",
        a: "Taip, jei kambarys tamsesnis už gatvę. Užuolaidas pritraukite.",
      },
      {
        q: "Ar tinka stiklui su tinkleliu?",
        a: "Tinklelis silpnina. Geriau švarus stiklas, projektorius kambario pusėje.",
      },
      {
        q: "Kiek motyvų?",
        a: "Komplekte apie 12, priklausomai nuo partijos. Kalėdos, snaigės, Helovinas.",
      },
    ],
    cogs: 14,
    shippingDays: "3–7 d.d. ES",
    suppliers: [
      {
        name: "AliExpress window Christmas projector 12 movies",
        url: "https://www.aliexpress.com/w/wholesale-christmas-window-projector.html",
        unit: "~18–28 $",
        warehouse: "ES WH jei yra",
        notes: "Patikrinti EU kištuką prieš listing.",
      },
    ],
    adPriority: 3,
  },
  {
    slug: "sildantis-kilimelis",
    name: "USB šildantis stalo kilimėlis",
    short: "Šąlančios rankos ant klaviatūros — kilimėlis šildo visą dieną.",
    price: 32.9,
    compareAt: 44.9,
    image: "/images/product-deskmat.jpg",
    gallery: ["/images/product-deskmat.jpg"],
    colors: ["Tamsiai pilka"],
    weight: "~400 g",
    power: "USB 5V · be baterijos",
    features: [
      "Po klaviatūra ir pele — šiltos rankos visą WFH dieną",
      "USB 5V, be atskiros baterijos, centai elektros",
      "Ne radiatorius: maloniai šilta, ne lygintuvas",
      "Studentams, buhalterijai, šaltam butui sausį",
      "Veikia ir po Kalėdų, kai girliandos jau dėžėje",
      "CE prieš reklamą; jokių medicininių teiginių",
    ],
    includes: ["Kilimėlis", "USB laidas", "Lietuviška kortelė"],
    description:
      "Jeigu kiekvieną rytą šąla rankos ant klaviatūros — čia ne naujas radiatorius. USB kilimėlis po pele ir klaviatūra, 5 voltai, visą darbo dieną.\n\nSausio SKU: Kalėdų dekoro jau niekam nereikia, o šaltas langas lieka. Centai elektros, šiltos riešai, jokių medicinos pažadų.\n\nNelaikykite sulankstyto įjungto. Jei labai karšta — žemesnis USB prievadas arba trumpesnis laikas.",
    story: "Radiatorius šildo kambarį. Kilimėlis — rankas, kurios rašo.",
    faq: [
      {
        q: "Ar labai karšta?",
        a: "Maloniai šilta, ne lygintuvas. USB 5V. Jei per šilta — išjunkite valandai.",
      },
      {
        q: "Ar tinka su pelės kilimėliu?",
        a: "Tai ir yra kilimėlis. Pelę dedate ant jo. Labai stora pelė vis tiek slankioja.",
      },
      {
        q: "Ar skalbiama?",
        a: "Paviršių nuvalote drėgna šluoste. Nemerkti viso, neišimti laidų zonos.",
      },
    ],
    cogs: 11,
    shippingDays: "3–7 d.d.",
    suppliers: [
      {
        name: "AliExpress USB heated desk pad",
        url: "https://www.aliexpress.com/w/wholesale-usb-heated-desk-mat.html",
        unit: "~10–16 $",
        warehouse: "ES / CN",
        notes: "CE prieš ads. Jokių medicininių teiginių.",
      },
    ],
    adPriority: 3,
  },
  {
    slug: "difuzorius",
    name: "Ultragarsinis difuzorius",
    short: "Rūkas, šviesa, tyla. Kambarys kvepia be žvakės dūmų.",
    price: 29.9,
    compareAt: 42.9,
    image: "/images/product-diffuser.jpg",
    gallery: ["/images/product-diffuser.jpg"],
    colors: ["Keraminė dramblio kaulo"],
    weight: "~350 g",
    power: "USB · vanduo + eterinis aliejus",
    features: [
      "Ultragarsas — šaltas rūkas, ne verdantis katilas",
      "Švelnus nakties LED, galima išjungti šviesą",
      "Automatiškai išsijungia, kai vandens nėra",
      "Miegamajam ir voniai, sausam žiemos butui",
      "Aliejaus rinkinyje nėra — pasirenkate kvapą patys",
      "USB, tylus, be žvakės dūmų",
    ],
    includes: ["Difuzorius", "USB laidas", "Matavimo puodelis (jei partijoje)", "Lietuviška kortelė"],
    description:
      "RAMU prasideda nuo oro. Ne kvepalai ant odos — kambarys, į kurį norisi grįžti. Ultragarsas skaldo vandenį į rūką, keli lašai jūsų eterinio aliejaus, švelnus LED.\n\nLietuviškos žiemos butai sausi. Difuzorius — ramybė, ne gydymas. Aliejaus nesiunčiame: vieni nori eukalipto, kiti — nieko, tik drėgmės.\n\nKai vandens nėra — išsijungia. Nelaikykite ant knygų krašto. Valykite bakelį, kad nepelėtų.",
    story: "Pirma — oras. Paskui — vietos daiktams. Be žvakės dūmų.",
    faq: [
      {
        q: "Ar aliejus įeina?",
        a: "Ne. Tinka jūsų eteriniam aliejui. Pakanka kelių lašų. Plonų kvepalų su alkoholiu nepilkite.",
      },
      {
        q: "Ar gydo kosulį?",
        a: "Ne. Tai oro ir kvapo prietaisas, ne medicinos priemonė.",
      },
      {
        q: "Ar garsiai?",
        a: "Tylus ūžesys. Miegui dauguma palieka nakties režimą be LED.",
      },
    ],
    cogs: 9,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "USB ceramic aroma diffuser",
        url: "https://www.aliexpress.com/w/wholesale-ceramic-aroma-diffuser.html",
        unit: "~8–12 $",
        warehouse: "ES / CN",
        notes: "Be medicininių teiginių reklamose.",
      },
    ],
    adPriority: 1,
  },
  {
    slug: "sukamasis-organizatorius",
    name: "Sukamasis kosmetikos organizatorius",
    short: "Viskas matosi. Nieko nebeieškote stalčiuje.",
    price: 24.9,
    compareAt: 36.9,
    image: "/images/product-organizer.jpg",
    gallery: ["/images/product-organizer.jpg", "/images/product-organizer-2.jpg", "/images/product-organizer-rotate.jpg"],
    colors: ["Skaidrus akrilas"],
    weight: "~600 g",
    power: "Be elektros",
    features: [
      "Sukasi 360° — kremai ir šepečiai matosi, ne dingsta stalčiuje",
      "Skaidrus akrilas, plaunamas, tualetiniam staliukui ir voniai",
      "Skyriai 30–50 ml serumams, lūpų dažams, šepečiams",
      "Kalėdinė dovana tam, kieno vonia visada „paskui“",
      "Lengvas, telpa į paštomatą",
      "Surenkamas — instrukcija dėžutėje",
    ],
    includes: ["Organizatorius (detalės surinkimui)", "Lietuviška kortelė"],
    description:
      "Tvarka, kurią matai. Ne dėžė, kurioje vėl dingsta lūpų dažai. Sukate — viskas prieina, nieko nebeieškote.\n\nVonios stalčiui arba tualetiniam staliukui. Plaunamas akrilas. Dideli šampūnai čia netelpa — tam krepšiai ir daiktadėžės.\n\nDovana tam, kas jau turi kosmetiką, bet neturi vietos jai.",
    story: "Viskas matosi. Nieko nebeieškote stalčiuje.",
    faq: [
      {
        q: "Kokio dydžio buteliukai telpa?",
        a: "Įprasti 30–50 ml kremai ir serumai. Dideli šampūnai — ne, tam krepšiai.",
      },
      {
        q: "Ar tvirtas?",
        a: "Akrilas kasdienai. Nenumeskite ant plytelių. Surinkite pagal instrukciją — tada nesisuka kreivai.",
      },
      {
        q: "Ar tinka papuošalams?",
        a: "Žiedams ir auskarams mažose kišenėse taip. Ilgiems vėriniams geriau atskira dėžė.",
      },
    ],
    cogs: 7,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "360 rotating makeup organizer acrylic",
        url: "https://www.aliexpress.com/w/wholesale-rotating-makeup-organizer.html",
        unit: "~6–9 $",
        warehouse: "ES",
        notes: "Lengvas, gerai eina į paštomatą.",
      },
    ],
    adPriority: 2,
  },
  {
    slug: "laidu-deze",
    name: "Laidų dėžė",
    short: "Rozetės ir maitinimai dingsta. Lieka švarus kampas.",
    price: 22.9,
    compareAt: 32.9,
    image: "/images/product-cablebox.jpg",
    gallery: [
      "/images/product-cablebox.jpg",
      "/images/product-cablebox-2.jpg",
      "/images/product-cablebox-3.jpg",
      "/images/product-cablebox-4.jpg",
    ],
    colors: ["Smėlio", "Pilka"],
    weight: "~450 g",
    power: "Be elektros — tik dėžė",
    features: [
      "Telpa EU ilgintuvas ir kelios maitinimo plytos",
      "Išpjovos laidams — telefonas kraunasi, dėžė uždaryta",
      "Bambuko / MDF dangtis, baltas korpusas — TV komodai ir stalui",
      "Vaikams ir katėms saugesnis grindų kampas",
      "Dovana tam, kas jau turi viską — išskyrus tvarką prie rozetės",
      "Nelaikyti prie radiatoriaus ir vonioje",
    ],
    includes: ["Laidų dėžė su dangčiu", "Lietuviška kortelė"],
    description:
      "Ramus kambarys prasideda ten, kur nesimato juodų gyvačių po stalu. Ilgintuvas ir maitinimai įeina į dėžę. Laidai išeina pro išpjovas. Lieka švarus kampas.\n\nTV komodai, darbo stalui, naktiniam. Katė nebekramto kištukų. Vaikas nebekiša pirštų į rozetę po stalu.\n\nPrieš pirkdami: jei turite milžinišką UPS — rašykite matmenis.",
    story: "Dovana tam, kas jau turi viską — išskyrus tvarką prie rozetės.",
    faq: [
      {
        q: "Ar medinė?",
        a: "Korpusas plastikas / MDF, dangtis bambukas arba medžio imitacija, priklausomai nuo partijos. Nelaikyti prie radiatoriaus.",
      },
      {
        q: "Ar telpa EU ilgintuvas?",
        a: "Standartinis 3–5 vietų taip. Labai storos „plytos“ — dėkite dvi, ne keturias.",
      },
      {
        q: "Ar karšta viduje?",
        a: "Palikite oro tarpą, nekimškite iki kraštų. Karštų transformatorių neizoliuokite visai.",
      },
    ],
    cogs: 8,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "Cable management box",
        url: "https://www.aliexpress.com/w/wholesale-cable-management-box.html",
        unit: "~7–10 $",
        warehouse: "ES",
        notes: "Matuoti, ar telpa EU ilgintuvas.",
      },
    ],
    adPriority: 3,
  },
  {
    slug: "daiktadezes",
    name: "Lininės daiktadėžės · 3 vnt.",
    short: "Lentyna nustoja būti krūva. Trys dėžės, trys kategorijos.",
    price: 27.9,
    compareAt: 39.9,
    image: "/images/product-baskets.jpg",
    gallery: ["/images/product-baskets.jpg", "/images/product-foldbins.jpg"],
    colors: ["Avižų"],
    weight: "~700 g komplektas",
    power: "Be elektros",
    features: [
      "Komplektas iš trijų — trys kategorijos, ne viena krūva",
      "Sulankstomos, kai nereikia; rankenos nešimui",
      "Megztiniai, rankšluosčiai, žaislai, palto lentyna",
      "Daugumai 30–33 cm gylio lentynų, įskaitant IKEA tipo",
      "Avižų / smėlio audinys — ramu, ne neoninis plastikas",
      "Turi tilpti į paštomatą — nesiunčiame milžinų",
    ],
    includes: ["3 dėžės", "Lietuviška kortelė"],
    description:
      "Tvarka be naujų baldų. Įstūmėte — lentyna vėl atrodo kaip namai, ne sandėlis.\n\nTrys dėžės, trys krūvos: megztiniai, rankšluosčiai, „čia paskui“. Sulankstomos, kai svečiai. Praktiška Kalėdų dovana, kurią naudoja iki kovo ir dar kitą rudenį.\n\nJei lentyna siauresnė nei 30 cm — rašykite prieš pirkdami.",
    story: "Lentyna nustoja būti krūva. Trys dėžės, trys kategorijos.",
    faq: [
      {
        q: "Ar tinka IKEA lentynai?",
        a: "Daugumai 30–33 cm gylio lentynų taip. Jei lentyna labai siaura — rašykite prieš pirkdami.",
      },
      {
        q: "Ar skalbiama?",
        a: "Dėklą nuvalote. Audinį — pagal etiketę, dažniausiai švelnus režimas, džiovinti ore.",
      },
      {
        q: "Ar tinka žaislams?",
        a: "Taip, vidutinio dydžio. Konstruktoriaus milžinams imkite didesnį krepšį.",
      },
    ],
    cogs: 9,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "Folding linen storage bins 3 pack",
        url: "https://www.aliexpress.com/w/wholesale-linen-storage-basket.html",
        unit: "~8–12 $",
        warehouse: "ES",
        notes: "Nesiųsti milžiniškų — turi tilpti į paštomatą.",
      },
    ],
    adPriority: 4,
  },
  {
    slug: "led-girlianda",
    name: "LED girlianda",
    short: "Šilta šviesa lentynai, langui ir eglutei. Be kaitrinių lempučių.",
    price: 16.9,
    compareAt: 24.9,
    image: "/images/product-fairylights.jpg",
    gallery: [
      "/images/product-fairylights.jpg",
      "/images/product-fairylights-usb.jpg",
      "/images/product-fairylights-2.jpg",
      "/images/product-fairylights-3.jpg",
      "/images/product-fairylights-4.jpg",
      "/images/product-fairylights-5.jpg",
      "/images/product-fairylights-remote.jpg",
    ],
    colors: ["Šiltai balta", "Šalta balta"],
    weight: "~180 g",
    power: "USB arba baterijos (komplekte USB)",
    features: [
      "Lanksti varinė viela, 5–10 m pagal variantą, USB",
      "Aštuoni režimai valdiklyje: mirgėjimas, banga, pastovi šiltai balta",
      "Stiklainiui, rėmui, eglutei, lentynai — ne lauko IP65",
      "Mažai elektros, šalta liesti",
      "Kalėdoms ir visai žiemai, kol sniegas lange",
      "Impulsas iki 20 €, gerai dedasi prie žvakių ir žaisliukų",
    ],
    includes: ["Girlianda", "USB valdiklis", "Lietuviška kortelė"],
    description:
      "Paprasčiausias būdas pakeisti kambarį. Ne projektorius — taškai šviesos ten, kur sėdite: palangė, lentyna, stiklainis, maža eglė.\n\nUSB, aštuoni režimai mygtuku ant laido. Šiltai balta vakarui, mirgėjimas šventei. Šis modelis vidui — lauko IP65 parinksime atskirai, jei rašysite.\n\nMažai svorio, aukšta marža, į paštomatą. Geriausias priedas prie žaisliukų rinkinio.",
    story: "Viena girlianda pakeičia nuotaiką greičiau nei naujas šviestuvas.",
    faq: [
      {
        q: "Ar lauko?",
        a: "Šis modelis vidui. Lauko girliandai rašykite — parinksime IP65.",
      },
      {
        q: "Koks ilgis?",
        a: "Dažniausiai 5–10 m. Tikslų metrą nurodysime užsakyme. 20 m variantas — atskira prekė, jei reikia visai palangei.",
      },
      {
        q: "Ar karšta?",
        a: "LED šalta. Galima dėti į stiklainį. Nemerkti valdiklio.",
      },
    ],
    cogs: 4,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "USB LED fairy string lights",
        url: "https://www.aliexpress.com/w/wholesale-usb-fairy-lights.html",
        unit: "~3–6 $",
        warehouse: "ES",
        notes: "Aukšta marža, lengva. EU sandėlis Q4.",
      },
    ],
    adPriority: 4,
  },
  {
    slug: "led-zvakes",
    name: "LED žvakės · 3 vnt.",
    short: "Mirga kaip tikra. Be dūmų, be vaško ant staltiesės.",
    price: 19.9,
    compareAt: 29.9,
    image: "/images/product-ledcandles.jpg",
    gallery: ["/images/product-ledcandles.jpg", "/images/product-ledcandles-2.jpg", "/images/product-ledcandles-3.jpg"],
    colors: ["Dramblio kaulo"],
    weight: "~400 g",
    power: "AAA / nuotolinis (komplekte)",
    features: [
      "Titnago mirgėjimas, be dūmų ir be vaško ant staltiesės",
      "Laikmatis — užgęsta, jūs jau miegoti",
      "Stalui, palangei, voniai, daugiabučiui be tikros liepsnos",
      "Katėms ir užuolaidoms saugesnės nei ugnis",
      "Komplektas 3 vnt., dramblio kaulo stulpeliai",
      "Baterijos: dažniausiai AAA, nurodysime partijoje",
    ],
    includes: ["3 LED žvakės", "Nuotolinis (jei partijoje yra)", "Lietuviška kortelė"],
    description:
      "Šventinis stalas be tikros liepsnos. Ypač daugiabučiams ir tam, kas bijo palikti žvakę.\n\nMirgėjimas kaip titnagas, ne kaip žibintuvėlis. Laikmatis. Palangė, vonia, stalas. Katė neapvers ugnies, nes jos nėra.\n\nBaterijos dažniausiai AAA — priklauso nuo partijos, parašysime prieš siuntimą.",
    story: "Dovana mamai, kuri bijo palikti žvakę. Šventė lieka, dūmai išeina.",
    faq: [
      {
        q: "Ar baterijos įeina?",
        a: "Priklauso nuo partijos. Aprašyme nurodysime. Dažniausiai reikia AAA.",
      },
      {
        q: "Ar tikrai mirga?",
        a: "Taip, titnago režimas. Yra ir pastovi šviesa, jei norite ramesnio stalo.",
      },
      {
        q: "Ar lauko?",
        a: "Vidui. Lietus gesina elektroniką, ne vašką.",
      },
    ],
    cogs: 6,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "LED pillar candles set of 3",
        url: "https://www.aliexpress.com/w/wholesale-led-candles-set.html",
        unit: "~5–8 $",
        warehouse: "ES",
        notes: "Pakuotė dovanai.",
      },
    ],
    adPriority: 5,
  },
  {
    slug: "egles-zaisliukai",
    name: "Eglės žaisliukai · rinkinys",
    short: "Stiklas ir matinis auksas. Ne plastikinis turgaus maišas.",
    price: 24.9,
    compareAt: 36.9,
    image: "/images/product-ornaments.jpg",
    gallery: ["/images/product-ornaments.jpg"],
    colors: ["Auksas / šerkšnas / žalia"],
    weight: "~500 g",
    power: "Be elektros",
    features: [
      "Šerkšno ir aukso tonai — ne plastikinis turgaus maišas",
      "Rinkinys eglutei, dubeniui ant stalo arba palangei be eglės",
      "Dalis stiklo, dalis tvirtesnės apdailos — pakuojame su popieriumi",
      "Kalėdų nuotraukoms ir mažai buto eglei",
      "ES sandėlis — trapu, gruodį ne iš Kinijos",
      "Sudukai namams, ne tik šakai",
    ],
    includes: ["Žaisliukų rinkinys", "Kabliukai", "Lietuviška kortelė"],
    description:
      "Dekoras, kurį matai iš karto. Butams, kur eglė maža — dubuo ant stalo vis tiek atrodo kaip šventė.\n\nAuksas, šerkšnas, tamsiai žalia. Ne 50 vienodų raudonų kamuoliukų iš turgaus. Pakuojame su popieriumi, kad paštomatas nesudaužytų.\n\nDalis stiklo — elkitės kaip su stiklu. Jei reikia tik plastiko vaikų kambariui — rašykite.",
    story: "Eglė maža. Dubuo vis tiek šventė.",
    faq: [
      {
        q: "Ar stiklas?",
        a: "Dalis stiklo, dalis plastiko su stiklo apdaila. Pakavimas su popieriumi, kad nedūžtų paštomate.",
      },
      {
        q: "Kiek vienetų?",
        a: "Rinkinys eglutei ar dubeniui — tikslų skaičių nurodysime, nes partijos skiriasi. Mažiau nei turgaus maišas, tvarkingiau.",
      },
      {
        q: "Ar tinka lauko eglei?",
        a: "Vidui. Šaltis ir vėjas lauko žaisliukams kitokie.",
      },
    ],
    cogs: 8,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "Christmas bauble ornament set gold",
        url: "https://www.aliexpress.com/w/wholesale-christmas-baubles-gold.html",
        unit: "~7–11 $",
        warehouse: "ES",
        notes: "Trapu — ES sandėlis, ne Kinija gruodį.",
      },
    ],
    adPriority: 6,
  },
  {
    slug: "saulilelytes-lempa",
    name: "Saulėlydžio lempa",
    short: "Rožinė siena per sekundę. Nuotraukos ir vakaras.",
    price: 27.9,
    compareAt: 39.9,
    image: "/images/product-sunsetlamp.jpg",
    gallery: [
      "/images/product-sunsetlamp.jpg",
      "/images/product-sunsetlamp-2.jpg",
      "/images/product-sunsetlamp-3.jpg",
    ],
    colors: ["Juoda kojelė"],
    weight: "~300 g",
    power: "USB",
    features: [
      "Saulėlydžio diskas ant sienos per sekundę",
      "Sukamas kampas — grindys, siena, lubos",
      "USB, telpa į stalčių, veikia visus metus",
      "Reels, svetainė, vonia be naujo šviestuvo",
      "Ne skaitymo lempa — nuotaikos šviesa, taip ir rašome",
      "Jokių „gydo SAD“ teiginių",
    ],
    includes: ["Lempą su kojelė", "USB laidas", "Lietuviška kortelė"],
    description:
      "Rožinė siena per sekundę. Tai nuotaikos šviesa, ne girlianda ir ne skaitymo lempa.\n\nSukate kojelę, diskas keliauja per sieną. Reels naktį, svetainė vakarui, vonia be naujo šviestuvo. Pigiau nei keisti lubų lempą.\n\nŽIBURYS ir po sausio 1 — šviesa lieka, snaigės išeina.",
    story: "Efektas didesnis nei kaina. Skaitymui palikite kitą lempą.",
    faq: [
      {
        q: "Ar šviečia visą kambarį?",
        a: "Ne. Tai nuotaikos šviesa ant sienos ar lubų. Skaitymui reikia kitos lempos.",
      },
      {
        q: "Ar keičiasi spalva?",
        a: "Yra saulėlydžio ir vaivorykštės variantai. Pagrindinis — šiltas diskas. RGB nurodysime, jei partija kita.",
      },
      {
        q: "Ar karšta?",
        a: "Korpusas šiltas, ne lygintuvas. Nelaikykite po pagalve.",
      },
    ],
    cogs: 8,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "USB sunset projection lamp",
        url: "https://www.aliexpress.com/w/wholesale-sunset-lamp.html",
        unit: "~6–10 $",
        warehouse: "ES",
        notes: "Gerai filmuojasi. Jokių „gydo SAD“ teiginių.",
      },
    ],
    adPriority: 3,
  },
  {
    slug: "sildancios-slepetes",
    name: "Šildančios šlepetės",
    short: "Padai šilti nuo USB. Namuose be radiatoriaus po kojomis.",
    price: 34.9,
    compareAt: 49.9,
    image: "/images/product-slippers.jpg",
    gallery: ["/images/product-slippers.jpg"],
    badge: "Nauja",
    colors: ["Pilka / kreminė"],
    sizes: ["36–39", "40–43", "44–46"],
    weight: "~450 g pora",
    power: "USB 5V · 3 lygiai · powerbankas NEįeina",
    features: [
      "Padas ir pirštai šyla per minutes nuo USB 5V",
      "Trys lygiai — vakarui ant sofos ir rytui virtuvėje",
      "Pūstas viršus, guminis padas — ne tik kilimui",
      "Powerbanko nesiunčiame: jūsų 5V/2A kišenėje ar šalia",
      "Skalbimas: nuimti laidą, viršų valyti, nedžiovinti karštai",
      "Dovana tam, kas visada sako, kad kojos šąla namie",
    ],
    includes: ["Šlepečių pora", "USB laidas", "Lietuviška kortelė"],
    description:
      "Radiatorius dar neįjungtas, grindys šaltos. Šitos šlepetės šildo padą nuo USB — ne vilna, kuri tik laiko jau esančią šilumą.\n\nPowerbanką dedate į kišenę arba paliekate šalia sofos. Siuntinyje baterijos nėra: lengviau, paprasčiau, be papildomo lithium. Trys lygiai. Pūstas viršus, padas laiko ir ant plytelių.\n\nDydžiai juostomis. Jei tarp — imkite didesnį. Grąžinimas 14 dienų.",
    story: "Namie šąla kojos pirmiausia. Šitos — be kojinių ant sofos ir be 1500 W grindų šildymo.",
    faq: [
      {
        q: "Kodėl nėra baterijos?",
        a: "USB į jūsų powerbanką. Siuntinys lengvesnis. Tinka 5V/2A nuo 10 000 mAh.",
      },
      {
        q: "Ar galima išeiti į lauką?",
        a: "Trumpam iki paštomato — taip. Čiurnos ne žieminis batas. Ilgam lauke imkite kojines.",
      },
      {
        q: "Ar skalbiama?",
        a: "Nuimti USB. Viršų valyti. Nemerkti visos poros į skalbyklę su laidu.",
      },
      {
        q: "Ar tinka vaikams?",
        a: "Suaugusiųjų dydžiai. Vaikams neskirta — padas įkaista.",
      },
    ],
    cogs: 12,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "AliExpress USB heated slippers",
        url: "https://www.aliexpress.com/w/wholesale-heated-slippers.html",
        unit: "~9–14 $",
        warehouse: "ES / CN Choice",
        notes: "Powerbanko nesiųsti. Dydžių pavyzdžiai prieš ads.",
      },
    ],
    adPriority: 6,
  },
  {
    slug: "kamstines-girliandos",
    name: "Kamštinės butelių girliandos · 6 vnt.",
    short: "Tuščias butelis tampa lempa. Šilta šviesa stalui.",
    price: 18.9,
    compareAt: 27.9,
    image: "/images/product-corklights.jpg",
    gallery: ["/images/product-corklights.jpg"],
    badge: "Stalui",
    colors: ["Šiltai balta", "RGB"],
    weight: "~180 g komplektas",
    power: "USB įkrovimas · kamštis su LED viela",
    features: [
      "Šeši kamščiai su viela — šeši buteliai, šešios lempos",
      "USB įkrovimas, be vienkartinių baterijų kiekvieną vakarą",
      "Šiltai balta vakarui, RGB šventei",
      "Vyno, aliejaus, limonado buteliai, kuriuos jau turite",
      "Stalui, palangei, barui — be naujo šviestuvo",
      "Impulsas iki 20 €, gerai dedasi prie žvakių",
    ],
    includes: ["6 kamštinės girliandos", "USB laidas", "Lietuviška kortelė"],
    description:
      "Tuščias butelis namuose jau yra. Šitas kamštis paverčia jį lempa: viela į vidų, šilta šviesa per stiklą.\n\nŠeši vienetai — visas stalas, ne vienas gėrimas. USB įkraunate, paliekate vakare. Be vaško, be dūmų, be naujo šviestuvo.\n\nButelių nesiunčiame. Tinka standartiniai kamščio kakleliai. Labai plačiam buteliui kamštis gali būti laisvas — tada vyno butelis.",
    story: "Stalas šviečia. Buteliai, kuriuos vis tiek kaupiate, nustoja būti šiukšlėmis.",
    faq: [
      {
        q: "Ar buteliai įeina?",
        a: "Ne. Tik kamščiai su LED. Naudojate savo stiklą.",
      },
      {
        q: "Ar tinka aliejaus buteliui?",
        a: "Jei kaklelis kaip vyno — taip. Labai platus — laisvas. Labai siauras — netilps.",
      },
      {
        q: "Ar lauko?",
        a: "Vidui. Lietus ir elektronika nesiderina.",
      },
    ],
    cogs: 5,
    shippingDays: "2–5 d.d. ES",
    suppliers: [
      {
        name: "USB cork bottle fairy lights 6 pack",
        url: "https://www.aliexpress.com/w/wholesale-cork-bottle-lights.html",
        unit: "~3–6 $",
        warehouse: "ES",
        notes: "Komplektas 6 vnt. Q4 ES sandėlis.",
      },
    ],
    adPriority: 5,
  },
  {
    slug: "vandens-lempa",
    name: "Vandens rašto lempa",
    short: "Siena kvėpuoja vandeniu. Nuotaikos šviesa su pulteliu.",
    price: 29.9,
    compareAt: 42.9,
    image: "/images/product-ripple.jpg",
    gallery: ["/images/product-ripple.jpg"],
    badge: "Nuotaika",
    colors: ["Šiltas gintaras", "RGB"],
    weight: "~350 g",
    power: "USB · pultelis · dinaminis vandens raštas",
    features: [
      "Dinaminis vandens raštas ant sienos ir lubų",
      "Pultelis: spalvos, greitis, pastovi šviesa",
      "USB, telpa naktiniam staliukui",
      "Svetainė, vonia, Reels — ne skaitymo lempa",
      "Veikia visus metus, ne tik Advento savaitę",
      "Jokių medicinos teiginių",
    ],
    includes: ["Lempą", "USB laidas", "Pultelis", "Lietuviška kortelė"],
    description:
      "Siena juda kaip vanduo. Tai nuotaikos šviesa su kristaliniu gaubtu ir pulteliu — ne skaitymo lempa ir ne kino projektorius.\n\nŠiltas gintaras vakarui, RGB šventei. USB. Naktinis staliukas, vonia, svetainės kampas. ŽIBURYS ir po sausio: šviesa lieka, snaigės išeina.\n\nNelaikykite po pagalve. Skaitymui palikite kitą lempą.",
    story: "Saulėlydžio lempa piešia diską. Šita — vandenį. Abi — nuotaikai, ne darbui.",
    faq: [
      {
        q: "Ar šviečia visą kambarį?",
        a: "Ne. Raštas ant sienos ir lubų. Skaitymui reikia kitos lempos.",
      },
      {
        q: "Ar garsiai?",
        a: "Tylus varikliukas. Jei labai jautru — pastovus režimas be sukimosi.",
      },
      {
        q: "Ar vandens reikia pilti?",
        a: "Ne. Tai šviesos efektas, ne drėkintuvas. Vandens nelašinkite į lempą.",
      },
    ],
    cogs: 9,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "USB water ripple projector lamp",
        url: "https://www.aliexpress.com/w/wholesale-water-ripple-lamp.html",
        unit: "~7–11 $",
        warehouse: "ES",
        notes: "Pultelis komplekte. Jokių SAD teiginių.",
      },
    ],
    adPriority: 4,
  },
  {
    slug: "kristaliniai-zvakidziai",
    name: "Kristaliniai žvakidžiai · 3 vnt.",
    short: "Auksas ir kristallai. Stalas atrodo kaip šventė be eglės.",
    price: 26.9,
    compareAt: 39.9,
    image: "/images/product-candleholders.jpg",
    gallery: ["/images/product-candleholders.jpg"],
    colors: ["Auksas"],
    weight: "~700 g komplektas",
    power: "Be elektros — žvakėms arba LED stulpeliams",
    features: [
      "Trys aukščiai — kompozicija stalui, ne vienas daiktas",
      "Auksas ir kabančios kristalo ašaros",
      "Tinka tikroms ir LED žvakėms (LED saugesnės daugiabučiui)",
      "Palangė, stalas, komoda — be eglės vis tiek šventė",
      "Pakuojame su popieriumi, kad paštomatas nesudaužytų",
      "Gerai dedasi prie LED žvakių rinkinio",
    ],
    includes: ["3 žvakidžiai skirtingo aukščio", "Lietuviška kortelė"],
    description:
      "Stalas atrodo kaip šventė, net jei eglė maža. Trys aukščiai, auksas, kristalai. Žvakės jūsų — tikros arba mūsų LED stulpeliai.\n\nDaugiabutyje rekomenduojame LED: tas pats mirgėjimas, be dūmų. Palangė ir komoda irgi tinka.\n\nMetalas ir stiklo pakabukai. Elkitės kaip su stalu, ne kaip su sporto krepšiu.",
    story: "Šviesa apačioje, auksas viduryje. Eglė nebūtina.",
    faq: [
      {
        q: "Ar žvakės įeina?",
        a: "Ne. Tinka stulpelinės ir LED. LED žvakes turime atskirai.",
      },
      {
        q: "Ar lauko?",
        a: "Vidui. Vėjas ir lietus — ne šitam auksui.",
      },
      {
        q: "Ar sunkūs?",
        a: "Komplektas ~700 g. Stabilūs ant stalo, ne milžiniški kandelabrai.",
      },
    ],
    cogs: 8,
    shippingDays: "2–5 d.d. ES",
    suppliers: [
      {
        name: "Gold crystal tealight holders set of 3",
        url: "https://www.aliexpress.com/w/wholesale-crystal-candle-holders.html",
        unit: "~6–10 $",
        warehouse: "ES",
        notes: "Trapu — ES, popierius pakuotėje.",
      },
    ],
    adPriority: 6,
  },
  {
    slug: "papuosalu-deze",
    name: "Vėrinių dėžė su stiklu",
    short: "Grandinėlės nebesusivelia. Matote viską, uždarote dulkėms.",
    price: 24.9,
    compareAt: 36.9,
    image: "/images/product-jewelry-2.jpg",
    gallery: ["/images/product-jewelry-2.jpg", "/images/product-jewelry-3.jpg", "/images/product-jewelry.jpg"],
    badge: "Tvarka",
    colors: ["Riešutas", "Juoda", "Pilka"],
    weight: "~800 g",
    power: "Be elektros",
    features: [
      "Ilgi skyriai vėriniams — nebe viena krūva stalčiuje",
      "Stiklinis dangtis: matote, dulkės neina",
      "Aksomas viduje, medžio rėmas",
      "Komodai ir spintos lentynai",
      "Dovana tam, kieno grandinėlės visada mazgas",
      "Telpa į paštomatą plokščia",
    ],
    includes: ["Dėžė su stiklu", "Lietuviška kortelė"],
    description:
      "Grandinėlės nebesusivelia, nes kiekviena turi savo takelį. Uždarote stiklą — dulkės lieka lauke, jūs vis tiek matote, ką rinktis rytą.\n\nAksomas, medžio rėmas, trys spalvos. Ne muziejinė antikvarinė skrynia — kasdienė dėžė komodai.\n\nŽiedams mažoms kišenėms geriau 24 skyrių dėžutė. Šita — vėriniams ir apyrankėms.",
    story: "Pirma matote. Paskui imate. Nebeieškote mazgo stalčiuje.",
    faq: [
      {
        q: "Ar tinka žiedams?",
        a: "Apyrankėms ir vėriniams taip. Žiedams geriau dėžutė su mažais skyriais — turime atskirai.",
      },
      {
        q: "Ar stiklas dūžta paštomate?",
        a: "Pakuojame plokščiai su apsauga. Jei vis tiek — 14 dienų keičiame.",
      },
      {
        q: "Koks dydis?",
        a: "Komodos stalčiui / viršui. Jei reikia milžiniškos vitrinos — rašykite, šita kasdienė.",
      },
    ],
    cogs: 8,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "Necklace display box glass lid",
        url: "https://www.aliexpress.com/w/wholesale-necklace-storage-box.html",
        unit: "~7–11 $",
        warehouse: "ES",
        notes: "Plokščia pakuotė paštomatui.",
      },
    ],
    adPriority: 3,
  },
  {
    slug: "kosmetikos-stalciai",
    name: "Kosmetikos stalčiai",
    short: "Serumai matosi. Dulkės ne. Vonios stalas nustoja būti krūva.",
    price: 32.9,
    compareAt: 46.9,
    image: "/images/product-drawers.jpg",
    gallery: ["/images/product-drawers.jpg"],
    colors: ["Balta / gintaras"],
    weight: "~1,2 kg",
    power: "Be elektros",
    features: [
      "Skaidrūs stalčiai — matote, neieškote",
      "Viršutinė lentyna šepečiams ir parfumu",
      "Modulinis: galima statyti šalia antro",
      "Vonios staliukui ir tualetiniam — ne milžiniškas baldas",
      "Plaunamas plastikas, dulkėms uždara",
      "Dovana tam, kieno kosmetika visada „paskui sutvarkysiu“",
    ],
    includes: ["Stalčių blokas", "Lietuviška kortelė"],
    description:
      "Vonios stalas nustoja būti krūva. Serumai stalčiuose, šepečiai viršuje, dulkės už plastiko.\n\nSkaidru — matote, ką turite, neperkame trečio to paties. Modulis telpa ant staliuko, ne visoje sienoje.\n\nDideli šampūnai čia netelpa. Tam krepšiai. Čia veidas ir rankos.",
    story: "Tvarka, kurią matai. Kosmetika nustoja slėptis.",
    faq: [
      {
        q: "Ar telpa aukšti buteliukai?",
        a: "Serumai ir kremai taip. 400 ml šampūnai — ne. Viršuje žemesni.",
      },
      {
        q: "Ar tinka voniai su garais?",
        a: "Taip, plastikas. Nelaikykite po pačiu dušu. Nuvalykite lašus.",
      },
      {
        q: "Ar reikia surinkti?",
        a: "Paprastai atvažiuoja surinktas arba keliomis detalėmis. Instrukcija dėžutėje.",
      },
    ],
    cogs: 11,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "Clear makeup drawer organizer",
        url: "https://www.aliexpress.com/w/wholesale-makeup-drawer-organizer.html",
        unit: "~9–13 $",
        warehouse: "ES",
        notes: "Patikrinti, ar telpa paštomatas.",
      },
    ],
    adPriority: 2,
  },
  {
    slug: "teptuku-stovas",
    name: "Šepečių stovas",
    short: "Šepečiai stovi, ne guli. Viskas prieina vienu pasukimu.",
    price: 16.9,
    compareAt: 24.9,
    image: "/images/product-brushstand.jpg",
    gallery: ["/images/product-brushstand.jpg", "/images/product-brushcage.jpg"],
    colors: ["Balta"],
    weight: "~280 g",
    power: "Be elektros",
    features: [
      "Daug skylių šepečiams, pieštukams, blakstienoms",
      "Sukamas pagrindas — prieina viskas",
      "Lengvas, plaunamas, tualetiniam staliukui",
      "Impulsas iki 20 € prie organizatoriaus",
      "Šepečiai džiūsta stačiai, ne guli drėgni",
      "Dovana tam, kas jau turi šepečius be vietos",
    ],
    includes: ["Stovas", "Lietuviška kortelė"],
    description:
      "Šepečiai stovi, ne guli stiklinėje su dantų šepetuku. Skylių daug, pagrindas sukasi, viskas prieina.\n\nPo plovimo džiūsta stačiai. Tualetinis staliukas nustoja būti pieštukų krūva.\n\nŠepečių nesiunčiame. Stovas tuščias — jūsų rinkinys.",
    story: "Maža tvarka, kurią matai kiekvieną rytą.",
    faq: [
      {
        q: "Ar šepečiai įeina?",
        a: "Ne. Tik stovas. Tinka įprastiems makiažo šepečiams ir pieštukams.",
      },
      {
        q: "Ar tinka dantų šepetukams?",
        a: "Vonios stiklui geriau atskiras. Šitas — veidui ir pieštukams.",
      },
      {
        q: "Ar sunkus?",
        a: "Lengvas. Jei stalas drebantis — nestatykite ant krašto.",
      },
    ],
    cogs: 4,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "360 rotating makeup brush holder",
        url: "https://www.aliexpress.com/w/wholesale-makeup-brush-holder.html",
        unit: "~3–6 $",
        warehouse: "ES",
        notes: "Aukšta marža, lengva.",
      },
    ],
    adPriority: 5,
  },
  {
    slug: "skyriu-deze",
    name: "24 skyrių dėžutė",
    short: "Auskarai, žiedai, varžtai, siūlai. Kiekvienas savo langelyje.",
    price: 12.9,
    compareAt: 19.9,
    image: "/images/product-gridbox.jpg",
    gallery: ["/images/product-gridbox.jpg"],
    colors: ["Skaidri / juoda"],
    weight: "~220 g",
    power: "Be elektros",
    features: [
      "24 fiksuoti skyriai — niekas nepersipila",
      "Skaidrus dangtis, užsegamas",
      "Auskarams, žiedams, sagoms, smulkiems daiktams",
      "Kelionėms ir stalčiui",
      "Pigiausias RAMU impulsas, gerai prie vėrinių dėžės",
      "Lengva, telpa į paštomatą šalia kitos prekės",
    ],
    includes: ["Dėžutė su 24 skyriais", "Lietuviška kortelė"],
    description:
      "Smulkūs daiktai nustoja būti stalčiaus dugnu. 24 langeliai, skaidrus dangtis, užsegate ir keliaujate.\n\nAuskarai poromis. Žiedai. Sagos. Net siūlų ritės, jei tvarkote ne tik papuošalus.\n\nNe vitrina. Darbo dėžutė, kuri kainuoja kaip pietūs ir sutaupo 10 minučių kiekvieną rytą.",
    story: "Kiekvienas langelis — viena pora. Nebesimėto.",
    faq: [
      {
        q: "Ar skyriai išimami?",
        a: "Fiksuoti 24. Jei reikia keičiamų pertvarų — rašykite, parinksime kitą.",
      },
      {
        q: "Ar tinka vaistams?",
        a: "Tai daiktadėžė, ne vaistinėlė. Vaistams — vaistinė.",
      },
      {
        q: "Ar dūžta?",
        a: "Plastikas. Nenumeskite nuo balkono. Paštomatui tinka.",
      },
    ],
    cogs: 3,
    shippingDays: "1–4 d.d.",
    suppliers: [
      {
        name: "24 grid plastic jewelry box",
        url: "https://www.aliexpress.com/w/wholesale-24-grid-jewelry-box.html",
        unit: "~2–4 $",
        warehouse: "ES",
        notes: "Upsell prie vėrinių dėžės.",
      },
    ],
    adPriority: 6,
  },
  {
    slug: "bambukines-dezes",
    name: "Skaidrios dėžės su bambuku · 3 vnt.",
    short: "Matote, kas viduje. Dangtis ramus kaip lentyna.",
    price: 29.9,
    compareAt: 42.9,
    image: "/images/product-kitchenbins.jpg",
    gallery: ["/images/product-kitchenbins.jpg", "/images/product-foldbins.jpg"],
    colors: ["Skaidri / bambukas"],
    weight: "~900 g komplektas",
    power: "Be elektros",
    features: [
      "Trys dydžiai — virtuvei, voniai, spintai",
      "Skaidrus korpusas: matote, neatkartojate pirkimo",
      "Bambuko dangtis — atvira lentyna atrodo ramiai",
      "Rankenos, dedamos viena į kitą sandėliuoti tuščias",
      "Maistui sausam, kosmetikai, laidams, arbatai",
      "Plaunamas plastikas, dangtį nuvalote",
    ],
    includes: ["3 dėžės su dangčiais", "Lietuviška kortelė"],
    description:
      "Lentyna atrodo ramiai, nes dangčiai bambuko, o vidų vis tiek matote. Trys dydžiai: miltai, kosmetika, laidų krūva.\n\nNe lininė, kuri slepia. Skaidru — žinote, kada baigiasi. Dangtis — kai svečiai.\n\nMaistui tik sausam. Karšto puodo nestatykite ant bambuko.",
    story: "Tvarka, kurią matai. Dangtis, kurį nori rodyti.",
    faq: [
      {
        q: "Ar tinka šaldytuvui?",
        a: "Sausiems produktams spintoje geriau. Šaldytuvui — jei telpa lentyna, be karščio.",
      },
      {
        q: "Ar bambukas tikras?",
        a: "Dangtis bambuko fanera / kompozitas, priklausomai nuo partijos. Ne lauko terasa.",
      },
      {
        q: "Ar plaunama indaplovėje?",
        a: "Korpusą — taip, jei telpa. Dangčio ne — nuvalyti.",
      },
    ],
    cogs: 10,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "Clear storage bins bamboo lid 3 pack",
        url: "https://www.aliexpress.com/w/wholesale-bamboo-lid-storage-bin.html",
        unit: "~8–12 $",
        warehouse: "ES",
        notes: "Patikrinti paštomato aukštį.",
      },
    ],
    adPriority: 4,
  },
  {
    slug: "kaklo-sildytuvas",
    name: "Kaklo šildytuvas",
    short: "Ne šalikas. Lankas, kuris šildo sprandą per kelias sekundes.",
    price: 39.9,
    compareAt: 54.9,
    image: "/images/product-neckheater.jpg",
    gallery: ["/images/product-neckheater.jpg"],
    badge: "Nauja",
    colors: ["Sidabras / antracitas"],
    weight: "~280 g",
    power: "Įkraunamas · 3 lygiai · USB-C",
    features: [
      "Kietas lankas sprandui — užsidedate kaip ausines, ne vyniojate kaip šaliką",
      "Trys temperatūros, LED rodo įkrovą, USB-C kišenėje",
      "Tinka po palto apykakle, biure prie šalto lango, automobilyje",
      "Sveria ~280 g — jaučiasi kaip ausinės, ne kaip antklodė",
      "Ne medicinos prietaisas: šiluma, ne gydymas",
      "Dovana tam, kam šąla sprandas ir kas nenešioja šaliko",
    ],
    includes: ["Kaklo šildytuvas", "USB-C laidas", "Lietuviška kortelė"],
    description:
      "Šalikė vyniojasi. Šitas — užsideda. Lankas aplink sprandą, trys lygiai, įkaista nuo įkrauto USB-C. Stotelėje, prie vairo, prie šalto biuro lango.\n\nJeigu šalikas visada „per daug“ arba slenka, čia forma laikosi pati. 280 gramų. Nėra vilnos, nėra kutų. Šiluma ten, kur kaklas atiduoda ją pirmas.\n\nSiuntinyje baterija įdėta į prietaisą — kraunate vakare, nešiojate rytą. Nemiegokite su įjungtu. Jei labai karšta — žemesnis lygis arba trumpesnė sesija.",
    story: "Šalikas šildo audiniu. Šitas — spirale prie sprando. Be kutų, be rišimo.",
    faq: [
      {
        q: "Kuo skiriasi nuo šildančios šalikės?",
        a: "Šalikė — audinys su grafeno juosta, vyniojate. Šitas — kietas lankas, užsidedate kaip ausines. Jei norite minkšto sluoksnio — imkite šalikę.",
      },
      {
        q: "Ar tinka vairuojant?",
        a: "Taip, jei netrukdo galvos atlošas. Nenaudokite, jei blaško. Niekada nemiegokite su įjungtu.",
      },
      {
        q: "Kiek laiko laiko įkrova?",
        a: "Žemiausias lygis — kelios valandos, aukščiausias trumpiau. Kraunate USB-C vakare. Tikslus laikas priklauso nuo partijos.",
      },
      {
        q: "Ar tai masažuoklis?",
        a: "Ne. Šiluma, be vibracijos ir be medicinos teiginių. Kaklo skausmui — gydytojas, ne ši prekė.",
      },
      {
        q: "Koks dydis?",
        a: "Vienas lankas. Tinka daugumai kaklų. Jei labai platus palto kailis — gali netilpti po apykakle.",
      },
    ],
    cogs: 12,
    shippingDays: "1–4 d.d. iš ES sandėlio",
    suppliers: [
      {
        name: "Rechargeable neck heater 3 heat",
        url: "https://www.aliexpress.com/w/wholesale-neck-heater-rechargeable.html",
        unit: "~8–14 $",
        warehouse: "ES WH jei yra",
        notes: "SKU tikrinti CE ir USB-C. 3 pavyzdžiai prieš listingą.",
      },
    ],
    adPriority: 2,
  },
  {
    slug: "usb-sildoma-striuke",
    name: "USB šildoma striukė",
    short: "Zonos krūtinėje, nugaroje, rankovėse. Powerbankas kišenėje.",
    price: 69.9,
    compareAt: 99.9,
    image: "/images/product-jacket.jpg",
    gallery: ["/images/product-jacket.jpg", "/images/product-jacket-2.jpg"],
    badge: "Lauko darbui",
    colors: ["Juoda"],
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    weight: "~700–900 g be powerbanko",
    power: "USB 5V · kelios zonos · powerbankas NEįeina",
    features: [
      "Šildymo zonos krūtinėje, nugaroje, pečiuose — tiekėjo diagramoje matosi išdėstymas",
      "Trys lygiai: žemiausias visai dienai, aukščiausias pirmoms minutėms",
      "USB 5V į jūsų powerbanką kišenėje — baterijos striukėje nėra",
      "Skalbimas ištraukus laidą: 30 °C, be džiovyklės",
      "Kinų dydžiai maži — imkite vienu dydžiu didesnę nei įprasta striukė",
      "Lauko darbui, stadionui, šuniui, sandėlio kiemui — ne miegui",
    ],
    includes: ["Šildoma striukė", "USB laidas", "Lietuviška kortelė"],
    description:
      "Liemenė šildo liemenį. Striukė — ir rankoves. USB į powerbanką kišenėje, trys lygiai, zonos krūtinėje ir nugaroje. Sandėlio kiemas, stadionas, rytinis šuo, kai pūkinė jau per sunki, o džemperis nebešildo.\n\nPowerbanko nesiunčiame: 5V/2A, nuo 10 000 mAh visai pamainai. Ištraukiate laidą prieš skalbimą. 30 °C, be džiovyklės, be lygintuvo ant laidų zonos.\n\nDydžiai M–3XL. Kinų lentelė siauresnė ir trumpesnė — jei abejojate, +1. Grąžinimas 14 dienų, su etiketėmis.",
    story: "Pūkinė šildo orą aplink. Šita — jus. Be 1500 W sąskaitos ir be trijų sluoksnių po striuke.",
    faq: [
      {
        q: "Ar powerbankas įeina?",
        a: "Ne. Jungiate į savo USB 5V/2A powerbanką. Rekomenduojame nuo 10 000 mAh visai dienai.",
      },
      {
        q: "Kuo skiriasi nuo liemenės?",
        a: "Liemenė lengvesnė, be rankovių, po striuke. Šita — viršutinis sluoksnis su zonomis ir rankovėse. Jei jau turite palto — imkite liemenę.",
      },
      {
        q: "Ar galima skalbti?",
        a: "Taip, ištraukus USB laidą. 30 °C švelnus režimas. Be džiovyklės.",
      },
      {
        q: "Ar tinka lietui?",
        a: "Lengvam lietui trumpam. Ne lietpaltis. Ilgą liūtį — viršutinis neperšlampamas sluoksnis.",
      },
      {
        q: "Koks dydis?",
        a: "M–3XL. Kinų dydžiai maži. Imkite vienu didesniu nei jūsų įprasta striukė. Lentelę atsiųsime prieš siuntimą, jei parašysite ūgį ir svorį.",
      },
    ],
    cogs: 22,
    shippingDays: "3–7 d.d. ES",
    suppliers: [
      {
        name: "USB heated jacket 21 zone",
        url: "https://www.aliexpress.com/w/wholesale-usb-heated-jacket.html",
        unit: "~18–28 $",
        warehouse: "ES / CN",
        notes: "CE, dydžių lentelė, 3 pavyzdžiai. Powerbanko nesiųsti.",
      },
    ],
    adPriority: 2,
  },
  {
    slug: "disko-projektorius",
    name: "LED disko projektorius",
    short: "Spalvoti taškai ant sienos ir lubų. Pultelis. Vakarėlis be DJ.",
    price: 24.9,
    compareAt: 36.9,
    image: "/images/product-disco.jpg",
    gallery: ["/images/product-disco.jpg"],
    badge: "Vakarui",
    colors: ["Juoda"],
    weight: "~350 g",
    power: "220V · pultelis komplekte",
    features: [
      "Besisukantis LED kamuolys — taškai ant sienos, lubų, grindų",
      "Pultelis: muzikos režimas, mirgėjimas, spalvos",
      "Gimtadieniui, Naujiesiems, kambariui be eglės ginčo",
      "Statote ant spintelės, nukreipiate į kampą — ne kino projektorius",
      "Siunčiame su EU adapteriu, jei partijoje JAV kištukas",
      "Vaikams prižiūrint suaugusiam — ne žiūrėti tiesiai į lęšį",
    ],
    includes: ["Projektorius", "Pultelis", "Maitinimas / EU adapteris", "Lietuviška kortelė"],
    description:
      "Ne snaigės ant fasado. Spalvoti taškai kambaryje. Pultelis, muzikos režimas, mirgėjimas. Gimtadienis, Naujieji, vakaras, kai eglės nėra, o šventės norisi.\n\nStatote ant spintelės. Nukreipiate į sieną ar lubas. Tamsesniame kambaryje ryškiau. Tai šventės šviesa, ne kino teatras.\n\nJeigu partijoje JAV kištukas — dedame EU adapterį. Rašome prieš siuntimą. Nekiškite į lauką: IP nėra lauko.",
    story: "Siena tampa vakarėliu greičiau nei garsiakalbis. Be DJ, be girliandos visai palangei.",
    faq: [
      {
        q: "Ar tai sniego projektorius?",
        a: "Ne. Sniego — snaigės ant sienos ir fasado. Šitas — spalvoti taškai kambaryje. Skirtingos prekės.",
      },
      {
        q: "Koks kištukas?",
        a: "Siunčiame EU. Jei partijoje US — adapteris komplekte. 220V tinkle.",
      },
      {
        q: "Ar tinka vaikų kambariui?",
        a: "Taip, prižiūrint. Nekišti į akis, ne palikti verkiančiam kūdikiui visai naktiai. Yra švelnesnė galaktikos lempa miegui.",
      },
      {
        q: "Ar garsus?",
        a: "Varikliukas šiek tiek girgžda — kaip ventiliatorius, ne kaip muzika. Muzikos režimas reaguoja į garsą kambaryje.",
      },
      {
        q: "Ar lauko?",
        a: "Vidui. Lietui ir sniegui — sniego projektorius su IP65.",
      },
    ],
    cogs: 8,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "LED disco ball projector remote",
        url: "https://www.aliexpress.com/w/wholesale-disco-ball-projector.html",
        unit: "~6–10 $",
        warehouse: "ES",
        notes: "EU kištukas arba adapteris. Patikrinti pultelį.",
      },
    ],
    adPriority: 4,
  },
  {
    slug: "plauku-deze",
    name: "Sukamoji plaukų aksesuarų dėžė",
    short: "Gumytės, segtukai, lankeliai — kiekvienas savo aukšte. Sukasi.",
    price: 18.9,
    compareAt: 27.9,
    image: "/images/product-hairbox.jpg",
    gallery: ["/images/product-hairbox.jpg"],
    badge: "Vonios stalas",
    colors: ["Balta / skaidri"],
    weight: "~380 g",
    power: "Be elektros",
    features: [
      "Keli aukštai su dangčiu — gumytės nebesimėto stalčiuje",
      "Sukasi, kad prieitumėte visą perimetrą vienu judesiu",
      "Skaidrus korpusas: matote, ko trūksta, prieš išeidami",
      "Vonios stalui, tualetiniam veidrodžiui, vaikų kambariui",
      "Lengva, telpa į paštomatą",
      "Plaunama — išimkite aksesuarus, nuvalykite muilu",
    ],
    includes: ["Sukamoji dėžė", "Lietuviška kortelė"],
    description:
      "Gumytės stalčiuje virsta kamuoliu. Čia kiekviena savo aukšte, po dangčiu, sukasi. Ryte matote, ką imate. Vakare sudedate per dešimt sekundžių.\n\nSkaidrus plastikas, baltas dangtis. Ne sandėlis — daiktas, kurį paliekate ant stalo. Vaikų kambariui ir voniai, kur segtukai visada „kažkur“.\n\nJeigu reikia serumų ir šepečių — imkite didesnį sukamąjį organizatorių. Šita dėžė — smulkiems plaukų daiktams.",
    story: "Stalčius slepia. Šita — rodo. Gumytės nustoja būti krūva.",
    faq: [
      {
        q: "Kuo skiriasi nuo kosmetikos organizatoriaus?",
        a: "Organizatorius — kremai, šepečiai, aukšti buteliukai. Šita — plokšti aukštai gumytėms ir segtukams su dangčiu.",
      },
      {
        q: "Koks skersmuo?",
        a: "Apie 12–15 cm, priklausomai nuo partijos. Telpa ant siauro vonios stalelio.",
      },
      {
        q: "Ar dangtis laikosi?",
        a: "Taip, uždengiamas. Nelaikykite ant šono — turinys išsibarstys.",
      },
      {
        q: "Ar tinka žiedams?",
        a: "Smulkiems žiedams galima, bet geriau papuošalų dėžė su aksomo skyriais — žiedai nebraižo.",
      },
      {
        q: "Ar plaunama?",
        a: "Taip, išėmus aksesuarus. Šiltas vanduo, muilas. Be indaplovės karščio.",
      },
    ],
    cogs: 5,
    shippingDays: "2–5 d.d.",
    suppliers: [
      {
        name: "Rotating hair accessory storage box",
        url: "https://www.aliexpress.com/w/wholesale-rotating-hair-accessories-organizer.html",
        unit: "~3–6 $",
        warehouse: "ES",
        notes: "Aukšta marža, lengva. 3 pavyzdžiai dangčiui.",
      },
    ],
    adPriority: 5,
  },
];

export const bundles = [
  {
    shopId: "silta" as ShopId,
    slug: "keliones-rinkinys",
    name: "Kelionės rinkinys",
    items: ["sildanti-salike", "ranku-sildytuvai"],
    price: 54.9,
    compareAt: 62.8,
    blurb: "Šalikė + rankų šildytuvai. Nemokamas paštomatas.",
  },
  {
    shopId: "silta" as ShopId,
    slug: "darbo-rinkinys",
    name: "Pamainos rinkinys",
    items: ["usb-sildoma-liemene", "sildancios-pirstines"],
    price: 89.9,
    compareAt: 99.8,
    blurb: "Liemenė + pirštinės lauko darbui.",
  },
  {
    shopId: "silta" as ShopId,
    slug: "ryto-rinkinys",
    name: "Rytinis rinkinys",
    items: ["stiklo-uzdangalas", "ranku-sildytuvai"],
    price: 42.9,
    compareAt: 47.8,
    blurb: "Stiklas ir rankos. Kiekvieną −8 °C rytą.",
  },
  {
    shopId: "ziburys" as ShopId,
    slug: "sviesos-rinkinys",
    name: "Šviesos rinkinys",
    items: ["led-girlianda", "led-zvakes"],
    price: 32.9,
    compareAt: 36.8,
    blurb: "Girlianda + LED žvakės. Palangė per vieną užsakymą.",
  },
  {
    shopId: "ziburys" as ShopId,
    slug: "egles-rinkinys",
    name: "Eglės rinkinys",
    items: ["egles-zaisliukai", "led-girlianda"],
    price: 38.9,
    compareAt: 41.8,
    blurb: "Žaisliukai ir girlianda.",
  },
  {
    shopId: "ramu" as ShopId,
    slug: "tvarkos-rinkinys",
    name: "Tvarkos rinkinys",
    items: ["sukamasis-organizatorius", "daiktadezes"],
    price: 48.9,
    compareAt: 52.8,
    blurb: "Organizatorius + trys daiktadėžės.",
  },
  {
    shopId: "ramu" as ShopId,
    slug: "vakaro-rinkinys",
    name: "Vakaro rinkinys",
    items: ["difuzorius", "laidu-deze"],
    price: 48.9,
    compareAt: 52.8,
    blurb: "Difuzorius ir švarus grindų kampas.",
  },
  {
    shopId: "silta" as ShopId,
    slug: "namu-rinkinys",
    name: "Namų rinkinys",
    items: ["sildancios-slepetes", "puodelio-sildytuvas"],
    price: 44.9,
    compareAt: 49.8,
    blurb: "Šlepetės ir puodelio padas. Sofa ir stalas.",
  },
  {
    shopId: "ziburys" as ShopId,
    slug: "stalo-rinkinys",
    name: "Stalo rinkinys",
    items: ["kristaliniai-zvakidziai", "led-zvakes"],
    price: 42.9,
    compareAt: 46.8,
    blurb: "Žvakidžiai ir LED žvakės. Stalas be ugnies.",
  },
  {
    shopId: "ziburys" as ShopId,
    slug: "buteliu-rinkinys",
    name: "Butelių rinkinys",
    items: ["kamstines-girliandos", "led-girlianda"],
    price: 32.9,
    compareAt: 35.8,
    blurb: "Kamščiai ir girlianda. Stalas ir palangė.",
  },
  {
    shopId: "ramu" as ShopId,
    slug: "kosmetikos-rinkinys",
    name: "Kosmetikos rinkinys",
    items: ["kosmetikos-stalciai", "teptuku-stovas"],
    price: 44.9,
    compareAt: 49.8,
    blurb: "Stalčiai ir šepečių stovas. Vonios stalas.",
  },
  {
    shopId: "ramu" as ShopId,
    slug: "papuosalu-rinkinys",
    name: "Papuošalų rinkinys",
    items: ["papuosalu-deze", "skyriu-deze"],
    price: 34.9,
    compareAt: 37.8,
    blurb: "Vėriniai ir 24 skyriai. Nebesimėto.",
  },
  {
    shopId: "silta" as ShopId,
    slug: "lauko-rinkinys",
    name: "Lauko rinkinys",
    items: ["usb-sildoma-striuke", "sildancios-pirstines"],
    price: 99.9,
    compareAt: 109.8,
    blurb: "Striukė ir pirštinės. Pamaina lauke.",
  },
  {
    shopId: "silta" as ShopId,
    slug: "kaklo-rinkinys",
    name: "Kaklo rinkinys",
    items: ["sildanti-salike", "kaklo-sildytuvas"],
    price: 69.9,
    compareAt: 74.8,
    blurb: "Šalikė kelionei, lankas namie ir automobilyje.",
  },
  {
    shopId: "ziburys" as ShopId,
    slug: "vakaro-sviesos-rinkinys",
    name: "Vakaro šviesos",
    items: ["disko-projektorius", "saulilelytes-lempa"],
    price: 49.9,
    compareAt: 52.8,
    blurb: "Disko taškai ir saulėlydis. Du kambario režimai.",
  },
  {
    shopId: "ramu" as ShopId,
    slug: "vonios-rinkinys",
    name: "Vonios rinkinys",
    items: ["plauku-deze", "teptuku-stovas"],
    price: 32.9,
    compareAt: 35.8,
    blurb: "Gumytės ir šepečiai. Vonios stalas.",
  },
];

export const shopSlugs: Record<ShopId, string[]> = {
  silta: [
    "sildanti-salike",
    "kaklo-sildytuvas",
    "ranku-sildytuvai",
    "sildancios-kojines",
    "usb-sildoma-liemene",
    "usb-sildoma-striuke",
    "sildancios-pirstines",
    "sildancios-slepetes",
    "stiklo-uzdangalas",
    "puodelio-sildytuvas",
    "sildantis-kilimelis",
  ],
  ziburys: [
    "sniego-projektorius",
    "saulilelytes-lempa",
    "vandens-lempa",
    "disko-projektorius",
    "led-girlianda",
    "kamstines-girliandos",
    "led-zvakes",
    "kristaliniai-zvakidziai",
    "egles-zaisliukai",
    "galaxy-projektorius",
    "lango-projektorius",
  ],
  ramu: [
    "difuzorius",
    "akiu-masazuoklis",
    "sukamasis-organizatorius",
    "plauku-deze",
    "kosmetikos-stalciai",
    "teptuku-stovas",
    "papuosalu-deze",
    "skyriu-deze",
    "laidu-deze",
    "daiktadezes",
    "bambukines-dezes",
  ],
};

export function shopProducts(shopId: ShopId) {
  return shopSlugs[shopId].map((slug) => products.find((p) => p.slug === slug)).filter((p): p is Product => !!p);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getShopProduct(shopId: ShopId, slug: string) {
  if (!shopSlugs[shopId].includes(slug)) return undefined;
  return getProduct(slug);
}

export function margin(p: Product) {
  return Math.round(((p.price - p.cogs) / p.price) * 100);
}

export function formatEur(n: number) {
  return n.toFixed(2).replace(".", ",") + " €";
}
