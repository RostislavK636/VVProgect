// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; 
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
  } from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2T36e9YWBuAXYgT1I4CGwA4yPlnGcnhg",
  authDomain: "vvprogect.firebaseapp.com",
  databaseURL: "https://vvprogect-default-rtdb.firebaseio.com",
  projectId: "vvprogect",
  storageBucket: "vvprogect.firebasestorage.app",
  messagingSenderId: "147378452580",
  appId: "1:147378452580:web:3ebc5c712b5dfc5dc00771"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const registerUser = async (email, fname, leavel, name, password, phone) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email,password);
        return {success: true, user: userCredential};
    } catch(error) {
        let errorMessage = 'Ошибка';
        if (error.code === 'auth/email-already-in-use') errorMessage = 'Эта почта уже зарегестрированна';
        if (error.code === 'auth/weak-password') errorMessage = 'Пароль должен быть больше 6 символов';
        if (error.code === 'auth/invalid-email') errorMessage = 'Неверный формат почты';
        return {success: false, error: errorMessage}
    }
};

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email,password);
        return {success: true, user: userCredential};
    } catch(error) {
        let errorMessage = 'Ошибка входа';
        if (error.code === 'auth/user-not-found') errorMessage = 'Пользователь не найден';
        if (error.code === 'auth/wrong-password') errorMessage = 'Неверный пароль';
        if (error.code === 'auth/invalid-email') errorMessage = 'Неверный формат почты';
        return {success: false, error: errorMessage}
    }
};