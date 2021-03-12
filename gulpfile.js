var {src, dest} = require('gulp');
var saas = require('gulp-saas');
saas.compiler = require('node-saas');

function css () {
    return src('src/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
};

exports.default = css;