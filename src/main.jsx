import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './components/App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Mount failed: no element with id "root" found in the document')
}

createRoot(container).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
