/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAPS_JS_API: string
  readonly VITE_GOOGLE_MAP_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}