# Webpack Simple Tutorial



## Webpack Definition

> 2012/5/10 만들어졌습니다. 웹팩은 모듈 번들러입니다.
> Webpack (양식화 된 웹팩)은 오픈 소스 자바 스크립트 모듈 번들러입니다. 주요 목적은 자바 스크립트 파일을 브라우저에서 사용하기 위해 번들링하는 것이지만 모든 리소스 또는 자산을 변형, 번들링 또는 패키징 할 수도 있습니다.



## Concepts



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