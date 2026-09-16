import type { ShopId } from "./products";

export type Ad = {
  id: string;
  channel: "Meta Reels" | "Meta Feed" | "TikTok" | "Stories";
  productSlug: string;
  hook: string;
  primary: string;
  headline: string;
  description: string;
  cta: string;
  script: string[];
  image: string;
  ratio: "9:16" | "1:1" | "4:5";
};

export const ads: Ad[] = [
  {
    id: "scarf-reels-1",
    channel: "Meta Reels",
    productSlug: "sildanti-salike",
    hook: "Šalta kaklas prie stotelės — trys sekundės ir šilta.",
    primary:
      "Ne pūkinė. Ne radiatorius.\n\nUSB šalikė įkaista nuo powerbanko kišenėje. 34,90 €, į paštomatą nemokamai nuo 39 €.\n\n14 dienų grąžinimas. Jei nešils — grąžinsite.\n\nŠILTA · nešiojama šiluma žiemai.",
    headline: "Šildanti šalikė · 34,90 €",
    description: "Į paštomatą. 14 d. grąžinimas.",
    cta: "Shop now",
    script: [
      "0–2s: kvėpavimas šaltyje, stotelė, pirštinės prie kaklo.",
      "2–5s: užsideda šalikę, USB į powerbanką — artimas planas.",
      "5–10s: LED įsijungia, tekstas: „3 temperatūros. 200 g.“",
      "10–16s: eina, šypsosi, kaina 34,90 €, CTA „Užsakyti į paštomatą“.",
    ],
    image: "/images/ad-scarf-ugc.jpg",
    ratio: "9:16",
  },
  {
    id: "warmers-reels-1",
    channel: "TikTok",
    productSlug: "ranku-sildytuvai",
    hook: "Vienas kišenei. Vienas mamai. Aštuonios valandos šilumos.",
    primary:
      "Du magnetiniai šildytuvai. Įkrauni per USB-C. Dar ir telefoną įkraus pakeliui.\n\n27,90 € pora. Dovana žmogui, kuris sako, kad jam nieko nereikia.",
    headline: "Rankų šildytuvai · 2 vnt.",
    description: "Įkraunami. Magnetiniai.",
    cta: "Shop now",
    script: [
      "0–3s: rankos ant šalto vairo, šerkšnas ant stiklo.",
      "3–8s: iš kišenės — du šildytuvai, sukimba magnetu.",
      "8–14s: delnai aplink, LED, kaina, paštomatas.",
    ],
    image: "/images/ad-warmers-ugc.jpg",
    ratio: "9:16",
  },
  {
    id: "vest-reels-1",
    channel: "Meta Reels",
    productSlug: "usb-sildoma-liemene",
    hook: "Šilta kaip pūkinė. Sveria kaip džemperis.",
    primary:
      "USB liemenė lauko darbui, stadionui, šuniui 6 ryto.\n\nJungiate į savo powerbanką. 59,90 €. Dydžiai S–XXL — imkite vienu dydžiu didesnę.\n\nIšsiunčiame per 24 val.",
    headline: "Šildoma liemenė · 59,90 €",
    description: "USB 5V. Powerbankas jūsų.",
    cta: "Shop now",
    script: [
      "0–3s: vyras sandėlio kieme, sniegas, plonas sluoksnis.",
      "3–8s: parodo USB laidą į kišenę, zonos ant krūtinės.",
      "8–16s: eina be pūkinės, kaina, dydžių pastaba.",
    ],
    image: "/images/ad-vest-ugc.jpg",
    ratio: "9:16",
  },
  {
    id: "gift-feed-1",
    channel: "Meta Feed",
    productSlug: "sildanti-salike",
    hook: "Ką padovanoti žmogui, kuris sako, kad jam nieko nereikia?",
    primary:
      "Ne žvakė. Ne šlepetės, kurių jau turi.\n\nŠildanti šalikė, rankų šildytuvai arba liemenė — daiktai, kuriuos naudos iki kovo.\n\nKelionės rinkinys 54,90 € · nemokamai į LP Express ir Omniva.\n\nGrąžinti galėsite 14 dienų. Per Kalėdas — iki sausio 15.",
    headline: "Dovanos, kurios šildo iki kovo",
    description: "ŠILTA · Lietuva · paštomatas",
    cta: "Learn more",
    script: ["Statinis 1:1: šalikė + šildytuvai + pirštinės. Kaina ir paštomatas viršuje."],
    image: "/images/ad-gift-flatlay.jpg",
    ratio: "1:1",
  },
  {
    id: "cover-stories-1",
    channel: "Stories",
    productSlug: "stiklo-uzdangalas",
    hook: "Vakar vakare uždėjai — ryte jokių grandiklių.",
    primary:
      "Magnetinis stiklo uždangalas. 19,90 €. Iš Rygos sandėlio — 1–3 dienos.\n\nTiems, kas 7:15 dar grandė šerkšną.",
    headline: "Ryte be grandiklio",
    description: "19,90 € · į paštomatą",
    cta: "Shop now",
    script: [
      "Kadras 1: apledėjęs stiklas.",
      "Kadras 2: nuplėšiamas uždangalas, švarus stiklas.",
      "Kadras 3: kaina + CTA.",
    ],
    image: "/images/product-cover.jpg",
    ratio: "4:5",
  },
  {
    id: "anti-temu-1",
    channel: "Meta Feed",
    productSlug: "sildanti-salike",
    hook: "Ne iš Kinijos per tris savaites. Į paštomatą per 1–2 dienas.",
    primary:
      "Temu atvažiuos sausį. Jums šalta dabar.\n\nŠILTA siunčia žiemos daiktus, kuriuos galima grąžinti, paklausti lietuviškai ir atsiimti LP Express.\n\nŠalikė 34,90 €. Liemenė 59,90 €. Rankų šildytuvai 27,90 €.",
    headline: "Šilta dabar. Ne po Kalėdų.",
    description: "Lietuviškas +370 · 14 d. grąžinimas",
    cta: "Shop now",
    script: ["Tekstinė reklama su UGC kadrų. Jokio angliško „OMG“."],
    image: "/images/ad-scarf-ugc.jpg",
    ratio: "4:5",
  },
  {
    id: "bundle-bf",
    channel: "Meta Feed",
    productSlug: "sildanti-salike",
    hook: "Viena — 34,90 €. Kelionės rinkinys — 54,90 €, trečią dovanai supakuojame.",
    primary:
      "Šalikė + rankų šildytuvai. Nemokamas paštomatas. Dovanų pakavimas 2,49 €.\n\nBlack Friday kaina laikosi iki lapkričio 30, 23:59. Po to grįžta.",
    headline: "Kelionės rinkinys 54,90 €",
    description: "Nemokamai į paštomatą",
    cta: "Shop now",
    script: ["Nenaudoti netikrų −70 %. Viena tikra kaina, viena data."],
    image: "/images/ad-gift-flatlay.jpg",
    ratio: "1:1",
  },
  {
    id: "sister-ugc",
    channel: "TikTok",
    productSlug: "ranku-sildytuvai",
    hook: "Sesė užsisakė sau. Po dviejų dienų — dar dvi: mamai ir anytai.",
    primary:
      "Tikras scenarijus, ne „10 000 sold“. Nufilmuokite atidarymą lietuviškai. Spark Ads ant to paties video.",
    headline: "Sesė užsisakė sau",
    description: "27,90 € pora",
    cta: "Shop now",
    script: [
      "UGC: virtuvė, lietuviškas balsas, unbox, delnai.",
      "Pabaiga: „nuoroda profilyje / čia apačioje“.",
    ],
    image: "/images/ad-warmers-ugc.jpg",
    ratio: "9:16",
  },
  {
    id: "snow-reels",
    channel: "Meta Reels",
    productSlug: "sniego-projektorius",
    hook: "Visas namo fasadas per 10 sekundžių.",
    primary:
      "LED sniego projektorius. 32,90 €. Į paštomatą.\n\nNe iš Kinijos per Kalėdas — tik kol spėjame iš ES sandėlio.",
    headline: "Sniego projektorius · 32,90 €",
    description: "Iki Advento.",
    cta: "Shop now",
    script: ["Naktis, siena tamsi, įjungia, snaigės, kaina."],
    image: "/images/ad-projector-ugc.jpg",
    ratio: "9:16",
  },
  {
    id: "galaxy-feed",
    channel: "Meta Feed",
    productSlug: "galaxy-projektorius",
    hook: "Ką padovanoti vaikui, kuris jau turi viską?",
    primary: "Lubos tampa dangumi. 29,90 €. Tai lempa, ne kino teatras.",
    headline: "Galaxy projektorius",
    description: "29,90 € · paštomatas",
    cta: "Shop now",
    script: ["Vaiko kambarys, lubos, nebula."],
    image: "/images/product-galaxy.jpg",
    ratio: "1:1",
  },
  {
    id: "mask-reels",
    channel: "TikTok",
    productSlug: "akiu-masazuoklis",
    hook: "Ką padovanoti žmogui, kuris sako, kad jam nieko nereikia?",
    primary:
      "15 minučių šilumos po darbo. 49,90 €. Ne gydymas — ritualas.\n\nGrąžinti galėsite ir po švenčių.",
    headline: "Akių masažuoklis · 49,90 €",
    description: "Dovanai.",
    cta: "Shop now",
    script: ["Svetainė vakare, užsideda, 15 min, kaina."],
    image: "/images/product-mask.jpg",
    ratio: "9:16",
  },
  {
    id: "desk-feed",
    channel: "Meta Feed",
    productSlug: "sildantis-kilimelis",
    hook: "Jeigu kiekvieną rytą šąla rankos ant klaviatūros — nupirkite šitą.",
    primary: "USB šildantis kilimėlis. 32,90 €. Veikia ir sausį, kai Kalėdos pasibaigia.",
    headline: "Šildantis stalo kilimėlis",
    description: "32,90 €",
    cta: "Shop now",
    script: ["WFH stalas, šaltas langas, rankos."],
    image: "/images/product-deskmat.jpg",
    ratio: "1:1",
  },
  {
    id: "diffuser-reels",
    channel: "Meta Reels",
    productSlug: "difuzorius",
    hook: "Kambarys, į kurį norisi grįžti. Be žvakės dūmų.",
    primary: "Ultragarsinis difuzorius. 29,90 €. Į paštomatą.\n\nRAMU — ramybė ir tvarka namuose.",
    headline: "Difuzorius · 29,90 €",
    description: "Miegamajam.",
    cta: "Shop now",
    script: ["Naktinis staliukas, rūkas, šviesa, kaina."],
    image: "/images/product-diffuser.jpg",
    ratio: "9:16",
  },
  {
    id: "org-feed",
    channel: "Meta Feed",
    productSlug: "sukamasis-organizatorius",
    hook: "Viskas matosi. Nieko nebeieškote stalčiuje.",
    primary: "Sukamasis organizatorius. 24,90 €. Vonios staliukui ir papuošalams.",
    headline: "Organizatorius · 24,90 €",
    description: "Tvarka, kurią matai.",
    cta: "Shop now",
    script: ["Sukasi, kremai, šepečiai."],
    image: "/images/product-organizer.jpg",
    ratio: "1:1",
  },
  {
    id: "lights-reels",
    channel: "TikTok",
    productSlug: "led-girlianda",
    hook: "Šilta šviesa lentynai ir eglutei. 16,90 €.",
    primary: "LED girlianda. Palangė, stiklainis, eglė. ŽIBURYS.",
    headline: "LED girlianda",
    description: "16,90 €",
    cta: "Shop now",
    script: ["Įjungia, taškai šviesos, kaina."],
    image: "/images/product-fairylights.jpg",
    ratio: "9:16",
  },
  {
    id: "ornaments-feed",
    channel: "Meta Feed",
    productSlug: "egles-zaisliukai",
    hook: "Eglė maža. Dubuo ant stalo vis tiek šventė.",
    primary: "Žaisliukai auksas ir šerkšnas. 24,90 €. ŽIBURYS — lempos, LED, dekoro.",
    headline: "Eglės žaisliukai",
    description: "24,90 €",
    cta: "Shop now",
    script: ["Dubuo, eglė, šviesa."],
    image: "/images/product-ornaments.jpg",
    ratio: "1:1",
  },
  {
    id: "sunset-reels",
    channel: "Meta Reels",
    productSlug: "saulilelytes-lempa",
    hook: "Rožinė siena per sekundę.",
    primary: "Saulėlydžio lempa. 27,90 €. Ne girlianda — nuotaikos šviesa.",
    headline: "Saulėlydžio lempa · 27,90 €",
    description: "USB.",
    cta: "Shop now",
    script: ["Siena tamsi, įjungia, rožinė, kaina."],
    image: "/images/product-sunsetlamp.jpg",
    ratio: "9:16",
  },
];

