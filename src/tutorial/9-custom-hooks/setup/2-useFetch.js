import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useCallback(
        useEffect(() => {
            ;(async () => {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
                setLoading(false)
            })() // IIFE cos why not?
        }, [url]),
        [url]
    )

    return {
        loading,
        data
    }
}
