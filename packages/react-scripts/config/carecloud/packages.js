'use strict';

const fs = require('fs');
const path = require('path');
const CareCloudPackageDeps = require('./dependencies.json');
const originalPackageJSON = require('../../package.json');

originalPackageJSON.dependencies = Object.assign(
  {},
  originalPackageJSON.dependencies,
  CareCloudPackageDeps
);

let originalPackageJSONPath = path.join(__dirname, '../../', 'package.json');

let addCareCloudPackages = () => {
  fs.writeFileSync(
    originalPackageJSONPath,
    JSON.stringify(originalPackageJSON, null, 2),
    'utf8',
    error => {
      if (error) {
        return console.log(error);
      }
    }
  );
};

module.export = addCareCloudPackages;
