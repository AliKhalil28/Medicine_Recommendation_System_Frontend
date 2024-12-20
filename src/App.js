import "./App.css";
import LoadingBar from "react-top-loading-bar";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Guide from "./components/Guide";
import Contact from "./components/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

function Main() {
  const [alert, setAlert] = useState(null);
  const loadingBarRef = useRef(null);
  const location = useLocation();

  const titles = {
    "/": "Home - MedInsight",
    "/about": "About Us - MedInsight",
    "/services": "Our Services - MedInsight",
    "/guide": "Guide - MedInsight",
    "/contact": "Contact Us - MedInsight",
  };

  const getTitle = (path) => titles[path] || "MedInsight";

  const showAlert = (message, type) => {
    if (alert?.msg === message && alert?.type === type) return;
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  useEffect(() => {
    const title = getTitle(location.pathname);
    document.title = title;
    loadingBarRef.current.continuousStart();
    const timer = setTimeout(() => {
      loadingBarRef.current.complete();
    }, 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <LoadingBar color="#007bff" ref={loadingBarRef} height={3} />
      <Alert alert={alert} />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home showAlert={showAlert} loadingBarRef={loadingBarRef} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

export default App;
