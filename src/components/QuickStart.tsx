import { CodeBlock } from './CodeBlock'

const quickStartCode = `import React, { useState } from 'react';
import {
  DocumentPerspectiveCrop,
  type ExportResult,
} from 'react-document-perspective-crop';
import 'react-document-perspective-crop/styles';

function App() {
  const [images, setImages] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImages(Array.from(e.target.files));
  };

  const handleSave = (results: readonly ExportResult[]) => {
    console.log('Processed images:', results);
    // results[0].blob — the cropped/adjusted image as a Blob
    // results[0].width / results[0].height — exported dimensions
    // results[0].filename — original filename
  };

  return (
    <div>
      <input type="file" multiple accept="image/*" onChange={handleFileChange} />
      {images.length > 0 && (
        <div style={{ height: '80vh', width: '100%' }}>
          <DocumentPerspectiveCrop
            images={images}
            onSave={handleSave}
            onCancel={() => console.log('Cancelled')}
          />
        </div>
      )}
    </div>
  );
}`

export function QuickStart() {
  return (
    <section className="section" id="quick-start">
      <div className="section-label">Quick Start</div>
      <h2 className="section-title">Up and running in 2 minutes</h2>
      <p className="section-subtitle">
        Install the package, import the component and styles, pass your images — done.
      </p>

      <div className="subsection">
        <h3>1. Install</h3>
        <CodeBlock language="bash" code="npm install react-document-perspective-crop" />
        <p style={{ marginTop: 8, fontSize: 13, color: 'var(--text-muted)' }}>
          Peer dependencies: <code className="inline">react &gt;= 18.0.0</code> and <code className="inline">react-dom &gt;= 18.0.0</code>
        </p>
      </div>

      <div className="subsection">
        <h3>2. Use</h3>
        <CodeBlock code={quickStartCode} />
      </div>
    </section>
  )
}
