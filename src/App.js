import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RequireAuth from './hoc/RequireAuth';
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Games from './components/Games/Games';
import SelectedGame from './components/Games/SelectedGame/SelectedGame';
import { AuthProvider } from './context/AuthContext';


function App() {

  return (
    <>
      <Header />
      <div className='Container'>
        <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='games' element={<RequireAuth><Games/></RequireAuth>} />
            <Route path='games/:code'element={<RequireAuth><SelectedGame /></RequireAuth>}/>
          </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
      <div className='Footer'/>
    </>
  );
}

export default App;
