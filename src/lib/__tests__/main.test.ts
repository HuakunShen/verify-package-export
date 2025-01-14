import {expect} from 'chai'

import {verifyExportsField, verifyPackageJsonExport} from '../index.js'

describe('package.json', () => {
  it('Single File', async () => {
    verifyPackageJsonExport('package.json')
  })

  it('exports string', async () => {
    verifyExportsField('.', 'dist/index.js')
  })

  it('exports object', async () => {
    verifyExportsField('.', {
      '.': 'dist/index.js',
      './dts': 'dist/index.d.ts',
    })
  })

  it('exports double level object', async () => {
    verifyExportsField('.', {
      '.': {
        import: 'dist/index.js',
        types: 'dist/index.d.ts',
      },
    })
  })
  it('exports too many level object', async () => {
    expect(() =>
      verifyExportsField('.', {
        '.': {
          '.': {
            '.': 'dist/index.js',
          },
          import: 'dist/index.js',
          types: 'dist/index.d.ts',
        },
      }),
    ).to.throw(Error)
  })

  it('exports string with dot', async () => {
    verifyPackageJsonExport('/Users/hk/Dev/kunkun/packages/api/package.json')
  })
})
