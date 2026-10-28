// The version of the blueprint: the one of its build-info.json, for a build published under another name and version
// (like @mshima/generator-jhipster-nodejs), else the one of its package.json.
const { version } = require('../package.json');

let buildInfo;
try {
  buildInfo = require('../build-info.json');
} catch {
  // No build-info.json, the package of the blueprint itself.
}

module.exports = buildInfo?.version ?? version;
