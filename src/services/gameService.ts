import { IsItRecordAndNotAny } from "mongoose";
import { Game, shortGame } from "../types/models";
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/games`


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

async function index(): Promise<shortGame[]>{
try {
  const res = await fetch(BASE_URL, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json',
    }    
  })
  return await res.json();
} catch (error) {
  throw error;
}
}

interface iSetThisUpWrong{
  GA_id: string;
}

async function delGame(gameId: string): Promise<void>{
  try {
    const gameToDelete: iSetThisUpWrong = {
      GA_id: gameId
    }
    const res = await fetch(`${BASE_URL}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameToDelete)
    })
    return await res.json();

  } catch (error) {
    throw error;
  }
}

async function updateGame(game: shortGame): Promise<void>{
  try {
    console.log(game);
    const res= await fetch(`${BASE_URL}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game)
    })
    // console.log(await res.json());
    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { addGame, index, delGame, updateGame }