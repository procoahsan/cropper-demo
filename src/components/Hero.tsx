import { useState } from 'react'

export function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install react-document-perspective-crop')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-badge">✨ v0.1.1 — Production Ready</div>
      <h1 className="hero-title">
        Document Scanning<br />for React
      </h1>
      <p className="hero-description">
        A robust, production-ready React library for document scanning, edge detection, 
        and perspective cropping using OpenCV.js. Headless by default.
      </p>
      <div className="hero-actions">
        <a href="#quick-start" className="btn btn-primary">Get Started</a>
        <a href="#demo" className="btn btn-secondary">Try Live Demo ↓</a>
      </div>
      <div className="hero-install" onClick={handleCopy} title="Click to copy">
        <span>$</span>
        <code>npm install react-document-perspective-crop</code>
        <span className="copy-hint">{copied ? '✓ Copied!' : 'Click to copy'}</span>
      </div>
      <div className="hero-badges">
        <img src="https://img.shields.io/npm/v/react-document-perspective-crop?style=flat-square&color=8b5cf6" alt="npm version" />
        <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="MIT License" />
        <img src="https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
        <img src="https://img.shields.io/badge/React-18%2B-61dafb?style=flat-square&logo=react&logoColor=white" alt="React 18+" />
      </div>
    </section>
  )
}
