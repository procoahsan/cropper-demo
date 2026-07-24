import { useState } from 'react'
import { CodeBlock } from './CodeBlock'

interface HookInfo {
  name: string
  desc: string
  signature: string
  details: string
}

const hooks: HookInfo[] = [
  {
    name: 'usePerspectiveCrop',
    desc: 'Main orchestration hook — composes all sub-hooks',
    signature: 'function usePerspectiveCrop(config: PerspectiveCropConfig): UsePerspectiveCropReturn',
    details: `// Config
interface PerspectiveCropConfig {
  images: readonly File[];
  autoDetect?: boolean;
  opencvUrl?: string;
  opencvInstance?: OpenCVInstance;
  maxWidth?: number;       // default: 4096
  maxHeight?: number;      // default: 4096
  outputFormat?: ExportFormat;
  outputQuality?: number;  // default: 0.95
  onCornersChange?: (corners: Corners | null) => void;
}

// Returns: images, activeIndex, activeImage, setActiveIndex,
// addImages, removeImage, reorderImages, corners, setCorners,
// scale, rotation, zoomIn, zoomOut, rotateLeft, rotateRight,
// adjustments, setBrightness, setContrast, setSharpness,
// autoDetect, undo, redo, canUndo, canRedo, exportAll, reset,
// isLoading, isOpenCVReady, error`,
  },
  {
    name: 'useOpenCV',
    desc: 'Lazily loads and manages the OpenCV.js lifecycle',
    signature: 'function useOpenCV(url?: string, existingInstance?: OpenCVInstance): UseOpenCVReturn',
    details: `// Returns
interface UseOpenCVReturn {
  cv: OpenCVInstance | null;  // Loaded instance or null
  isReady: boolean;           // true once loaded
  isLoading: boolean;         // true while downloading
  error: Error | null;        // Loading error, if any
}`,
  },
  {
    name: 'useDocumentDetection',
    desc: 'OpenCV edge detection with React state management',
    signature: 'function useDocumentDetection(cv: OpenCVInstance | null, params?: Partial<DetectionParams>): UseDocumentDetectionReturn',
    details: `// Returns
interface UseDocumentDetectionReturn {
  detect: (imageSource: string | File) => Promise<Corners | null>;
  isDetecting: boolean;
  error: Error | null;  // auto-clears after 3s
}`,
  },
  {
    name: 'useImageAdjustments',
    desc: 'Manages brightness, contrast, and sharpness with CSS filters',
    signature: 'function useImageAdjustments(initialValues?: Partial<ImageAdjustments>, filterId?: string): UseImageAdjustmentsReturn',
    details: `// Returns
interface UseImageAdjustmentsReturn {
  adjustments: ImageAdjustments;
  setBrightness: (value: number) => void;  // 0–200
  setContrast: (value: number) => void;    // 0–200
  setSharpness: (value: number) => void;   // 0–100
  resetAdjustments: () => void;
  cssFilter: string;              // Pre-computed CSS filter string
  sharpnessFilterId: string;
  sharpnessKernelMatrix: string;
}`,
  },
  {
    name: 'useImageTransform',
    desc: 'Manages zoom scale and rotation state',
    signature: 'function useImageTransform(): UseImageTransformReturn',
    details: `// Returns
interface UseImageTransformReturn {
  scale: number;         // 0.1–6.0, default: 1
  rotation: number;      // 0, 90, 180, 270
  zoomIn: () => void;    // ×1.2
  zoomOut: () => void;   // ÷1.2
  setScale: (scale: number) => void;
  rotateLeft: () => void;
  rotateRight: () => void;
  resetTransform: () => void;
  handleWheel: (e: WheelEvent) => void;
}`,
  },
  {
    name: 'useCornerDrag',
    desc: 'Interactive corner dragging with pointer capture',
    signature: 'function useCornerDrag(config: CornerDragConfig): UseCornerDragReturn',
    details: `// Config
interface CornerDragConfig {
  corners: Corners | null;
  onCornersChange: (corners: Corners) => void;
  getDisplayBounds: () => ImageDisplayBounds | null;
  scale: number;
  rotation: number;
  rootRef: React.RefObject<HTMLElement | null>;
}

// Returns
interface UseCornerDragReturn {
  isDragging: boolean;
  activeCorner: keyof Corners | null;
  createCornerHandler: (cornerKey: keyof Corners) => (e: React.PointerEvent) => void;
}`,
  },
  {
    name: 'useMultiImage',
    desc: 'Manages image list with add, remove, reorder, per-image state',
    signature: 'function useMultiImage(initialFiles: readonly File[], autoDetectFn?: (url: string) => Promise<Corners | null>): UseMultiImageReturn',
    details: `// Returns
interface UseMultiImageReturn {
  images: readonly ImageState[];
  activeIndex: number;
  activeImage: ImageState | null;
  setActiveIndex: (index: number) => void;
  addImages: (files: readonly File[]) => Promise<void>;
  removeImage: (index: number) => void;
  reorderImages: (from: number, to: number) => void;
  updateImage: (index: number, updates: Partial<ImageState>) => void;
  isProcessing: boolean;
}`,
  },
  {
    name: 'useUndoHistory',
    desc: 'Generic undo/redo history stack',
    signature: 'function useUndoHistory<T>(maxHistory?: number): UseUndoHistoryReturn<T>',
    details: `// Returns
interface UseUndoHistoryReturn<T> {
  push: (state: T) => void;
  undo: () => T | null;
  redo: () => T | null;
  canUndo: boolean;
  canRedo: boolean;
  clear: () => void;
}`,
  },
  {
    name: 'useExport',
    desc: 'Batch and individual image export with perspective correction',
    signature: 'function useExport(config: ExportConfig): UseExportReturn',
    details: `// Config
interface ExportConfig {
  images: readonly ImageState[];
  cv: OpenCVInstance | null;
  maxWidth: number;
  maxHeight: number;
  format: ExportFormat;
  quality: number;
}

// Returns
interface UseExportReturn {
  exportAll: () => Promise<readonly ExportResult[]>;
  exportOne: (index: number) => Promise<ExportResult | null>;
  isExporting: boolean;
  error: Error | null;
}`,
  },
  {
    name: 'useKeyboardShortcuts',
    desc: 'Document-level keyboard shortcut registration',
    signature: 'function useKeyboardShortcuts(handlers: KeyboardShortcutHandlers, enabled?: boolean): void',
    details: `// Handlers: onUndo, onRedo, onSave, onRotateLeft, onRotateRight,
// onZoomIn, onZoomOut, onReset, onAutoDetect, onDelete,
// onNextImage, onPreviousImage, onEscape
// On macOS, Ctrl is automatically mapped to Cmd (⌘)`,
  },
  {
    name: 'useWheelZoom',
    desc: 'Non-passive wheel event listener for zoom control',
    signature: 'function useWheelZoom(elementRef: React.RefObject<HTMLElement | null>, handleWheel: (e: WheelEvent) => void): void',
    details: `// Attaches a non-passive wheel event listener to the element.
// Use handleWheel from useImageTransform.`,
  },
]

