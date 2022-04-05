import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";

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

    dispatch({ type: "LOGIN", payload: res.user });
  };

  return { signup, error };
};
