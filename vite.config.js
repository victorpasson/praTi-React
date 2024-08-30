import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {
      MOVIE_APP_API_KEY: "403abbfe",
      DIY_JWT_SECRET: "2182312c81187ab82bbe053df6b7aa55"
    }
  },
  plugins: [react()],
})
