import firebase from 'firebase/app'
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB7sCMF01pP79yZXOY7vnm9lqgGTinjWAk',
    authDomain: 'music-5d6e7.firebaseapp.com',
    projectId: 'music-5d6e7',
    storageBucket: 'music-5d6e7.appspot.com',
    // messagingSenderId: "404101200599",
    appId: '1:404101200599:web:7c1fd267f2b66525de0e92'
}

export default firebase.initializeApp(firebaseConfig)