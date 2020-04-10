/* eslint-env node */
const { spawn } = require( 'child_process' )

const log = (info) => console.log(info.toString('utf8'))

module.exports = (command) => {
    const spawned = spawn(...command)

    spawned.stdout.on(
        'data',
        data => {
            log(data)
        },
    )

    spawned.stderr.on(
        'data',
        data => {
            log(data)
        },
    )

    spawned.on(
        'close',
        code => {
            log(`child process exited with code ${code}`)
        },
    )
}
