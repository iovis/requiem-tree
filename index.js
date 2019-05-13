const fs = require('fs');
const path = require('path');
const formats = ['.js', '.json']

module.exports = (dir) => (
  fs.readdirSync(dir).reduce((obj, filename) => {
    const file = path.parse(filename);

    return formats.includes(file.ext)
      ? { ...obj, [file.name]: require(path.join(__dirname, dir, filename)) }
      : obj;
  }, {})
);
