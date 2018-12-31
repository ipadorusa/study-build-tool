import './app.css';
import "@babel/polyfill";

const app = document.querySelector('#app');
app.innerHTML = `<p>Hello webpack</p>`;

const sum = (x,y) => x + y;
console.log(sum(1,3))