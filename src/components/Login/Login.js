import React, { useEffect, useState } from 'react';
import css from './Login.module.scss';
import useAuth from '../../context/AuthContext';
import Message from '../shared/Message/Message';
import Spinner from '../shared/Spinner/Spinner';
import Button from '../shared/Button/Button';
import { notEmptyObject } from '../../helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';



function Login () {
const { login, error, loading } = useAuth();

const [playerData, setPlayerData] = useState({
    username: '',
    password: ''
});
 
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
};
 
 useEffect(() => {
    notEmptyObject(error) && setPlayerData({
        username: '',
        password: ''
    })
 }, [error]);

 const emptyData = username === '' && password === '';

 return (
    <div className={css.Login}>
        {loading ? <Spinner /> : (
        <form onSubmit={handleSubmit} className={css.LoginForm}>
            <label className={css.LoginLabel} htmlFor='username'>
                <input
                required
                name='username'
                type='text'
                placeholder='username'
                className={css.LoginInput}
                value={username}
                onChange={onInputChange}
                autoComplete='off'
                />
                <FontAwesomeIcon icon={faUser}  />
            </label>

            <label className={css.LoginLabel} htmlFor='password'>
                <input
                required
                name='password'
                type='password'
                placeholder='password'
                className={css.LoginInput}
                value={password}
                onChange={onInputChange}
                autoComplete='off'
                />
                <FontAwesomeIcon icon={faLock} />
            </label>
            <Button kind='primary' disabled={emptyData} type='submit' text='log in' />
            {notEmptyObject(error) && <Message kind='error' /> }
        </form>
        )}
    </div>
 )

}

export default Login;