function HookCard({ hook }: { hook: HookInfo }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="hook-card">
      <div className="hook-card-header" onClick={() => setOpen(!open)}>
        <div>
          <h4>{hook.name}</h4>
          <span className="hook-desc">{hook.desc}</span>
        </div>
        <span className={`hook-card-toggle ${open ? 'open' : ''}`}>▼</span>
      </div>
      {open && (
        <div className="hook-card-body">
          <CodeBlock language="ts" code={hook.signature} />
          <CodeBlock language="ts" code={hook.details} />
        </div>
      )}
    </div>
  )
}

export function HooksApi() {
  return (
    <section className="section" id="hooks">
      <div className="section-label">Headless Hooks API</div>
      <h2 className="section-title">Build a completely custom UI</h2>
      <p className="section-subtitle">
        Compose individual hooks to create your own document scanning experience. Every hook is exported from the main package.
      </p>

      <CodeBlock language="tsx" code={`import {
  usePerspectiveCrop,
  useOpenCV,
  useDocumentDetection,
  useImageAdjustments,
  useImageTransform,
  useCornerDrag,
  useMultiImage,
  useUndoHistory,
  useExport,
  useKeyboardShortcuts,
  useWheelZoom,
} from 'react-document-perspective-crop';`} />

      <div style={{ marginTop: 32 }}>
        {hooks.map((hook) => (
          <HookCard key={hook.name} hook={hook} />
        ))}
      </div>
    </section>
  )
}
