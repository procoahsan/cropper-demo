import { useState } from 'react'

export function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-block-lang">{language}</span>
        <button className={`code-copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <div className="code-block">
        <pre dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }} />
      </div>
    </div>
  )
}

function highlightSyntax(code: string): string {
  return code
    // comments
    .replace(/(\/\/.*)/g, '<span class="tk-comment">$1</span>')
    // strings
    .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="tk-string">$1</span>')
    .replace(/(`(?:[^`\\]|\\.)*`)/g, '<span class="tk-string">$1</span>')
    .replace(/("(?:[^"\\]|\\.)*")/g, '<span class="tk-string">$1</span>')
    // JSX components
    .replace(/(&lt;\/?)([A-Z]\w*)/g, '$1<span class="tk-component">$2</span>')
    .replace(/<(\/?[A-Z]\w*)/g, '<<span class="tk-component">$1</span>')
    // keywords
    .replace(/\b(import|from|export|default|const|let|var|function|return|if|else|async|await|type|interface|extends|readonly|new|typeof|void)\b/g, '<span class="tk-keyword">$1</span>')
    // types after colon
    .replace(/:\s*(string|number|boolean|null|undefined|void|any|File|Blob|Error|Promise|React|ReactNode)\b/g, ': <span class="tk-type">$1</span>')
    // numbers
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="tk-number">$1</span>')
    // true/false/null
    .replace(/\b(true|false|null|undefined)\b/g, '<span class="tk-keyword">$1</span>')
}
