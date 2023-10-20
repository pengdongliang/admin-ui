import { defineConfig } from 'father'
import { resolve } from 'path'

export default defineConfig({
  cjs: {},
  esm: {},
  alias: { '@': resolve(__dirname, './src'), '~': resolve(__dirname, '.') },
})
