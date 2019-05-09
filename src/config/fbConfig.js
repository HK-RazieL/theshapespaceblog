import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDsOCGmbIffwetuH2pjeri-vw22u4wOz5s",
  authDomain: "test-api-db.firebaseapp.com",
  databaseURL: "https://test-api-db.firebaseio.com",
  projectId: "test-api-db",
  storageBucket: "test-api-db.appspot.com",
  messagingSenderId: "363836535626"
};

firebase.initializeApp(config);

export default firebase;