import React from 'react'
import { useForm } from '../../customHooks/useForm';

export const TodoAdd = ({ handleTodoAdd }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ' '
    });

    const handleSubmit = (e) => {

        e.preventDefault();

        if( description.trim().length <= 1 ) {
            return;
        }

        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        //use dispatch for send data to reducer
        handleTodoAdd( newTodo );
        reset();
    }

    return (
        <>
           <h4>Add To Do</h4>
            <hr />

            <form>
                <input 
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="Learn..."
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />

                <button onClick={ handleSubmit } 
                className="btn btn-outline-success mt-1 btn-block" 
                > Add </button>
            </form>  
        </>
    )
}
