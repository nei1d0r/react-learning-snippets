import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
    const [value, setValue] = useState(0);
    const [otherValue, setOtherValue] = useState(0);
    useEffect(() => {
        console.log('Call useEffect');
        document.title = value > 0 ? `new messages(${value})` : `No messages`;
    }, [value]);
    useEffect(() => {
      document.title = otherValue > 0 ? `${otherValue} Canal` : ''
    }, [otherValue]);
    return (
        <>
            <h1>{value}</h1>
            <button
                type="button"
                className="btn"
                onClick={() => setValue(value + 1)}
            >
                Click
            </button>
            <h1>{otherValue}</h1>
            <button
                type="button"
                className="btn"
                onClick={() => setOtherValue(otherValue + 1)}
            >
                Click
            </button>
        </>
    );
};

export default UseEffectBasics;
