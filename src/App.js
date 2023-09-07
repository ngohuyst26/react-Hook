import logo from './logo.svg';
import './App.css';
import Nav from './views/navbar';
import { useState } from 'react';


function App() {
  let [name, setName] = useState('Huy');
  let [nameTest, setNameTest] = useState('');
  const changName = (event) => {
    setNameTest(event.target.value);
  }

  const setTen = () => {
    if(nameTest === ""){
      setName('Huy');
    }else{
      setName(nameTest);
    }
  }
  return (
    <div className="App">
      <Nav/>  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}! </h1>
        <input type='text' value= {nameTest} onChange={(event) => changName(event)}/>
        <button type='button' onClick={() => setTen() }>Change Name </button>
      </header>
    </div>
  );
}

export default App;
