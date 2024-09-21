import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav";
import { useEffect, useState } from "react";
import AnimatedHeading from "./components/AnimatedHeading";
import { StudySpotr } from "./pages/StudySpotr";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fading out after 3 seconds
      const fadeOutDuration = 1000; // Duration of the fade-out animation
      setTimeout(() => {
        setLoading(false); // Set loading to false after the fade-out is complete
      }, fadeOutDuration);
    }, 3000); // Initial loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && (
        <div
          className={`h-screen bg-white flex items-center justify-center ${
            fadeOut ? "fadeUp" : ""
          }`}
          style={{
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatedHeading />
        </div>
      )}

      {!loading && (
        <div className="fadeIn h-max">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studySpotr" element={<StudySpotr />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
