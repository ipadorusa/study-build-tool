# Webpack Simple Tutorial



## Index

1. [Webpack Definition]: (#webpack-definition)	"Webpack Definition"
2. [Difference between Webpack vs Gulp, Grunt]: (#difference-between-webpack-vs-gulp-grunt)	"Difference between Webpack vs Gulp, Grunt"
3. [Why would I use Webpack?]: (#why-would-i-use-webpack)	"Why would I use Webpack?"
4. [Concepts]: (#concepts)	"Concepts"
5. [Install]: (#install)	"Install"




## Webpack Definition

> 2012/5/10 만들어졌습니다. 웹팩은 모듈 번들러입니다.
> Webpack (양식화 된 웹팩)은 오픈 소스 자바 스크립트 모듈 번들러입니다. 주요 목적은 자바 스크립트 파일을 브라우저에서 사용하기 위해 번들링하는 것이지만 모든 리소스 또는 자산을 변형, 번들링 또는 패키징 할 수도 있습니다.



## Difference between Webpack vs Gulp, Grunt

- GRUNT, GULP

  - 단순한 반복적인 작업을 위한 TASK RUNNER 입니다.

    예) css나 javascript 의 concat, minify, compress, uglify를 할때 사용합니다.

- 



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