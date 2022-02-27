// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD3tcH4URmPc8MBp96EQbaZ17dJmOYE-hQ",
    authDomain: "clone-2b2ff.firebaseapp.com",
    projectId: "clone-2b2ff",
    storageBucket: "clone-2b2ff.appspot.com",
    messagingSenderId: "313719694389",
    appId: "1:313719694389:web:6244605ba597376ce13d7c",
    measurementId: "G-G1VKMBFF88"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
  