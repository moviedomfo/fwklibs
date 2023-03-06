/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(false);
  let presets = ['@babel/preset-env', '@babel/preset-typescript'];

  let plugins = [
    '@babel/plugin-transform-typescript',
    // ['@babel/plugin-proposal-decorators', { legacy: true }],
    // ['@babel/plugin-proposal-class-properties', { legacy: true }],
    //  ["@babel/plugin-syntax-decorators", {legacy: false}],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@common': './src/common',
        },
      },
    ],
  ];

  return {
    presets,
    plugins,
    sourceMaps: 'inline',
    retainLines: true,
  };

  // ignore:['**/*.spec.ts']no se usa test no hace falta
};
