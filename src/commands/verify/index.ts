import {Args, Command} from '@oclif/core'

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
    verifyPackageJsonExport(args.pkgJsonPath || 'package.json')
  }
}
