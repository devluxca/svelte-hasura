import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import { URL } from 'url'

const dirname = new URL('.', import.meta.url).pathname

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte()
  ],
  resolve: {
    alias: {
      $utils: path.resolve(dirname, './src/utils/'),
      $lib: path.resolve(dirname, './src/lib/'),
      $querys: path.resolve(dirname, './src/querys')
    }
  }
})
