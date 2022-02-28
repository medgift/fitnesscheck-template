import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/database" // Real-time database
// import "firebase/compat/firestore" // Firestore

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // Other configuration options, such as the Realtime Database / Firestore details...
};
export default firebase.initializeApp(config);
