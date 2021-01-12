import React , {useState} from 'react';

const NewTodoList = ({createTodo}) => {

    const [todoText, setTodoText] = useState("");
    const submitTodo = (e) => {
        e.preventDefault();
        //i think this is for when the user makes a new item i
        createTodo({
            'body': todoText,
            'completed': false
        });
        setTodoText("");
    }

    return(
        <div>
            {todoText}
            <form onSubmit={submitTodo}>
                Todo <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
                <input type="submit" value="Create a new todo"/>
            </form>
        </div>
    )

}

export default NewTodoList;