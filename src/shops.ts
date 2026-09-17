import type { ShopId } from "./data/products";

export type Shop = {
  id: ShopId;
  name: string;
  wordmark: string;
  tagline: string;
  kicker: string;
  heroTitle: string;
  heroLead: string;
  heroCta: { label: string; to: string };
  heroImage: string;
  email: string;
  domain: string;
  nav: { label: string; to: string }[];
  model: string;
  storyTitle: string;
  storyBody: string;
  topbar: string;
};

export const shops: Shop[] = [
  {
    id: "silta",
    name: "ŠILTA",
    wordmark: "ŠILTA",
    tagline: "Nešiojama šiluma Baltijos žiemai.",
    kicker: "Žiema · kūnas · kelias",
    heroTitle: "Žiema čia ilga. Šiluma turi keliauti su jumis.",
    heroLead: "Šildančios šalikės, kaklo lankas, striukės, liemenės, kojinės, pirštinės, šlepetės ir rankų šildytuvai. Ne radiatorius — sluoksnis ant jūsų.",
    heroCta: { label: "Šildanti šalikė · 34,90 €", to: "/p/sildanti-salike" },
    heroImage: "/images/hero-winter.jpg",
    email: "labas@silta.lt",
    domain: "silta.lt",
    nav: [
      { label: "Katalogas", to: "/katalogas" },
      { label: "Šalikė", to: "/p/sildanti-salike" },
      { label: "Striukė", to: "/p/usb-sildoma-striuke" },
      { label: "Šlepetės", to: "/p/sildancios-slepetes" },
    ],
    model: "Tik šildomi daiktai žiemai.",
    storyTitle: "Radiatorius šildo orą. Šitie — jus.",
    storyBody:
      "ŠILTA yra tik apie šaltį: kaklas, rankos, kojos, liemuo, striukė, šlepetės, automobilio stiklas, rašymo stalas. Jokio dekoro, jokių dėžučių.",
    topbar: "Šildomi žiemos daiktai · nemokamai į paštomatą nuo 39 €",
  },
  {
    id: "ziburys",
    name: "ŽIBURYS",
    wordmark: "ŽIBURYS",
    tagline: "Lempos, girliandos, eglės žaisliukai.",
    kicker: "Šviesa · LED · dekoro",
    heroTitle: "Snaigės ant sienos. Auksas ant eglės.",
    heroLead: "LED lempos, girliandos, žvakės, žvakidžiai, disko projektorius ir žaisliukai. Namai šviečia — ne spinta pilna megztinių.",
    heroCta: { label: "Saulėlydžio lempa · 27,90 €", to: "/p/saulilelytes-lempa" },
    heroImage: "/images/hero-lights.jpg",
    email: "labas@ziburys.lt",
    domain: "ziburys.lt",
    nav: [
      { label: "Katalogas", to: "/katalogas" },
      { label: "Lempa", to: "/p/saulilelytes-lempa" },
      { label: "Girlianda", to: "/p/led-girlianda" },
      { label: "Žaisliukai", to: "/p/egles-zaisliukai" },
    ],
    model: "Tik šviesa ir dekoro.",
    storyTitle: "Šviesa pakeičia kambarį greičiau nei baldai.",
    storyBody:
      "ŽIBURYS — projektoriai, LED girliandos, žvakės, žvakidžiai, eglės žaisliukai, saulėlydžio, vandens ir disko lempos. Jokios šildančios liemenės, jokių daiktadėžių.",
    topbar: "Lempos, LED, žaisliukai · paštomatas nuo 39 €",
  },
  {
    id: "ramu",
    name: "RAMU",
    wordmark: "RAMU",
    tagline: "Ramybė. Ir daiktai savo vietose.",
    kicker: "Namai · tvarka · oras",
    heroTitle: "Kambarys, į kurį norisi grįžti.",
    heroLead: "Difuzorius, organizatoriai, plaukų dėžės, vėrinių dėžės, laidų dėžės, daiktadėžės. Tvarka, kuri atrodo ramiai — ne kaip sandėlis.",
    heroCta: { label: "Difuzorius · 29,90 €", to: "/p/difuzorius" },
    heroImage: "/images/hero-ramu.jpg",
    email: "labas@ramu.lt",
    domain: "ramu.lt",
    nav: [
      { label: "Katalogas", to: "/katalogas" },
      { label: "Difuzorius", to: "/p/difuzorius" },
      { label: "Organizatorius", to: "/p/sukamasis-organizatorius" },
      { label: "Daiktadėžės", to: "/p/daiktadezes" },
    ],
    model: "Tik ramybė ir kambario tvarka.",
    storyTitle: "Pirma — oras. Paskui — vietos daiktams.",
    storyBody:
      "RAMU nėra žiemos striukių ir nėra eglės girliandų. Čia kambarys susitvarko: kvapas, kosmetika, plaukai, papuošalai, laidai, lentynos.",
    topbar: "Ramybė ir tvarka namuose · paštomatas nuo 39 €",
  },
];

export function getShop(id: string | undefined) {
  return shops.find((s) => s.id === id);
}
