/**************************************************************/
// reg.mjs
// Main entry for reg.html
// Written by <Your Name Here>, Term 2 2025?
/**************************************************************/

/**************************************************************/
// Import all the constants & functions required from the fb_io module

import { fb_initialise, fb_writerecord } from './fb_io.mjs';
fb_initialise();
/**************************************************************/
function getUserInput() {
  console.log('getUserInput()');

  // Check if form is valid
    if (document.getElementById('f_userDetails').checkValidity()) {
    //getting values from the form
      const displayName = document.getElementById("i_displayName").value;
      const age = document.getElementById("i_age").value;
      const sex = document.getElementById("i_sex").value;
      const email = document.getElementById("i_email").value;

      console.log("displayName:", displayName);
      console.log("Age:", age);
      console.log("Sex:", sex);
      console.log("Email:", email);

      const userDetails = { displayName, age, sex, email, uid: sessionStorage.getItem('uid'),
        photoURL: sessionStorage.getItem('photoURL')
      };

      // Calling the write rec
      fb_writerecord(userDetails);
    } else {
      console.log("Form is not valid!");
    }
}
    
  // Attach event listener to button
  document.getElementById('registerBtn').addEventListener('click', getUserInput);
  
















