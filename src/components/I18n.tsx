import { CodeBlock } from './CodeBlock'

export function I18n() {
  return (
    <section className="section" id="i18n">
      <div className="section-label">Internationalization</div>
      <h2 className="section-title">Fully translatable</h2>
      <p className="section-subtitle">
        Every user-facing string can be overridden via the <code className="inline">i18n</code> or <code className="inline">translations</code> prop.
      </p>

      <div className="subsection">
        <h3>Example: German</h3>
        <CodeBlock language="tsx" code={`<DocumentPerspectiveCrop
  i18n={{
    save: 'Speichern',
    cancel: 'Abbrechen',
    autoDetect: 'Automatisch erkennen',
    brightness: 'Helligkeit',
    contrast: 'Kontrast',
    sharpness: 'Schärfe',
    rotateLeft: 'Links drehen',
    rotateRight: 'Rechts drehen',
    loadingOpenCV: 'OpenCV wird geladen…',
    autoDetectFailed: 'Kein Dokument gefunden.',
  }}
  ...
/>`} />
      </div>

      <div className="subsection">
        <h3>All Translation Keys</h3>
        <div className="api-table-wrapper">
          <table className="api-table">
            <thead><tr><th>Key</th><th>Category</th><th>Default (English)</th></tr></thead>
            <tbody>
              {[
                ['save', 'Action', '"Save"'],
                ['cancel', 'Action', '"Cancel"'],
                ['reset', 'Action', '"Reset"'],
                ['undo', 'Action', '"Undo"'],
                ['redo', 'Action', '"Redo"'],
                ['autoDetect', 'Action', '"Auto Detect"'],
                ['addImage', 'Action', '"Add Image"'],
                ['deleteImage', 'Action', '"Delete Image"'],
                ['title', 'Label', '"Edit Document"'],
                ['brightness', 'Label', '"Brightness"'],
                ['contrast', 'Label', '"Contrast"'],
                ['sharpness', 'Label', '"Sharpness"'],
                ['rotateLeft', 'Label', '"Rotate Left"'],
                ['rotateRight', 'Label', '"Rotate Right"'],
                ['zoomIn', 'Label', '"Zoom In"'],
                ['zoomOut', 'Label', '"Zoom Out"'],
                ['loadingOpenCV', 'Status', '"Loading OpenCV…"'],
                ['processing', 'Status', '"Processing…"'],
                ['autoDetectFailed', 'Status', '"Could not find one clear document."'],
                ['cannotDeleteLast', 'Status', '"Cannot delete last image."'],
                ['cropRegion', 'A11y', '"Crop Region"'],
                ['cornerHandle', 'A11y', '"Corner Handle"'],
                ['dragToReorder', 'A11y', '"Drag to Reorder"'],
              ].map(([key, cat, def]) => (
                <tr key={key}><td>{key}</td><td>{cat}</td><td>{def}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