export const captionsByShop: Record<
  ShopId,
  { ig: string[]; fb_organic: string[] }
> = {
  silta: {
    ig: [
      "Žiema Lietuvoje nėra sezonas. Tai darbo sąlygos. ŠILTA — šalikės, liemenės, šildytuvai.",
      "Dovana žmogui, kuriam „nieko nereikia“: šiluma kišenėje. 27,90 € pora.",
      "Ryte be grandiklio. Vakare uždengi. 19,90 €.",
    ],
    fb_organic: [
      "ŠILTA — tik šildomi žiemos daiktai. Šalikė, liemenė, kojinės, pirštinės, rankų šildytuvai. Klausimai komentaruose.",
    ],
  },
  ziburys: {
    ig: [
      "Lempa, girlianda, žaisliukai. ŽIBURYS — šviesa namams.",
      "Saulėlydžio lempa. Rožinė siena per sekundę. 27,90 €.",
      "Eglė maža — dubuo su žaisliukais vis tiek šventė.",
    ],
    fb_organic: ["ŽIBURYS katalogas: LED girliandos, žvakės, eglės žaisliukai, projektoriai, saulėlydžio lempa."],
  },
  ramu: {
    ig: [
      "Kambarys, į kurį norisi grįžti. RAMU — difuzorius ir tvarka.",
      "Laidai po stalu dingsta. Dėžė 22,90 €.",
      "Trys lininės daiktadėžės. Lentyna vėl atrodo kaip namai.",
    ],
    fb_organic: ["RAMU: ramybė ir kambario tvarka. Jokių šildančių liemenių, jokio eglės dekoro — tik namai."],
  },
};

export const targetingNotes = `Meta Advantage+ Sales · tik Lietuva pirmą savaitę · pirkimo optimizacija.
Biudžetas: Meta 25–40 €/d., TikTok 15–20 €/d.
Ne interesus krauti — keisti hook'us.
Pixel + CAPI prieš paleidimą.
Nužudyti skelbimą, jei hook rate < 25 % arba CTR < 0,8 % po 50 €.
TikTok Shop LT neveikia — tik Ads Manager į svetainę.`;
