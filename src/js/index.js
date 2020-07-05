import '../scss/main.scss';

import * as moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
let time = moment().startOf('day').fromNow();
console.log(time);

let isDark = true;
let modeButton = document.querySelector('.mode-button--js');
modeButton.addEventListener('click', () => {
    if(isDark)
    {
        document.documentElement.style.setProperty('--background-color', 'whitesmoke');
        document.documentElement.style.setProperty('--font-color', '#222629');
        console.log('lightMode -> on')
    }
    else
    {
        document.documentElement.style.setProperty('--background-color', '#222629');
        document.documentElement.style.setProperty('--font-color', 'whitesmoke');
        console.log('darkMode -> on')
    }

    isDark = !isDark;
})



