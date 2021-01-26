import React, { useState, useEffect } from 'react'
import { data } from '../../../data'
import { Link, useParams } from 'react-router-dom'
const Person = () => {
  const [name, setName] = useState('Default')
    const {id} = useParams()
    useEffect(() => {
        const { name } = data.find((person) => {
            return person.id === parseInt(id)
        })
        setName(name)
    }, [])
    return (
        <div>
            <h2>person</h2>
            <h4>{name}</h4>
            <Link to='/people' className='btn'>Back to People</Link>
        </div>
    )
}

export default Person
