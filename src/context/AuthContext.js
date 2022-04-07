import { createContext, useReducer, useEffect } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload.user, role: action.payload.role };
    case "LOGOUT":
      return { ...state, user: null, role: null };
    case "AUTH_IS_READY":
      return {
        user: action.payload.user,
        role: action.payload.role,
        authIsReady: true,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
    role: null,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        getDoc(doc(db, "users", user.uid)).then((document) => {
          dispatch({
            type: "AUTH_IS_READY",
            payload: { user, role: document.data().role },
          });
          unsub();
        });
      } else {
        dispatch({ type: "AUTH_IS_READY", payload: { user } });
        unsub();
      }
    });
  }, []);

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
