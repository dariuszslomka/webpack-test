import '../scss/main.scss';

import * as moment from 'moment'
// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
let time = moment().startOf('day').fromNow();
console.log(time);
