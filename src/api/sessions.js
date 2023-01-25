import axios from 'axios';

export async function login(data){
    const response = await axios.post('http://localhost:3001/login', data);  
    return response.data;
}
  
export async function logout(data) {
    const response = await axios.post('http://localhost:3001/logout', { username: data });
    return response.data;
}