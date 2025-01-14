import {defineConfig} from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/lib/index.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist/lib',
  sourcemap: true,
  splitting: false,
})
