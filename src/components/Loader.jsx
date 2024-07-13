import React from 'react';
import './style/Loader.css'; 

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p className="loading-text">Loading Broo...</p>
    </div>
  );
};

export default Loader;
