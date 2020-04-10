const htmlLoader = require('html-loader');

/**
 * This custom pre-processor was copied from a StackOverflow post at
 * https://stackoverflow.com/questions/39483893/how-can-i-use-my-webpacks-html-loader-imports-in-jest-tests
 *
 * The idea is to use the webpack loader `html-loader` when running jest so that
 * html template files can be understood
 */
module.exports = {
  process(src, filename, config, options) {
    return htmlLoader(src);
  },
};
