'use client'
import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider);
  };

  const appleSignIn = () => {
    const provider = new OAuthProvider('apple.com');
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const updateProfile = async (displayName, bio, phoneNumber, location) => {
    try {
      // Update user's data in Firestore
      if (auth.currentUser) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userData = {
          displayName: displayName,
          email: auth.currentUser.email,
          bio: bio,
          phoneNumber: phoneNumber,
          location: location,
        };
        await setDoc(userRef, userData, { merge: true });
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Save user name and email to Firestore
        const userRef = doc(db, "users", currentUser.uid);
        const userData = {
          displayName: currentUser.displayName,
          email: currentUser.email,
        };
        await setDoc(userRef, userData, { merge: true });
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, facebookSignIn, appleSignIn, logOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  return useContext(AuthContext);
};
