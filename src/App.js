import React from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { ResumePage } from "./pages/ResumePage";
import { ContactPage } from "./pages/ContactPage";
import { useThemeContext } from "./hooks/useThemeContext";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [route, setRoute] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(true);
  const { state } = useThemeContext();

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={state.isDark ? "bg-[#19202e]" : "bg-[#f5f7fa] w-full"}>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <div>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Menu route={route} isOpen={isOpen} />
          </div>

          <Routes>
            <Route
              path="/"
              element={<Home route={route} setRoute={setRoute} />}
            />
            <Route
              path="/projects"
              element={<Projects route={route} setRoute={setRoute} />}
            />
            <Route
              path="/resume"
              element={<ResumePage route={route} setRoute={setRoute} />}
            />
            <Route
              path="/contact"
              element={<ContactPage route={route} setRoute={setRoute} />}
            />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
