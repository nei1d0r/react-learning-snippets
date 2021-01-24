import React, { useState, useContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext()
// this creates 2 components - 'Provider' and 'Consumer' as part of the create context

const ContextAPI = () => {
    // route component
    const [people, setPeople] = useState(data)
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }
    return (
        <PersonContext.Provider value={{ removePerson, people }}>
            {/* return must be wrapped in PersonContext.Provider at the top of the APP tree */}
            <>
                <h3>Context API</h3>
                <List />
            </>
        </PersonContext.Provider>
    )
}

const List = () => {
    // No need for this component to know about removePerson() anymore
    const { people } = useContext(PersonContext)
    return (
        <>
            {people.map((person) => {
                return <SinglePerson key={person.id} {...person} />
            })}
        </>
    )
}

const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext) // can access method directly storing in a variable
    return (
        <div className="item">
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    )
}

export default ContextAPI
