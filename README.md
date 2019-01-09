
# BUILD TOOLS



## Index
- [BUILD TOOLS](#build-tools)
  - [1. Developer-Roadmap 2019](#1-developer-roadmap-2019)
  - [2. Build 단계에서 하는 행동](#2-build-%EB%8B%A8%EA%B3%84%EC%97%90%EC%84%9C-%ED%95%98%EB%8A%94-%ED%96%89%EB%8F%99)
  - [3. BUILD TOOLS의 두 종류](#3-build-tools%EC%9D%98-%EB%91%90-%EC%A2%85%EB%A5%98)
    - [Module Bundlers](#module-bundlers)
  - [4.  Task Runners](#4--task-runners)
    - [Gruntfile.js  `설정`을 하여 사용](#gruntfilejs--%EC%84%A4%EC%A0%95%EC%9D%84-%ED%95%98%EC%97%AC-%EC%82%AC%EC%9A%A9)
    - [gulpfile.js  - javascript를 문법에  `pipe`로 연결하여 사용](#gulpfilejs----javascript%EB%A5%BC-%EB%AC%B8%EB%B2%95%EC%97%90--pipe%EB%A1%9C-%EC%97%B0%EA%B2%B0%ED%95%98%EC%97%AC-%EC%82%AC%EC%9A%A9)
  - [Last Released (2019/01/07기준)](#last-released-20190107%EA%B8%B0%EC%A4%80)
  - [5. 실습해보기 (Gulp)](#5-%EC%8B%A4%EC%8A%B5%ED%95%B4%EB%B3%B4%EA%B8%B0-gulp)





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

 
