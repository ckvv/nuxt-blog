declare global {
  interface MyGlobalInterface {
    id: number
    name: string
  }
}

declare module 'markdown-it' {
  const defaultExport: any
  export default defaultExport
}

export {}
