import firebase from 'firebase';

   const firebaseConfig = {
    apiKey: "AIzaSyBRqD1Jd9_oXViayhKC8G7R7iZRzAucoeM",
    authDomain: "buzzerappgame.firebaseapp.com",
    databaseURL: "https://buzzerappgame-default-rtdb.firebaseio.com",
    projectId: "buzzerappgame",
    storageBucket: "buzzerappgame.appspot.com",
    messagingSenderId: "855065499045",
    appId: "1:855065499045:web:5e174b3536cc019930444c",
    measurementId: "G-X7YTEKQF02"
  };


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
