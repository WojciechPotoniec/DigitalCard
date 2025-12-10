import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // registerType: Strategia di registrazione del service worker
      // 'autoUpdate' = aggiorna automaticamente quando rileva nuove versioni
      registerType: 'autoUpdate',
      
      // includeAssets: File da includere nel precache (cache iniziale)
      // Questi file saranno disponibili offline immediatamente
      includeAssets: ['jarbatoQrCode.png', 'spades.png', 'vite.svg'],

      manifest: {
        name: 'Jarbato Piercer Digital Card',
        short_name: 'Jarbato Card',
        description: 'Digital business card di Jarbato Piercer - Junior React Developer',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone', // Importante: apre come app nativa
        orientation: 'portrait', // Forza orientamento verticale
        scope: '/',
        start_url: '/',
        
        // Icons: servono diverse dimensioni per vari dispositivi
        icons: [
          {
            src: 'spades.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any' // 'any' = icona standard
          },
          {
            src: 'spades.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'spades.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable' // 'maskable' = per adaptive icons Android
          }
        ]
      },
      
      workbox: {
        // globPatterns: Pattern di file da includere nel precache
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        
        // runtimeCaching: Strategie di cache per richieste runtime
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst', // Usa cache prima, network come fallback
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 anno
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      
      devOptions: {
        enabled: true, // Abilita PWA anche in sviluppo per testing
        type: 'module'
      }
    })
  ]
})