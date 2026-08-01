import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './components/App.jsx' // <--- Verifica esta ruta

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    
    </StrictMode>
)