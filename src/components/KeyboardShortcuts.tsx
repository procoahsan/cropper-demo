export function KeyboardShortcuts() {
  const shortcuts = [
    ['Undo', 'Ctrl+Z', 'Undo the last action'],
    ['Redo', 'Ctrl+Shift+Z / Ctrl+Y', 'Redo the last undone action'],
    ['Save', 'Ctrl+S', 'Trigger save/export'],
    ['Rotate Left', 'Ctrl+←', 'Rotate 90° counter-clockwise'],
    ['Rotate Right', 'Ctrl+→', 'Rotate 90° clockwise'],
    ['Zoom In', 'Ctrl+= / Ctrl++', 'Zoom in'],
    ['Zoom Out', 'Ctrl+-', 'Zoom out'],
    ['Reset', 'Ctrl+R', 'Reset current image'],
    ['Auto Detect', 'Ctrl+D', 'Run auto edge detection'],
    ['Delete Image', 'Delete / Backspace', 'Delete the active image'],
    ['Next Image', '→', 'Switch to next image'],
    ['Previous Image', '←', 'Switch to previous image'],
    ['Cancel', 'Escape', 'Cancel and close'],
  ]

  return (
    <section className="section" id="shortcuts">
      <div className="section-label">Keyboard Shortcuts</div>
      <h2 className="section-title">Full keyboard navigation</h2>
      <p className="section-subtitle">
        All shortcuts are enabled by default. On macOS, <kbd>Ctrl</kbd> is automatically mapped to <kbd>Cmd ⌘</kbd>.
      </p>

      <div className="api-table-wrapper" style={{ marginTop: 32 }}>
        <table className="api-table">
          <thead><tr><th>Action</th><th>Shortcut</th><th>Description</th></tr></thead>
          <tbody>
            {shortcuts.map(([action, keys, desc]) => (
              <tr key={action}>
                <td style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-primary)' }}>{action}</td>
                <td style={{ fontFamily: 'var(--font-sans)' }}>
                  {keys.split(' / ').map((k, i) => (
                    <span key={i}>
                      {i > 0 && <span style={{ color: 'var(--text-muted)', margin: '0 4px' }}>/</span>}
                      {k.split('+').map((part, j) => (
                        <span key={j}>
                          {j > 0 && <span style={{ color: 'var(--text-muted)' }}>+</span>}
                          <kbd>{part}</kbd>
                        </span>
                      ))}
                    </span>
                  ))}
                </td>
                <td>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
