# Webpack Simple Tutorial



## Index

1. [Webpack Definition](#webpack-definition)
2. [Difference between Webpack vs Gulp, Grunt](#difference-between-webpack-vs-gulp-grunt)
3. [Why would I use Webpack?](#why-would-i-use-webpack)
4. [Concepts](#Concepts)
5. [Install](#Install)




## Webpack Definition

> 2012/5/10 만들어졌습니다. 웹팩은 모듈 번들러입니다.
> Webpack (양식화 된 웹팩)은 오픈 소스 자바 스크립트 모듈 번들러입니다. 주요 목적은 자바 스크립트 파일을 브라우저에서 사용하기 위해 번들링하는 것이지만 모든 리소스 또는 자산을 변형, 번들링 또는 패키징 할 수도 있습니다.



## Build

- transpile - babel / typescript / flow
- pre-process (complie, auto-prefix, etc.) - sass / less / postcss
- uglify(minify, mingle, optimize, etc.) - uglify-js / terser
- bundle (concat, tree-shake, etc) - webpack / rollup / parcel
- compress (gzip, etc)



## Difference between Webpack vs Gulp, Grunt

- Webpack

  - Module Bundler

- Grunt, Gulp

  - 단순한 반복적인 작업을 위한 Javascript Task Runner 입니다.

  - > 한마디로 : 자동화. minification, compilation, unit testing, linting 등과 같은 반복적 인 작업을 수행 할 때 수행해야 할 작업이 적을수록 작업이 쉬워집니다. Gruntfile을 통해 구성한 후에는 작업 주자가 당신과 팀을 위해 평범한 작업을 거의 수행 할 수 있습니다.

- Grunt 

  - [Grunt CLI 1.3.0 releasedAugust 15, 2018](https://gruntjs.com/blog/2018-08-15-grunt-cli-1.3.0-released)

- Gulp

  - [gulp v4.0.0 2018/01/01](https://gulpjs.com/)



- Grunt vs Gulp (difference)

  - Grunt는 설정 기반으로 동작 Gulp는 Javascript기반으로 동작합니다.

  - Grunt(Gruntfile.js) 설정 파일에 작성하여 작동

    - ```javascript
      grunt.initConfig({
        sass: {
          dist: {
            files: [{
              cwd: 'app/styles',
              src: '**/*.scss',
              dest: '../.tmp/styles',
              expand: true,
              ext: '.css'
            }]
          }
        },
        autoprefixer: {
          options: ['last 1 version'],
          dist: {
            files: [{
              expand: true,
              cwd: '.tmp/styles',
              src: '{,*/}*.css',
              dest: 'dist/styles'
            }]
          }
        },
        watch: {
          styles: {
            files: ['app/styles/{,*/}*.scss'],
            tasks: ['sass:dist', 'autoprefixer:dist']
          }
        }
      });
      grunt.registerTask('default', ['styles', 'watch']);
      ```

  - Gulp(gulpfile.js) - pipe로 연결하여 사용

    - ```javascript
      gulp.task('sass', function () {
        gulp.src('app/styles/**/*.scss')
          .pipe(sass())
          .pipe(autoprefixer('last 1 version'))
          .pipe(gulp.dest('dist/styles'));
      });
      gulp.task('default', function() {
        gulp.run('sass');
        gulp.watch('app/styles/**/*.scss', function() {
          gulp.run('sass');
        });
      });
      ```

  - Speed , Plugin?

    - Sass 컴파일을 수행하는 데 걸리는 시간의 측면에서 Gulp와 Grunt를 비교한게 있는데. Gulp는 1.27 초, Grunt는 2.348 초로 Gulp가 더 빨랐습니다.
    - Grunt는 하나만 수행, Gulp는 Stream기반으로 동시에 여러게 처리
    - 플로그인수는 Grunt > Gulp

- Which Should You choose?

  - 음......당신이 선택


> https://www.keycdn.com/blog/gulp-vs-grunt
>
> https://jaysoo.ca/2014/01/27/gruntjs-vs-gulpjs/



## Why would I use Webpack?

자바스크립트가 코드가 많아지면서 유지 보수의 어려움이 생기고 각종 .js, .hbs, .cjs, .sass, .png, .jpg 등 웹 프로젝트에 포함되는 모든 파일들이 많아지게 됩니다. 이렇게 많아진 파일들을 웹팩이라는 모듈 번들러를 사용해서 간단하게 관리 할 수 있는 형태로 변환해서 사용하게 되었습니다. 그리고 여러가지의 파일을 브라우저에서 로딩을 하게 되면 그만큼 네트워크 비용을 써야하는 환경이 됩니다. 

[Why webpack]: https://webpack.js.org/concepts/why-webpack/#iife-s-immediately-invoked-function-expressions



 

## Concepts

- [Entry](https://webpack.js.org/concepts/#entry)
- [Output](https://webpack.js.org/concepts/#output)
- [Loaders](https://webpack.js.org/concepts/#loaders)
- [Plugins](https://webpack.js.org/concepts/#plugins)
- [Mode](https://webpack.js.org/concepts/#mode)
- [Browser Compatibility](https://webpack.js.org/concepts/#browser-compatibility)



## Install

```bash
npm install --save-dev webpack webpack-cli path // 3개 설치
```

[웹팩문서]: https://webpack.js.org/guides/installation/

package.json 에 아래처럼 작성

```json
"scripts": {
    "start": "webpack --config webpack.config.js",
    "dev": "webpack --mode=development",
    "prod": "webpack --mode=production"
}
```

webpack.config.js 파일 만들고 아래처럼 작성

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```