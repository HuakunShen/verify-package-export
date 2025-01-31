import fs from 'node:fs'
import {resolve} from 'node:path'

export function verifyExports(pkgJsonDir: string, exports: object | string) {
  if (typeof exports === 'string') {
    if (!fs.existsSync(resolve(pkgJsonDir, exports))) {
      throw new Error(`Export not found: ${exports}`)
    }
  } else {
    for (const val of Object.values(exports)) {
      verifyExports(pkgJsonDir, val)
    }
  }
}

/**
 * Verify the (exports, module, types, main) field's existence in a package.json file
 * @param pkgJsonPath - path to a package.json file
 * @returns nothing
 */
export function verifyPackageJsonExport(pkgJsonPath: string) {
  if (!fs.existsSync(pkgJsonPath)) {
    throw new Error(`File not found: ${pkgJsonPath}`)
  }

  const pkgJsonDir = resolve(pkgJsonPath, '..')

  const packageJsonContent = fs.readFileSync(pkgJsonPath, 'utf8')
  const pkgJson = JSON.parse(packageJsonContent)
  const {exports: _exports, main, module} = pkgJson
  if (module && !fs.existsSync(resolve(pkgJsonDir, module))) {
    throw new Error(`Module not found: ${module}`)
  }

  if (main && !fs.existsSync(resolve(pkgJsonDir, main))) {
    throw new Error(`Main not found: ${main}`)
  }

  if (_exports) {
    verifyExports(pkgJsonDir, _exports)
    // verifyExportsField(pkgJsonDir, _exports)
  }
}
