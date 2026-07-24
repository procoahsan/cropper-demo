export function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        <span className="logo-icon">📐</span>
        RDPC
      </a>
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#demo">Demo</a></li>
        <li><a href="#quick-start">Quick Start</a></li>
        <li><a href="#api">API</a></li>
        <li><a href="#hooks">Hooks</a></li>
        <li><a href="#types">Types</a></li>
        <li><a href="#theming">Theming</a></li>
        <li><a href="#i18n">i18n</a></li>
        <li><a href="#shortcuts">Shortcuts</a></li>
      </ul>
      <div className="navbar-actions">
        <a href="https://github.com/procoahsan/Cropper" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.npmjs.com/package/react-document-perspective-crop" target="_blank" rel="noopener">npm</a>
      </div>
    </nav>
  )
}
