// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvNahRcrec_DIHpgoF3SmEglhdootkrls",
    authDomain: "chitchatapp-ecb89.firebaseapp.com",
    projectId: "chitchatapp-ecb89",
    storageBucket: "chitchatapp-ecb89.appspot.com",
    messagingSenderId: "421286643448",
    appId: "1:421286643448:web:7c919a118e3200df1bdd0d",
    measurementId: "G-0S6R218SDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
