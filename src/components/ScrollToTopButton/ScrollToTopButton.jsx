import React, { useState, useEffect } from 'react';
import './scroll.css'
const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to determine when to show the button
    const handleScroll = () => {
      if (window.scrollY > 200) { // Adjust the scroll height as needed
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling
    });
  };

  return (
    <div>
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <span>&#8593;</span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
