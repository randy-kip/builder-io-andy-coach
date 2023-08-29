import React from 'react';
import './HeroSection.css'; // Import your CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-container">
      <nav className="navbar">
        <ul>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            </ul>
      </nav>
      <div className="hero-content">
        <div className="logo">
          {/* Your logo image */}
        </div>
        <div className="hero-image">
          {/* <img src='https://c4.wallpaperflare.com/wallpaper/226/358/339/muscles-dark-men-fitness-model-model-hd-wallpaper-preview.jpg'></img> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
