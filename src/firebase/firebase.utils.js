import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDFnkvg7YLzBkSDepxvEOf8xK68Q4sxg8w",
    authDomain: "pooja-samaan.firebaseapp.com",
    databaseURL: "https://pooja-samaan.firebaseio.com",
    projectId: "pooja-samaan",
    storageBucket: "pooja-samaan.appspot.com",
    messagingSenderId: "520450482066",
    appId: "1:520450482066:web:36368cf43ed05026e2eb4b",
    measurementId: "G-HFPRTZ5FT6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;    