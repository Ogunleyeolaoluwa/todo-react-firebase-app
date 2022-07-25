import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
// import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCfl6YFllR8r41B72iLNDpW_h15pGTMS8k",
    authDomain: "todo-app-5a3e3.firebaseapp.com",
    projectId: "todo-app-5a3e3",
    storageBucket: "todo-app-5a3e3.appspot.com",
    messagingSenderId: "609378246846",
    appId: "1:609378246846:web:cb1d90581c4d4ab3acbeef"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()

export { db }

