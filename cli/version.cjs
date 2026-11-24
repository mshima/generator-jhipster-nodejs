// The version of the blueprint: yeoman.meta.packageVersion of its package.json, for a build published under another
// name and version (like @mshima/generator-jhipster-nodejs), else its version.
const { version, yeoman } = require('../package.json');

module.exports = yeoman?.meta?.packageVersion ?? version;
