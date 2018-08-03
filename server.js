
var fs = require('fs');
var babelConfig = JSON.parse(fs.readFileSync('./.babelrc'));
require('babel-register')(babelConfig);
// css 的转码 hook
// 直接返回时候
// require('css-modules-require-hook')({
//     extensions: ['.scss'],
//     preprocessCss: (data, filename) =>
//         require('node-sass').renderSync({
//             data,
//             file: filename
//         }).css,
//     camelCase: true,
//     generateScopedName: '[name]__[local]__[hash:base64:8]'
// })
require('./bin/www')
