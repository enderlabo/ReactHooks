import React, { useState } from 'react'
import { MultiplesHooks } from '../../examples/multiplesHooks'

import '../useEffect/effect.css'


export const ExampleRef = () => {

    const [show, setShow] = useState(false)


    return (
        <div>
            <h1>Example Ref</h1>
            <hr />

           { show && <MultiplesHooks /> }

           <button className="btn btn-info mt-4"
           onClick={ () => {
            setShow( !show );
           }} > 
            Show/Hide
           </button> 


        </div>
    )
}
