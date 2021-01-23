import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
        setUsers(users);
    };
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
            <h3>github users</h3>
            <ul className="users">
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <img src={user.avatar_url} alt={user.login} />
                            <div>
                                <h4>{user.login}</h4>
                                <a href={user.url}>profile</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <h3></h3>
        </>
    );
};

export default UseEffectFetchData;
