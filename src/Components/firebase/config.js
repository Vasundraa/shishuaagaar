// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWRan-BweM5VNC2WWfhjqe5BuPZ36z1yM",
  authDomain: "lactapp-login.firebaseapp.com",
  projectId: "lactapp-login",
  storageBucket: "lactapp-login.appspot.com",
  messagingSenderId: "967822980302",
  appId: "1:967822980302:web:c614e3a646f51c8b3acc9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  provider =new GoogleAuthProvider();
const auth = getAuth(app);

export {auth,provider};
