import {expect} from 'chai'

import {verifyExports} from '../index.js'

describe('package.json', () => {
  // it('Single File', async () => {
  //   verifyExports('package.json')
  // })
  it('exports string', async () => {
    verifyExports('.', 'dist/index.js')
  })
  it('exports object', async () => {
    verifyExports('.', {
      '.': 'dist/index.js',
      './dts': 'dist/index.d.ts',
    })
  })
  it('exports double level object', async () => {
    verifyExports('.', {
      '.': {
        import: 'dist/index.js',
        types: 'dist/index.d.ts',
      },
    })
  })
  it('exports too many level object', async () => {
    expect(() =>
      verifyExports('.', {
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
  // it('exports string with dot', async () => {
  //   verifyExports('/Users/hk/Dev/kunkun/packages/api/package.json')
  // })
})
