// import hljs from 'highlight.js';
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import 'highlight.js/styles/github.min.css'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)

export function highlight(str: string, lang: string) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(str, { language: lang }).value
    }
    catch (_err: any) {
      return str
    }
  }
  return str // use external default escaping
}
