const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: 'AIzaSyDDvA_-EjvYttHc5Lu2FUK6OyzRcIlJ3ZI',
    authDomain: 'meowmaster-da607.firebaseapp.com',
    projectId: 'meowmaster-da607'
  });
  
var db = firebase.firestore();
  
db.collection("cleanings").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(`${doc.id} => ${doc.data()}`);
    });
});