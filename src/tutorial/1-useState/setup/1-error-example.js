import React from 'react';

const ErrorExample = () => {
    let title = 'Some new title';

    const handleClick = () => {
        return (title = 'A CHANGED TITLE'); // does not cause a re-rember, and this value would be lost on render... hence need useState
    };

    return (
        <React.Fragment>
            <h1>{title}</h1>
            <button type="button" className="btn" onClick={handleClick}>
                Change Title
            </button>
        </React.Fragment>
    );
};

export default ErrorExample;
