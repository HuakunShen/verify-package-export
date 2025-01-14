import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['src/lib/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist/lib',
})
