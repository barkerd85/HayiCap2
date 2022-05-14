// General Imports
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AboutMe from "./pages/AboutMe/AboutMe";
import VideographyPage from "./pages/VideographyPage/VideographyPage";
import PhotographyPage from "./pages/PhotographyPage/PhotographyPage";
import Calendar from "./pages/Calendar/Calendar";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BackgroundVideo />} />
        <Route path="/main" element={<BackgroundVideo />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/videography" element={<VideographyPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route
          path="/calendar"
          element={
            <PrivateRoute>
              <Calendar />
            </PrivateRoute>
          }
        />
      </Routes>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
