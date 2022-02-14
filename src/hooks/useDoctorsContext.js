import { useContext } from "react";
import { DoctorsContext } from "../context/DoctorsContext";

export const useDoctorsContext = () => {
  const context = useContext(DoctorsContext);

  if (!context) {
    throw Error("useAuthContext should be used inside an AuthContextProvider");
  }

  return context;
};
