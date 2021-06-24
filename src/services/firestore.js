import firebase from "firebase";
import "firebase/auth"; 
import "firebase/firestore"; 
const firebaseConfig = {
    apiKey: "AIzaSyAG5kawUjpUv5vNYrnop_1E-deRvVT_U5Y",
    authDomain: "adoumie-recipe-app.firebaseapp.com",
    projectId: "adoumie-recipe-app",
    storageBucket: "adoumie-recipe-app.appspot.com",
    messagingSenderId: "1006232553344",
    appId: "1:1006232553344:web:43217bf2d5c7206de56365"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 
export const signInWithGoogle = async () => {
    await auth.signInWithGoogle(new firebase.auth.GoogleAuthProvider)
}; 

const db = firebase.firestore();