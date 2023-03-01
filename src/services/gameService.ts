import { Game } from "../types/models";
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/games`

interface shortGame {
  name: string;
  GA_id: string;
  photo: string;
  rating: number;
}

async function addGame(
  curGame: Game
): Promise<Game> {
  try {
    const gameToAdd: shortGame = {
      name: curGame.name,
      GA_id: curGame.id,
      photo: curGame.photo,
      rating: 0
    }
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameToAdd)
    })
    return await res.json();
  } catch (err) {
    throw err
  }
}

export { addGame }