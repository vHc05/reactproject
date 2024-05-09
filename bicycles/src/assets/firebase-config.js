// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAimwvBoIzC4FMzfwlpYa_GxqnDoIiZ8Bg",
  authDomain: "ruteishondelagueshon.firebaseapp.com",
  projectId: "ruteishondelagueshon",
  storageBucket: "ruteishondelagueshon.appspot.com",
  messagingSenderId: "78619678644",
  appId: "1:78619678644:web:943354493ac35bdf6f44e1",
  measurementId: "G-YL27L4EHPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();
const db = getDatabase(app);

export default {
  storage,
  db
}