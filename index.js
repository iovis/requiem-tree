const fs = require('fs');
const path = require('path');
const formats = ['.js', '.json'];

module.exports = (dirname) => {
  const dir = path.parse(dirname);

  return fs.readdirSync(dirname).reduce((obj, filename) => {
    const file = path.parse(filename);
    const requirename = file.name === 'index' ? dir.name : file.name;

    return formats.includes(file.ext)
      ? { ...obj, [requirename]: require(path.join(__dirname, dirname, filename)) }
      : obj;
  }, {});
};
