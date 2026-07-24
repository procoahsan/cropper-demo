import { CodeBlock } from './CodeBlock'

export function ApiReference() {
  return (
    <section className="section" id="api">
      <div className="section-label">Component API</div>
      <h2 className="section-title">&lt;DocumentPerspectiveCrop /&gt;</h2>
      <p className="section-subtitle">
        The main component accepts a single props object. All feature flags default to <code className="inline">true</code>.
      </p>

      {/* Required Props */}
      <div className="subsection">
        <h3>Required Props</h3>
        <div className="api-table-wrapper">
          <table className="api-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>images</td><td>readonly File[]</td><td>Image files to edit. The component initializes its internal state from this array.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Feature Flags */}
      <div className="subsection">
        <h3>Feature Flags</h3>
        <p>Control which editing features are available. All default to <code className="inline">true</code>.</p>
        <div className="api-table-wrapper">
          <table className="api-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              {[
                ['autoDetect', 'boolean', 'true', 'Enable automatic document edge detection on image load.'],
                ['multiImage', 'boolean', 'true', 'Enable multi-image editing mode with thumbnail strip.'],
                ['allowBrightness', 'boolean', 'true', 'Show the brightness adjustment slider.'],
                ['allowContrast', 'boolean', 'true', 'Show the contrast adjustment slider.'],
                ['allowSharpness', 'boolean', 'true', 'Show the sharpness adjustment slider.'],
                ['allowRotate', 'boolean', 'true', 'Allow 90° rotation controls.'],
                ['allowZoom', 'boolean', 'true', 'Allow zoom in/out controls and wheel zoom.'],
                ['allowAddImages', 'boolean', 'true', 'Allow adding more images after initial load.'],
                ['allowDelete', 'boolean', 'true', 'Allow deleting individual images.'],
                ['allowUndo', 'boolean', 'true', 'Enable undo/redo functionality.'],
                ['enableKeyboardShortcuts', 'boolean', 'true', 'Enable keyboard shortcut bindings.'],
              ].map(([prop, type, def, desc]) => (
                <tr key={prop}><td>{prop}</td><td>{type}</td><td>{def}</td><td>{desc}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Output Configuration */}
      <div className="subsection">
        <h3>Output Configuration</h3>
        <div className="api-table-wrapper">
          <table className="api-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>maxWidth</td><td>number</td><td>4096</td><td>Maximum output width in pixels.</td></tr>
              <tr><td>maxHeight</td><td>number</td><td>4096</td><td>Maximum output height in pixels.</td></tr>
              <tr><td>outputFormat</td><td>ExportFormat</td><td>'image/jpeg'</td><td>Output image format: 'image/jpeg', 'image/png', or 'image/webp'.</td></tr>
              <tr><td>outputQuality</td><td>number</td><td>0.95</td><td>Output JPEG/WebP quality (0–1). Ignored for PNG.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Appearance */}
      <div className="subsection">
        <h3>Appearance</h3>
        <div className="api-table-wrapper">
          <table className="api-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>theme</td><td>ThemeConfig</td><td>'light'</td><td>Theme preset ('light' or 'dark') or a ThemeOverrides object.</td></tr>
              <tr><td>className</td><td>string</td><td>''</td><td>Additional CSS class name for the root element.</td></tr>
              <tr><td>style</td><td>React.CSSProperties</td><td>—</td><td>Additional inline styles for the root element.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Customization */}
      <div className="subsection">
        <h3>Customization</h3>
        <div className="api-table-wrapper">
          <table className="api-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>detectionParams</td><td>{'Partial<DetectionParams>'}</td><td>Override auto-detection algorithm parameters.</td></tr>
              <tr><td>opencvUrl</td><td>string</td><td>Custom OpenCV.js URL. Overrides the default CDN.</td></tr>
              <tr><td>opencvInstance</td><td>OpenCVInstance</td><td>Pre-loaded OpenCV instance. Skips loading entirely.</td></tr>
              <tr><td>translations</td><td>{'Partial<Translations>'}</td><td>Custom translations for all user-facing text.</td></tr>
              <tr><td>i18n</td><td>{'Partial<Translations>'}</td><td>Alias for translations.</td></tr>
              <tr><td>acceptedFileTypes</td><td>string</td><td>MIME types for the "Add Image" file input.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Callbacks */}
      <div className="subsection">
        <h3>Callbacks</h3>
        <div className="api-table-wrapper">
          <table className="api-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>onSave</td><td>{'(results: readonly ExportResult[]) => void'}</td><td>Called when Save is clicked. Receives array of ExportResult.</td></tr>
              <tr><td>onCancel</td><td>{'() => void'}</td><td>Called when Cancel is clicked or Escape pressed.</td></tr>
              <tr><td>onError</td><td>{'(error: Error) => void'}</td><td>Called on export or processing errors.</td></tr>
              <tr><td>onOpenCVReady</td><td>{'() => void'}</td><td>Called once OpenCV.js finishes loading.</td></tr>
              <tr><td>onImageChange</td><td>{'(index: number) => void'}</td><td>Called when switching images. Receives the new index.</td></tr>
              <tr><td>onCornersChange</td><td>{'(corners: Corners | null) => void'}</td><td>Called when crop corners are modified.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Render Props */}
      <div className="subsection">
        <h3>Render Props</h3>
        <p>Override any visual element with your own component.</p>
        <div className="api-table-wrapper">
          <table className="api-table">
            <thead><tr><th>Prop</th><th>Props Received</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>renderToolbar</td><td>ToolbarRenderProps</td><td>Replace the entire toolbar.</td></tr>
              <tr><td>renderSidebar</td><td>SidebarRenderProps</td><td>Replace the sidebar panel.</td></tr>
              <tr><td>renderThumbnail</td><td>ThumbnailRenderProps</td><td>Replace individual thumbnail items.</td></tr>
              <tr><td>renderCornerHandle</td><td>CornerHandleRenderProps</td><td>Replace the corner drag handles.</td></tr>
              <tr><td>renderCropOverlay</td><td>CropOverlayRenderProps</td><td>Replace the crop overlay polygon.</td></tr>
            </tbody>
          </table>
        </div>

        <CodeBlock language="ts" code={`interface ToolbarRenderProps {
  onAutoDetect: () => void;
  onRotateLeft: () => void;
  onRotateRight: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  isLoading: boolean;
  isOpenCVReady: boolean;
  scale: number;
  rotation: number;
}

interface SidebarRenderProps {
  brightness: number;
  contrast: number;
  sharpness: number;
  onBrightnessChange: (value: number) => void;
  onContrastChange: (value: number) => void;
  onSharpnessChange: (value: number) => void;
  isDisabled: boolean;
}

interface ThumbnailRenderProps {
  index: number;
  previewUrl: string;
  isActive: boolean;
  isEdited: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

interface CornerHandleRenderProps {
  cornerKey: keyof Corners;
  x: number;
  y: number;
  onPointerDown: (e: React.PointerEvent) => void;
}

interface CropOverlayRenderProps {
  corners: Corners;
  isDragging: boolean;
  activeCorner: keyof Corners | null;
  createCornerHandler: (key: keyof Corners) => (e: React.PointerEvent) => void;
}`} />
      </div>
    </section>
  )
}
