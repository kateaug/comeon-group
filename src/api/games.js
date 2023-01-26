import axios from 'axios';

export async function getAllGames() {
  const response = await axios.get('http://localhost:3001/games')
  return response.data;
}

export async function getGamesCategories() {
    const response = await axios.get('http://localhost:3001/categories')
    return response.data;
}