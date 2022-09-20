import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCHPDIBARWdvMtvtsy7CscA08H5JvLHKm4",
  authDomain: "ninja-money-a9a44.firebaseapp.com",
  projectId: "ninja-money-a9a44",
  storageBucket: "ninja-money-a9a44.appspot.com",
  messagingSenderId: "473224208084",
  appId: "1:473224208084:web:386d9dab0b7b73616da541"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }