import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCQtI8t9z7dNHVWxo9o-FZDAggiAFR6CIs",
  authDomain: "clone-a8a8f.firebaseapp.com",
  projectId: "clone-a8a8f",
  storageBucket: "clone-a8a8f.appspot.com",
  messagingSenderId: "229683043479",
  appId: "1:229683043479:web:11ec111fb549f0424fddd2"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const provider=new GoogleAuthProvider();
export default app;