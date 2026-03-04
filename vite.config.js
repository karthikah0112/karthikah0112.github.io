import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
  const isUserPagesRepo = repository.endsWith('.github.io')
  const base = repository && !isUserPagesRepo ? `/${repository}/` : '/'

  return {
    plugins: [react()],   // 👈 IMPORTANT
    base,
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/index.js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name][extname]',
        },
      },
    },
  }
})
