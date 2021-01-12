// import logo from './logo.svg';
import './App.css';
import NewTodo from './components/NewTodo';
import TodosList from './components/TodosList';
import react, {useState} from 'react';

function App() {

  const [todos, setTodos] = useState([
    // we set them equal to false so that the
    // boxes are unchecked
    {
      body: "create todo list",
      completed: false
    },
    {
      body: "laundry",
      completed: true
    },
    {
      body: "bake muffins",
      completed: false
    },
  ])

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const updateTodo = (idx) => {

    const copyTodos = [...todos];

    copyTodos[idx].completed =  !copyTodos[idx].completed;
    setTodos(copyTodos);
  }

  const deleteTodo = (deletedIdx) => {
    // what i have commented out also works, the line below can 
    //be commented out and uncomment out the other green and that works too.

    // const copyTodos = todos.filter((todo, idx) => {
    //   if(idx !== deletedIdx){
    //     return true;
    //   }
    //   return false;
    // });
    // setTodos(copyTodos);
    setTodos(todos.filter((todo, i) => i !== deletedIdx ? true : false))
  }

  

  return (
    <div className="App">
      <h1> APP </h1>
      <NewTodo createTodo={createTodo} />
      <TodosList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} /> 
    </div>
  );
}

export default App;
