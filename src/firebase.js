import firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCgDGiJHOmuDc3QRfElHtYaRZB4N08MbhY",
    authDomain: "challenge-d386a.firebaseapp.com",
    databaseURL:"https://challenge-d386a.firebaseio.com",
    projectId: "challenge-d386a",
    storageBucket: "challenge-d386a.appspot.com",
    messagingSenderId: "1029050186830",
    appId: "1:1029050186830:web:936d61b8f7ba314f1f171f"
  };
 
// const firebaseConfig = {
//   apiKey: "AIzaSyCgDGiJHOmuDc3QRfElHtYaRZB4N08MbhY",
//   authDomain: "challenge-d386a.firebaseapp.com",
//   projectId: "challenge-d386a",
//   storageBucket: "challenge-d386a.appspot.com",
//   messagingSenderId: "1029050186830",
//   appId: "1:1029050186830:web:936d61b8f7ba314f1f171f"
// };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  export {db,auth};
