const path = require('path');
const fs = require('fs');
const execa = require('execa');
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

module.exports.plistBuddy = function (plistFile) {
  if (!fs.existsSync(plistFile)) {
    throw new Error('Missing PlistFile');
  }

  return function (key, value) {
    execa.sync('/usr/libexec/PlistBuddy', [
      '-c',
      `Set :${key} ${value}`,
      plistFile,
    ]);
  };
};
