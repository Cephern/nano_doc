import "./App.css";
import Navbar from "./comps/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//context
import { DoctorsContextProvider } from "./context/DoctorsContext";

// pages
import Home from "./pages/Home/Home";
import Diagnostics from "./pages/Diagnostics/Diagnostics";
import Doctors from "./pages/Doctors/Doctors";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Appointment from "./pages/Appointment/Appointment";

// hooks
import { useAuthContext } from "./hooks/useAuthContext";
import { Navigate } from "react-router-dom";

function App() {
  const { user, authIsReady, role } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <DoctorsContextProvider>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/diagnostics"
                element={user ? <Diagnostics /> : <Navigate to="/login" />}
              />
              <Route
                path="/doctors"
                element={user ? <Doctors /> : <Navigate to="/login" />}
              />
              <Route
                path="/about"
                element={user ? <AboutUs /> : <Navigate to="/login" />}
              />
              <Route
                path="/appointment"
                element={user ? <Appointment /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />
              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <Signup />}
              />
            </Routes>
          </DoctorsContextProvider>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
