import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Il service worker viene generato automaticamente da vite-plugin-pwa
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registrato:', registration)
        
        // Controlla aggiornamenti ogni ora
        setInterval(() => {
          registration.update()
        }, 60 * 60 * 1000)
      })
      .catch(error => {
        console.log('SW registration fallita:', error)
      })
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
