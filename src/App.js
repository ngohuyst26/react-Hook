import logo from './logo.svg';
import './App.css';
import Nav from './views/navbar';
import { useState } from 'react';
import Todo from './views/todo';
import User from './views/User';
import CountDown from './views/countdown';
import React from 'react';
import Blog from './views/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BlogDetail from './views/Blogetail';


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

  const thongbao = () => {
    alert("Hết thời gian");
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <div className='container'>
          <Nav />
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/" exact>
            <div className='container'>
            <User />
            </div>
          </Route>
          <Route path="/timer">
            <CountDown thongbao={thongbao} />
          </Route>
          <Route path="/todos">
            <Todo
              todos={todos}
              title={`All Todo`}
              TodoDelete={handleDeleteTodos}
            />
            <input type='text' value={value} onChange={(event) => changName(event)} />
            <button type='button' onClick={() => setTen()}>Change Name </button>
          </Route>
          <Route path="/blog" exact>
            <Blog/>
          </Route>
          <Route path="/blog/:id">
            <BlogDetail/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
