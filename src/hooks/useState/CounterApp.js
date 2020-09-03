import React, { useState } from 'react'
import './counterApp.css';

export const CounterApp = () => {

    const [ Counter, setCounter] = useState({
        Counter1: 10,
        Counter2: 20,
        Counter3: 30,
        Counter4: 40
    });

    const { Counter1, Counter2 } = Counter;

    

    return (
        <>
        <h1> Counter { Counter1 } </h1>
        <h1> Counter { Counter2 } </h1>

        <hr />

        <button className="btn btn-primary" onClick={ () => {
             setCounter( {
                 ...Counter,
                 Counter2: Counter2 +1
             })} } > +1 </button>
        </>
    )
}
