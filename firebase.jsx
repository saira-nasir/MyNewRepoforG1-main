// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyAdaZ4lXurV3zGRYn8AB9PEEarwn8ht7_8",
    authDomain: "csg1-d8421.firebaseapp.com",
    projectId: "csg1-d8421",
    storageBucket: "csg1-d8421.appspot.com",
    messagingSenderId: "881558113515",
    appId: "1:881558113515:web:4e65deb9bb527854a3c2ae",
    measurementId: "G-GZV2HS8YKK"

//   apiKey: "AIzaSyC-OsP9d8bG9nilKstG_oA2Ap0WOdW1MwA",
//   authDomain: "testproject-827a4.firebaseapp.com",
//   projectId: "testproject-827a4",
//   storageBucket: "testproject-827a4.appspot.com",
//   messagingSenderId: "396439611458",
//   appId: "1:396439611458:web:8c2264d714c03a613565db",
//   measurementId: "G-HP9ZS83BCD",
//   databaseURL:"https://testproject-827a4-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};