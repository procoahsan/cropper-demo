import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Demo } from './components/Demo'
import { QuickStart } from './components/QuickStart'
import { ApiReference } from './components/ApiReference'
import { HooksApi } from './components/HooksApi'
import { TypesReference } from './components/TypesReference'
import { Theming } from './components/Theming'
import { I18n } from './components/I18n'
import { KeyboardShortcuts } from './components/KeyboardShortcuts'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <Features />
        <hr className="section-divider" />
        <Demo />
        <hr className="section-divider" />
        <QuickStart />
        <hr className="section-divider" />
        <ApiReference />
        <hr className="section-divider" />
        <HooksApi />
        <hr className="section-divider" />
        <TypesReference />
        <hr className="section-divider" />
        <Theming />
        <hr className="section-divider" />
        <I18n />
        <hr className="section-divider" />
        <KeyboardShortcuts />
      </main>
      <Footer />
    </>
  )
}

export default App
