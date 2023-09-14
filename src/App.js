import logo from './logo.svg';
import './App.css';
import Nav from './views/navbar';
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
import AddBlog from './views/AddBlog';
import YoutubeSearch from './views/YoutubeSearch';
import NotFoundError from './views/NotFound';

function App() {
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
            <Todo/> 
          </Route>
          <Route path="/blog" exact>
            <Blog/>
          </Route>
          <Route path="/blog/:id" exact>
            <BlogDetail/>
          </Route>
          <Route path="/addblog">
            <AddBlog/>
          </Route>
          <Route path="/youtube-search">
            <YoutubeSearch/>
          </Route>
          <Route path="*" >
            <NotFoundError/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
