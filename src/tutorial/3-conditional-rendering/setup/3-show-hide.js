import React, { useState, useEffect } from 'react';

// ?? is this a good/bad pattern? conditinal render with abstracted blocks vs in component ternary...
const BlockA = () => {
    return (
        <div>
            <p>NO ERROR</p>
        </div>
    );
};

const BlockB = () => {
    return (
        <div>
            <p>ERROR</p>
        </div>
    );
};

const ShowHide = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <h2>show/hide</h2>
            <button className='btn' onClick={() => setShow(!show)}>
              show/hide
            </button>
            {show && <Item />}
        </>
    );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    return setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])
  
  return(
    <>
      <div>
      <h1>window</h1>
      <h2>Size: {size}px</h2>
      </div>
    </>
  )
}

export default ShowHide;
