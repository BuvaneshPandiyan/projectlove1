import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Story from './components/Story';
import Countdown from './components/Countdown';
import RegretAndApologies from './components/RegretAndApologies';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';
import './Heartcursor.css'; // Import the heart cursor CSS

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorEmoji, setCursorEmoji] = useState('🩷'); // Default heart emoji

  useEffect(() => {
    // Listen to the mousemove event to update the position
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listeners for mouseenter and mouseleave to clickable elements
    const handleMouseEnter = (e) => {
      // Check if the element has the cursor pointer (clickable)
      if (window.getComputedStyle(e.target).cursor === 'pointer') {
        setCursorEmoji('💞'); // Change to the desired emoji (e.g., 💞) when hovering over clickable elements
      }
    };

    const handleMouseLeave = (e) => {
      // Reset the cursor emoji when mouse leaves the clickable element
      if (window.getComputedStyle(e.target).cursor === 'pointer') {
        setCursorEmoji('🩷'); // Reset back to the heart emoji
      }
    };

    // Add event listeners for the mousemove, mouseenter, and mouseleave events globally
    document.body.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter, true);
    document.body.addEventListener('mouseleave', handleMouseLeave, true);

    // Cleanup when the component unmounts
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter, true);
      document.body.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Story />} />
          <Route path="/story" element={<Story />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/regretandapologies" element={<RegretAndApologies />} />
          <Route path="/frequentlyaskedquestions" element={<FrequentlyAskedQuestions />} />
          
        </Routes>

        {/* Custom Heart Cursor */}
        <div
          id="heart-cursor"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none', // Prevent the cursor from interfering with elements
          }}
        >
          {cursorEmoji}
        </div>
      </div>
    </Router>
  );
}

export default App;
