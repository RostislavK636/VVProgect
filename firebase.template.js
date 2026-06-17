// Firebase connection template.
// Copy this file to firebase.js and replace the placeholder values
// with config from Firebase Console -> Project settings -> Your apps.

import { getApp, getApps, initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  databaseURL: 'https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.firebasestorage.app',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        let errorMessage = 'Registration error';
        if (error.code === 'auth/email-already-in-use') errorMessage = 'This email is already registered';
        if (error.code === 'auth/weak-password') errorMessage = 'Password must be at least 6 characters';
        if (error.code === 'auth/invalid-email') errorMessage = 'Invalid email format';
        return { success: false, error: errorMessage };
    }
};

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        let errorMessage = 'Login error';
        if (error.code === 'auth/user-not-found') errorMessage = 'User not found';
        if (error.code === 'auth/wrong-password') errorMessage = 'Wrong password';
        if (error.code === 'auth/invalid-credential') errorMessage = 'Invalid email or password';
        if (error.code === 'auth/invalid-email') errorMessage = 'Invalid email format';
        return { success: false, error: errorMessage };
    }
};
