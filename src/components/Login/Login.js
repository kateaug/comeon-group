import React, { useEffect, useState } from 'react';
import css from './Login.module.scss';
import useAuth from '../../context/AuthContext';
import Message from '../shared/Message/Message';
import Spinner from '../shared/Spinner/Spinner';
import { notEmptyObject } from '../../helpers';

function Login () {
const { login, error, loading } = useAuth();

const [playerData, setPlayerData] = useState({
    username: '',
    password: ''
})

console.log('error', error)
 
const { username, password } = playerData;


 const onInputChange = e => {
    setPlayerData({
        ...playerData,
        [e.target.name]: e.target.value.replace(/\s/g, '')
    })

 };

  const handleSubmit =  (event) => {
    event.preventDefault();
    login(playerData);

 }
 
 useEffect(() => {
    notEmptyObject(error) && setPlayerData({
        username: '',
        password: ''
    })
 }, [error]);

 console.log('playerData', playerData)
 console.log('loading', loading)



 return (
    <div className={css.Login}>
        {loading ? <Spinner /> : (
        <form onSubmit={handleSubmit} className={css.LoginForm}>
            <label className={css.LoginLabel} htmlFor='username'>username</label>
            <input
            // required='required'
             name='username'
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
             name='password'
             type='password'
             className={css.LoginInput}
             value={password}
             onChange={onInputChange}
             autoComplete='off'
            >
            </input>
            <button type='submit'>log in</button>
        </form>
        )}
        {notEmptyObject(error) && <Message kind='error' />}
    </div>
 )

}

export default Login;