import { defineConfig } from 'vite'

export default defineConfig(() => {
  const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
  const isUserPagesRepo = repository.endsWith('.github.io')
  const base = repository && !isUserPagesRepo ? `/${repository}/` : '/'

  return {
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
