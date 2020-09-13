import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAB82mBXsg9GNx101ispqpNNiuh4Mt9DxI",
    authDomain: "whats-app-clone-147a8.firebaseapp.com",
    databaseURL: "https://whats-app-clone-147a8.firebaseio.com",
    projectId: "whats-app-clone-147a8",
    storageBucket: "whats-app-clone-147a8.appspot.com",
    messagingSenderId: "895684723612",
    appId: "1:895684723612:web:526bc6d95fbf1b087d3e59",
    measurementId: "G-LYLR8VBC8M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;

