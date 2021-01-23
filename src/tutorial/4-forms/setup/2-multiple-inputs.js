import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
    const [person, setPerson] = useState({
        firstName: '',
        email: '',
        age: ''
    });
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setPerson({ ...person, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, email, age } = person;
        if (firstName && email && age) {
            const id = new Date().getTime().toString();
            setPeople([...people, { id, firstName, email, age }]);
        } else {
            console.log('Must not have any blank fields');
        }

        setPerson({
            firstName: '',
            email: '',
            age: ''
        });
    };
    const { firstName, email, age } = person;
    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name : </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email : </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Age : </label>
                        <input
                            type="text"
                            id="age"
                            name="age"
                            value={age}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" onSubmit={handleSubmit}>
                        add person
                    </button>
                </form>

                {people.map((person) => {
                    const { id, firstName, email, age } = person;
                    return (
                        <div className="item" key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                            <p>{age}</p>
                        </div>
                    );
                })}
            </article>
        </>
    );
};

export default ControlledInputs;
