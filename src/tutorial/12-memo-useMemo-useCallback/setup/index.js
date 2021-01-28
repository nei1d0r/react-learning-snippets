import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const Index = () => {
    const { data } = useFetch(url)
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState(0)

    const calculateMostExpensive = (data) => {
      console.log('HELLO')
        return (
            data.reduce((total, item) => {
                const { price } = item.fields
                if (price >= total) {
                    total = price
                }
                return total
            }, 0) / 100
        )
    }
    // takes in 2 parameters; the function and the state yoi expect to change
    const mostExpensiveItem = useMemo(() => calculateMostExpensive(data), [data])

    const addToCart = useCallback(() => {
        setCart(cart + 1)
    }, [cart])
    return (
        <>
            <h1>Count : {count}</h1>
            <button className="btn" onClick={() => setCount(count + 1)}>
                click me
            </button>
            <h1>Cart: {cart}</h1>
            <h1>Most expensive: £{mostExpensiveItem}</h1>
            <BigList data={data} add={addToCart} />
        </>
    )
}

const BigList = React.memo(({ data, add }) => {
    useEffect(() => {
        console.log('Big List Called')
    })
    return (
        <section className="products">
            {data.map((product) => {
                return (
                    <SingleProduct
                        key={product.id}
                        {...product}
                        add={add}
                    ></SingleProduct>
                )
            })}
        </section>
    )
})

const SingleProduct = ({ fields, add }) => {
    useEffect(() => {
        console.log('Single Item Called')
    })
    let { name, price } = fields
    price = price / 100
    const image = fields.image[0].url

    return (
        <article className="product">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={() => add()}>Click</button>
        </article>
    )
}
export default Index
