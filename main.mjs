/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by <Your Name Here>, Term 2 2025?
/**************************************************************/

const COL_C = 'white';	   	
const COL_B = '#CD7F32';	
console.log('%c main.mjs', 
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module

import {fb_initialise, fb_authenticate, fb_detectLogin } from './fb_io.mjs';

fb_initialise();

window.fb_authenticate = fb_authenticate;
window.fb_detectLogin  = fb_detectLogin;

/**************************************************************/
//   END OF CODE
/**************************************************************/