import { defineConfig } from 'father'
import { resolve } from 'path'

export default defineConfig({
  cjs: { input: 'packages', output: 'lib' },
  esm: { input: 'packages', output: 'es' },
  umd: { entry: 'packages', output: 'dist' },
  alias: { '@': resolve(__dirname, './packages'), '~': resolve(__dirname, '.') },
})
