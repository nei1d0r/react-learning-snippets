import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    
    const deleteEverybody = () => {
        setPeople([]);
    }
    const deleteOnePerson = (id) => {
      let newPeopleList = people.filter((person) => {
        return person.id !== id
      })
      setPeople(newPeopleList)
    } 
    return (
        <>
            <h2>useState array example</h2>
            <ul>
                {people.map((person) => {
                    const { name, id } = person;
                    return (
                        <div key={id} className="item">
                            <h4>{name}</h4>
                            <button type='button' onClick={() => deleteOnePerson(id)}>Delete</button>
                        </div>
                    );
                })}
            </ul>
            <button type="button" onClick={deleteEverybody}>
                Delete People
            </button>
        </>
    );
};

export default UseStateArray;
