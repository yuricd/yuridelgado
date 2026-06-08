export const SITE_URL = import.meta.env.SITE;

export function getSiteUrl(path = "/") {
  return new URL(path, SITE_URL).href;
}
