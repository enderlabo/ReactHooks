import React from 'react'
import { TodoListItem } from './TodoListItem'



export const TodoList = ( {todos, handleDelete, handleToggle} ) => {
    return (
        <ul className="list-group-flesh">
            {
                todos.map( (todo, index) => (

                    <TodoListItem
                    key={ todo.id } 
                    todo={ todo } 
                    handleDelete={ handleDelete }
                    handleToggle={ handleToggle } 
                    index={ index } />
                
                ))
            }
        </ul>
    )
}
