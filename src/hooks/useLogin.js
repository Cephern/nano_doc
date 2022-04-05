import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    const res = await signInWithEmailAndPassword(auth, email, password);

    if (!res) {
      setError("an error accured");
      return;
    }

    dispatch({ type: "LOGIN", payload: res.user });
  };

  return { error, login };
};
