import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/LoadingBar.css';

const LoadingBar = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
  
      // Duration of the animation (should match CSS animation duration)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Ensure this matches the duration in CSS
  
      return () => clearTimeout(timer);
    }, [location]);
  
    return (
      <div className="loading-container">
        <div className={`loading-bar ${loading ? 'loading' : ''}`}></div>
      </div>
    );
  };
  
  export default LoadingBar;