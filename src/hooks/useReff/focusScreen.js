import React, {  useRef } from 'react'
import '../../hooks/useEffect/effect.css'

export const FocusScreen = () => {

    const inputRef = useRef();


    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input className="form-control"
            placeholder="name" 
            ref={ inputRef }
            type="text"
            />
               
            <button 
                className="btn btn-outline-info mt-4"
                onClick={ handleClick } >Focus
            </button>
        </div>
    )
}
