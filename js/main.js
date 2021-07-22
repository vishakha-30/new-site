import 'bootstrap/dist/css/bootstrap.min.css';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZK3HKCtLGq4gJLGl2oFlRt55ZDTanQu8",
    authDomain: "fir-project-c2022.firebaseapp.com",
    projectId: "fir-project-c2022",
    storageBucket: "fir-project-c2022.appspot.com",
    messagingSenderId: "574622482430",
    appId: "1:574622482430:web:888babfa9e3d4ec339caaf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  db.collection("actors").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  });