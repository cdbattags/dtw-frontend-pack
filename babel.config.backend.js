/* eslint-env node */

module.exports = (api) => {
    if (api) {
        api.cache(true)
    }

    return {
        presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
        ],
    }
}
