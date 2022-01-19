import "./App.css";
import Navbar from "./comps/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//context
import { AuthContextProvider } from "./context/AuthContext";
import { DoctorsContextProvider } from "./context/DoctorsContext";

// pages
import Home from "./pages/Home/Home";
import Diagnostics from "./pages/Diagnostics/Diagnostics";
import Doctors from "./pages/Doctors/Doctors";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

import Appointment from "./pages/Appointment/Appointment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <DoctorsContextProvider>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/diagnostics" element={<Diagnostics />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </DoctorsContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
