import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTtX12E8S54-730FctsFbxFEaavX9av6s",
  authDomain: "ecommerce-curso-react.firebaseapp.com",
  projectId: "ecommerce-curso-react",
  storageBucket: "ecommerce-curso-react.appspot.com",
  messagingSenderId: "994056688021",
  appId: "1:994056688021:web:5aec1b993c42151417269c",
  measurementId: "G-ZKK3K1YL3X",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
