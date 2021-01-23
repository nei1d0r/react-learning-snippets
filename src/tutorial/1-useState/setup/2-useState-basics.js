import React, { useState } from 'react';

const UseStateBasics = () => {
    // useState has 2 values in an array [original value, function to change value] hence the destructuring
    const [text, setText] = useState('Random Title');
    const handleClick = () => {
        text === 'Random Title'
            ? setText('Hello World')
            : setText('Random Title');
    };
    return (
        <>
            <h2>{text}</h2>
            <button type="button" onClick={handleClick}>
                Change Title
            </button>
        </>
    );
};

export default UseStateBasics;
