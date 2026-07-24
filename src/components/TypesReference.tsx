import { CodeBlock } from './CodeBlock'

export function TypesReference() {
  return (
    <section className="section" id="types">
      <div className="section-label">Types Reference</div>
      <h2 className="section-title">Full TypeScript definitions</h2>
      <p className="section-subtitle">
        All types are exported from the main package. Import with <code className="inline">import type {'{ ... }'}</code>.
      </p>

      <CodeBlock language="ts" code={`import type {
  // Geometry
  Point, Corners, CornerKey, Rect, ImageDisplayBounds, Size,

  // Image
  ExportFormat, ExportOutputType, ExportResult,
  ImageAdjustments, ImageState, ImageStateSnapshot,
  ImageInput, ResolvedImageSource, DetectionParams,

  // Component
  DocumentPerspectiveCropProps, OpenCVInstance,
  ToolbarRenderProps, SidebarRenderProps,
  ThumbnailRenderProps, CornerHandleRenderProps,
  CropOverlayRenderProps,

  // Hooks
  UseOpenCVReturn, UseDocumentDetectionReturn,
  UseImageAdjustmentsReturn, UseCornerDragReturn,
  UseImageTransformReturn, UseMultiImageReturn,
  UseUndoHistoryReturn, UseExportReturn,
  UsePerspectiveCropReturn,

  // Theming
  ThemeOverrides, ThemePreset, ThemeConfig,

  // i18n
  Translations,
} from 'react-document-perspective-crop';`} />

      <div className="subsection">
        <h3>Key Types</h3>
      </div>

      <div className="subsection">
        <h3>Point</h3>
        <CodeBlock language="ts" code={`interface Point {
  x: number;  // X coordinate in pixels
  y: number;  // Y coordinate in pixels
}`} />
      </div>

      <div className="subsection">
        <h3>Corners</h3>
        <p>Defines the four corners of the crop quadrilateral in image pixel coordinates.</p>
        <CodeBlock language="ts" code={`interface Corners {
  topLeft: Point;
  topRight: Point;
  bottomRight: Point;
  bottomLeft: Point;
}`} />
      </div>

      <div className="subsection">
        <h3>ExportResult</h3>
        <p>Returned by <code className="inline">onSave</code> and export functions.</p>
        <CodeBlock language="ts" code={`interface ExportResult {
  blob?: Blob;        // Exported image as a Blob
  base64?: string;    // Exported image as a base64 string
  file?: File;        // Exported image as a File object
  filename: string;   // Original filename
  width: number;      // Exported image width in pixels
  height: number;     // Exported image height in pixels
}`} />
      </div>

      <div className="subsection">
        <h3>ImageAdjustments</h3>
        <CodeBlock language="ts" code={`interface ImageAdjustments {
  brightness: number;  // 0–200, default 100
  contrast: number;    // 0–200, default 100
  sharpness: number;   // 0–100, default 0
}`} />
      </div>

      <div className="subsection">
        <h3>ImageState</h3>
        <p>Complete state for a single image in the editor.</p>
        <CodeBlock language="ts" code={`interface ImageState {
  id: string;
  originalFile: File;
  currentFile: File;
  previewUrl: string;
  cropCorners: Corners | null;
  scale: number;
  rotation: number;
  adjustments: ImageAdjustments;
  isEdited: boolean;
}`} />
      </div>

      <div className="subsection">
        <h3>DetectionParams</h3>
        <p>Controls the OpenCV auto-detection algorithm.</p>
        <CodeBlock language="ts" code={`interface DetectionParams {
  cannyLow: number;        // Lower Canny threshold (default: 50)
  cannyHigh: number;       // Upper Canny threshold (default: 150)
  morphKernelSize: number; // Morphological closing kernel (default: 5)
  minAreaRatio: number;    // Min contour area ratio (default: 0.05)
  maxAreaRatio: number;    // Max contour area ratio (default: 0.98)
  sensitivity: number;     // Detection sensitivity 0–100 (default: 70)
  minAspectRatio: number;  // Min aspect ratio (default: 0.4)
  maxAspectRatio: number;  // Max aspect ratio (default: 2.5)
}`} />
      </div>
    </section>
  )
}
