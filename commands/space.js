var chug = require('chug');
var log = require('shellify').logger;

module.exports = function (config, input) {
  chug(process.cwd())
    .ignore('.git')
    .ignore('node_modules')
    .each(function (asset) {
      if (typeof asset.content == 'string') {
        var clean = asset.content
          .replace(/\t/g, '  ')
          .replace(/\r/g, '')
          .replace(/ +\n/g, '\n');
        if (clean != asset.content) {
          asset.content = clean;
          asset.write();
          log('Fixed spacing in "' + asset.location + '"');
        }
      }
    });
};
