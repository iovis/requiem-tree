const fs = require('fs');
const path = require('path');

module.exports = (dir) => (
  fs.readdirSync(dir).reduce((obj, filename) => {
    const file = path.parse(filename);

    return file.ext === '.js'
      ? { ...obj, [file.name]: require(path.join(__dirname, dir, filename)) }
      : obj;
  }, {})
);
