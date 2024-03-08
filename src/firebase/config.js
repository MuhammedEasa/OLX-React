import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjaf5jTQiklVqXBCN5jQxvU6IVAfiTP8Q",
    authDomain: "olx-demo-6088f.firebaseapp.com",
    projectId: "olx-demo-6088f",
    storageBucket: "olx-demo-6088f.appspot.com",
    messagingSenderId: "684555599826",
    appId: "1:684555599826:web:01234ba67a7a36d7b5d20b",
    measurementId: "G-T9FDKJVJ3M"
  };

  export default firebase.initializeApp(firebaseConfig)