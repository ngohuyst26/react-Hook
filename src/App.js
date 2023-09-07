import logo from './logo.svg';
import './App.css';
import Nav from './views/navbar';
import { useState } from 'react';


function App() {
  // let [name, setName] = useState('Huy');
  let [value, setValue] = useState("");
  let [todos, setTodos] = useState([
  ]);
  
  const changName = (event) => {
    setValue(event.target.value);
  }

  const setTen = () => {
    let todosAdd = { id: 1, title: value };
    setTodos([...todos, todosAdd]);
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Hello world with React and {name}! </h1> */}
        <div className='todos'>
          {todos.map(todo => {
            console.log(todos);
            return(
            <li className='li-todo' key={todo.id}>{todo.title}</li>
            )
          })}
          
        </div>
        <input type='text' value={value} onChange={(event) => changName(event)} />
        <button type='button' onClick={() => setTen()}>Change Name </button>
      </header>
    </div>
  );
}

export default App;
