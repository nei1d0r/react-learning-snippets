import React, { useState } from 'react';

const UseStateCounter = () => {
    const [counter, setCounter] = useState(0);

    const incrementUp = () => setCounter(counter + 1);
    const incrementDown = () => (counter > 0 ? setCounter(counter - 1) : null);
    const resetCount = () => setCounter(0);

    const complexIncrease = () => {
        setTimeout(() => {
            setCounter((prevState) => {
                return prevState + 1;
            });
        }, 2000);
    };

    return (
        <>
            <section>
                <h1>Counter 1</h1>
                <h2>{counter}</h2>

                <button class="btn" onClick={incrementDown}>
                    -
                </button>
                <button class="btn" onClick={resetCount}>
                    Reset
                </button>
                <button class="btn" onClick={incrementUp}>
                    +
                </button>
            </section>
            <section>
                <h1>Counter 2</h1>
                <h2>{counter}</h2>
                <button className="btn" onClick={complexIncrease}>
                    Increase Later
                </button>
            </section>
        </>
    );
};

export default UseStateCounter;
