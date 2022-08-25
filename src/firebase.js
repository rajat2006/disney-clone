import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyARRZVXyHV8qzuVGXYI9j0UF5gmRU0k7ew",
    authDomain: "disney-clone-97384.firebaseapp.com",
    projectId: "disney-clone-97384",
    storageBucket: "disney-clone-97384.appspot.com",
    messagingSenderId: "950692963426",
    appId: "1:950692963426:web:96656f4bca2bdd682edd3b",
    measurementId: "G-2X9SSSY4NX"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;

   