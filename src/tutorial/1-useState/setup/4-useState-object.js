import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Neildor',
        age: 35,
        message: 'Some proverb',
    });
    const changeMessage = () => {
        setMessage('Some more profound message!!!');
    };

    const [name, setName] = useState('Gary the Bastard')
    const [age, setAge] = useState(23)
    const [message, setMessage] = useState('Some Random message')
    return (
        <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button type="button" onClick={changeMessage}>
                Change to Bobby
            </button>
        </>
    );
};

export default UseStateObject;
