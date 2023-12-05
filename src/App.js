import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Edit from './pages/Edit';
import Login from './pages/Login';
import Create from './pages/Create';
import Fotter from './components/Fotter';
import './style.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='explore' element={<Explore/>} />
        <Route path='create' element={<Create/>} />
        <Route path='edit' element={<Edit/>} />
        <Route path='login' element={<Login/>} />
      </Routes>
      <Fotter/>

    </div>
  );
}

export default App;
