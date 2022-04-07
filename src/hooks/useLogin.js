import { useState } from "react";
import { auth, db } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { doc, getDoc } from "firebase/firestore";

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

    const document = await getDoc(doc(db, "users", res.user.uid));

    dispatch({
      type: "LOGIN",
      payload: { user: res.user, role: document.data().role },
    });
  };

  return { error, login };
};
