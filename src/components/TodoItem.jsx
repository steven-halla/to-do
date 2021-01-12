import React , {useState} from 'react';

// I am guessing this defines variables but not fully sure
const TodoItem = ({todo, idx, updateTodo, deleteTodo}) => {


    return(
        <>
            {/* // body comes from our app.js file */}
            <p> {todo.body}: <input type="checkbox" checked={todo.completed} 
            onClick={(e) => {
                updateTodo(idx);
            }}/> 
            <button onClick={(e) => {
                deleteTodo(idx)
            }}> delete button </button>
            </p>
        </>
    )

}

export default TodoItem;