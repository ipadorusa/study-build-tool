# Gulp 사용법(bable + 압축 + 난독화)



## 목차 

1. [브랜치 이동](#1. 브랜치이동)
2. [Gulp 설치](#2. Gulp설치)
3. [Babel 7 설치](#3-babel-7-설치)



## 1. 브랜치이동

`git checkout gulp-babel`



## 2. Gulp설치

작업하고자 하는 폴더에 npm 초기 설정을 해준다 -y 는 모두 yes이다.

`npm init -y`

Gulp를 설치한다.

`npm i gulp --save-dev`

설치후 gulpfile.js 파일을 생성후 아래와 같이 구문 만들어야함 

```javascript
const gulp = require('gulp');
gulp.task('default', () =>
    // task 
);
```

package.json에 실행할 Gulp 실행할 명령어 만들기 npm start && yarn start && gulp default; 셋중에 아무거나 써도 됩니다.

```javascript
"scripts": {
  "start": "gulp default"
},
```



## 3. Babel 7 설치

Gulp에서 실행을 사용할꺼니 npm 사이트나 구글에서 gulp-babel 을 검색한다.

검색하면 [gulp-babel](https://www.npmjs.com/package/gulp-babel) 주소로 들어가면 아래와 같이 설치하라고 나온다.

```bash
# Babel 7
$ npm install --save-dev gulp-babel @babel/core @babel/preset-env

# Babel 6
$ npm install --save-dev gulp-babel@7 babel-core babel-preset-env
```

설치를 하고서 [옵션](https://babeljs.io/docs/en/options)들은 들어가서 확인하면서 넣으면 된다.

```javascript
gulp.task('default', () =>
    gulp.src('src/*.js')
        .pipe(babel({
            presets: [
               [
                  "@babel/preset-env",
                  {
                      "targets":
                           {
                               "browsers": ["last 2 versions", "> 5% in KR"]
                           }
                  }
               ]
            ]
        }))
        .pipe(gulp.dest('dist'))
);
```

위 옵션은 최신 버전 두 버전과 한국에서 점유율 5퍼센트 이상 브라우저를 모두 지원하라는 뜻입니다.

아니면 직접적으로 아래처럼 쓰도 된다 ([옵션](https://babeljs.io/docs/en/babel-preset-env/))

```javascript
gulp.task('default', () =>
    gulp.src('src/*.js')
        .pipe(babel({
            presets: [
               [
                  "@babel/preset-env",
                  {
                     "targets": {
                        "chrome": "58",
                        "ie": "11"
                     }
                  }
               ]
            ]
        }))       
        .pipe(gulp.dest('dist'))
);
```

아니면 js에 js합치기 + 난독화 + 소스맵을 적용하고 싶다면 아래처럼 pipe에 추가 해도 된다. 

추가 한만큼 노드 모듈 설치하고 선언해야한다.

```javascript
gulp.task('default', () =>
    gulp.src('src/*.js')
       .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
               [
                  "@babel/preset-env",
                  {
                     "targets": {
                        "chrome": "58",
                        "ie": "11"
                     }
                  }
               ]
            ]
        }))
       .pipe(concat("index.js"))
       .pipe(uglify())
       .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist'))
);
```

최종 구성

```javascript
const gulp          = require('gulp'),
     babel         = require('gulp-babel'),
     sourcemaps    = require('gulp-sourcemaps'),
     concat        = require("gulp-concat"),
     uglify        = require('gulp-uglify');
 
gulp.task('default', () =>
    gulp.src('src/*.js')
       .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
               [
                  "@babel/preset-env",
                  {
                     "targets": {
                        "chrome": "58",
                        "ie": "11"
                     }
                  }
               ]
            ]
        }))
       .pipe(concat("index.js"))
       .pipe(uglify())
       .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist'))
);
```