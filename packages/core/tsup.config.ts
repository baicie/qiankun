import { defineConfig } from 'tsup'

const pkg = require('./package.json')

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  external: Object.keys(pkg.dependencies),
})
