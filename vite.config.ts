import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // ↓路径别名
    // 如pages下Home页,可以用 '@/pages/Home/Home' 方式引入,及代表'src/pages/Home/Home'
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    react()
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ]
    }
  }
})
