
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig: {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
} = {
  apiKey: "AIzaSyAIjqDfE0Aw53T6m4nmPJwjhKZKdOosf_U",
  authDomain: "k5-online-school.firebaseapp.com",
  projectId: "k5-online-school",
  storageBucket: "k5-online-school.firebasestorage.app",
  messagingSenderId: "211887713433",
  appId: "1:211887713433:web:2fc3143d11f3f28c3f1c08",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export { app, auth };
