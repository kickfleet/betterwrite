/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '@heroicons/vue'
declare module 'pdfmake/build/pdfmake'
declare module 'pdfmake/build/vfs_fonts'
declare module 'pdfmake-unicode/dist/pdfmake-unicode.js'
