import React from 'react'
import { useFetch } from './2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
    const { loading, data } = useFetch(url)
    return (
        <div>
            <h2>{loading ? 'loading...' : <Data data={data} />}</h2>
        </div>
    )
}

const Data = ({ data }) => {
    return (
        <>
            {data.map((data) => {
                const { company, featured, price, name } = data.fields
                return (
                    featured && (
                        <div key={data.id} className="item">
                            <h3>{name}</h3>
                            <h4>{company}</h4>
                            <h4>{price}</h4>
                        </div>
                    )
                )
            })}
        </>
    )
}

export default Example
