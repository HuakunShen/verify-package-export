import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('hello', () => {
  it('runs hello', async () => {
    const {stdout} = await runCommand('verify ./package.json')
    expect(stdout).to.be.empty
  })
})
