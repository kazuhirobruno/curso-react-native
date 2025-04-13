import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC5BDPfunBrAiyZl710nuEUkjGTvwS4gAY",
  authDomain: "projeto-react-native-7a8b8.firebaseapp.com",
  projectId: "projeto-react-native-7a8b8",
  storageBucket: "projeto-react-native-7a8b8.firebasestorage.app",
  messagingSenderId: "1098403330973",
  appId: "1:1098403330973:web:30e97d2357be826e568d74"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db