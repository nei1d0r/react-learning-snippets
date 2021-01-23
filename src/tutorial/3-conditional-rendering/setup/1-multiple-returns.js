import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState([]);

    let error;
    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(res.statusText);
                }
            })
            .then((user) => {
                setUser(user);
                setIsLoading(false);
            })
            .catch((err) => {
                error = err.message;
                setIsError(true);
            });
    }, []);
    if (isError) {
        return <p>ERROR{error}</p>;
    }
    if (isLoading) {
        return <h2>...Loading</h2>;
    }
    return <h2>{user.login}</h2>;
};

export default MultipleReturns;
