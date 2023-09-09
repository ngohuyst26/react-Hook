import logo from './logo.svg';
import './App.css';
import Nav from './views/navbar';
import { useState } from 'react';
import Todo from './views/todo';
import User from './views/User';


function App() {
  let [value, setValue] = useState("");
  let [todos, setTodos] = useState([
    { id: "todo1", title: "Học bài", type: "huy" },
    { id: "todo2", title: "Chơi Game", type: "Mai" },
    { id: "todo3", title: "Xem Tik Tok", type: "Mai" },
    { id: "todo4", title: "Xem Facebook", type: "huy" }
  ]);

  const changName = (event) => {
    setValue(event.target.value);
  }

  const setTen = () => {
    let todosAdd = { id: Math.floor((Math.random() * 100000) + 1), title: value };
    setTodos([...todos, todosAdd]);
  }

  const handleDeleteTodos = (id) => {
    let TodoDelete = todos;
    TodoDelete = TodoDelete.filter(item => item.id !== id);
    console.log(TodoDelete);
    setTodos(TodoDelete);
  }

  return (
    <div className="App">
      <header className="App-header">
      <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <div className='container'> */}
        <User/>
     
        
        {/* <Todo
          todos={todos}
          title={`All Todo`}
          TodoDelete = {handleDeleteTodos}
        />
        <Todo
          todos={todos.filter(item => item.type === "huy")}
          title={`Todo của Huy`}
          TodoDelete = {handleDeleteTodos}
        /> */}
        {/* <input type='text' value={value} onChange={(event) => changName(event)} />
        <button type='button' onClick={() => setTen()}>Change Name </button> */}
      </header>

    // </div>
  );
}

export default App;
