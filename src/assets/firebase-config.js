import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyB-aBUhSq6MtVnfM6JZGi5Rl7iiMvqux90",

  authDomain: "users-ba557.firebaseapp.com",

  projectId: "users-ba557",

  storageBucket: "users-ba557.appspot.com",

  messagingSenderId: "793019541004",

  appId: "1:793019541004:web:a465f22524c76f2f047029"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }

export default {
  storage,
  db
}