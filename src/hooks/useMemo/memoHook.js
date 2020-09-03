import React, { useState } from 'react'
import { useCount } from '../../hooks/useCount'

export const MemoHook = () => {

    const { counter, increment } = useCount(10);
    const [show, setShow] = useState(true);
  

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: { counter }</h3>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ increment }> +1 
            </button>

            <button className="btn btn-outline-info ml-3"
            onClick= { () => {
                setShow( !show );
            }}>
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
