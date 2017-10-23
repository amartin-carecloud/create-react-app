'use strict';
/**
 * A collection of custom webpack configurations
 */

module.exports = {
  BABEL: {
    PRESETS: [require.resolve('babel-preset-stage-0')],
    PLUGINS: [require.resolve('@extjs/reactor-babel-plugin')],
  },
};
