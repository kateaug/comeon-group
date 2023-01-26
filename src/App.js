import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  RequireAuth from './hoc/RequireAuth';
import  Header from './components/Header/Header'
import Login from './components/Login/Login'
import GamesDashboard from './components/GamesDashboard/GamesDashboard';
import SelectedGame from './components/GamesDashboard/Games/SelectedGame/SelectedGame';
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
            <Route path='games' element={<RequireAuth><GamesDashboard /></RequireAuth>} />
            <Route path='games/:code'element={<RequireAuth><SelectedGame /></RequireAuth>}/>

            {/* <Route path='gameplay'>
                <Route path=':code'element={<RequireAuth><SelectedGame /></RequireAuth>}/>
            </Route> */}
            {/* <Route path='/games:code'element={<RequireAuth><SelectedGame /></RequireAuth>}/> */}
          </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
