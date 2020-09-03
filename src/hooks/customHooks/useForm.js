import { useState } from 'react'

//Handle OnChange input on Form.
export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        //Reset form or clean form.
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ] : target.value
        });
    }

    return [ values, handleInputChange, reset ];
}
