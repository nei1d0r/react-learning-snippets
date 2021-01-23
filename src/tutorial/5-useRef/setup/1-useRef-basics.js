import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    };

    useEffect(() => {
      refContainer.current.focus() // achieves the same as autoFocus in html element
    })

    return (
        <>
            <form action="" className="form" onSubmit={submitHandler}>
                <div>
                    <input type="text" ref={refContainer} autoFocus />
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div ref={divContainer}>Hello World</div>
        </>
    );
};

export default UseRefBasics;
