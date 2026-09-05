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

export function localizePath(path: string, lang: keyof typeof ui) {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

function stripLocalePrefix(pathname: string, lang: keyof typeof ui) {
  if (lang === defaultLang) return pathname;
  const stripped = pathname.replace(new RegExp(`^/${lang}`), "");
  return stripped === "" ? "/" : stripped;
}

export function getAlternatePath(
  url: URL,
  currentLang: keyof typeof ui,
  targetLang: keyof typeof ui
) {
  const bare = stripLocalePrefix(url.pathname, currentLang);
  return localizePath(bare, targetLang);
}
