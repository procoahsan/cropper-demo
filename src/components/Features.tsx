const features = [
  { icon: '📸', title: 'Perspective Correction', desc: 'Advanced 4-point perspective cropping with sub-pixel precision.' },
  { icon: '🤖', title: 'Auto Edge Detection', desc: 'Built-in OpenCV-powered smart document detection.' },
  { icon: '🎨', title: 'Image Adjustments', desc: 'Brightness, contrast, and sharpness controls with live preview.' },
  { icon: '🔄', title: 'Transformations', desc: '90° rotations and interactive wheel-based zooming.' },
  { icon: '📱', title: 'Multi-Image Support', desc: 'Batch processing with drag-and-drop thumbnail reordering.' },
  { icon: '⌨️', title: 'Keyboard Shortcuts', desc: 'Full keyboard navigation with configurable shortcuts.' },
  { icon: '↩️', title: 'Undo / Redo', desc: 'Per-image history stack for all editing operations.' },
  { icon: '🧩', title: 'Headless by Default', desc: 'Use the built-in UI or build your own with the usePerspectiveCrop hook.' },
  { icon: '💅', title: 'CSS Custom Properties', desc: 'Zero UI dependencies. Styled entirely with CSS variables.' },
  { icon: '🌍', title: 'Fully Translatable', desc: 'Every UI string can be overridden via the i18n / translations prop.' },
]

export function Features() {
  return (
    <section className="section" id="features">
      <div className="section-label">Features</div>
      <h2 className="section-title">Everything you need for document scanning</h2>
      <p className="section-subtitle">
        Purpose-built for document scanning workflows. As capable as react-easy-crop or react-image-crop, but for perspective correction.
      </p>
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <span className="feature-icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
