import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCmy3hJvm7TERkz1i8qjSZGRv6BAGPhp4Y",
        authDomain: "pro67-63b09.firebaseapp.com",
        databaseURL: "https://pro67-63b09-default-rtdb.firebaseio.com",
        projectId: "pro67-63b09",
        storageBucket: "pro67-63b09.appspot.com",
        messagingSenderId: "413599477132",
        appId: "1:413599477132:web:067850f9c0cdc518cf7aa9"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);


export default firebase.database();