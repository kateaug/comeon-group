import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  RequireAuth from './hoc/RequireAuth';
import  Header from './components/Header/Header'
import Login from './components/Login/Login'
import GamesDashboard from './components/GamesDashboard/GamesDashboard';
import { AuthProvider } from './context/AuthContext';


function App() {

  return (
    <>
      <Header />
      <div className='Container'>
        <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/games' element={<RequireAuth><GamesDashboard /></RequireAuth>} />
          </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
