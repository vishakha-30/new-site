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
        const mylist = document.getElementById('mylist');
        const list = document.createElement('li');
        list.classList.add('list-group-item');
        list.classList.add('list-group-item-warning');
        mylist.appendChild(list);
        const div1 = document.createElement('div');
        const myData = doc.data();
        div1.innerHTML = myData['first-name'] + " " + myData['last-name'];
        list.appendChild(div1);

        const div2 = document.createElement('div');
        const but1 = document.createElement('button');
        but1.classList.add('btn');
        but1.classList.add('btn-danger');
        but1.innerHTML="details";
        list.appendChild(div2);
        div2.appendChild(but1);
        but1.addEventListener("click",function(){
            
            window.alert("this is " + myData['first-name'] + " " + myData['last-name'] + " Details:\nFirst_name : " + myData['first-name']+"\nlast_name : " + myData['last-name'] + "\nRating : " + myData['rating(on 10)'] + "\nIndustry : "+myData['industry']);

        })

        const but2 = document.createElement('button');
        but2.classList.add('btn');
        but2.classList.add('btn-dark');
        but2.innerHTML="edit";
        div2.appendChild(but2);
        but2.addEventListener("click",function(){
            var fname= prompt("Enter your firstname:","");
            var lname= prompt("Enter your lastname:","");
            div1.innerHTML = myData['first-name'] + " " + myData['last-name'];
            db.collection("actors").doc({
                ['first-name']: fname,
                ['last-name']: lname
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        })

        const but3 = document.createElement('button');
        but3.classList.add('btn');
        but3.classList.add('btn-success');
        but3.innerHTML="delete";
        div2.appendChild(but3);
        but3.addEventListener("click",function(){
            myData['first-name']=" ";
            myData['last-name']=" ";
            list.innerHTML=myData['first-name']+myData['last-name'];
        });
    });
});