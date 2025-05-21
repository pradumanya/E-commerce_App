import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/E-commerce-app/', // <-- use lowercase 'c' if your repo is named that way
})
