import React, { useReducer, useEffect } from 'react'
import { todoReducer } from '../useReducer/helpers/todoReducer';

import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import './todo.css';



const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Learning ReactJs',
    //     done: false
    // }]
}


export const UseReducer = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    

    useEffect( () => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
        
    }, [todos]);


    const handleDelete = ( todoId ) => {
        //Crear action for delete
        const action = {
            type: 'delete',
            payload: todoId
        }
        //dispatch
        dispatch( action );
        console.log(todoId);
    }
  
    const handleToggle = ( todoId ) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleTodoAdd = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });

    }

    return (
        <div>
            <h1>To Do-APP ( { todos.length } )</h1>
            <hr />

               <div className="row">

                   <div className="col-7">
                       <TodoList 
                        todos={ todos } 
                        handleDelete= { handleDelete }
                        handleToggle= { handleToggle }
                       />
                    
                   </div>

                   <div className="col-5">
                       <TodoAdd handleTodoAdd={ handleTodoAdd } />
                   </div>

               </div>
        </div>
    )
}
