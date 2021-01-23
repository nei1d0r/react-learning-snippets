import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [area, setArea] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const checkArea = () => {
    setArea({
        height: window.innerHeight,
        width: window.innerWidth
      })
  }
  useEffect(() => {
    window.addEventListener('resize', checkArea)
      return () => {
        window.removeEventListener('resize', checkArea) // removes build up of eventlisteners
      }
  }, [area])

  const calculateArea = ({height, width}) => {
    return height * width
  }
  
  return (
      <>
          <h2>Window height: {area.height}px</h2>
          <h2>Window width: {area.width}px</h2>
          <h2>Window Area: {calculateArea(area)}px</h2>
      </>
  );
};

export default UseEffectCleanup;
