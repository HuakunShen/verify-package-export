import fs from 'node:fs'
import {resolve} from 'node:path'

export function verifyExportsField(pkgJsonDir: string, _exports: object | string) {
  switch (typeof _exports) {
    case 'string': {
      if (!fs.existsSync(resolve(pkgJsonDir, _exports))) {
        throw new Error(`Export not found: ${_exports}`)
      }

      break
    }

    case 'object': {
      for (const val of Object.values(_exports)) {
        switch (typeof val) {
          case 'string': {
            if (!fs.existsSync(resolve(pkgJsonDir, val))) {
              throw new Error(`Export not found: ${val}`)
            }

            break
          }

          case 'object': {
            verifyNestedExports(pkgJsonDir, val as object)
            break
          }

          default: {
            break
          }
        }
      }

      break
    }

    default: {
      break
    }
  }
}

// Helper function to reduce nesting depth
function verifyNestedExports(pkgJsonDir: string, exports: object) {
  for (const val2 of Object.values(exports)) {
    switch (typeof val2) {
      case 'string': {
        if (!fs.existsSync(resolve(pkgJsonDir, val2))) {
          throw new Error(`Export not found: ${val2}`)
        }

        break
      }

      case 'object': {
        throw new Error(`Too many levels in exports field`)
      }

      default: {
        break
      }
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
    verifyExportsField(pkgJsonDir, _exports)
  }
}
