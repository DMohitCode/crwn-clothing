import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA0j6Livv7JcCbGev8X-4hDMhajHipZr6Y",
    authDomain: "crwn-db-bfe15.firebaseapp.com",
    databaseURL: "https://crwn-db-bfe15.firebaseio.com",
    projectId: "crwn-db-bfe15",
    storageBucket: "crwn-db-bfe15.appspot.com",
    messagingSenderId: "446866992601",
    appId: "1:446866992601:web:039ff74b4f0a3517efbdc8",
    measurementId: "G-TTMTZXV3YF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
