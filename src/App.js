import './App.css';
import React, {useState} from 'react'
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Guide from './components/Guide';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import LoadingBar from './components/LoadingBar';
import Alert from './components/Alert';



function Main() {
  // const [mode, setMode] = useState('light');

  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark')
  //     document.body.style.backgroundColor = '#343a40';
  // }
  // else {
  //   setMode('light')
  //   document.body.style.backgroundColor = 'white';
  // }
  // }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const getTitle = (path) => {
    switch (path) {
      case '/':
        return 'Home - Medicine Recommendation System';
      case '/about':
        return 'About Us - Medicine Recommendation System';
      case '/services':
        return 'Our Services - Medicine Recommendation System';
      case '/guide':
        return 'Guide - Medicine Recommendation System';
      case '/contact':
        return 'Contact Us - Medicine Recommendation System';
      default:
        return 'Medicine Recommendation System';
    }
  };

  
    const location = useLocation();
  
    useEffect(() => {
      const title = getTitle(location.pathname);
      document.title = title;
    }, [location.pathname]);

    return(
    <>
      
      <Navbar 
      //mode={mode} 
      //toggleMode={toggleMode} 
      />
      <LoadingBar /> 
      <Alert alert={alert} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home showAlert = {showAlert}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </>
    );
  }


const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
