 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import { getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc

  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


 import { getAuth, 
  
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
 
 
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyA0JYDm57RvfaeMuV3N9PQHz-G6P8TvdxA",
   authDomain: "todo-app-with-signup-and-login.firebaseapp.com",
   projectId: "todo-app-with-signup-and-login",
   storageBucket: "todo-app-with-signup-and-login.appspot.com",
   messagingSenderId: "848711229184",
   appId: "1:848711229184:web:f17a12bac4e59c40e81de5"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
 // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export {
    app,
    db,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    auth,
    setDoc,
    getDoc,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
}