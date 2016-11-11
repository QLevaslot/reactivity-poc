var babel = require('gulp-babel');

function compile() {
  return babel({ "presets": ["es2015", "es2016"] });
}

module.exports = compile;
