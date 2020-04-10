module.exports = (api) => {
    if (api) {
        api.cache(true)
    }

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        chrome: 52,
                        browsers: [
                            'last 2 versions',
                            'safari 7',
                        ],
                    },
                },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
        ],
        plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-proposal-optional-chaining',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-nullish-coalescing-operator',
            '@babel/plugin-proposal-throw-expressions',
        ],
    }
}
