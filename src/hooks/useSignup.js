import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { auth, db } from "../firebase/config";

// firebase imports
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, passwordCheck) => {
    setError(null);

    if (password !== passwordCheck) {
      setError("Пароли должны совпадать");
      return;
    }

    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((err) => setError(err.message));

    if (!res) {
      throw new Error("Could not complete signup");
    }

    await updateProfile(res.user, {
      displayName,
    });

    const newUser = {
      uid: res.user.uid,
      email,
      displayName,
      role: "patient",
    };

    const ref = await doc(db, "users", res.user.uid);
    await setDoc(ref, newUser);

    dispatch({ type: "LOGIN", payload: { user: res.user, role: "patient" } });
  };

  return { signup, error };
};
