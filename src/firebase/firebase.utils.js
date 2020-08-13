import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDTGdFaVyhU6hrjF74mvBry4vM_p715V5I",
  authDomain: "clothing-app-63006.firebaseapp.com",
  databaseURL: "https://clothing-app-63006.firebaseio.com",
  projectId: "clothing-app-63006",
  storageBucket: "clothing-app-63006.appspot.com",
  messagingSenderId: "674875144923",
  appId: "1:674875144923:web:2f2fc972f6aa0ceeb42afe",
  measurementId: "G-WNJH10493W",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
