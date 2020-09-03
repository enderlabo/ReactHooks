import React from 'react'
import { useCount } from '../useCount';

import './counterApp.css';

export const CounterCustomH = () => {

  const { state: count, increment, decrement, reset } =useCount();

    return (
        <>
          <h2>Counter Custom Hooks: { count }</h2>
          <hr />

          <button className="btn btn-primary" onClick={ increment }> + 1</button>
          <button className="btn btn-primary" onClick={ reset }> reset</button>
          <button className="btn btn-primary" onClick={ decrement }> - 1</button>

            
        </>
    )
}
