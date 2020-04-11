process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

process.on(
    'unhandledRejection',
    (err) => {
        throw err
    },
)

require('../../config/env')

const path = require('path')
const spawn = require('cross-spawn')

const rootDir = `${__dirname}/../..`

const backendBabelConfig = path.resolve(rootDir, 'babel.config.backend.js')
const dtwPackArgs = process.argv.slice(2)
const args = [
        '--exec',
        'babel-node',
    ]
    .concat(dtwPackArgs)
    .concat([
        '--extensions',
        '.ts',
        '--config-file',
        backendBabelConfig,
    ])

console.log(args)

const result = spawn.sync(
    'nodemon',
    args,
    {
        stdio: 'inherit',
    },
)
