export function renderLinks(text: string): string {
  return text.replace(
    /\\\[([^\]]+)\\\]\(([^)]+)\)|\[([^\]]+)\]\(([^)]+)\)/g,
    (match, escapedText, escapedUrl, linkText, linkUrl) => {
      if (escapedText !== undefined) {
        return `[${escapedText}](${escapedUrl})`;
      }
      return `<a href="${linkUrl}" class="underline hover:text-white transition">${linkText}</a>`;
    }
  );
}
