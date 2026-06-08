/// <reference types="unplugin-icons/types/react" />

interface ImportMetaEnv {
  readonly SITE: string;
  readonly API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
