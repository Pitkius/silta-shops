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
      "Įkaista per kelias sekundes nuo powerbanko",
      "Trys temperatūros — žalias / mėlynas / raudonas LED",
      "Lengva, skalbiama, vienas dydis visiems",
      "Naudoja bet kokį 5V USB powerbanką — baterijos siuntinyje nėra",
    ],
    description:
      "Baltijos žiema prasideda nuo kaklo. Ši šalikė šildo grafeno juosta, jungiasi į powerbanką kišenėje ir sveria 200 gramų. Dovana, kurią žmogus naudos kiekvieną rytą iki kovo, ne tik per Kalėdas.",
    story:
      "Stotelėje, dviračiu, vedant šunį. Be pūkinės ant galvos ir be 1500 W radiatoriaus sąskaitos. Šiluma ten, kur jos reikia — ne visame bute.",
    faq: [
      {
        q: "Ar reikia atskiros baterijos?",
        a: "Ne. Jungiate į bet kokį USB powerbanką (rekomenduojame 5V/2A). Powerbanko siuntinyje nėra — dauguma jau turi.",
      },
      {
        q: "Ar galima skalbti?",
        a: "Taip, ištraukus USB laidą. Rankinis skalbimas arba švelnus režimas, be džiovyklės.",
      },
      {
        q: "Ar tai medicinos prietaisas?",
        a: "Ne. Tai šildantis aksesuaras žiemai. Negydo ligų ir neskirtas skausmo terapijai.",
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
    gallery: ["/images/product-warmers.jpg", "/images/product-warmers-2.jpg"],
    badge: "Impulsas",
    colors: ["Matinė juoda"],
    weight: "2 × ~90 g",
    power: "USB-C · iki ~8 val. šilumos · powerbank funkcija",
    features: [
      "Du šildytuvai — kišenei ir pirštinei",
      "Magnetai sulipdo porą į vieną bloką",
      "Šiluma + telefono įkrovimas pakeliui",
      "Telpa į LP Express / Omniva paštomatą",
    ],
    description:
      "Mažiausia Kalėdų dovana, kurią vis tiek atsimena. Du įkraunami šildytuvai, kuriuos sukabini magnetu. Rytinis automobilis, stotelė, stadionas, žvejyba.",
    story:
      "Vokietijoje panašūs rinkiniai parduodami ~35 €. Lietuvoje Facebook reklamose šios nišos beveik nėra — kol kas.",
    faq: [
      {
        q: "Kiek laiko laiko šilumą?",
        a: "Žemiausias režimas — iki ~8 val., aukščiausias — 2–3 val. Priklauso nuo lauko temperatūros.",
      },
      {
        q: "Ar tinka vaikams?",
        a: "Nuo 8 metų, prižiūrint. Korpusas įkaista — nelaikyti prie odos visą naktį.",
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
    gallery: ["/images/product-socks.jpg"],
    colors: ["Tamsiai pilka"],
    sizes: ["S/M (36–40)", "L/XL (41–46)"],
    weight: "~280 g pora",
    power: "Išimami akumuliatoriai · 3 lygiai",
    features: [
      "Šiluma ties padu ir pirštais",
      "Baterijos išsiima prieš skalbimą",
      "Tinka batai, guminiai, žygio aulai",
      "Dovana tam, kam visada šąla kojos",
    ],
    description:
      "Ne slidinėjimo kurortui. Šlapiems Lietuvos šaligatviams, sandėliui, stotelei. Vilnonės kojinės laiko šilumą. Šitos ją gamina.",
    story:
      "Pigūs USB padukai Pigu.lt kainuoja nuo ~14 € ir šildo tik prie rozetės. Čia — belaidžiai, visam keliui.",
    faq: [
      {
        q: "Ar skalbiama?",
        a: "Taip, išėmus baterijas. Negalima džiovyklės ir karšto lygintuvo ant laidų.",
      },
      {
        q: "Ar baterijos įeina?",
        a: "Taip, pora išimamų akumuliatorių ir USB kroviklis komplekte.",
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
      "Krūtinė, nugara, apykaklė — zonos įkaista per minutes",
      "Dėvima po striuke arba vietoj antro sluoksnio",
      "Jūsų powerbankas kišenėje, 5V/2A",
      "Uniseks kirpimas — prieš užsakant žiūrėkite dydžių lentelę (kinų dydžiai maži)",
    ],
    description:
      "Sandėlio pamaina, medžioklė, stadionas, šuo 06:40. Liemenė šildo ten, kur striukė tik užstoja vėją. Powerbanko nesiunčiame — mažiau lithium rizikos ir mažiau svorio.",
    story:
      "AutoDS 2026 Q4 sąraše tai #1 žiemos drabužis. Lietuvoje panašios jau ~57–84 €. Mes parduodame be prekės ženklo, su lietuviška instrukcija ir paštomatu.",
    faq: [
      {
        q: "Kodėl nėra baterijos?",
        a: "Kad siuntinys būtų lengvesnis, pigesnis ir legaliau keliautų. Tinka bet kuris 10 000 mAh 5V/2A powerbankas.",
      },
      {
        q: "Kaip pasirinkti dydį?",
        a: "Imkite +1 dydį nei įprastai. Kinų S ≈ EU M. Lentelė produkto puslapyje. Grąžinimas 14 dienų.",
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
    gallery: ["/images/product-gloves.jpg"],
    colors: ["Juoda"],
    sizes: ["S/M", "L/XL"],
    weight: "~180 g",
    power: "USB 5V arba išimami akumuliatoriai",
    features: [
      "Touchscreen nykštys ir smilius",
      "Trys šilumos lygiai",
      "Dviračiui, sandėliui, šuniui, stotelei",
      "Vidinis flisas, išorė atstumia vėjo gūsį",
    ],
    description:
      "Ne slidinėjimo pirštinė už 90 €. Kasdienė pora, kurioje galima atrakinti telefoną ir nelaikyti plikų rankų −10 °C.",
    story: "Pigios vilnonės nešildo ant vairo. Šitos šildo ir vis tiek liečia ekraną.",
    faq: [
      {
        q: "Ar tikrai veikia liečiamas ekranas?",
        a: "Nykštys ir smilius turi laidų siūlą. Storas dėklas ant telefono kartais trukdo — tada naudokite kitą pirštą.",
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
      "Magnetai + kišenės durų rėme — laiko vėją",
      "Ryte nuplėši kartu su šerkšnu",
      "Tinka daugumai lengvųjų auto",
      "Jokių baterijų, jokių CE komplikacijų",
    ],
    description:
      "Kiekvienas Baltijos vairuotojas lapkritį–kovą kovoja su stiklu. Tai ne gadgetas. Tai 20 €, kurie grąžina 10 minučių kiekvieną rytą.",
    story:
      "Bottari Rigoje šitą patį daiktą pardavinėja didmenininkams už 3,36 €. Marža čia didžiausia visame kataloge. Reklama — prieš/po kadrai 6 ryto.",
    faq: [
      {
        q: "Ar tiks mano mašinai?",
        a: "Universalus lengviesiems. Labai dideliems visureigiams gali trūkti pločio — tada rašykite mums prieš pirkdami.",
      },
      {
        q: "Ar neišneš vėjas?",
        a: "Durų kišenės svarbiau už magnetus. Uždenkite vakare, kišenes uždarykite durelėmis.",
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
    gallery: ["/images/product-mask.jpg"],
    badge: "Dovanai",
    colors: ["Pilka"],
    weight: "~250 g",
    power: "Įkraunamas · šiluma + vibracija · ne medicinos prietaisas",
    features: [
      "Šiluma aplink akis, smilkiniai",
      "Bluetooth muzika (nebūtina)",
      "15 min. sesija, tada išsijungia",
      "Dovana mamai, partneriui, sau",
    ],
    description:
      "Ne TENS ir ne „gydo migreną“. Tai vakaro ritualas tamsiam Baltijos lapkričiui. Reklamuoti kaip dovaną, ne kaip gydymą.",
    story: "Estijos 2025 Kalėdų recenzijose masažuokliai pateko į topus. Lietuvoje grožio gadgetų FB vis dar veikia, jei kalba lietuviškai.",
    faq: [
      {
        q: "Ar tinka su akiniais?",
        a: "Akiniai nusiimami. Lęšius irgi geriau išimti.",
      },
      {
        q: "Ar tai medicinos priemonė?",
        a: "Ne. Relaksacijai. Negydo ligų, nemažina kraujospūdžio, nediagnozuoja.",
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
    gallery: ["/images/product-mug.jpg"],
    colors: ["Juoda"],
    weight: "< 300 g",
    power: "USB 5V · be baterijos · ~55 °C",
    features: [
      "Padas, ne belaidis puodelis — nėra lithium",
      "Tinka keramikai ir metalui",
      "Kalėdų kojinėms ir krepšelio priedui",
      "Įkroviklis nuo kompiuterio arba powerbanko",
    ],
    description:
      "Pigiausias katalogo SKU. Parduoti kaip priedą prie šalikės arba kaip 15 € dovaną kolegai. Vienas pats reklamose silpnas — komplekte su šalike veikia.",
    story: "AliExpress 4–8 $. Lentynose visur. Laimi tik lietuviškas checkout ir paštomatas, ne unikalumas.",
    faq: [
      {
        q: "Ar puodelis įeina?",
        a: "Ne. Tik šildantis padas. Puodelį jau turite.",
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
      "Snaigės ant sienos ir sniego",
      "Lauko ir lango režimas",
      "Lengvas, telpa į paštomatą",
      "Sezonas: spalis–gruodžio 20",
    ],
    description:
      "Butui be eglės ir namui su sodu. 10 sekundžių ir fasadas šviečia. Reklama — prieš/po naktinis kadras.",
    story: "Miršta gruodžio 26. ES sandėlis privalomas, kitaip nespėsite Advento.",
    faq: [
      {
        q: "Ar tinka lietui?",
        a: "IP65 korpusas. Kištuką laikykite sausai. Nukreipkite nuo kaimyno miegamojo lango.",
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
      "Žvaigždės ir nebula ant lubų",
      "Laikmatis naktiai",
      "Vaikų kambariui ir dovanai",
      "Ne kino projektorius — taip ir rašome",
    ],
    description: "Pigus, vizualus, gerai filmuojasi. Be medicinos ir be 8K melo.",
    story: "Saturuota kategorija. Laimi lietuviškas checkout ir paštomatas, ne unikalumas.",
    faq: [
      {
        q: "Ar tai kino projektorius?",
        a: "Ne. Tai nakties lempa. Filmų nerodo.",
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
    gallery: ["/images/product-window-projector.jpg", "/images/product-snow-projector.jpg"],
    weight: "~450 g",
    power: "220V EU",
    features: [
      "Snaigės, Helovinas, Kalėdos — keičiami motyvai",
      "Lipdoma / statoma prie stiklo",
      "Butui, kai kiemo nėra",
    ],
    description: "Langas vietoj fasado. Vilniaus ir Kauno butams tai svarbiau nei lauko prožektorius.",
    story: "EPROLO turi US WH — mums netinka. Imti EU plug AliExpress / CJ EU.",
    faq: [
      {
        q: "Ar matysis iš lauko?",
        a: "Taip, jei kambarys tamsesnis už gatvę. Užuolaidas pritraukite.",
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
      "Po klaviatūra ir pele",
      "USB, be atskiros baterijos",
      "Studentams ir WFH šaltame bute",
      "Veikia ir po Kalėdų, sausį",
    ],
    description: "Ne radiatorius. Centai elektros, šiltos rankos. Sausio SKU, kai Kalėdų dekoras miršta.",
    story: "PB Fulfill žiemos WFH #1. Lietuvoje FB reklamose beveik tuščia.",
    faq: [
      {
        q: "Ar labai karšta?",
        a: "Maloniai šilta, ne lygintuvas. USB 5V.",
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
      "Ultragarsas — ne karštis",
      "Švelnus nakties LED",
      "Automatiškai išsijungia, kai vandens nėra",
      "Miegamajam ir voniai",
    ],
    description:
      "RAMU prasideda nuo oro. Ne kvepalai ant odos — kambarys, į kurį norisi grįžti. Aliejaus rinkinyje nėra, kad galėtumėte pasirinkti kvapą patys.",
    story: "Lietuviškos žiemos butai sausi. Difuzorius — ramybė, ne gydymas.",
    faq: [
      {
        q: "Ar aliejus įeina?",
        a: "Ne. Tinka jūsų eteriniam aliejui. Pakanka kelių lašų.",
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
    gallery: ["/images/product-organizer.jpg"],
    colors: ["Skaidrus akrilas"],
    weight: "~600 g",
    power: "Be elektros",
    features: [
      "Sukasi 360°",
      "Kremai, šepečiai, papuošalai vienoje vietoje",
      "Vonios stalčiui arba tualetiniam staliukui",
      "Plaunamas akrilas",
    ],
    description: "Tvarka, kurią matai. Ne dėžė, kurioje vėl dingsta lūpų dažai.",
    story: "Kalėdinė dovana tam, kieno vonia visada „paskui sutvarkysiu“.",
    faq: [
      {
        q: "Kokio dydžio buteliukai telpa?",
        a: "Įprasti 30–50 ml kremai ir serumai. Dideli šampūnai — ne, tam krepšiai.",
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
    gallery: ["/images/product-cablebox.jpg"],
    colors: ["Smėlio", "Pilka"],
    weight: "~450 g",
    power: "Be elektros — tik dėžė",
    features: [
      "Telpa ilgintuvas ir kelios maitinimo plytos",
      "Išpjovos laidams",
      "Vaikams ir katėms saugesnis grindų kampas",
      "TV komodai ir darbo stalui",
    ],
    description: "Ramus kambarys prasideda ten, kur nesimato juodų gyvačių po stalu.",
    story: "Dovana tam, kas jau turi viską — išskyrus tvarką prie rozetės.",
    faq: [
      {
        q: "Ar medinė?",
        a: "MDF / plastikas su audinio apdaila, priklausomai nuo partijos. Nelaikyti prie radiatoriaus.",
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
    gallery: ["/images/product-baskets.jpg"],
    colors: ["Avižų"],
    weight: "~700 g komplektas",
    power: "Be elektros",
    features: [
      "Sulankstomos, kai nereikia",
      "Megztiniai, rankšluosčiai, žaislai",
      "Spintai ir atvirai lentynai",
      "Komplektas iš trijų",
    ],
    description: "Tvarka be naujų baldų. Įstūmėte — lentyna vėl atrodo kaip namai, ne sandėlis.",
    story: "Praktiška Kalėdų dovana, kurią naudoja iki kovo ir dar kitą rudenį.",
    faq: [
      {
        q: "Ar tinka IKEA lentynai?",
        a: "Daugumai 30–33 cm gylio lentynų taip. Jei lentyna labai siaura — rašykite prieš pirkdami.",
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
    gallery: ["/images/product-fairylights.jpg"],
    colors: ["Šiltai balta", "Šalta balta"],
    weight: "~180 g",
    power: "USB arba baterijos (komplekte USB)",
    features: [
      "Lanksti, 5–10 m priklausomai nuo varianto",
      "Galima dėti į stiklainį, palei rėmą, ant eglės",
      "Mažai elektros",
      "Kalėdoms ir visai žiemai",
    ],
    description: "Paprasčiausias būdas pakeisti kambarį. Ne projektorius — taškai šviesos ten, kur sėdite.",
    story: "Impulsas iki 20 €. Gerai dedasi prie žaisliukų ir žvakių.",
    faq: [
      {
        q: "Ar lauko?",
        a: "Šis modelis vidui. Lauko girliandai rašykite — parinksime IP65.",
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
    gallery: ["/images/product-ledcandles.jpg"],
    colors: ["Dramblio kaulo"],
    weight: "~400 g",
    power: "AAA / nuotolinis (komplekte)",
    features: [
      "Titnago mirgėjimas",
      "Laikmatis",
      "Stalui, palangei, voniai",
      "Katėms ir užuolaidoms saugesnės nei ugnis",
    ],
    description: "Šventinis stalas be tikros liepsnos. Ypač daugiabučiams.",
    story: "Dovana mamai, kuri bijo palikti žvakę.",
    faq: [
      {
        q: "Ar baterijos įeina?",
        a: "Priklauso nuo partijos. Aprašyme nurodysime. Dažniausiai reikia AAA.",
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
      "Rinkinys eglutei ar dubeniui ant stalo",
      "Šerkšno ir aukso tonai",
      "Tinka ir palangei be eglės",
      "Kalėdų nuotraukoms",
    ],
    description: "Dekoras, kurį matai iš karto. Sudukai namams, ne tik eglės šakai.",
    story: "Butams, kur eglė maža — dubuo ant stalo vis tiek atrodo kaip šventė.",
    faq: [
      {
        q: "Ar stiklas?",
        a: "Dalis stiklo, dalis plastiko su stiklo apdaila. Pakavimas su popieriumi, kad nedūžtų paštomate.",
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
    gallery: ["/images/product-sunsetlamp.jpg"],
    colors: ["Juoda kojelė"],
    weight: "~300 g",
    power: "USB",
    features: [
      "Projekcija ant sienos",
      "Sukamas kampas",
      "Reels ir svetainė",
      "Veikia visus metus, ne tik per Kalėdas",
    ],
    description: "Lema, ne girlianda. ŽIBURYS ir po sausio 1 — šviesa, ne tik snaigės.",
    story: "Pigiau nei naujas šviestuvas. Efektas didesnis nei kaina.",
    faq: [
      {
        q: "Ar šviečia visą kambarį?",
        a: "Ne. Tai nuotaikos šviesa ant sienos ar lubų. Skaitymui reikia kitos lempos.",
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
];

export const shopSlugs: Record<ShopId, string[]> = {
  silta: [
    "sildanti-salike",
    "ranku-sildytuvai",
    "sildancios-kojines",
    "usb-sildoma-liemene",
    "sildancios-pirstines",
    "stiklo-uzdangalas",
    "puodelio-sildytuvas",
    "sildantis-kilimelis",
  ],
  ziburys: [
    "sniego-projektorius",
    "saulilelytes-lempa",
    "led-girlianda",
    "led-zvakes",
    "egles-zaisliukai",
    "galaxy-projektorius",
    "lango-projektorius",
  ],
  ramu: ["difuzorius", "sukamasis-organizatorius", "laidu-deze", "daiktadezes"],
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
