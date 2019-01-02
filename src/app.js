import './app.css';
import "@babel/polyfill";

const app = document.querySelector('#app');
app.innerHTML = `<p>Hello webpack</p>`;

const box_img = document.createElement('img');
const boxImgSrc = 'https://dummyimage.com/600x400/000/fff';
box_img.setAttribute('src', boxImgSrc);
app.appendChild(box_img);

const sum = (x,y) => x + y;
console.log(sum(1,3))