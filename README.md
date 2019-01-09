
# BUILD TOOLS



## Index

[TOC]





## 1. Developer-Roadmap 2019

> 트렌드를 볼수 있어 좋음

![frontend](https://github.com/ipadorusa/study-todo/blob/webpack/src/image/frontend.png)

자료참조 [developer-roadmap 2019](https://github.com/kamranahmedse/developer-roadmap)



## 2. Build 단계에서 하는 행동

> 변환, 전처리, 난독화, 번들, 압축 그 외 린팅

- transpile - `babel / typescript / flow`
- pre-process (complie, auto-prefix, etc.) - `sass / less / postcss`
- uglify(minify, mingle, optimize, etc.) - `uglify-js / terser`
- bundle (concat, tree-shake, etc) - `webpack / rollup / parcel`
- compress (gzip, etc)



## 3. BUILD TOOLS의 두 종류

> 두 종류가 어떤게 있는지 확인하자
### Task Runners

1. `Gulp`    
2. `Grunt`   


### Module Bundlers

1. `Webpack`
2. `Parcel`
3. `Rollup`



## 4.  Task Runners

> 단순한 반복적인 작업을 반복적으로 수행하는 것이 Task Runner다.
>
> 예를들면  minification, compilation, unit testing, linting 등과 같은 반복적 인 작업을 수행하는 것들을 말한다.

#### Gruntfile.js  `설정`을 하여 사용

```javascript
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

#### gulpfile.js  - javascript를 문법에  `pipe`로 연결하여 사용

```javascript
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

### Last Released (2019/01/07기준)

| Grunt                                                        |   구분   | Gulp                                          |
| ------------------------------------------------------------ | :------: | --------------------------------------------- |
| [Grunt CLI 1.3.0 releasedAugust 15, 2018](https://gruntjs.com/blog/2018-08-15-grunt-cli-1.3.0-released) | Last Rel | [gulp v4.0.0 2018/01/01](https://gulpjs.com/) |
| 설정 기반                                                    | 작동방식 | javascript 기반                               |
| Gruntfile.js                                                 | 필요파일 | gulpfile.js                                   |



## 5. 실습해보기 (Gulp)

```bash
git checkout gulp-babel
```

 
