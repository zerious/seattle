#!/usr/bin/env node
var api = module.exports;
var shellify = require('shellify');

/**
 * Expose the version to module users.
 */
api.version = require('./package.json').version;

shellify({
  commands: {
    init: {
      note: 'Creates a new package using the Seattle Pub.js Standard',
      options: {
        name: '!Project name (can contain uppercase)',
        author: '!Author name and email|Sam Eubank<sameubank@gmail.com>',
        description: '!Package description'
      },
      alias: 'c'
    },
    space: {
      note: 'Converts tabs to 2 spaces and ensures standard line endings',
      alias: 's'
    },
    version: {
      note: 'Increments a package\'s version just past what\'s published',
      options: {
        number: '?Major, minor or patch|patch'
      },
      alias: 'v'
    },
    publish: {
      note: 'Publishes a package without its devDependencies',
      alias: 'p'
    }
  }
});
