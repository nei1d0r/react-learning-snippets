import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
    const [person, setPerson] = useState({
        firstName: '',
        email: ''
    });
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, email } = person;
        firstName && email
            ? setPeople([
                  ...people,
                  { id: new Date().getTime().toString(), firstName, email }
              ])
            : console.log('Must not have any blank fields');

        setPerson({
            firstName: '',
            email: ''
        });
    };

    const { firstName, email } = person;
    return (
        <>
            <article>
                <form action="" className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name</label>
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={firstName || ''}
                            onChange={(e) =>
                                setPerson({
                                    ...person,
                                    firstName: e.target.value
                                })
                            }
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email || ''}
                            onChange={(e) =>
                                setPerson({ ...person, email: e.target.value })
                            }
                        />
                    </div>
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </form>
            </article>
            <article>
                <ul>
                    {people.map(({ id, firstName, email }) => {
                        return (
                            <li key={id} className="item">
                                <h3>{firstName}: </h3>
                                <p>{email}</p>
                            </li>
                        );
                    })}
                </ul>
            </article>
        </>
    );
};

export default ControlledInputs;
