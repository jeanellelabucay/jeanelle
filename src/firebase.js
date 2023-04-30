import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAUWvxeDh3ERVg429_pg6pAoZfZDLoSprA",
  authDomain: "react-contact-da80e.firebaseapp.com",
  projectId: "react-contact-da80e",
  storageBucket: "react-contact-da80e.appspot.com",
  messagingSenderId: "484782627246",
  appId: "1:484782627246:web:0ab74bd4d6cc17b82bd03f"
};

    const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  