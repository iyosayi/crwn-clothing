import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA0-nmsZvkF12IozKLu5wGOwBHmfgcUaGQ",
  authDomain: "crwn-clothing-app-1248d.firebaseapp.com",
  databaseURL: "https://crwn-clothing-app-1248d.firebaseio.com",
  projectId: "crwn-clothing-app-1248d",
  storageBucket: "crwn-clothing-app-1248d.appspot.com",
  messagingSenderId: "538793438565",
  appId: "1:538793438565:web:0ceae31908198006c4c58c",
  measurementId: "G-61RH3VKY6Z"
};

firebase.initializeApp(config);

//export the imported libraries
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
