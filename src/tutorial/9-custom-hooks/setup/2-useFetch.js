import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
            setLoading(false)
        })() // IIFE cos why not?
    }, [url])

    return {
        loading,
        data
    }
}
