# 前端开发环境 ubuntu15.4 setting

## 1 安装ubuntu的时候选择使用中文，关系到后面输入法用到的文件，不要用英文，会缺少文件出现莫名其妙的问题，比如我的这个冒号“”变成了@。

下载安装包后，deb类型的直接安装，同window下一样：chrome，搜狗拼音，atom编辑器，有道词典linux版本。

<strike>
## 2 安装nvm，node管理器，可以用不同版本切换，方便配置环境。需要使用vpn访问dl.google.com.
  - 首先安装C++编译器`sudo apt-get update`
  - `sudo apt-get install build-essential libssl-dev`
  - `curl https://raw.githubusercontent.com/creationix/nvm/v0.13.1/install.sh | bash
`
  - 输入'nvm'没有错误表明成功。
  - 使用 `nvm list` 和 `nvm use` 切换
</strike>
<p>

这一段废掉，没用，直接根据ubuntu的提示用`sudo apt-get install nodejs-legacy`

安装git也是一样。

然后直接用npm装 n 这个node版本管理器。
`$ sudo npm install -g n`

之后根据提示安装npm

完成后用`n list`查看node版本，用`sudo n 版本号`安装相应的node版本

## 3 给atom安装一个md的插件，markdown-preview-plus，用`ctrl-shift-m`打开。
（在atom中的文件必须保存在linux系统中，ntfs挂载后是可以读取，但是重启后在atom中看不到。）

在setting中把字体改成 SOURCE CODE PRO，勾选indent guide，一个是字体容易辨认，一个是缩进有层次。

 设置git，根据提示修改全局参数：
```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```
一路都有中文，挺方便，而且系统响应速度很快。

装了一个格式化代码的插件(atom-beautify)[https://atom.io/packages/atom-beautify]，就像webstrom中的ctrl-alt-l.

然后在atom的keymap中加入：`'.editor':
  'ctrl-alt-k': 'atom-beautify:beautify-editor'`

  把快捷键改成ctrl-alt-k。

## 4 先安装sass，ruby，之后再尝试gulp的sass编译。
用这句升级sass：`sudo gem update sass`，连不上的话要翻墙。
这是sass的单独编译：
```
sass --watch <要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css
```
用sourcemap方式方便调试，监视目录：`sass --sourcemap --watch scssFolder:cssFolder`


下面是用gulp：
```
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
return sass('./scss/*.scss', { style: 'expanded' })
.pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['sass','watch']);
```
有个问题，单独编译的scss支持sourcemap，而用gulp就不行，算了，这个以后再说。

还有一个问题，git提交的时候，在工作目录下增加一个.gitignore文件，在(githu的ignore页面)[https://github.com/github/gitignore] 可以找到一些配置项目，比如我用了sass的项目，然后加上node_modules目录：
```
.sass-cache/
*.css.map
node_modules/
```

## 5 安装gulp，全局安装需要管理员权限，否则报错。
`sudo npm install gulp -g`

之后再安装到项目根目录。
`npm install gulp --save-dev`
不好意思，忘记加sudo也会报错。
—save-dev这个属性会将条目保存到你package.json的devDependencies里面

我们将要使用Gulp插件来完成我们以下任务：

- sass的编译（gulp-ruby-sass） //因为没有sourcemap，只好手动sass编译
- 自动添加css前缀（gulp-autoprefixer）
- 压缩css（gulp-minify-css）  //以上三项都可以用compass来做
- js代码校验（gulp-jshint） //也不需要，由atom插件来做
- 合并js文件（gulp-concat）
- 压缩js代码（gulp-uglify）
- 压缩图片（gulp-imagemin）
- 自动刷新页面（gulp-livereload） //这个也不用，手动更能确定刷了
- 图片缓存，只有图片替换了才压缩（gulp-cache）
- 更改提醒（gulp-notify）
- 清除文件（del）

安装插件的命令：
`sudo npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev`

如果你不知道此依赖包共有哪些版本,可以通过`npm info 包名`命令来查看

gulp只有五个方法： task，run，watch，src，和dest。

为了支持sourcemap，还需要安装source-map插件：
`sudo npm install gulp-sourcemaps --save-dev`

好吧，折腾了一天终于搞定gulp的sass的sourcemap
```
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');

// 下面是gulp-ruby-sass插件官网的 https://www.npmjs.com/package/gulp-ruby-sass/
gulp.task('sass', function () {
  return sass('sass/*.scss', { sourcemap: true })
    // For inline sourcemaps
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['sass','watch']);
```
可以安心睡觉了......
