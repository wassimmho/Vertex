import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      manifest: {
        includeAssets: ['favicon.ico', 'vertex.png'],
        name: 'Vertex',
        short_name: 'Vertex',
        description: 'Your educational platform',
        theme_color: '#000000',
        icons: [
          {
            src: '/vertex.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/vertex.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
})
