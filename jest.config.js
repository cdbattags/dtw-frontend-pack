/* eslint-env node */

module.exports = {
    verbose: true,
    moduleFileExtensions: [
        'html',
        'js',
        'ts',
    ],
    moduleDirectories: [
        'node_modules',
        'src',
    ],
    moduleNameMapper: {
        '^.+\\.(jpg|jpeg|gif|png|mp4|mkv|avi|webm|swf|wav|mid)$': 'jest-static-stubs/$1',
        '^.+\\.(svg)$': '<rootDir>/test/__mocks__/fileMock.js',
    },
    setupTestFrameworkScriptFile: '<rootDir>/test/jest.init.js',
    testURL: 'http://localhost:9000',
    testPathIgnorePatterns: ['/node_modules/', '/deploy-verification-tests/'],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
        '^.+\\.(ts|tsx)?$': 'babel-jest',
        '^.+\\.html$': '<rootDir>/test/utils/htmlLoader.js',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@amplify)/(amp-locale|desmos)/(dist)/).*/'],

    reporters: ['default', ['jest-junit', { outputDirectory: './test-output/' }]],
    coverageReporters: ['text', 'html', 'cobertura'],
};
