import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import Reducer from './Reducer'
// reducer function

const initialState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
};

const Index = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(Reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== '') {
            const newPerson = {
                id: new Date().getTime().toString(),
                name
            };
            dispatch({ type: 'ADD_ITEM', payload: newPerson });
            setName('');
        } else {
            dispatch({ type: 'NO_VALUE' });
        }
    };

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE', payload: id });
    };

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    };

    const { people, isModalOpen, modalContent } = state;
    return (
        <>
            {isModalOpen && (
                <Modal modalContent={modalContent} closeModal={closeModal} />
            )}
            <form action="" className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {people.map(({ id, name }) => {
                return (
                    <div className="item" key={id}>
                        <h4>{name}</h4>
                        <h4 onClick={() => handleDelete(id)}>delete</h4>
                    </div>
                );
            })}
        </>
    );
};

export default Index;
