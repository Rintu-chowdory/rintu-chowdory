import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/
export default defineConfig({
  // The site is served at https://rintu-chowdory.github.io/rintu-chowdory/
  // so all asset paths must be prefixed with the repo name.
  base: '/rintu-chowdory/',
  plugins: [react()],
})
