// import './js/loadVue';
// import './js/loadReact';

import './js/ajaxCors';
import './css/index.css';
import createComp from './js/comp';
import '@/js/resources';

const texts: Array<string> = ['hello', 'WEBPACK'];
const comp = createComp('h2', { class: 'content' }, texts.at(-1));
document.body.appendChild(comp);

console.log(texts.join(' '));
