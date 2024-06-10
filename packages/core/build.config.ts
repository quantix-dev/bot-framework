import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: ['src/index', 'src/config'],
  externals: [
    'discord.js',
    'bufferutil',
    'utf-8-validate',
    'zlib-sync',
  ],
  rollup: {
    emitCJS: true,
  },
  failOnWarn: false,
})
