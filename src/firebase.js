import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAIR0VDbRRBbigigrUNU-sSO77nVjotZ70",
    authDomain: "coodash-chat.firebaseapp.com",
    projectId: "coodash-chat",
    storageBucket: "coodash-chat.appspot.com",
    messagingSenderId: "835365975995",
    appId: "1:835365975995:web:16dfe65e76a4605663369e",
    measurementId: "G-KXRP9N66MD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };