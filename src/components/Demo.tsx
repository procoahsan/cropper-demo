import { useState, useCallback, useEffect, useRef } from 'react'
import { DocumentPerspectiveCrop, type ExportResult } from 'react-document-perspective-crop'
import cvReadyPromise from '@techstark/opencv-js'
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export function Demo() {
  const [images, setImages] = useState<File[]>([])
  const [results, setResults] = useState<ExportResult[]>([])
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [cvInstance, setCvInstance] = useState<any>(null)
  const [dragging, setDragging] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    cvReadyPromise.then((cv) => setCvInstance(cv))
  }, [])

  const handleFiles = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files).filter(f => f.type.startsWith('image/'))
    if (fileArray.length > 0) {
      setImages(fileArray)
      setResults([])
    }
  }, [])

  const handleSave = useCallback((exported: readonly ExportResult[]) => {
    setResults(Array.from(exported))
  }, [])

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = () => setDragging(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    if (e.dataTransfer.files.length > 0) handleFiles(e.dataTransfer.files)
  }

  return (
    <section className="section" id="demo">
      <div className="section-label">Interactive Demo</div>
      <h2 className="section-title">Try it right here</h2>
      <p className="section-subtitle">
        Upload a document image and experience perspective cropping, auto-detection, adjustments, and more — all running live in your browser.
      </p>

      {images.length === 0 ? (
        <div
          ref={dropRef}
          className={`demo-dropzone ${dragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => e.target.files && handleFiles(e.target.files)}
          />
          <div className="demo-dropzone-icon">📄</div>
          <p>Drop document images here or click to browse</p>
          <span className="hint">Supports JPEG, PNG, WebP • Multiple files allowed</span>
          {!cvInstance && <span className="hint" style={{ marginTop: 12, color: '#f59e0b' }}>⏳ Loading OpenCV engine...</span>}
        </div>
      ) : (
        <div className="demo-wrapper">
          <div className="demo-controls">
            <button className="btn btn-secondary" onClick={() => { setImages([]); setResults([]) }}>
              ← Upload Different Images
            </button>
            <div className="demo-theme-toggle">
              <button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')}>Light</button>
              <button className={theme === 'dark' ? 'active' : ''} onClick={() => setTheme('dark')}>Dark</button>
            </div>
          </div>
          <div className="demo-container">
            <DocumentPerspectiveCrop
              images={images}
              onSave={handleSave}
              onCancel={() => { setImages([]); setResults([]) }}
              theme={theme}
              opencvInstance={cvInstance}
            />
          </div>

          {results.length > 0 && (
            <div className="demo-results">
              <h4>✅ Exported Results</h4>
              <div className="demo-results-grid">
                {results.map((res, i) => (
                  <div className="demo-result-item" key={i}>
                    {res.base64 && <img src={res.base64} alt={`Export ${i + 1}`} />}
                    <div className="demo-result-meta">
                      {res.filename} • {res.width}×{res.height}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
