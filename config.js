import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBLYP_MlaWgWyso8aqo-zwPDtEFnBfsYk0",
  authDomain: "banco-da-biblioteca.firebaseapp.com",
  projectId: "banco-da-biblioteca",
  storageBucket: "banco-da-biblioteca.appspot.com",
  messagingSenderId: "1038544168927",
  appId: "1:1038544168927:web:39d36e8369fc13a60ec66a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
