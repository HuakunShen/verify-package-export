import {Args, Command} from '@oclif/core'
import fs from 'node:fs'
import {resolve} from 'node:path'

import {verifyPackageJsonExport} from '../../lib/index.js'

export default class Hello extends Command {
  static args = {
    pkgJsonPath: Args.string({description: 'Path to a package.json file', required: false}),
  }

  static description = 'Say hello'

  static examples = [
    `<%= config.bin %> <%= command.id %> ./package.json
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {}

  async run(): Promise<void> {
    const {args} = await this.parse(Hello)
    // if args.pkgJsonPath is dir, append package.json to it
    if (args.pkgJsonPath && fs.statSync(args.pkgJsonPath).isDirectory()) {
      args.pkgJsonPath = resolve(args.pkgJsonPath, 'package.json')
    }

    verifyPackageJsonExport(args.pkgJsonPath || 'package.json')
  }
}
