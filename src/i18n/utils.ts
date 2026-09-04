import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// Construit un lien localise. En anglais (langue par defaut, non prefixee) ->
// "/about". En francais -> "/fr/about". path doit commencer par "/".
export function localizePath(path: string, lang: keyof typeof ui) {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

// Retire le prefixe de langue courant d'un pathname, pour obtenir le chemin "nu"
// ("/fr/about" -> "/about", "/about" -> "/about").
function stripLocalePrefix(pathname: string, lang: keyof typeof ui) {
  if (lang === defaultLang) return pathname;
  const stripped = pathname.replace(new RegExp(`^/${lang}`), "");
  return stripped === "" ? "/" : stripped;
}

// Donne l'URL equivalente dans une autre langue, utilise par le selecteur de
// langue dans le header (ex: on est sur "/fr/about", on veut le lien vers "/about").
export function getAlternatePath(url: URL, currentLang: keyof typeof ui, targetLang: keyof typeof ui) {
  const bare = stripLocalePrefix(url.pathname, currentLang);
  return localizePath(bare, targetLang);
}
