import React, { useState } from 'react';
import css from './Login.module.scss';
import useAuth from '../../context/AuthContext';

function Login () {
const { login } = useAuth();

const [playerData, setPlayerData] = useState({
    username: '',
    password: ''
 })  

 
const { username, password } = playerData;


 const onInputChange = e => {
   const inputVal = e.target.value;
   const inputId = e.target.id;


   setPlayerData(prev => {
        return {
            ...prev,
            username: inputId === 'username' ? inputVal : prev.username,
            password: inputId === 'password' ? inputVal : prev.password
        }
    })

 };

  const handleSubmit =  (event) => {
    event.preventDefault();
   // const storedUsername = localStorage.setItem('playerUsername', JSON.stringify(playerData.username));

    login(playerData);
 }    


 return (
    <div className={css.Login}>
        <form onSubmit={handleSubmit} className={css.LoginForm}>
            <label className={css.LoginLabel} htmlFor='username'>username</label>
            <input
            // required='required'
             id='username'
             type='text'
             className={css.LoginInput}
             value={username}
             onChange={onInputChange}
             autoComplete='off'
            >
            </input>
            <label className={css.LoginLabel} htmlFor='password'>password</label>
            <input
            // required
             id='password'
             type='password'
             className={css.LoginInput}
             value={password}
             onChange={onInputChange}
             autoComplete='off'
            >
            </input>
            <button type='submit'>log in</button>
        </form>

    </div>
 )

}

export default Login;