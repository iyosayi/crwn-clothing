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

//To store users in the DB
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //To create a user in the DB, first check if the user exist, if not create
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //If no data in the snapshot, create one
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

//Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//Twitter Auth
// const twitter = new firebase.auth.TwitterAuthProvider();
// firebase.auth().signInWithPopup(twitter).then(result => {
//   let token = result.credential.accessToken
//   let secret = result.credential.secret
//   let user = result.user
// })

export default firebase;
