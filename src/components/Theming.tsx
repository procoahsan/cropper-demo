import { CodeBlock } from './CodeBlock'

export function Theming() {
  return (
    <section className="section" id="theming">
      <div className="section-label">Theming</div>
      <h2 className="section-title">CSS Custom Properties</h2>
      <p className="section-subtitle">
        The component is styled entirely with CSS variables, making it trivial to theme.
      </p>

      <div className="subsection">
        <h3>Using Presets</h3>
        <CodeBlock language="tsx" code={`<DocumentPerspectiveCrop theme="dark" ... />
<DocumentPerspectiveCrop theme="light" ... />`} />
      </div>

      <div className="subsection">
        <h3>Custom Theme Overrides</h3>
        <CodeBlock language="tsx" code={`<DocumentPerspectiveCrop
  theme={{
    colorPrimary: '#8b5cf6',
    colorSurface: '#0f0f23',
    colorText: '#e2e8f0',
    handleColor: '#a78bfa',
    borderRadius: '12px',
    transitionDuration: '300ms',
  }}
  ...
/>`} />
      </div>

      <div className="subsection">
        <h3>All CSS Custom Properties</h3>
        <div className="api-table-wrapper">
          <table className="api-table">
            <thead><tr><th>Property</th><th>CSS Variable</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              {[
                ['colorPrimary', '--rdpc-color-primary', '#2563eb', 'Primary accent color'],
                ['colorPrimaryHover', '--rdpc-color-primary-hover', '#1d4ed8', 'Primary hover state'],
                ['colorDanger', '--rdpc-color-danger', '#dc2626', 'Destructive actions'],
                ['colorSuccess', '--rdpc-color-success', '#16a34a', 'Success indicators'],
                ['colorSurface', '--rdpc-color-surface', '#ffffff', 'Surface background'],
                ['colorSurfaceElevated', '--rdpc-color-surface-elevated', '#f8fafc', 'Elevated surface'],
                ['colorText', '--rdpc-color-text', '#0f172a', 'Primary text'],
                ['colorTextMuted', '--rdpc-color-text-muted', '#64748b', 'Muted text'],
                ['colorBorder', '--rdpc-color-border', '#e2e8f0', 'Border color'],
                ['colorOverlay', '--rdpc-color-overlay', 'rgba(0,0,0,0.4)', 'Crop overlay dimming'],
                ['handleColor', '--rdpc-handle-color', 'Primary color', 'Corner handle fill'],
                ['handleSize', '--rdpc-handle-size', '20px', 'Corner handle size'],
                ['cropStrokeColor', '--rdpc-crop-stroke-color', 'Primary color', 'Crop polygon stroke'],
                ['cropStrokeWidth', '--rdpc-crop-stroke-width', '2px', 'Crop polygon stroke width'],
                ['fontFamily', '--rdpc-font-family', 'System stack', 'Font family'],
                ['fontSize', '--rdpc-font-size', '14px', 'Base font size'],
                ['borderRadius', '--rdpc-border-radius', '8px', 'Panel border radius'],
                ['transitionDuration', '--rdpc-transition-duration', '200ms', 'Transition duration'],
              ].map(([prop, cssVar, def, desc]) => (
                <tr key={prop}><td>{prop}</td><td>{cssVar}</td><td>{def}</td><td>{desc}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="subsection">
        <h3>Override in CSS Directly</h3>
        <CodeBlock language="css" code={`:root {
  --rdpc-color-primary: #8b5cf6;
  --rdpc-color-surface: #0f0f23;
  --rdpc-handle-size: 24px;
  --rdpc-border-radius: 12px;
}`} />
      </div>
    </section>
  )
}
