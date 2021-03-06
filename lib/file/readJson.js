'use strict';

const fs = require('fs');

const promisify = require('util.promisify');

const errors = require('../errors');

const readFile = promisify(fs.readFile);

const readJson = async function (path) {
  if (!path) {
    throw new Error('Path is missing.');
  }

  let data;

  try {
    data = await readFile(path, { encoding: 'utf8' });
  } catch (ex) {
    switch (ex.code) {
      case 'ENOENT':
        throw new errors.FileNotFound();
      case 'EACCES':
        throw new errors.FileNotAccessible();
      default:
        throw ex;
    }
  }

  let json;

  try {
    json = JSON.parse(data);
  } catch (ex) {
    throw new errors.JsonMalformed();
  }

  return json;
};

module.exports = readJson;
