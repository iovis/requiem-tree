const fs = require('fs');
const path = require('path');
const formats = ['.js', '.json'];

const requiem = (dirname) => {
  const parent = path.parse(dirname);

  return fs.readdirSync(dirname).reduce((obj, filename) => {
    const rootDir = path.dirname(module.parent.filename);
    const pathname = path.join(dirname, filename);
    const isDir = fs.lstatSync(pathname).isDirectory();

    const file = path.parse(filename);
    const requirename = file.name === 'index' ? parent.name : file.name;

    if (isDir) {
      return { ...obj, [requirename]: requiem(pathname) };
    } else if (formats.includes(file.ext)) {
      return { ...obj, [requirename]: require(path.join(rootDir, pathname)) };
    } else {
      return obj;
    }
  }, {});
};

module.exports = requiem;
