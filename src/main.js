import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore"
import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmMHwu-mJBDnFlYEH56lKk16e2Eko1bc0",
  authDomain: "quiz-89076.firebaseapp.com",
  projectId: "quiz-89076",
  storageBucket: "quiz-89076.appspot.com",
  messagingSenderId: "615880784572",
  appId: "1:615880784572:web:b6d46e4dfa43985f5c6eb9",
  measurementId: "G-VHP7DTBGQQ"
};

const getCurrentUser = ()=>{
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(getAuth(),
    (user) =>{
      removeListener();
      resolve(user);
    },
    reject
    );
  });
}
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const db = firebase.firestore();
const st = firebase.storage()
export default (auth, db, st)
//const app = firebase.initializeApp(firebaseConfig);
//const db = app.firestore()
//db.settings({timestampInSnapshots: true})
//export default db
createApp(App).use(router).mount('#app')
