import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyABI8-l8fJi1gnEHIZDP6mJurTmSrSWxog",
  authDomain: "auth-b0d12.firebaseapp.com",
  databaseURL: "https://auth-b0d12-default-rtdb.firebaseio.com",
  projectId: "auth-b0d12",
  storageBucket: "auth-b0d12.appspot.com",
  messagingSenderId: "361542158207",
  appId: "1:361542158207:web:ce096d862ea8ccfd267c4a",
  measurementId: "G-1HT27S7YV0"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working :(");
