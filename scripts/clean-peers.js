/* eslint-env node */
const helper = require('./helper')

const packageJSON = require('../package.json')
const dependencies = Object.keys(packageJSON.devDependencies)

helper(
    [
        'npm',
        [
            'uninstall',
            '--save-dev',
            ...dependencies,
        ],
    ],
)
