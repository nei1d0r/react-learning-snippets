import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)
const PropDrilling = () => {
    const [people, setPeople] = useState(data);
    const deletePerson = (id) => { // need to pass this through to grandchild!!!??
        const filteredPeople = people.filter((person) => person.id !== id);
        setPeople(filteredPeople);
    };
    return (
        <section>
            <h3>People</h3>
            <List people={people} deletePerson={deletePerson} />
        </section>
    );
};
// This component doesn't need to access deletePerson, but has to have it passed through 
const List = ({ people, deletePerson }) => {
    return (
        <>
            {people.map((person) => {
                return (
                    <SinglePerson
                        {...person}
                        deletePerson={deletePerson}
                    />
                );
            })}
        </>
    );
};

const SinglePerson = ({ name, id, deletePerson }) => {
    return (
        <>
            <div className="item" key={id}>
                <h4>{name}</h4>
                <button type="submit" onClick={() => deletePerson(id)}>delete</button>
            </div>
        </>
    );
};
export default PropDrilling;
