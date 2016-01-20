var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');

// 下面是gulp-ruby-sass插件官网的 https://www.npmjs.com/package/gulp-ruby-sass/
gulp.task('sass', function() {
    return sass('sass/*.scss', {
            sourcemap: true
        })
        // For inline sourcemaps
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);

// gulp.task('sass', function () {
//     gulp.src('./scss/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./css'));
// });
// 上面这段在sass1.0版本后不能用了

// gulp.task('sass', function() {
// return sass('./scss/*.scss', { style: 'expanded' })
// .pipe(sourcemaps.init())
// .pipe(sourcemaps.write())
// .pipe(gulp.dest('css'));
// });
// 这一段sourcemaps不能用

// var gulp = require('gulp'),
//     sass = require('gulp-ruby-sass'),
//     autoprefixer = require('gulp-autoprefixer'),
//     minifycss = require('gulp-minify-css'),
//     // jshint = require('gulp-jshint'),
//     uglify = require('gulp-uglify'),
//     imagemin = require('gulp-imagemin'),
//     rename = require('gulp-rename'),
//     concat = require('gulp-concat'),
//     notify = require('gulp-notify'),
//     cache = require('gulp-cache'),
//     livereload = require('gulp-livereload'),
//     del = require('del');

// 检查脚本
// gulp.task('lint', function() {
//     gulp.src('./js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// 编译Sass
// gulp.task('sass', function() {
//     gulp.src('./scss/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./css'));
// });
//     gulp.task('sass', function() {
//         return sass('./sass/*.sass', { style: 'expanded' })
//               .pipe(gulp.dest('./css'));
// });

// 合并，压缩文件
// gulp.task('scripts', function() {
//     gulp.src('./js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./dist'));
// });
//
// // 默认任务
// gulp.task('default', function(){
//     gulp.run('sass', 'scripts');
//
//     // 监听文件变化
//     gulp.watch('./js/*.js', function(){
//         gulp.run('sass', 'scripts');
//     });
// });
//
// gulp.task('styles', function() {
//   return gulp.src('./sass/test.scss')
//     .pipe(sass({ style: 'expanded' }))
//     .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//     .pipe(gulp.dest('./css'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(minifycss())
//     .pipe(gulp.dest('./css'))
//     .pipe(notify({ message: 'Styles task complete' }));
// });
