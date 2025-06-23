/**************************************************************/
// leaderboard.mjs
// Main entry for leaderboard.html
// Written by Aditi Modi, Term 2 2025
/**************************************************************/

/**************************************************************/
// Import all the constants & functions required from the fb_io module

import { fb_initialise } from './fb_io.mjs';
fb_initialise();
/**************************************************************/

import { getDatabase, ref, query, orderByChild, limitToFirst, get }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

 import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

    //Firebase Configuration
    const FB_GAMECONFIG = {
        apiKey: "AIzaSyAwVeMoQsZQAV-ewzSIqnfSmaQrSOBQlYY",
        authDomain: "comp-2025-aditi-modi.firebaseapp.com",
        databaseURL: "https://comp-2025-aditi-modi-default-rtdb.firebaseio.com",
        projectId: "comp-2025-aditi-modi",
        storageBucket: "comp-2025-aditi-modi.firebasestorage.app",
        messagingSenderId: "500209550082",
        appId: "1:500209550082:web:379bf3e85535587bc1f81b",
        measurementId: "G-4BV1W7JPCK"
    };

    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
    const FB_GAMEDB = getDatabase(FB_GAMEAPP);
    const FB_GAMEAUTH = getAuth(FB_GAMEAPP);
    
    console.info(FB_GAMEDB);      	//DIAG

const dbReference = query(ref(FB_GAMEDB, "scores/fc"), orderByChild("score"),
    limitToFirst(5));
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
    if (fb_data != null) {
        console.log(fb_data);
        // Successful read for sorted read
        console.log('%c fb_readrecord(): successful!', 'color: ...');
    } else {
        console.log('no record found'); 
    }
    }).catch((error) => {
         // Code for a sorted read error 
        console.error(error);
    });










/*******************************************************/
// END OF APP
/*******************************************************/




