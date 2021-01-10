const path = require('path');
const fs = require('fs');
const validate = require('jsonschema').validate;
const ConfigSchema = require('./configSchema');

module.exports.readNullaConfig = function (projectRoot) {
  const nullConfigFile = path.resolve(projectRoot, './nulla.config.js');

  if (!fs.existsSync(nullConfigFile)) {
    throw new Error('Missing `nulla.config.js` in root directory');
  }

  const configFn = require(nullConfigFile);
  if (typeof configFn !== 'function') {
    throw new Error('The content of `nulla.config.js` only support function');
  }

  const config = configFn();
  const ret = validate(config, ConfigSchema);

  if (!ret.valid) {
    console.log(ret);
    throw new Error('The config is not correct');
  }

  return config;
};
